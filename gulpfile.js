var Metalsmith = require('metalsmith'),
    markdown= require('metalsmith-markdown'),
    layouts = require('metalsmith-layouts'),
    inplace = require('metalsmith-in-place'),
    pagination = require('metalsmith-pagination'),
    permalinks = require('metalsmith-permalinks'),
    metadata = require('metalsmith-metadata'),
    collections =require('metalsmith-collections'),
    i18n = require('metalsmith-i18n'),
    handlebars = require('handlebars'),
    excerpts = require('metalsmith-better-excerpts'),
    rootpath = require('metalsmith-rootpath'),
    moment = require("moment"),
    metallic = require("metalsmith-metallic");

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var bs = require('browser-sync').create(),
    hoxy  = require('hoxy');

var fs = require('fs'),
    path = require('path'),
    del = require('del');

var config = JSON.parse(fs.readFileSync('./config.json')),
    theme  = "theme/" + config.theme,
    build_config = require('./build_config');


function bs_init(){
  bs.init({
    port: 9000,
    // open: false,
    server:{
      baseDir:"./build",
      index:"index.html"
    }
  });
  return gulp.src('gulpfile.js');
}
var proxy = hoxy.createServer().listen(8888,function() {
// console.log('The proxy is listening on port 8888. '+config.hostname);
});
function proxy_init(){

  proxy.intercept({
    phase: 'request',
    hostname: config.hostname
  }, function (req) {
    // console.log(req.url);
    req.hostname = 'localhost';
    req.port = '9000';
  });
  return gulp.src('gulpfile.js');
}

var relativePathHelper = function(current, target, scope) {
  // normalize and remove starting slash
  var _this = this;
  if(scope){
    if(!scope.locale){
      scope = _this;
    }
  }else{
    if(!_this.locale){
      _this.locale = "ja"
    }
    scope = _this;
  }

  if(path.extname(current)==''){
    current = path.join(current,"index.html");
  }
  if(path.extname(target)==''){
    target = path.join(target,"index.html");
  }
  current = path.normalize(current).slice(0);
  target = path.normalize(target).slice(0);

  current = path.dirname(current);
  var out = path.relative(current, target);
  if(path.basename(out)=='index.html'){
    out = path.dirname(out);
  }
  return out;
};

var notEqualHelper = function(x,y,options){
  if(x != y){
    return options.fn(this);
  }
}
var localePathHelper = function(locales,locale,context,options){
  var ret = "";
  var def_locale = "ja";
  if(locale == def_locale ){
    var current = "";
    var currentpath = context.path;
  }else{
    var current = locale;
      var currentpath = path.join(current,context.path);
  }
  for(var i=0, j=locales.length; i<j; i++){
    if(locales[i]!=locale){
      if(locales[i]==def_locale){
        var target = "./";
      }else{
        var target = locales[i];
      }

  var targetpath  = path.join(target,context.path);
      ret += options.fn({
        "path":relativePathHelper(currentpath,targetpath),
        "name":locales[i]
      });
    }
  }
  return ret;
}

var forloopHelper = function(array,length,options){
  var ret = "";
  for(var i=0, j=length; i<j; i++){
    ret += options.fn(array[i]);
  }
  return ret;
}
function dates(files, metalsmith, done){
  for(var file in files){
    files[file].rawcontents = files[file].contents;
    if(files[file].date){
      files[file].date = moment(new Date(files[file].date)).format("YYYY/MM/DD");
    }
    if(!files[file].permalink){
      files[file].permalink = files[file].title;
    }
  }
  done();
}
function ignore_assets(files, metalsmith, done){
  for(var file in files){
    if(path.extname(file) != ".md" && path.extname(file) != ".html" ){
      delete files[file];
    }
  }
  done();
}
function ignore_drafts(files, metalsmith, done){
  for(var file in files){
    if(files[file].draft == true){
      delete files[file];
    }
  } 
  done();
}
function append_locales(files, metalsmith, done){
  var def_loc = "ja";

  for(var file in files){
    files[file].locales = [];
    files[file].locale = files[file].locale||def_loc;
    files[file].locales.push(def_loc);
    if(path.basename(files[file].path)=="index.html"){
      files[file].path = path.normalize(path.dirname(files[file].path));
    }
    for(var i in config.locales){
      var loc = files[file].path.split("/")[0];
      var originpath = files[file].path.split("/");

      originpath.shift();

      var parent_file = path.normalize(path.join(originpath.join("/"),"index.html"));

      if(loc == config.locales[i] && files[parent_file]!= undefined){
        files[file].locale = config.locales[i];
        files[parent_file].locales.push(config.locales[i]);
        files[file].locales.filter(function(x,i,self){
          return self.indexOf(x) === i;
        });
        files[file].locales = files[parent_file].locales;
      }
    }
  }
  done();
}


handlebars.registerHelper('relative_path', relativePathHelper);
handlebars.registerHelper('locale_path', localePathHelper);
handlebars.registerHelper('notequal', notEqualHelper);
handlebars.registerHelper('forloop', forloopHelper);
handlebars.registerHelper('i18n',
function(context,str){
  return (context.__ != undefined ? context.__(str) : str);
}
);
function build(){
  Metalsmith(__dirname)
  .source("_src/")
  .use(ignore_assets)
  .use(ignore_drafts)
  .destination("build/")
  .metadata({"config":config})
  .use(inplace(build_config.metalsmith.inplace))
  .use(metallic())
  .use(markdown())
  .use(excerpts({moreRegExp: /\s*<!--\s*more\s*-->/i,
        stripTags: false,
        pruneLength: 140,
        pruneString: '…'}))
  .use(dates)
  .use(collections(build_config.metalsmith.collections))
  .use(permalinks(build_config.metalsmith.permalinks))
  .use(pagination(build_config.metalsmith.pagination))
      // .use(function(files, metalsmith, done){
      //   console.log(files);
      //   done();
      // })
  .use(function(files, metalsmith, done){
    for(var file in files){
      if(!files[file].path){
        files[file].path = file;
      }
      files[file].htmlpath = file;

    }
    // console.log(files.pagination.pages);
    done();
  })
  .use(i18n({
    default:   'ja',
    locales:   config.locales,
    directory: theme+'/locale'
  }))
  .use(append_locales)
  .use(layouts(build_config.metalsmith.layouts))

  .build(function(err) {
    if (err) throw err;
    console.log('finished building.');
    bs.reload();
  });

    return gulp.src('./gulpfile.js');

  }
  var sass_path =theme+"/scss/**/*.scss";
  function gulp_sass(){
    return gulp.src("theme/tomoya/scss/**/*.scss")
    .pipe(sass({
      outputStyle:'expanded',
      sourceComments:true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest("./build/assets/css"))
    .pipe(bs.stream());
  }

  function symlink_images(){
    return gulp.src("./_src/assets/img/**")
    .pipe(gulp.symlink("./build/assets/img"));
  }

  function copy_images(){
    return gulp.src("./_src/assets/img/**")
    .pipe(gulp.dest("./build/assets/img"));
  }
  function copy_others(){
    return gulp.src("CNAME")
    .pipe(gulp.dest("./build"))
  }

  exports.gulp_sass = gulp_sass;
  gulp.task('clean',function(){
    del("build");
    return gulp.src('gulpfile.js');
  });
  gulp.task('build',build);

  var buildmd =  gulp.series('clean',build,gulp_sass,symlink_images);
  // exports.buildmd = gulp.series(build,gulp_sass);
  exports.reload = bs.reload();
  // gulp.task('reload',bs.reload);

  var pre_deploy = gulp.series('clean',build,gulp_sass,copy_images,copy_others)

  gulp.task('pre_deploy',pre_deploy);

  function watch(){
    gulp.watch(sass_path,gulp_sass);
    gulp.watch(["_src/**/*.md",theme+"/layouts/**/*.hbs"],buildmd);
  }

  exports.watch = watch;
  var server = gulp.series(proxy_init,bs_init);

  gulp.task('default',gulp.parallel(server,watch));

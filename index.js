var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
// var sass = require('metalsmith-sass');
var browserSync = require('metalsmith-browser-sync');
var layouts = require('metalsmith-layouts');
var pagination = require('metalsmith-pagination');
var permalinks = require('metalsmith-permalinks');
var metadata = require('metalsmith-metadata');
var jsontofile = require('metalsmith-json-to-files');
var collections =require('metalsmith-collections');
var fs = require('fs');
var handlebars = require('handlebars');
var config =JSON.parse(fs.readFileSync('./config.json'));
var theme = "theme/"+config.theme;

exports.mymetalsmith = Metalsmith(__dirname)
.source("_src/")
.destination("build/")
.use(collections({
  blogs: {
    pattern: 'blog/*.md',
    sortBy: 'date'
  },
  infos: {
    pattern: 'info/*.md',
    sortBy: 'date'
  }
}))
.use(markdown())
// .use(jsontofile(source_path: 'works'))
.use(permalinks({
  pattern: ':date'
  ,linksets:[{
    match:{collections:"blogs"},
    pattern:'blog/:date/:title'
  },{
    match:{collections:'infos'},
    pattern:'info/:date/:title'
  }]
}))
.use(pagination({
  'collections.blogs': {
    perPage: 5,
    template: theme+"/layouts/blogs.hbs",
    first: 'index.html',
    path: 'blog/:num/index.html',
    filter: function (page) {
      return !page.private
    },
    pageMetadata: {
      title: 'Archive'
    }},
    'collections.infos': {
      perPage: 10,
      template: theme+"/layouts/infos.hbs",
      first: 'index.html',
      path: 'info/:num/index.html',
      filter: function (page) {
        return !page.private
      },
      pageMetadata: {
        title: 'Archive'
      }}
}))
.use(layouts({
  engine:"handlebars",
  default:"index.hbs",
  directory:theme+"/layouts",
  partials:"partials",
  // pattern:"*.html",
  rename:"true"
}))

.build(function(err) {
  if (err) throw err;
});

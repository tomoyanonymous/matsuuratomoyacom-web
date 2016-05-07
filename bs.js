var bs = require("browser-sync").create;

bs.init({
    server:{
      baseDir:"./build",
      index:"index.html"
    },
    files:["_src/**/*.md",theme+"/scss/**/*.scss"]
});

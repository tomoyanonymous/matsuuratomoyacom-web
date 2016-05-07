var fs = require('fs');

var config =JSON.parse(fs.readFileSync('./config.json')),
    theme ="theme/"+config.theme;

module.exports = {
metalsmith:{
  collections:{
    blogs: {
      pattern: 'blog/*.html',
      sortBy: 'date',
      reverse: true
    },
    infos: {
      pattern: 'info/*.html',
      sortBy: 'date',
      reverse: true
    },
    works: {
      pattern: 'works/*.html',
      sortBy: 'date',
      reverse: true
    }
  },
  permalinks:{
    pattern:':permalink',
    linksets:[{
      match:{collection:"blogs"},
      pattern:'blog/:date/:permalink'
    },{
      match:{collection:'infos'},
      pattern:'info/:date/:permalink'
    },{
    match:{collection:'works'},
    pattern:'works/:permalink'
    }]
  },
  pagination:{
      'collections.blogs': {
        perPage: 5,
        layout:"blogs.hbs",
        first: 'blog/index.html',
        path: 'blog/:num/index.html',
        noPageOne:true,
        pageMetadata: {
          title: 'blog'
        }},
        'collections.infos': {
          perPage: 10,
          layout: "infos.hbs",
          first: 'info/index.html',
          path: 'info/:num/index.html',
          filter: function (page) {
            return !page.private
          },
          pageMetadata: {
            title: 'info'
          }}
    },
  layouts:{
    engine:"handlebars",
    default:"index.hbs",
    directory:theme+"/layouts",
    partials:theme+"/layouts/partials",
    // pattern:"*.html",
    rename:"true"
  },
  inplace:{
    engine:"handlebars"
  }
}
}

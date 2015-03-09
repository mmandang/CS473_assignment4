var url = "http://api.feedzilla.com/v1/categories/26/articles.json";
$.getJSON(url, function (articleZilla) {
    articleZilla.articles.forEach(function (story) {
      

      $("main").append("<p><a href=" + story.source_url + ">" + story.summary +"</a></p>");

    })

});
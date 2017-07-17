$(function(){
  $.get('https://www.reddit.com/r/aww/.json').done(function(data){
    var payload = data
    var title;
    var author;
    var thumbnail;
    for (var i = 0; i <= 10; i++) {
    title = payload.data.children[i].data.title;
    author = "Posted by " + payload.data.children[i].data.author;;
    thumbnail = payload.data.children[i].data.thumbnail;
    $("body").append("<div class = 'container'>" +"<h5>"+ title + "</h5>" + "<h4>" + author + "</h4>" + "<img src = " + thumbnail + ">" + "</div>" )
    console.log(title, author, thumbnail)
    }
  });

});
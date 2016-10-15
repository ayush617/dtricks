    $(document).ready(function(){
      $(".slide").slick({
          centerMode: true,
          centerPadding: '60px',
          variableWidth: false,
          slidesToShow: 4,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]

      });

    });







(function(global){



  var dc={};
  var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}

dc.showMovie=function(id){
  var a=id;
  $ajaxUtils.sendGetRequest(
  "json/movie.json",
  function (responseText) {
    var obj = jQuery.parseJSON(responseText);
    movlist=obj.Movies;
    var loc="";
    loc="/movie.html?id="+id;

    $ajaxUtils.sendGetRequest(
    "movie-snippet.html",
    function (responseText2,a){
      var mov;    
      for(mov in movlist){
        if(movlist[mov].id==id){


          responseText2 =insertProperty(responseText2,"id",movlist[mov].id);
          responseText2 =insertProperty(responseText2,"genre",movlist[mov].genre);
          responseText2 =insertProperty(responseText2,"date",movlist[mov].rdate);
          responseText2 =insertProperty(responseText2,"Title",movlist[mov].title);
          responseText2 =insertProperty(responseText2,"des",movlist[mov].des);
          responseText2 =insertProperty(responseText2,"name",movlist[mov].title);
          responseText2 =insertProperty(responseText2,"IMDB",movlist[mov].IMDB);
          responseText2 =insertProperty(responseText2,"BookMyShow",movlist[mov].BookMyShow);
          responseText2 =insertProperty(responseText2,"dur",movlist[mov].duration);
          responseText2 =insertProperty(responseText2,"link",movlist[mov].link);
          
          history.pushState(null,null,loc);
        }
    }
      insertHtml("#main-content",responseText2);
    },false);
  },
  false);
}


dc.urlParam = function(id){
    var results = new RegExp('[\?&]' + id + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}



function movie(event) {
  var id=dc.urlParam('id');
  if(id==null){

$ajaxUtils.sendGetRequest(
  "slideshow.html",
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;

      $(".slide").slick({
          centerMode: true,
          centerPadding: '60px',
          variableWidth: false,
          slidesToShow: 4,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]

      });
  },
  false);}
else{
  dc.showMovie(id);
}
}

document.addEventListener("DOMContentLoaded", movie(event));

$(window).on('popstate',function(){
var href=location.pathname;
var id=dc.urlParam('id');
  if(!id){
    movie(event);   
  }
  else{
    var id=dc.urlParam('id');
    history.pushState("null","null","/movie.html");
    $dc.showMovie(parseInt(id));
  }
})
global.$dc = dc;
})(window);
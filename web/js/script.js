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


  console.log("working");
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
    console.log(obj.Movies);

    $ajaxUtils.sendGetRequest(
    "movie-snippet.html",
    function (responseText2,a){
      var mov;    
      for(mov in movlist){

        console.log(id);
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
        }
    }
      insertHtml("#main-content",responseText2);
    },false);
  },
  false);

}

/*document.addEventListener("DOMContentLoaded", function (event) {

$ajaxUtils.sendGetRequest(
  "json/movie.json",
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});*/

global.$dc = dc;
})(window);
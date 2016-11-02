(function(global){



  var ml={};
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

ml.urlParam = function(id){
    var results = new RegExp('[\?&]' + id + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

function showlist(event){
  $ajaxUtils.sendGetRequest(
  "json/movieb.json",
  function (responseText) {
    var obj = jQuery.parseJSON(responseText);
    var movlist=obj.Movies;
    var finalhtml="";
    $ajaxUtils.sendGetRequest(
    "movielist-snippet.html",
    function (responseText1){
    for(mov in movlist){
       finalhtml+=buildAndShowMovielistHTML(responseText1,movlist,mov);
   }
      console.log(finalhtml);
      insertHtml("#main-content",finalhtml);
      history.pushState(null,null,"/demo/web/movielist.html");
        },false);
    },
    false);
  
}

function buildAndShowMovielistHTML (response,movlist,mov) {
      console.log(mov);
            response =insertProperty(response,"id",movlist[mov].id);
            response =insertProperty(response,"genre",movlist[mov].genre);
            response =insertProperty(response,"date",movlist[mov].rdate);
            response =insertProperty(response,"title",movlist[mov].title);
            return response;
}


document.addEventListener("DOMContentLoaded", showlist(event));

global.$ml = ml;
})(window);

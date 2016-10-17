


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

 function loadlist(){
  console.log("working");
  $ajaxUtils.sendGetRequest(
  "json/movieb.json",
  function (responseText) {

    var obj = jQuery.parseJSON(responseText);
    movlist=obj.Movies;
    $ajaxUtils.sendGetRequest(
    "movielist-snippet.html",
    function (responseText2){
      var html="";
      console.log(movlist);
      var mov;    
      for(mov in movlist){
        responseText2 =insertProperty(responseText2,"id",movlist[mov].id);
        responseText2 =insertProperty(responseText2,"title",movlist[mov].title);
        html=html+responseText2;
        console.log(html);
      }
      insertHtml(".row",html);
    },false);
  },
  false);
}

document.addEventListener("DOMContentLoaded", loadlist(event));


global.$ml = ml;
})(window);
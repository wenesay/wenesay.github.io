//Define css file paths in array
var cssFiles = [{path:"./css/style.css", id:"style"}];
var jsFiles = [{path:"./js/jquery/1.8.3/jquery.min.js", async:true, id:"jquery", dependent:[
  {path:"./js/01.js", async:true, id:"01"},
  {path:"./js/google-script.js", async:true, id:"googleScript"}
]}];

// Load all styles

function loadCSS(cssFile){
  // TODO: check if the file is already loaded
  var l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = cssFile.path;
  l.id = cssFile.id;
  var h = document.getElementsByTagName('head')[0];
  // h.parentNode.insertBefore(l, h);
  h.appendChild(l);
}

var css = function() {
  for (var i = 0, j = cssFiles.length; i < j; i++) {
    loadCSS(cssFiles[i]);
  }
};
// Load all scripts

function loadJS(jsFile){
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.id = jsFile.id;
  s.async = jsFile.async;
  if(jsFile.dependent && jsFile.dependent != "" && jsFile.dependent.length > 0){
    s.onload = function () {
      js(jsFile.dependent);
    }
  }
  s.src = jsFile.path;
  var h = document.getElementsByTagName('head')[0];
  // h.parentNode.insertBefore(s, h);
  h.appendChild(s);
}

var js = function(myJsFiles) {
  for (var i = 0, j = myJsFiles.length; i < j; i++) {
    loadJS(myJsFiles[i]);
  }
};

//load
var loadFiles = function(){
  css();
  js(jsFiles);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame ||
  webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(loadFiles);
else window.addEventListener('load', loadFiles);

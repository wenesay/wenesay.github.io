$(document).ready(function() {
/**
<li><img src="san-francisco.jpg" alt="San Francisco, USA" data-description="Golden Gate Bridge"></li>
<li><img src="rio.jpg" alt="Rio de Janeiro, Brazil"></li>
<li><img src="london_mini.jpg" alt="" data-large-src="london.jpg"></li>
<li><img src="new-york.jpg" alt=""></li>
<li><img src="new-delhi.jpg" alt=""></li>
<li><img src="paris.jpg" alt=""></li>
<li><img src="sydney.jpg" alt=""></li>
<li><img src="tokyo.jpg" alt=""></li>
<li><img src="honk-kong.jpg" alt=""></li>
<li><img src="dakar.jpg" alt=""></li>
<li><img src="toronto.jpg" alt=""></li>
<li>
    <a href="http://en.wikipedia.org/wiki/Monaco" target="_blank">
        <img src="monaco.jpg" alt="Monaco">
    </a>
</li>
**/

  for (var i = 0, j = seedData.length; i < j; i++) {
    loadMediAssitsTips(seedData[i]);
  }
  $('.pgwSlideshow').pgwSlideshow();
});

function loadMediAssitsTips (seedData){
  if(seedData.src != ''){
    var li = document.createElement('li');
    li.src = seedData.src;
    li.alt = seedData.alt;
    li.data-description = seedData.desc;
    $('ul#pgwSlideshow-ul').appendChild(li);
  }
}



var seedData = [
  { src:"", alt:"", desc:""},
  { src:"", alt:"", desc:""},
  { src:"", alt:"", desc:""},
  { src:"", alt:"", desc:""},
  { src:"", alt:"", desc:""}

];

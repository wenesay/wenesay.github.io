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
console.log(seedDatas);
  for (var i = 0, j = seedDatas.length; i < j; i++) {
    loadMediAssitsTips(seedDatas[i]);
  }
  $('.pgwSlideshow').pgwSlideshow({
    autoSlide : true,
    intervalDuration: 60000
  });
});

function loadMediAssitsTips (seedData){
  if(seedData!=null && seedData.src != ''){
    try{
      var img = document.createElement('img');
      img.src = seedData.src;
      img.alt = seedData.alt;
      img.dataDescription = seedData.desc;
      var li = document.createElement('li');
      li.appendChild(img);
      $('ul#pgwSlideshow-ul').append(li);
    } catch (e){
      //do nothing
    }
  }
}



var seedDatas = [
  { src:"tips/tip-20150408.png", alt:"", desc:""},
  { src:"tips/tip-20150410.png", alt:"", desc:""},
  { src:"tips/tip-20150411.png", alt:"", desc:""},
  { src:"tips/tip-20150412.png", alt:"", desc:""},
  { src:"tips/tip-20150414.png", alt:"", desc:""},
  { src:"tips/tip-20150415.png", alt:"", desc:""},
  { src:"tips/tip-20150416.png", alt:"", desc:""},
  { src:"tips/tip-20150420.png", alt:"", desc:""},
  { src:"tips/tip-20150421.png", alt:"", desc:""},
  { src:"tips/tip-20150422.png", alt:"", desc:""},
  { src:"tips/tip-20150424.png", alt:"", desc:""},
  { src:"tips/tip-20150425.png", alt:"", desc:""},
  { src:"tips/tip-20150427.png", alt:"", desc:""},
  { src:"tips/tip-20150428.png", alt:"", desc:""},
  { src:"tips/tip-20150429.png", alt:"", desc:""},
  { src:"tips/tip-20150430.png", alt:"", desc:""},
  { src:"tips/tip-20150501.png", alt:"", desc:""},
  { src:"tips/tip-20150502.png", alt:"", desc:""},
  { src:"tips/tip-20150505.png", alt:"", desc:""},
  { src:"tips/tip-20150506.png", alt:"", desc:""},
  { src:"tips/tip-20150507.png", alt:"", desc:""},
  { src:"tips/tip-20150508.png", alt:"", desc:""},
  { src:"tips/tip-20150509.png", alt:"", desc:""},
  { src:"tips/tip-20150511.png", alt:"", desc:""},
  { src:"tips/tip-20150512.png", alt:"", desc:""},
  { src:"tips/tip-20150513.png", alt:"", desc:""},
  { src:"tips/tip-20150514.png", alt:"", desc:""},
  { src:"tips/tip-20150515.png", alt:"", desc:""},
  { src:"tips/tip-20150516.png", alt:"", desc:""},
  { src:"tips/tip-20150518.png", alt:"", desc:""},
  { src:"tips/tip-20150519.png", alt:"", desc:""},
  { src:"tips/tip-20150520.png", alt:"", desc:""},
  { src:"tips/tip-20150521.png", alt:"", desc:""},
  { src:"tips/tip-20150522.png", alt:"", desc:""},
  { src:"tips/tip-20150523.png", alt:"", desc:""},
  { src:"tips/tip-20150525.png", alt:"", desc:""},
  { src:"tips/tip-20150526.png", alt:"", desc:""},
  { src:"tips/tip-20150527.png", alt:"", desc:""},
  { src:"tips/tip-20150528.png", alt:"", desc:""},
  { src:"tips/tip-20150529.png", alt:"", desc:""},
  { src:"tips/tip-20150530.png", alt:"", desc:""},
  { src:"tips/tip-20150601.png", alt:"", desc:""},
  { src:"tips/tip-20150602.png", alt:"", desc:""},
  { src:"tips/tip-20150603.png", alt:"", desc:""},
  { src:"tips/tip-20150604.png", alt:"", desc:""},
  { src:"tips/tip-20150605.png", alt:"", desc:""},
  { src:"tips/tip-20150606.png", alt:"", desc:""},
  { src:"tips/tip-20150608.png", alt:"", desc:""},
  { src:"tips/tip-20150609.png", alt:"", desc:""},
  { src:"tips/tip-20150610.png", alt:"", desc:""},
  { src:"tips/tip-20150611.png", alt:"", desc:""},
  { src:"tips/tip-20150612.png", alt:"", desc:""},
  { src:"tips/tip-20150613.png", alt:"", desc:""},
  { src:"tips/tip-20150615.png", alt:"", desc:""},
  { src:"tips/tip-20150616.png", alt:"", desc:""},
  { src:"tips/tip-20150617.png", alt:"", desc:""},
  { src:"tips/tip-20150618.png", alt:"", desc:""},
  { src:"tips/tip-20150619.png", alt:"", desc:""},
  { src:"tips/tip-20150620.png", alt:"", desc:""},
  { src:"tips/tip-20150622.png", alt:"", desc:""},
  { src:"tips/tip-20150623.png", alt:"", desc:""},
  { src:"tips/tip-20150624.png", alt:"", desc:""},
  { src:"tips/tip-20150625.png", alt:"", desc:""},
  { src:"tips/tip-20150626.png", alt:"", desc:""},
  { src:"tips/tip-20150627.png", alt:"", desc:""},
  { src:"tips/tip-20150629.png", alt:"", desc:""},
  { src:"tips/tip-20150630.png", alt:"", desc:""},
  { src:"tips/tip-20150701.png", alt:"", desc:""},
  { src:"tips/tip-20150702.png", alt:"", desc:""},
  { src:"tips/tip-20150703.png", alt:"", desc:""},
  { src:"tips/tip-20150704.png", alt:"", desc:""},
  { src:"tips/tip-20150706.png", alt:"", desc:""},
  { src:"tips/tip-20150707.png", alt:"", desc:""},
  { src:"tips/tip-20150708.png", alt:"", desc:""},
  { src:"tips/tip-20150709.png", alt:"", desc:""},
  { src:"tips/tip-20150710.png", alt:"", desc:""},
  { src:"tips/tip-20150711.png", alt:"", desc:""},
  { src:"tips/tip-20150713.png", alt:"", desc:""},
  { src:"tips/tip-20150714.png", alt:"", desc:""},
  { src:"tips/tip-20150715.png", alt:"", desc:""},
  { src:"tips/tip-20150716.png", alt:"", desc:""},
  { src:"tips/tip-20150717.png", alt:"", desc:""},
  { src:"tips/tip-20150718.png", alt:"", desc:""},
  { src:"tips/tip-20150720.png", alt:"", desc:""},
  { src:"tips/tip-20150721.png", alt:"", desc:""},
  { src:"tips/tip-20150722.png", alt:"", desc:""},
  { src:"tips/tip-20150723.png", alt:"", desc:""},
  { src:"tips/tip-20150724.png", alt:"", desc:""},
  { src:"tips/tip-20150725.png", alt:"", desc:""},
  { src:"tips/tip-20150727.png", alt:"", desc:""},
  { src:"tips/tip-20150728.png", alt:"", desc:""},
  { src:"tips/tip-20150729.png", alt:"", desc:""},
  { src:"tips/tip-20150730.png", alt:"", desc:""},
  { src:"tips/tip-20150731.png", alt:"", desc:""},
  { src:"tips/tip-20150801.png", alt:"", desc:""},
  { src:"tips/tip-20150802.png", alt:"", desc:""},
  { src:"tips/tip-20150803.png", alt:"", desc:""},
  { src:"tips/tip-20150804.png", alt:"", desc:""},
  { src:"tips/tip-20150805.png", alt:"", desc:""},
  { src:"tips/tip-20150806.png", alt:"", desc:""},
  { src:"tips/tip-20150807.png", alt:"", desc:""},
  { src:"tips/tip-20150808.png", alt:"", desc:""},
  { src:"tips/tip-20150810.png", alt:"", desc:""},
  { src:"tips/tip-20150811.png", alt:"", desc:""},
  { src:"tips/tip-20150812.png", alt:"", desc:""},
  { src:"tips/tip-20150813.png", alt:"", desc:""},
  { src:"tips/tip-20150814.png", alt:"", desc:""},
  { src:"tips/tip-20150815.png", alt:"", desc:""},
  { src:"tips/tip-20150816.png", alt:"", desc:""},
  { src:"tips/tip-20150817.png", alt:"", desc:""},
  { src:"tips/tip-20150818.jpg", alt:"", desc:""},
  { src:"tips/tip-20150819.png", alt:"", desc:""},
  { src:"tips/tip-20150820.png", alt:"", desc:""},
  { src:"tips/tip-20150821.png", alt:"", desc:""},
  { src:"tips/tip-20150822.png", alt:"", desc:""},
  { src:"tips/tip-20150824.png", alt:"", desc:""},
  { src:"tips/tip-20150825.png", alt:"", desc:""},
  { src:"tips/tip-20150826.png", alt:"", desc:""},
  { src:"tips/tip-20150827.png", alt:"", desc:""},
  { src:"tips/tip-20150828.png", alt:"", desc:""},
  { src:"tips/tip-20150831.png", alt:"", desc:""},
  { src:"tips/tip-20150903.png", alt:"", desc:""},
  { src:"tips/tip-20150904.png", alt:"", desc:""},
  { src:"tips/tip-20150909.png", alt:"", desc:""},
  { src:"tips/tip-20150910.png", alt:"", desc:""},
  { src:"tips/tip-20150911.png", alt:"", desc:""},
  { src:"tips/tip-20150912.png", alt:"", desc:""},
  { src:"tips/tip-20150915.png", alt:"", desc:""},
  { src:"tips/tip-20150916.png", alt:"", desc:""},
  { src:"tips/tip-20150917.png", alt:"", desc:""},
  { src:"tips/tip-20150918.png", alt:"", desc:""},
  { src:"tips/tip-20150919.png", alt:"", desc:""},
  { src:"tips/tip-20150921.png", alt:"", desc:""},
  { src:"tips/tip-20150922.png", alt:"", desc:""},
  { src:"tips/tip-20150923.png", alt:"", desc:""},
  { src:"tips/tip-20150924.png", alt:"", desc:""},
  { src:"tips/tip-20150925.png", alt:"", desc:""},
  { src:"tips/tip-20150926.png", alt:"", desc:""},
  { src:"tips/tip-20150930.png", alt:"", desc:""},
  { src:"tips/tip-20151001.png", alt:"", desc:""},
  { src:"tips/tip-20151005.png", alt:"", desc:""},
  { src:"tips/tip-20151007.png", alt:"", desc:""},
  { src:"tips/tip-20151008.png", alt:"", desc:""},
  { src:"tips/tip-20151013.png", alt:"", desc:""},
  { src:"tips/tip-20151014.png", alt:"", desc:""},
  { src:"tips/tip-20151015.png", alt:"", desc:""},
  { src:"tips/tip-20151016.png", alt:"", desc:""}
];

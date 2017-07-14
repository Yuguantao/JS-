var swiper = new Swiper('.swiper-container',{
  pagination:'.swiper-pagination',
  paginationClickable:true,
  direction:'vertical',
  onInit:function(swiper){
    swiperAnimateCache(swiper);
    swiperAnimate(swiper);
  },
  onSlideChangeEnd:function(swiper){
    swiperAnimate(swiper);
  }
});

var oAudio = document.querySelector('audio');
var oBtnMusic = document.querySelector('.btn-music-on');
oBtnMusic.addEventListener('click',function(){
  if(oAudio.paused){
    oAudio.paused = false;
    oAudio.play();
    oBtnMusic.className = 'btn-music-on';
    oBtnMusic.style.animationPlayState = 'running';
  }else{
    oAudio.paused = true;
    oAudio.pause();
    oBtnMusic.className = 'btn-music-on btn-music-off';
    oBtnMusic.style.animationPlayState = 'paused';

  }
})

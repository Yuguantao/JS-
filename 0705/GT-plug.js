GT.fn.chengPic = function(){
  var index = 0;
  var self = this;
  setInterval(function(){
    self[1].src = 'images/'+index+'.jpg';
    index++;
    if(index>4) index=0;
  },1000)
};

(function(){

  var guantao = function(select){
    return new guantao.fn.init(select);
  };

  guantao.fn = {
    init:function(select){
      //如果是ID选择器，根据ID选择元素
      //第一种
      // if(select.substr(0,1) === '#'){
      //   var ID = document.getElementById(select.substr(1));
      //   //this代表jquery实例化出来的对象
      //   //把js原生对象放到guantao对象中
      //   this[0] = ID;
      //   this.length = 1;
      // }else{
      //   var tag = document.getElementsByTagName(select);
      //   for(var i = 0;i<tag.length;i++){
      //     this[i] = tag[i];
      //   }
      //   this.length = tag.length;
      // }

      //第二种
      var elements = document.querySelectorAll(select);
      console.log(elements)
      for(var i = 0;i<elements.length;i++){
        this[i] = elements[i];
      }
      this.length = elements.length;

    },

    css:function(name,value){

      for(var i = 0;i<this.length;i++){
        this[i].style[name] = value;
      }
      return this;
    }
  };


  guantao.fn.init.prototype = guantao.fn;

  window.GT = guantao;

})();
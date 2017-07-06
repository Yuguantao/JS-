(function(){
  var changquery = function(select) {
    return new changquery.fn.init(select);
  }
  changquery.fn  = {
    init: function(select) {
      //如果是ID选择器，根据ID选择元素
      if (select.substr(0,1) === '#') {
        var o = document.getElementById(select.substr(1));
        //this代表jquery实例化出来的对象
        //把js原生对象放到changquery对象中
        this[0] = o;
        this.length = 1;
      } else {
        //如果是普通选择器，则通过普通选择器选择元素
        var os = document.getElementsByTagName(select);
        for (var i = 0; i < os.length; i ++) {
          this[i] = os[i];
        }
        this.length = os.length;
      }
    },
    css: function(name, value) {
      console.log(this);
      //遍历所有的原生dom对象
      for (var i = 0; i < this.length; i++) {
        this[i].style[name] = value;
      }
      return this;
    },
    attr: function(name, value) {
      for (var i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
      }
      return this;
    },
    html: function(html) {
      for (var i = 0; i < this.length; i++) {
        this[i].innerHTML = html;
      }
      return this;
    },
    eq: function(index) {
      this[0] = this[index];
      for (var i = 1; i < this.length; i++) {
        delete this[i];
      }
      this.length = 1;
      return this;
    }
  }

  //设置init()构造函数通过原型prototype方式继承changquery.fn
  //这样new init()的对象不仅可以访问init()内部的属性和方法，而且可以访问changquery.fn对象里面的属性和方法
  changquery.fn.init.prototype = changquery.fn;

  window.cq = changquery;
})();

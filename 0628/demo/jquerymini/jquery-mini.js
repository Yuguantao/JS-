/**
 * Created by maxwelldu on 17/4/10.
 */
(function () {
    var jq = function(selector){
        return new jq.fn.init(selector);
    };

    jq.fn = {
        init: function(selector) {
            //选择器设置： #id 和 tag标签 选择器两种
            if (selector.substr(0,1) === '#') {//判断是否有"#号"
                //去除selector的"#号"
                var flag = selector.substr(1, selector.length - 1);
                var elem = document.getElementById(flag);
                //this代表jquery实例化出来的对象
                //jquery对象 与 dom对象 做合并
                this[0] = elem;
                this.length = 1;
            } else {
                var elems = document.getElementsByTagName(selector);
                //遍历elems, 获得每个dom对象分别存储this里面
                for (var i = 0; i < elems.length; i++) {
                    this[i] = elems[i];
                }
                this.length = elems.length;
            }
        },
        css:function(k,v){
            //this代表调用该方法的当前对象（jquery对象)
            // this[0].style[k] = v;
            //遍历当前的jquery对象，为每个具体dom对象设置css样式
            for (var i = 0; i < this.length; i++) {
                this[i].style[k] = v;
            }
        },
        attr:function(k,v){
            for (var i = 0; i < this.length; i++) {
                this[i].setAttribute(k,v);
            }
        },
        each:function(callback){
            //遍历jquery对象，使得每个dom对象都执行一次callback
            for (var i = 0; i < this.length; i++) {
                // this[i]
                // callback()
                // callback.call(函数内部this的指引, 函数形参，形参，形参);

                //callback函数随着for循环执行了多次，
                //每次执行的时候内部this都指向 "this[i]的dom对象"
                callback.call(this[i], i, this[i]);
            }
        }
    };

    //设置init()构造函数通过原型prototype方式继承jq.fn()
    //这样new init()的对象不仅可以访问init内部成员，还可以访问fn的成员
    jq.fn.init.prototype = jq.fn;

    //给jquery声明外部使用接口变量
    window.$ = jq;
})();
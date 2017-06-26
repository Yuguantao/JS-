//请求分类中的商品
var cat_id = $.getQueryString('cat_id');
$.ajax({
  "url": "http://lc.shudong.wang/api_goods.php?cat_id=" + cat_id,
  "type": "GET",
  "dataType": "json",
  "success": function(response) {
    console.log(response);
    //如果返回的商品为空，则给出空的提示
    if (response.data.length === 0) {
      // var oH1 = document.createElement('h1');
      // oH1.innerText = "当前分类下面没有商品";
      $('body').append('<h1>当前分类下面没有商品</h1>');
      return;
    }
    for (var i = 0; i < response.data.length; i++) {
      var obj = response.data[i];
      goodsUl.append("<li><a href='detail.html?goods_id='"+obj.goods_id+"><img src ="+ obj.goods_thumb+"><p>"+obj.goods_name+"</p></a></li>");
    }
  }
});

$('nav-ul').html($('nav-ul').html('123')+'456')
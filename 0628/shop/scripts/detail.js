//得到商品ID
var goods_id = $.getQueryString('goods_id');
console.log(goods_id);

$.ajax({
  'url': 'http://lc.shudong.wang/api_goods.php?goods_id='+goods_id,
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
    var obj = response.data[0];
    console.log(obj);

    var oDiv = document.createElement('div');
    var oImg = document.createElement('img');
    oImg.src = obj.goods_thumb;
    oDiv.appendChild(oImg);

    var oP = document.createElement('p');
    oP.innerText = obj.goods_desc;
    oDiv.appendChild(oP);

    var oBtn = document.createElement('button');
    oBtn.innerText = '加入购物车';
    oBtn.onclick = function(){
      //验证用户是否登录，未登录则跳到登录页
      if (!localStorage.token) {
        // location.assign( 'login.html#callbackurl='+location.href);
        location.href = 'login.html#callbackurl='+location.href;
        return;
      }
      console.log('已登录');
      $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
        "type": "POST",
        "data": {
          "goods_id": goods_id,
          "number": 1
        },
        "dataType": "json",
        "success": function(response) {
          console.log(response);
        }
      });
    }
    oDiv.appendChild(oBtn);
    document.body.appendChild(oDiv);
  }

})

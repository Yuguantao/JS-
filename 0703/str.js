function Josnstr(json) {
    var str = JSON.stringify(json);
    console.log(str);
    var dlesign = str.replace(/[\'\"\{\}]/g,"");
    var repdouhao = dlesign.replace(/\,/g,"&");
    var repmaohao = repdouhao.replace(/\:/g,"=");
    return repyinhao;
    console.log(dlesign);
    console.log(repdouhao);
    console.log(repmaohao);
}
//连续打点调用
function Josnstrtwo(json) {
    var dlesign =
        JSON.stringify(json)
            .replace(/[\'\"\{\}]/g,"")
            .replace(/\,/g,"&")
            .replace(/\:/g,"=");
    return dlesign;
    console.log(dlesign);
}
//直接return
function Josnstrtwo(json) {
    return   JSON.stringify(json)
        .replace(/[\'\"\{\}]/g,"")
        .replace(/\,/g,"&")
        .replace(/\:/g,"=");
}
function Josnstrthree(json) {
    var str = '';
    for(var k in s){
        str += k + "=" + json[k] + "&";
    }
    //删除最后一位并返回
    return str.substring(0,str.length-1)
}
function Josnstrsi(json) {
    var str = [];
    for(var k in s){
        str.push(k + "=" + json[k]);
    }
    return str.join("&");
}
var xhr = XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4){

    }
}
xhr.open('GET',"",true);
xhr.send(null);
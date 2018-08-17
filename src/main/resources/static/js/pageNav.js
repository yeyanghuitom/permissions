/**
 * Created by Administrator on 2018/8/7.
 */
/*页面头部*/
function headerFun() {
    $("#header-content").append('<img class="logo" src="img/log.jpg" alt="">'+
        '<div class="header-user">'+
        '<span id="username">管理员</span>'+
        '<a id="userLogin" href="login.html">登录</a>'+
        '<a href="javaScript:(0);" id="exit_btn">退出</a>'+
        '</div>');
    $("#exit_btn").click(function () {
        hintMesModalFun("退出登录","确定要退出吗？","1");
    });
}
/*页面路径*/
var navUrl=[
    {url:"qwyqjc.html",name:"全网舆情监测",class:"qwyqjc"},
    {url:"yqrcjc.html",name:"舆情日常监测",class:"yqrcjc"},
    {url:"jpdbfx.html",name:"竞品对比分析",class:"jpdbfx"},
    {url:"rdsjfx.html",name:"热点事件分析",class:"rdsjfx"},
    {url:"yxxgpg.html",name:"营销效果评估",class:"yxxgpg"}];
function navUrlFun() {
    var navUrlCon="";
    for (var i = 0; i < navUrl.length; i++) {
        var obj = navUrl[i];
        navUrlCon+='<li class="'+obj.class+'"><a href="'+obj.url+'">'+obj.name+'</a></li>'
    }
    $("#navUrl").html(navUrlCon);
}
headerFun();
navUrlFun();
$("#hintqd_btn").click(function () {
    var str = $('#hintState').text();
    if (str=="1"){
        alert("退出成功");
        $('#hintMesModal').modal('hide');
    }
});

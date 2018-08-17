/**
 * Created by Administrator on 2018/7/31.
 */
<!--推荐词语-->
var tjgjcArr=["联通","电信","移动","乱收费","流量","4G","LTE","套餐","混合","组网","共享"];
var tjgjcArrHtml = "";
for (var i = 0; i < tjgjcArr.length; i++) {
    var obj = tjgjcArr[i];
    tjgjcArrHtml+='<span><label><input type="checkbox" value="'+obj+'"> '+obj+'</label></span>'
}
$("body").append('<div id="tjcy1" class="tjcy">'+
    '<p style="margin: 0;text-align: right;"><span onclick="closeSjcy()" class="glyphicon glyphicon-remove" aria-hidden="true"></span></p>'+
    tjgjcArrHtml+'</div>');
/*关闭推荐词语*/
function closeSjcy() {
    $("#tjcy1").hide();
}
/*模态框关闭推荐词语*/
$(".close").click(function () {
    closeSjcy();
    closeErr()
});
$(".modal-footer").find("button").eq(0).click(function () {
    closeSjcy();
    closeErr();
});
/*取消验证标记*/
function closeErr() {
    $(".form-control").removeClass("error");
    $(".error").remove();
}
/*移动推荐词语位置*/
function tjcy_btn(tjcy_btn,id,offsetW) {
    $('#'+id).css({
        'display': "block",
        'left': $(tjcy_btn).offset().left - offsetW + "px",
        'top': $(tjcy_btn).offset().top + "px"
    });
    $("#"+id).show();
    $("#"+id+" input").prop("checked", false);
}
/*调取点击事件*/
function dqClick(id) {
    $('#'+id).trigger('click');
}
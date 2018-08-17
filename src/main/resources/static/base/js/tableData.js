/**
 * Created by Administrator on 2018/7/31.
 */
function getTable(tableId,tableSQLData,url) {
    $('#'+tableId).bootstrapTable({
        url: url,                           //请求后台的URL（*）
        method: 'post',                                 //请求方式（*）
        dataType: "json",
        striped: false,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: false,                    //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                       //初始化加载第一页，默认第一页
        pageSize: 20,                       //每页的记录行数（*）
        pageList: [20, 50, 100],            //可供选择的每页的行数（*）
        strictSearch: true,
        uniqueId: "ID",
        columns: tableSQLData
    });
    /*首页——末页点击事件点击事件方法*/
    $(document).on("click", ".page-home", function () {
        $('.page-link').eq(0).trigger('click');
    });
    $(document).on("click", ".page-trailer", function () {
        $(this).prev().find(".page-link").trigger('click');
    });
}

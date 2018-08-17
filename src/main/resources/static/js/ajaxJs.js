/**
 * Created by Administrator on 2018/8/8.
 */

/*新增数据*/
/**
 * addUrl   请求的url地址
 * addData   需要添加的数据
 */
function addAjaxData(addUrl, addData) {
    $.ajax({
        url: addUrl,
        type: "post",
        data: addData,
        dataType: "json",
        success: function (data) {
            alert("添加成功")
        },
        error: function () {
            alert("添加失败")
        }
    });
}
/*修改数据*/
/**
 * updataUrl    请求的url地址
 * updataData   需要修改的数据
 */
function updataAjaxData(updataUrl, updataData) {
    $.ajax({
        url: updataUrl,
        type: "post",
        data: updataData,
        dataType: "json",
        success: function (data) {
            alert("修改成功");
        },
        error: function () {
            alert("修改失败");
        }
    });
}
/*查看数据*/
/**
 * queryUrl    请求的url地址
 */
function queryAjaxData(queryUrl) {
    $.ajax({
        url: queryUrl,
        type: "get",
        dataType: "json",
        success: function (data) {
            alert("查看成功");
        },
        error: function () {
            alert("查看失败");
        }
    });
}
/*删除数据*/
/**
 * deleteUrl    请求的url地址
 * deleteData   需要删除的数据
 */
function deleteAjaxData(deleteUrl, deleteData) {
    $.ajax({
        url: deleteUrl,
        type: "post",
        data: deleteData,
        dataType: "json",
        success: function (data) {
            alert("删除成功");
        },
        error: function () {
            alert("删除失败");
        }
    });
}
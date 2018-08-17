/**
 * Created by Administrator on 2018/8/6.
 */
<!--提示信息-->
hintModal();
function hintModal() {
    $("body").append('<div class="modal fade" id="hintMesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
        '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span> </button>'+
        '<h4 class="modal-title" id="modalLabelOption"></h4>'+
        '<span id="hintState" style="display: none"></span>'+
        '</div>'+
        '<div class="modal-body">'+
        '<span id="hintMes"></span>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>'+
        '<button type="button" class="btn btn-danger redBtn btn-sm" id="hintqd_btn" onclick="hintqd_btn()">确 定</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');

}
function hintMesModalFun(title,hintMes,hintState) {
    $('#hintMesModal').modal('show');
    $('#modalLabelOption').text(title);
    $('#hintMes').text(hintMes);
    $('#hintState').text(hintState);
}
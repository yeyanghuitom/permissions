/**
 * Created by Bear on 2018/1/25.
 *
 * bootstrapTable 前台页面配置好Table - head 之后的加载
 */


function bootTable( d ){
    var $table = $( '#' + d.id );
    var dataUrl = $table.attr("name");

    $table.bootstrapTable({
        toolbar: ".toolbar",
        clickToSelect: true,        //是否启用点击选中行
        //showRefresh: true,
        search: true,
        showToggle: true,
        showColumns: true,
        pagination: true,
        uniqueId: "index",              //每一行的唯一标识，一般为主键列
        //pageSize: 8,  //每一页展示的信息数量
        //clickToSelect: false,
        searchAlign: 'left',
        idField: "index",
        /*data: [
         {
         id: 1,
         name: 'Item 1',
         price: '$1',
         index : 'a1',
         actions : ''
         },{
         id: 2,
         name: 'Item 2',
         price: '$2',
         index : 'a2',
         actions : ''
         },{
         id: 3,
         name: 'Item 3',
         price: '$3',
         index : 'a3',
         actions : ''
         },{
         id: 4,
         name: 'Item 4',
         price: '$4',
         index : 'a4',
         actions : ''
         }, {
         id: 5,
         name: 'Item 5',
         price: '$5',
         index : 'a5',
         actions : ''
         }, {
         id: 6,
         name: 'Item 6',
         price: '$6',
         index : 'a6',
         actions : ''
         }, {
         id: 7,
         name: 'Item 7',
         price: '$7',
         index : 'a7',
         actions : ''
         }, {
         id: 8,
         name: 'Item 8',
         price: '$8',
         index : 'a8',
         actions : ''
         }, {
         id: 9,
         name: 'Item 9',
         price: '$9',
         index : 'a9',
         actions : ''
         }, {
         id: 10,
         name: 'Item 10',
         price: '$10',
         index : 'a10',
         actions : ''
         }, {
         id: 11,
         name: 'Item 11',
         price: '$11',
         index : 'a11',
         actions : ''
         }, {
         id: 12,
         name: 'Item 12',
         price: '$12',
         index : 'a12',
         actions : ''
         }, {
         id: 13,
         name: 'Item 13',
         price: '$13',
         index : 'a13',
         actions : ''
         }],*/
        pageList: [10,25,50,100],
        icons: {
            refresh: 'fa fa-refresh',
            toggle: 'fa fa-th-list',
            columns: 'fa fa-columns',
            detailOpen: 'fa fa-plus-circle',
            detailClose: 'fa fa-minus-circle'
        }
    });
    $.ajax({
        type:'post',
        url:dataUrl,
        success:function(data){
            try{
                //console.log(data);
                var obj =  JSON.parse( data );
                var list = obj.value;
                $table.bootstrapTable('load', list );

            }catch(error){
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log( error );
            }
            //console.log( $table );
            //console.log( data );

        },
        error:function(){
            console.log("【 bootstrapTable - 报错 】");
            console.log(error);
        }
    });


    $(window).resize(function () {
        $table.bootstrapTable('resetView');


    });


}

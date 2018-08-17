/**
 * Created by Bear on 2018/1/24.
 */
//将json串转换成树形结构
function transData(a, id,pidStr , childrenStr) {
    var r = [], hash = {}, idS = id, pid = pidStr, children = childrenStr, i = 0, j = 0, len = a.length;
    for (; i < len; i++) {
        hash[a[i][idS]] = a[i];
    }
    for (; j < len; j++) {
        var aVal = a[j], hashVP = hash[aVal[pid]];
        if (hashVP) {
            !hashVP[children] && (hashVP[children] = []);
            hashVP[children].push(aVal);
        } else {
            r.push(aVal);
        }

        //console.log(aVal);
    }
    //console.log("########### 打印：");
    //console.log(r);
    return r;
}

//测试方法
function receiveJsTreeData( d ,callBack ) {
    //json串
    var jsonData = d.data;

    //var jsonData = eval('[{"belongsname":"","id":901,"isleaf":0,"text":"XJBHX-2标项目部","pid":"","type":""},{"belongsname":"","id":902,"isleaf":1,"text":"综合部(办公室)","pid":"901","type":""},{"belongsname":"","id":903,"isleaf":1,"text":"工程部(工技部/技术部)","pid":"901","type":""},{"belongsname":"","id":904,"isleaf":1,"text":"安质部","pid":"901","type":""},{"belongsname":"","id":905,"isleaf":1,"text":"计财部","pid":"902","type":""},{"belongsname":"","id":906,"isleaf":1,"text":"物设部(物机部)","pid":"901","type":""},{"belongsname":"","id":907,"isleaf":1,"text":"中心试验室","pid":"901","type":""},{"belongsname":"","id":907,"isleaf":1,"text":"中心试验室1","pid":"901","type":"","icon":"fa fa-random"},{"belongsname":"","id":908,"isleaf":1,"text":"中心试验室12","pid":"901","type":"","icon":"fa fa-random"},{"belongsname":"","id":909,"isleaf":1,"text":"中心试验室123","pid":"901","type":"","icon":"fa fa-folder"},{"belongsname":"","id":910,"isleaf":1,"text":"中心试验室1234","pid":"901","type":"","icon":"fa fa-folder"},{"belongsname":"","id":911,"isleaf":0,"text":"中心试验室12345","pid":"","type":"","icon":"fa fa-folder"},{"belongsname":"","id":912,"isleaf":1,"text":"中心试验室123456","pid":"901","type":"","icon":"fa fa-folder"}]');
    //绑定的字段
    var jsonDataTree = transData(jsonData, 'id', 'pid', 'children');
    console.log(jsonDataTree);


    //$("#" + d.jstreeId ).data('jstree', false).empty();
    //$("#" + d.jstreeId ).data('jstree', false).empty();


        $("#" + d.jstreeId ).jstree("destroy").jstree({
            //plugins: [ "sort", "types", "checkbox", "themes", "html_data" ],
            plugins: [ "types", "checkbox"],//sort：分类
            "core":{
                "data":jsonDataTree,
                'text' : 'Node'
            }
        }).on("changed.jstree", function (e, data) {
            console.log("The selected nodes are:");
            //console.log(data);
            //console.log(data.node.original);
            //console.log(data.node.original.url);
            //console.log(data.selected);
            //alert("将打开新的页面");
            //window.location.href = data.node.original.url;

        });
        $("#" + d.jstreeId ).jstree(true).get_all_checked = function(full) {
            var tmp=new Array;
            for(var i in this._model.data){
                if(this.is_undetermined(i)||this.is_checked(i)){tmp.push(full?this._model.data[i]:i);}
            }
            return tmp;
        };;
        /*$("#" + d.jstreeId ).jstree({
            //plugins: [ "sort", "types", "checkbox", "themes", "html_data" ],
            plugins: [ "types", "checkbox"],//sort：分类
            "core":{
                "data":jsonDataTree,
                'text' : 'Node'
            }
        }).on("changed.jstree", function (e, data) {
            console.log("The selected nodes are:");
            //console.log(data);
            //console.log(data.node.original);
            //console.log(data.node.original.url);
            //console.log(data.selected);
            //alert("将打开新的页面");
            //window.location.href = data.node.original.url;

        });*/
        if( typeof ( callBack ) == 'function' ){
            callBack();
        }


    setTimeout(function(){},500);
}
//窗体加载执行的方法
//window.onload = function(){ test(); };

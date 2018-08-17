/**
 * Created by Bear on 2018/1/24.
 */
//将json串转换成树形结构
function transData(a, idStr, pidStr, childrenStr) {
    var r = [], hash = {}, id = idStr, pid = pidStr, children = childrenStr, i = 0, j = 0, len = a.length;
    for (; i < len; i++) {
        hash[a[i][id]] = a[i];
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
function receiveJsTreeData(d) {
    //json串
    var jsonData = eval('[{"belongsname":"","idStr":901,"isleaf":0,"text":"XJBHX-2标项目部","pid":"","type":""},{"belongsname":"","idStr":902,"isleaf":1,"text":"综合部(办公室)","pid":"901","type":""},{"belongsname":"","idStr":903,"isleaf":1,"text":"工程部(工技部/技术部)","pid":"901","type":""},{"belongsname":"","idStr":904,"isleaf":1,"text":"安质部","pid":"901","type":""},{"belongsname":"","idStr":905,"isleaf":1,"text":"计财部","pid":"902","type":""},{"belongsname":"","idStr":906,"isleaf":1,"text":"物设部(物机部)","pid":"901","type":""},{"belongsname":"","idStr":907,"isleaf":1,"text":"中心试验室","pid":"901","type":""},{"belongsname":"","idStr":907,"isleaf":1,"text":"中心试验室1","pid":"901","type":"","icon":"fa fa-random"},{"belongsname":"","idStr":908,"isleaf":1,"text":"中心试验室12","pid":"901","type":"","icon":"fa fa-random"},{"belongsname":"","idStr":909,"isleaf":1,"text":"中心试验室123","pid":"901","type":"","icon":"fa fa-folder"},{"belongsname":"","idStr":910,"isleaf":1,"text":"中心试验室1234","pid":"901","type":"","icon":"fa fa-folder"},{"belongsname":"","idStr":911,"isleaf":0,"text":"中心试验室12345","pid":"","type":"","icon":"fa fa-folder"},{"belongsname":"","idStr":912,"isleaf":1,"text":"中心试验室123456","pid":"901","type":"","icon":"fa fa-folder"}]');
    //绑定的字段
    var jsonDataTree = transData(jsonData, 'idStr', 'pid', 'children');
    console.log(jsonDataTree);


    $("#" + d.jstreeId ).jstree({
        "core":{
            "data":jsonDataTree
        }
    }).on("changed.jstree", function (e, data) {
        console.log("The selected nodes are:");
        //console.log(data);
        console.log(data.node.original);
        //console.log(data.node.original.url);
        //console.log(data.selected);
        //alert("将打开新的页面");
        //window.location.href = data.node.original.url;

    })
}
//窗体加载执行的方法
//window.onload = function(){ test(); };
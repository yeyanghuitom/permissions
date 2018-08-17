/********
 * creat By Bear
 * 2018/02/09
 * *********/

$(document).ready(function(){
    // todo 初始化方法
    function init( list ){
        console.log("进入init");
        //todo terminalList 终端列表
        var fragment = document.createDocumentFragment(),terminalList=[];

        var sortBy=function(attr,rev){
            //第二个参数没有传递 默认升序排列
            if(rev ==  undefined){
                rev = 1;
            }else{
                rev = (rev) ? 1 : -1;
            }
            return function(a,b){
                a = a[attr];
                b = b[attr];
                if(a < b){
                    return rev * -1;
                }
                if(a > b){
                    return rev * 1;
                }
                return 0;
            }
        }
        // todo 使用
        list = list.sort(sortBy('SORT_CODE',true));

        for(var i =0;i<list.length;i++){
            if( list[i].PARENT_ID == "" ){
                let rowData = createRootDirectory( list[i] );
                //var li = createElement("LI");

                console.log(list[i].SORT_CODE);

                $(fragment).append( $( rowData ) );
            }
        }

        for(var a =0;a<list.length;a++){
            //console.log(" ########## 进入二次循环 ");
            //.log( list[a].PARENT_ID +"##########" + list[a].URL );
            //todo
            /*if( list[a].PARENT_ID != "" && list[a].SORT_CODE && list[a].URL == "" ){
                console.log("!!!!!!!!!!!!");
                console.log("进入二级节点");
                let rowData = createRootDirectory( list[a] );
                 var doc=fragment.getElementById("directory_"+ list[a].PARENT_ID);


                 $( doc ).append( $(rowData) );

            }else*/
            if( list[a].PARENT_ID != "" && list[a].URL == "" ){

                let rowData = createLeafDirectory( list[a] );
                var doc=fragment.getElementById("directory_"+ list[a].PARENT_ID);


                $( doc ).append( $(rowData) );

                //$(fragment).children( ".rootDirectory_"+ list[a].PARENT_ID )[0].append( rowData );

            }else if( list[a].PARENT_ID != "" ){
                let s = a;
                //console.log( list[s]);
                terminalList.push( list[s] );
            }
        }
        console.log("#########################");
        console.log(terminalList);
        for(var i =0;i<terminalList.length;i++){
            let rowData = createLeafDirectory( terminalList[i] );

            //console.log( "###########123" );
            ///console.log( "directory_"+ terminalList[i].PARENT_ID );

            var doc = fragment.getElementById("directory_"+ terminalList[i].PARENT_ID );

            //console.log( doc );
            //console.log(rowData);
            $( doc ).append( $(rowData) );
        }
        // console.log("&&&&&&&&&&&&&&&&&&&&&&7");
        // console.log(fragment);
        window.fragment = fragment;
        window.terminalList = terminalList;
        $("#side-menu").append(fragment);


        loadScript("base/js/plugins/metisMenu/jquery.metisMenu.js",function(){
            $('#side-menu').metisMenu();
            loadScript("base/js/plugins/slimscroll/jquery.slimscroll.min.js");
            loadScript("base/js/plugins/layer/layer.min.js",function(){
                loadScript("base/js/hplus.min.js?v=4.0.0");
                loadScript("base/js/contabs.min.js");
                loadScript("base/js/plugins/pace/pace.min.js");
            });
        });
        //
        // setTimeout(function (){
        // },1000);
    }
    // todo 创建根目录
    function createRootDirectory( data ){
        var str = '';
        if( data.URL == "" ){
            str += '<li>'+
                '<a href="#"><i class="fa fa-home"></i><span class="nav-label">'+ data.RESOURCE_NAME +'</span><span class="fa arrow"></span></a>'+
                '<ul class="nav nav-second-level" id="directory_'+ data.RESOURCE_ID +'">'+
                //'<ul class="nav nav-second-level" id="directory_'+ data.SORT_CODE +'">'+
                '</ul>'+
                '</li>';

        }else{
            str += '<li>'+
                '<a class="J_menuItem" href="'+ data.URL +'"><i class="fa fa-magic"></i><span class="nav-label">'+ data.RESOURCE_NAME + '</span></a>'+
                '</li>';

        }
        return str;
    }

    //todo 创建子目路
    function createLeafDirectory(data){
        var str = '';
        // if URL为空 默认为节点
        if( data.URL == "" ){
            str += '<li>'+
                '<a href="#">'+ data.RESOURCE_NAME +'<span class="fa arrow"></span></a>'+
                '<ul class="nav nav-second-level" id="directory_'+ data.RESOURCE_ID +'">'+
                '</ul>'+
                '</li>';

        }else{
            str += '<li>'+
                '<a class="J_menuItem" href="'+ data.URL +'"><i class="fa fa-magic"></i><span class="nav-label">'+ data.RESOURCE_NAME + '</span></a>'+
                '</li>';

        }
        return str;
    }

    //todo 动态加载script
    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = url;
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || /complete|loaded/.test(this.readyState)) {
                //var str = url.indexOf("wyx");
                console.log("script [" + url + "] load success.");

                if (typeof callback === "function") {
                    callback();
                }
                script.onload = null;
                script.onreadystatechange = null;
            }
        };
        (document.body || document.getElementsByTagName("body")[0]).appendChild(script);
    }
    if (sessionStorage.userMassage){
        var usermassage= JSON.parse(sessionStorage.userMassage);
    }else {
        window.location.href="login.html";
    }

    $.ajax({
        type:'post',
        url: ajaxBaseURL + "/main/permissions",
        //url: ajaxBaseURL + "/roles/getOneRolesById",

        data: "user_id="+usermassage.userName+"&password="+usermassage.password,
        success:function(data){
            try{
                if(data.code == "000"){
                    //console.log("查询成功:"+JSON.stringify(data));
                    //console.log( data.value );
                    init( data.value );
                    console.log(data);
                    //window.str = JSON.stringify(data);

                }else{
                    //swal("查询失败",JSON.stringify(data));
                    console.log("查询失败："+JSON.stringify(data))
                }



                /*var objData = $table["getMsg_data"],value = data.value ;
                for(var k in objData ){
                    $( "#getMsg_data_" + objData[k] ).val(value[k]);
                }*/
                /*
                //回传json
                //"{"msg":"查询单条成功！","code":"000","value":{"QQ":"222","ACCOUNT":"jiale","STATUS":"0","PASSWORD":"111111","USER_ID":"001","USER_NAME":"jiale","REGISTER_DATE":1516809600000,"EMAIL":"847748755@qq.com","DESCRIBTION":"admin"}}"
                //alert(data);
                */

            }catch(error){
                console.log("【 bootstrapTable - 返回结果 - 报错 】");
                console.log( error );
            }

        },
        error:function(){
            console.log("【 bootstrapTable - 报错 】");
            console.log(error);
        }
    });
/*    var str='<li>'+
        '<a href="#">'+
        '<i class="fa fa-gears"></i>'+
        '<span class="nav-label">系统权限管理+++</span>'+
        '<span class="fa arrow"></span>'+
        '</a>'+
        '<ul class="nav nav-second-level collapse">'+
        '<li>'+
        '<a class="J_menuItem" href="index_resources.html" data-index="0">资源配置</a>'+
        '</li>'+
        '<li>'+
        '<a class="J_menuItem" href="index_roles.html" data-index="0">角色配置</a>'+
        '</li>'+
        '<li>'+
        '<a class="J_menuItem" href="index_users.html" data-index="0">用户配置</a>'+
        '</li>'+
        ' <li>'+
        '<a class="J_menuItem" href="index_organization.html" data-index="0">部门配置</a>'+
        '</li>'+
        '</ul>'+
        '</li>';
    var fragment = document.createDocumentFragment();
    $(fragment).append(str);
    $("#side-menu").append(str);*/

    //$('#side-menu').metisMenu()

});
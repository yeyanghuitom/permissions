/**
 * Created by Bear on 2018/3/16.
 */
function regVerify(data) {
    if (data == "" || data == undefined || data == null || typeof(data) != "object" || data.type == "" || data.type == undefined || data.value == undefined || typeof(data.value) != "string") {
        alert("校验方法报错,请检查数据格式");
        return false;
    }
    var str = data.value,
        answer = false,
        reg = "";

    function email() {
        reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(str);
    }
    function userAccountNumber(){
        if(str.length<3||str.length>15){
            return false
        }else{
            reg=/[^\w\.]/g;
            return !reg.test(str);
        }

    }
    function phoneNum() {
        reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0-9])|(18[0,5-9]))\d{8}$/;
        return reg.test(str);
    }

    function id() {}

    function userName() {
        if (str.length < 3 || str.length > 15) {
            return false
        } else {
            reg = /[^\w\u4e00-\u9fa5\.]/g;
            return !reg.test(str);
        }
    }

    function userPassword() {
        reg = /^[A-Za-z0-9_-]{6,18}$/;
        return reg.test(str);
    }

    function carNum() {
        reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
        return reg.test(str);
    }

    function webUrl() {}

    function ipUrl() {
        reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return reg.test(str);
    }
    function normal(){
        reg=/[^\w\.||[ -:]]/g;
        return !reg.test(str);

        /*if(str.length<3||str.length>15){
            return false
        }else{
        }*/
    }
    console.log(this);
    if (data.type == "userName") {
        return userName();
    } else if (data.type == "userPassword") {
        return userPassword();
    } else if (data.type == "phoneNum") {
        return phoneNum();
    } else if (data.type == "email") {
        return email();
    } else if (data.type == "webUrl") {
        return webUrl();
    } else if (data.type == "ipUrl") {
        return ipUrl();
    } else if (data.type == "userAccountNumber") {
        return userAccountNumber();
    } else if(data.type == "normal"){
        return normal();
    }
}
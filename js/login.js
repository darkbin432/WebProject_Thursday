var flag = false;//初始化flag

//单击回车触发
function keyTrigger(){
    if (event.keyCode==13){// 13为回车键
        log_check();// 调用登陆按钮或者登陆方法
    }
}

//检查用户名是否符合要求并输出提示
function check_username() {
    var userObj = document.getElementById("userResult");
    var strObj = document.getElementById("user");
    var userStr = strObj.value;
    var warn = check_username_legal(userStr);
    if (warn == "") {
        strObj.style.color="black";
        userObj.innerHTML = warn;
        flag = true;
    }
    else {
        userObj.style.color="red";
        strObj.style.color="red";
        userObj.innerHTML = warn;
    }

}
// 检查用户名是否合法
function check_username_legal(str) {
    var warn = "";
    if ("" == str) {
        warn = "用户名为空";
        return warn;
    }
    else if (!check_other_char(str)) {
        warn = "用户名输入有误";
        return warn;
    }
    return warn;
}
// 检查用户名是否含有特殊字符
function check_other_char(str) {
    var other_char =/\w[a-zA-Z0-9_-]*/;
    return str==str.match(other_char);
}
//检查密码是否符合要求
function check_password() {
    var pwdObj = document.getElementById("pwdResult");
    var pwd = document.getElementById("password");
    pwdObj.style.color="red";
    var pwdStr = pwd.value;
    var len = pwdStr.length;
    if (len == 6) {
        pwdObj.innerHTML = "";
        flag = true;
    }
    else if(len == 0){
        pwdObj.innerHTML = "密码为空";
        flag = false;
    }
    else{
        pwdObj.innerHTML = "密码长度输入有误";
        flag = false;
    }
}
//登陆
function log_check() {
    flag = false;
    check_username();
    check_password();
    admin_pwd=123456;
    admin_username="admin";
    var logObj = document.getElementById("logResult");
    logObj.innerHTML = "";
    logObj.style.color="red";
    var pwd = document.getElementById("password");
    var pwdStr = pwd.value;
    var strObj = document.getElementById("user");
    var userStr = strObj.value;
    if (flag == true) {
        if ((pwdStr==admin_pwd)&&(userStr==admin_username)) {
            window.location.href="room.html";
        }
        else {
            logObj.innerHTML = "密码或用户名错误";
        }
    }
    else {
        logObj.innerHTML = "输入信息有误，请查看提示";
    }
}

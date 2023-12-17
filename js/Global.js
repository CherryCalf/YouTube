window.onload = function () {
    try {
        search();
    } catch (error) {
        console.log("search is not defined");
    }

    try {
        jump();
    } catch (error) {
        console.log("jump is not defined");
    }
    try {
        fenlei();
    } catch (error) {
        console.log("fenlei is not defined");
    }
    try {
        init();
    } catch (error) {
        console.log("init is not defined");
    }
    try {
        jump_login();
    } catch (error) {
        console.log("jump_login is not defined");
    }
    try {
        admin_login();
    } catch (error) {
        console.log("admin_login is not defined");
    }
    try {
        pd_login();
    } catch (error) {
        console.log("pd_login is not defined");
    }
}
var search = function () {
    var sousuo = document.getElementById("sousuo");
    var fanhui = document.getElementById("fanhui");
    var top_sousuo = document.getElementById("top_sousuo");
    var top = document.getElementById("top");
    sousuo.addEventListener("click", function () {
        top_sousuo.style.top = "0px";
        top.style.top = "-48px";
    });
    fanhui.addEventListener("click", function () {
        top_sousuo.style.top = "-48px";
        top.style.top = "0px";
    });
}
var jump = function () {
    var home = document.getElementById("home");
    var short = document.getElementById("short");
    var subscribe = document.getElementById("subscribe");
    var library = document.getElementById("library");
    var touxiang = document.getElementById("touxiang");
    var logo = document.getElementById("logo");

    logo.addEventListener("click", function () {
        window.location.href = "../html/home.html";
    });
    home.addEventListener("click", function () {
        window.location.href = "../html/home.html";
    });
    short.addEventListener("click", function () {
        window.location.href = "../html/short.html";
    });
    subscribe.addEventListener("click", function () {
        window.location.href = "../html/subscriptions.html";
    });
    library.addEventListener("click", function () {
        window.location.href = "../html/library.html";
    });
    touxiang.addEventListener("click", function () {
        window.location.href = "../html/mine.html";
    });

}
var jump_login = function () {
    var email_input = document.getElementById("email_input");
    var next = document.getElementById("next");
    next.addEventListener("click", function () {
        var admin = email_input.value;
        window.location.href = "../html/login_password.html?" + "admin=" + admin;
    });
}
var admin_login = function () {
    var admin_pd = document.getElementById("admin_pd");
    var name = location.search;
    // var name = decodeURI(document.URL)//获取到编码的数据并进行解码，推荐
    //获取到的数据其实是  ?uname=zhangsan'
    //下面是对数据进行处理
    name = name.slice(name.indexOf("=") + 1)
    console.log(name);
    admin_pd.innerHTML = name;
}

var pd_login = function () {
    var next_pd = document.getElementById("next_pd");
    next_pd.addEventListener("click", function () {
    window.location.href = "../html/home.html";
    });
}
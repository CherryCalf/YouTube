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
    //init方法
    try {
        init();
    } catch (error) {
        console.log("init is not defined");
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

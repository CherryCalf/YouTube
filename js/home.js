var fenlei = function () {
    var left_menu = document.getElementById("left_menu");
    var sec_one = document.getElementById("sec_one");
    var right = document.getElementById("right");
    right.addEventListener("click", function () {
        left_menu.style.display = "none";
        document.documentElement.style.overflow = "auto";
    });
    sec_one.addEventListener("click", function () {
        left_menu.style.display = "flex";
        document.documentElement.style.overflow = "hidden";
    });

    var Secfenlei_a = document.getElementById("Secfenlei_a");
    var Secfenlei_b = document.getElementById("Secfenlei_b");
    var Secfenlei_c = document.getElementById("Secfenlei_c");
    var Secfenlei_d = document.getElementById("Secfenlei_d");
    var Secfenlei_e = document.getElementById("Secfenlei_e");
    var Secfenlei_f = document.getElementById("Secfenlei_f");
    var Secfenlei_g = document.getElementById("Secfenlei_g");

    var center_neirong_a = document.getElementById("center_neirong_a");
    var center_neirong_b = document.getElementById("center_neirong_b");
    var center_neirong_c = document.getElementById("center_neirong_c");
    var center_neirong_d = document.getElementById("center_neirong_d");
    var center_neirong_e = document.getElementById("center_neirong_e");
    var center_neirong_f = document.getElementById("center_neirong_f");
    var center_neirong_g = document.getElementById("center_neirong_g");

    Secfenlei_a.addEventListener("click", function () {
        center_neirong_a.style.display = "flex";
        center_neirong_b.style.display = "none";
        center_neirong_c.style.display = "none";
        center_neirong_d.style.display = "none";
        center_neirong_e.style.display = "none";
        center_neirong_f.style.display = "none";
        center_neirong_g.style.display = "none";
    });
    Secfenlei_b.addEventListener("click", function () {
        center_neirong_a.style.display = "none";
        center_neirong_b.style.display = "flex";
        center_neirong_c.style.display = "none";
        center_neirong_d.style.display = "none";
        center_neirong_e.style.display = "none";
        center_neirong_f.style.display = "none";
        center_neirong_g.style.display = "none";
    });
    Secfenlei_c.addEventListener("click", function () {
        center_neirong_a.style.display = "none";
        center_neirong_b.style.display = "none";
        center_neirong_c.style.display = "flex";
        center_neirong_d.style.display = "none";
        center_neirong_e.style.display = "none";
        center_neirong_f.style.display = "none";
        center_neirong_g.style.display = "none";
    });
    Secfenlei_d.addEventListener("click", function () {
        center_neirong_a.style.display = "none";
        center_neirong_b.style.display = "none";
        center_neirong_c.style.display = "none";
        center_neirong_d.style.display = "flex";
        center_neirong_e.style.display = "none";
        center_neirong_f.style.display = "none";
        center_neirong_g.style.display = "none";
    });
    Secfenlei_e.addEventListener("click", function () {
        center_neirong_a.style.display = "none";
        center_neirong_b.style.display = "none";
        center_neirong_c.style.display = "none";
        center_neirong_d.style.display = "none";
        center_neirong_e.style.display = "flex";
        center_neirong_f.style.display = "none";
        center_neirong_g.style.display = "none";
    });
    Secfenlei_f.addEventListener("click", function () {
        center_neirong_a.style.display = "none";
        center_neirong_b.style.display = "none";
        center_neirong_c.style.display = "none";
        center_neirong_d.style.display = "none";
        center_neirong_e.style.display = "none";
        center_neirong_f.style.display = "flex";
        center_neirong_g.style.display = "none";
    });
    Secfenlei_g.addEventListener("click", function () {
        center_neirong_a.style.display = "none";
        center_neirong_b.style.display = "none";
        center_neirong_c.style.display = "none";
        center_neirong_d.style.display = "none";
        center_neirong_e.style.display = "none";
        center_neirong_f.style.display = "none";
        center_neirong_g.style.display = "flex";
    });
    var xsj = document.getElementsByName("xsj");
    xsj[0].addEventListener("click", function () {
        window.location.href = "../html/detail.html";
    });
    
}

window.onscroll = function () {
    var top = document.getElementById("top");
    var sec = document.getElementById("sec");
    var scrollFunc = function (e) {
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            console.log("滑轮向上滚动");
            top.style.top = "0px";
            sec.style.top = "48px";
            top.style.transition = "all 0.1s ease-in-out";
            sec.style.transition = "all 0.1s ease-in-out";
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            console.log("滑轮向下滚动");
            top.style.top = "-48px";
            sec.style.top = "-48px";
            top.style.transition = "all 0.5s ease-in-out";
            sec.style.transition = "all 0.5s ease-in-out";
        }

    }
    window.onmousewheel = document.onmousewheel = scrollFunc; //滚动滑轮触发scrollFunc方法
}
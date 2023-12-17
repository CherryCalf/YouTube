var li = document.getElementsByTagName("li");
var ul = document.querySelector("ul");
var availHeight = window.screen.availHeight;
function init() {
    //获取屏幕高度
    var height = document.documentElement.clientHeight;
    console.log(height);
    // 初始化li的位置
    for (var i = 0; i < li.length; i++) {
        li[i].style.top = height * i + "px";
        console.log(li[i].style.top);
    }
    ul.style.height = height * li.length + "px";
}

function finit() {
    var height = document.documentElement.clientHeight;
    console.log(height);
    // 反向初始化li的位置
    for (var i = 0; i < li.length; i++) {
        li[li.length - 1 - i].style.top = "-" + height * i + "px";
    }
}

for (let i = 0; i < li.length; i++) {
    var distanceX, distanceY;
    li[i].addEventListener("touchstart", (e) => {
        document.body.scrollBy(0, -ul.clientHeight);
        //滑动起点的坐标
        //  startX = e.touches[0].screenX;
        startY = e.touches[0].screenY
        //  console.log("startX:" + startX + "," + "startY:" + startY);
    })

    li[i].addEventListener("touchend", (e) => {
        //手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
        //  endX = e.changedTouches[0].screenX;
        endY = e.changedTouches[0].screenY
        // console.log("endX:" + endX + "," + "endY:" + endY);
        // distanceX = endX - startX,
        distanceY = endY - startY;
        //移动端设备的屏幕宽度
        let clientHeight = document.documentElement.clientHeight;
        console.log(clientHeight * 0.2);
        console.log("100");
        console.log(distanceY);
        //判断是否滑动了，而不是屏幕上单击了
        if (startY != Math.abs(endY)) {
            //在滑动的距离超过屏幕高度的20%时，做某种操作
            if (Math.abs(distanceY) > 100) {
                //向下滑实行函数someAction1，向上滑实行函数someAction2
                distanceY < 0 ? someAction1() : someAction2();
            } else {
                distanceY < 0 ? someAction3() : someAction4();
            }
        }
        //  startX = startY = endX = endY = 0;

    })

}
let box = document.querySelector("li") //


let li_sp = Array.from(document.getElementsByClassName("quan_vcd_list-item"));

var someAction1 = debounce(function () {
    console.log("下，下一个")
    li_sp.forEach(element => {

        console.log(li[li.length - 1].style.top);
        if (parseInt(li[li.length - 1].style.top) <= 0) {
            finit();
        } else {
            element.style.top = parseInt(element.style.top) - availHeight + 'px';
        }
    });

}, 10);

var someAction2 = debounce(function () {
    console.log("上，上一个")
    li_sp.forEach(element => {
        console.log(li[li.length - 1].style.top);
        if (parseInt(li[0].style.top) >= 0) {
            init();
        } else {
            element.style.top = parseInt(element.style.top) + availHeight + 'px';
        }
    });
}, 10);


function debounce(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    }
}

window.onmousewheel = document.onmousewheel = debounce(scrollFunc, 50);
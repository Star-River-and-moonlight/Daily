window.onload = function () {
    var button1 = document.getElementById("button1");
    button1.onclick = function () {
        alert("爱笑的人运气都不差😊");
    }

    var button2 = document.getElementById("button2");
    button2.onclick = function () {
        alert("不以今之悲伤，染至明之心情✨")
    }
}

var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)){
    <!-- 需要在页面加载时候 生效 才能有效 -->
    var devicePixelRatio = window.devicePixelRatio;
    var deviceScale = 1/devicePixelRatio;
    document.write('<meta name="viewport" content="width=device-width,initial-scale='+deviceScale+',minimum-scale='
        +deviceScale+',maximum-scale='+deviceScale+',user-scalable=no">');
}
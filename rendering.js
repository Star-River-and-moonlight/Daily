window.onload = function () {
    var button1 = document.getElementById("button1");
    button1.onclick = function () {
        var music1 = document.getElementById("music1");
        var music2 = document.getElementById("music2");
        // 判断在此之前有没有其他音乐播放，如果有，就停止并重置它
        if (music2.played) {
            music2.pause();
            music2.currentTime = 0;
        }
        music1.play();  // 播放音乐
        /*  if (music1.paused) {
              music1.play();
          } else {
              music1.pause();
              music1.currentTime = 0;
          }*/
        alert("爱笑的人运气都不差😊");
    }

    var button2 = document.getElementById("button2");
    button2.onclick = function () {
        var music1 = document.getElementById("music1");
        var music2 = document.getElementById("music2");
        // 判断在此之前有没有其他音乐播放，如果有，就停止并重置它
        if (music1.played) {
            music1.pause();
            music1.currentTime = 0;
        }
        music2.play();  // 播放音乐
        /*  if (music2.paused) {
              music2.play();
          } else {
              music2.pause();
              music2.currentTime = 0;
          }*/
        alert("不以今之悲伤，染至明之心情✨")
    }
}

// 页面窗口自适应
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)) {
    <!-- 需要在页面加载时候 生效 才能有效 -->
    var devicePixelRatio = window.devicePixelRatio;
    var deviceScale = 1 / devicePixelRatio;
    document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',minimum-scale='
        + deviceScale + ',maximum-scale=' + deviceScale + ',user-scalable=no">');
}
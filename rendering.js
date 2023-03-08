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

    // 防止查看源代码
    document.onkeydown = function () {
        var e = window.event || arguments[0];
        if (e.keyCode == 123) {
            // alert("禁止使用F12");
            return false
        }else if ((e.ctrlKey) && (e.shiftKey)) {
            // alert("禁止Ctrl+shift+I");
            return false;
        }else if ((e.ctrlKey) && (e.keyCode == 85)) {
            // alert("禁止Ctrl+u");
            return false;
        }else if ((e.ctrlKey) && (e.keyCode == 83)) {
            // alert("禁止Ctrl+s");
            return false;
        }
    }
// 屏蔽鼠标右键
    document.oncontextmenu = function (){
        // alert("禁止右键");
        return false;
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

function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);
// 阻止浏览器开发工具正常使用
((function() {
    var callbacks = [],
        timeLimit = 50,
        open = false;
    setInterval(loop, 1);
    return {
        addListener: function(fn) {
            callbacks.push(fn);
        },
        cancleListenr: function(fn) {
            callbacks = callbacks.filter(function(v) {
                return v !== fn;
            });
        }
    }
    function loop() {
        var startTime = new Date();
        debugger;
        if (new Date() - startTime > timeLimit) {
            if (!open) {
                callbacks.forEach(function(fn) {
                    fn.call(null);
                });
            }
            open = true;
            window.stop();
            alert('禁止查看');
            window.location.reload();
        } else {
            open = false;
        }
    }
})())
    .addListener(function() {
        window.location.reload();
    });
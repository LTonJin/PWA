index.html文件

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="manifest" href="/manifest.json">
</head>

<body>
  <h1>PWA</h1>
  <p id="text"></p>
  <button id="butInstall" style="display: none;">butInstall</button>
  <script src="/install.js"></script>
  <script>
    if ('serviceWorker' in window.navigator) {
      navigator.serviceWorker.register('/serverWorker.js')
        .then(function (reg) {
          console.log('success', reg);
        })
        .catch(function (err) {
          console.log('fail', err);
        });
    }
    fetch('https://www.tianqiapi.com/api?version=epidemic&appid=23035354&appsecret=8YvlPNrz')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        document.querySelector('#text').innerHTML = myJson.errmsg;
      })
  </script>
</body>

</html>
```

insatll.js文件

```js
// insatll.js
let deferredInstallPrompt = null;
// 获取安装按钮
const installButton = document.getElementById('butInstall');
// 给安装按钮添加事件
installButton.addEventListener('click', installPWA);
function installPWA(evt) {
  // 弹框提示是否安装
  deferredInstallPrompt.prompt();
  // 隐藏安装按钮
  installButton.style.display = 'none';
  deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
         // 安装成功
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });

}
// 当web页面支持安装时会触发此事件
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  // 显示自定义安装按钮
  installButton.style.display = 'block';
}
```

manifest.json文件

```json
{
  "name": "News",
  "short_name": "News",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": ".",
  "icons": [
    {
      "src": "/144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    }
  ],
  "splash_pages": null
}
```

serverWorker.js文件

```js

//用于缓存资源（离线时使用）
var cacheName = 'PWA'

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        'index.html'
      ]))
  )
})
self.addEventListener('activate', function (event) {
  console.log('Service Worker activate');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  )
})
```


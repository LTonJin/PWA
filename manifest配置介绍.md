manifest.json格式[详情](https://developer.mozilla.org/en-US/docs/Web/Manifest#Members)

```json
{
  "name": "Weather",
  "short_name": "Weather",
  "icons": [{
    "src": "/images/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    }, {
      "src": "/images/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    }, {
      "src": "/images/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    }, {
      "src": "/images/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }, {
      "src": "/images/icons/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    }, {
      "src": "/images/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }],
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#3E4EB8",
  "theme_color": "#2F3BA2"
}
```

 [name](https://developer.mozilla.org/en-US/docs/Web/Manifest/name) 程序名称

 [short_name](https://developer.mozilla.org/en-US/docs/Web/Manifest/short_name) 程序名称简称（程序名过长时显示）

 [icons](https://developer.mozilla.org/en-US/docs/Web/Manifest/icons) 程序图标

 [start_url](https://developer.mozilla.org/en-US/docs/Web/Manifest/start_url) 程序启动的主页

 [display](https://developer.mozilla.org/en-US/docs/Web/Manifest/display) 程序的显示模式（ fullscreen | standalone | minimal-ui | browser ）

 [background_color](https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color) 启动程序时的背景颜色

 [theme_color](https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color) 标题颜色

 [categories](https://developer.mozilla.org/en-US/docs/Web/Manifest/categories) 程序属于哪个类别（["books", "education", "medical"]）

 [description](https://developer.mozilla.org/en-US/docs/Web/Manifest/description) 程序描述

 [dir](https://developer.mozilla.org/en-US/docs/Web/Manifest/dir) 显示的方向(auto|ltr|rtl)，具有显示方向的属性（name、short_name、description）

 [iarc_rating_id](https://developer.mozilla.org/en-US/docs/Web/Manifest/iarc_rating_id) id标识用于确定应用属于哪个年龄段

 [lang](https://developer.mozilla.org/en-US/docs/Web/Manifest/lang) 显示的语言（name、short_name、description）

 [orientation](https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation)  览器以横向或纵向模式打开窗口 

 [prefer_related_applications](https://developer.mozilla.org/en-US/docs/Web/Manifest/prefer_related_applications) 

 [related_applications](https://developer.mozilla.org/en-US/docs/Web/Manifest/related_applications) 指定通过平台安装相应的应用程序

 [scope](https://developer.mozilla.org/en-US/docs/Web/Manifest/scope) 指定应用程序的范围，超出之后会使用浏览器打开

 [screenshots](https://developer.mozilla.org/en-US/docs/Web/Manifest/screenshots) 用于web应用商店的图片

 [serviceworker](https://developer.mozilla.org/en-US/docs/Web/Manifest/serviceworker) 要安装的server work的js
/*
实现功能： js和APP原生交互
使用方法：
  在main.js 中添加以下代码
  import Bridge from 'xxx/bridge.js'
  Vue.prototype.bridge = Bridge

  在需要使用的组件中直接调用
  this.bridge.callhandler() 或 this.bridge.registerhandler()

编写日期：2019-01-17
作者： Maker
*/

var u = navigator.userAgent,
  isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端

var setupWebViewJavascriptBridge = (callback) => {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge)
  }
  if (!isAndroid) {//IOS系统，就在H5页面创建一个iframe标签发送请求
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(() => {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  } else {//安卓系统，就给H5页面注册一个WebViewJavascriptBridgeReady方法
    document.addEventListener('WebViewJavascriptBridgeReady', function(event) {
      callback(window.WebViewJavascriptBridge)
    }, false)
  }
}

//安卓系统初始化回调方法
setupWebViewJavascriptBridge((bridge) => {
  if (isAndroid) {
    bridge.init(function(message, responseCallback) {
      responseCallback(message)
    })
  }
})

export default {
  callhandler(name, data, callback) {//调用APP原生方法， name: APP原生提供的方法; data: 传值给APP; callback: 回调
    setupWebViewJavascriptBridge((bridge) => {
      bridge.callHandler(name, data, callback)
    })
  },
  registerhandler(name, callback) {//注册js方法，提供给APP调取     name: 给APP提供的js方法; callback: 回调
    setupWebViewJavascriptBridge((bridge) => {
      bridge.registerHandler(name, (data, responseCallback) => {
        callback(data, responseCallback)
      })
    })
  }
}

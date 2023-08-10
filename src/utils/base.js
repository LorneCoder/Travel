/*
实现功能： 基础功能集合
说明： 部分功能只适用于遵循一定规范的项目
编写日期：2019-01-17
作者： Maker
*/

export default {
  getQueryString (name) {//获取url参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2]); return null
  },
  formatScanReturnString (url) {//格式化扫码返回的字符串；只适用于 http://security.cyou-inc.com:81/security/qrcode.php?t=hc&code=0b3451c33639 这种格式的二维码
		var urlsearch = url.split('?')
    if (urlsearch.length === 1) {
      return {error: '是不是扫错二维码了呀！'}
    }
		var pstrs = urlsearch[1].split('&')
    var data = {}

    pstrs.forEach( (pstr) => {
      var arr = pstr.split('=')
      data[arr[0]] = arr[1]
    })

    return {
      type: data.t,
      code: data.no || data.code
    }
	}
}

Date.prototype.format = function (fmt) {
  var o = {
    "y+": this.getFullYear, //年
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    // "s+": this.getSeconds() //秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
setInterval(
  "document.getElementById('dateTime').innerHTML = (new Date()).format('&nbsp;&nbsp;&nbsp;&nbsp;现在是yyyy年MM月dd日hh时mm分，心情惬意☕，奖励自己玩一把魔方！');",
  1000
);

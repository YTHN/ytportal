
 /*
*created by: EthanWang
*created at: 2017/1/10
*description:dojo配置信息
*
*
**/
 var root = location.href.slice(0, location.href.lastIndexOf('/'));
 dojoConfig = {
     parseOnLoad: true,
     async: true,
     baseURL: root,
     systemConfigType:"json", //json表示从静态文件里读取，BeX表示从BeX的BAAS里面读取
     systemConfigUrl:"/js/config/defaultconfig.json",
     locale:"zh-cn",
     uiSizeType:"small", //small,middle,large
     uiSize:30,
     packages: [{
         name: "application",
         location: root
     },{
         name:"core",
         location:root+'/js/core'

     }, {
         name: "manager",
         location: root + '/js/core/manager'
     },{
         name: "widgets",
         location: root + '/js/widgets'
     }, {
         name:"pulgins",
         location:root+'/js/plugins'
     }]
 };

 function uuid() {
     var s = [];
     var hexDigits = "0123456789abcdef";
     for (var i = 0; i < 36; i++) {
         s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
     }
     s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
     s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
     s[8] = s[13] = s[18] = s[23] = "-";

     var uuid = s.join("");
     return uuid;
 };

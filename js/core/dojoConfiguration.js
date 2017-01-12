
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

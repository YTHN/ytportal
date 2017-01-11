
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
     systemConfigUrl:"/js/config.json",
     packages: [{
         name: "ytportal",
         location: root
     }, {
         name: "widgets",
         location: root + '/js/library/widgets'
     }, {
         name: "manager",
         location: root + '/js/library/core/manager'
     },{
             name:"core",
             location:root+'/js/library/core'

     },{
         name:"pulgins",
         location:root+'/js/library/plugins'
     }]
 };

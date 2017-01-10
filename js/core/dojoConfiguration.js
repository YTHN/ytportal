
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
     dynamicConfig:false, //true表示配置为动态，从systemConfigUrl中获取，false表示配置为静态，从systemConfigJson中获取
     systemConfigJson:"/js/config.json",
     systemConfigUrl:"",
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

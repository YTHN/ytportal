
 /*
*created by: EthanWang
*created at: 2017/1/10
*description:配置管理器，通过获取不同来源的配置信息，实例化统一的ConfigData对象,这样通过BeX5服务返回的数据可以在这儿进行转换
*
*
**/
define(["core/appEvent","dojo/request","manager/configData","dojo/_base/declare",
    "esri/config", "esri/urlUtils"
],function(appEvent,request,configData,declare,esriConfig,urlUtils) {
    return declare("ConfigManager",null,{
        loadConfigData:function()
        {
            request.get(dojoConfig.systemConfigUrl,{handleAs:"json"}).then(
                function (result) {
                    configData.readFromJson(result,dojoConfig.systemConfigType);
                    appEvent.dispatchEvent(appEvent.CONFIG_LOAD);
                }
            ,function (err) {
                    console.log("load config error!",err);
                })
        }
    });

});
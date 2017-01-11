
 /*
*created by: EthanWang
*created at: 2017/1/10
*description:全局初始对象，类似于App
*
*
**/
define(["dojo/request","core/appEvent","core/configData","manager/configManager",
    "esri/config",
    "dojo/domReady!"],function(request,appEvent,configData,configManager,esriConfig) {
    ytProtal={};
    ytProtal.configData=new configData();
    ytProtal.shareOptions={};
    request(dojoConfig.systemConfigUrl, {handleAs: "json"}).then(function (obj) {
        ytProtal.configData.readFromJson(obj,dojoConfig.systemConfigType);
    }, function () {
        alert("error read configuration json file " + dojoConfig.configJson);
    });

/*

    return declare("YTPortal",null,{
        _configManager:null,

        constructor:function () {
          _configManager=new configManager();

          var fun=lang.hitch(this,this.onConfigLoaded);
          appEvent.addEventLsitener(appEvent.CONFIG_LOAD,fun);
          _configManager.loadConfigData();
        },
        onConfigLoaded:function()
        {
            alert("Config Data Loaded");
        }


    });
*/

});
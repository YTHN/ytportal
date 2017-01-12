
 /*
*created by: EthanWang
*created at: 2017/1/10
*description:全局初始对象，类似于App
*
*
**/
require(["dojo/_base/declare","dojo/request","core/appEvent","core/configData",
    "esri/config","manager/configManager","manager/appManager",
    "dojo/domReady!"],function(declare,request,appEvent,configData,esriConfig,configManager,appManager) {

    ytProtal={};
    ytProtal.configData=configData;
    ytProtal.shareOptions={};
    var url=root+dojoConfig.systemConfigUrl;
    request(url, {handleAs: "json"}).then(function (json) {
        _cfgManager=new ConfigManager();
        _cfgManager.loadConfigData(json);
        alert("Start App Manager");
        _appManager=new appManager();
        _appManager.startup();
    }, function (err) {
        alert("error read configuration json file " + err);
    });



   /* return declare("YTPortal",null,{
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
    });*/


});
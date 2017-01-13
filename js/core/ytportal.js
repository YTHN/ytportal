
 /*
*created by: EthanWang
*created at: 2017/1/10
*description:全局初始对象，类似于App
*
*
**/
require(["manager/appManager",
    "dojo/domReady!"],function(appManager) {

    ytPortal={};
    ytPortal.configData={};
    ytPortal.shareOptions={};
    ytPortal.appManager={};
    var url=root+dojoConfig.systemConfigUrl;
    _appManager=new appManager();
    ytPortal.appManager=_appManager;
    _appManager.startup();


});
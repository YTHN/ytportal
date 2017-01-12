/*
 *created by: EthanWang
 *created at: 2017/1/10
 *description:配置管理器，通过获取不同来源的配置信息，实例化统一的ConfigData对象,这样通过BeX5服务返回的数据可以在这儿进行转换
 *
 *
 **/
define(["dojo/_base/declare", "core/appEvent", "dojo/request", "core/configData",
    "esri/config"], function (declare, appEvent, request, configData, esriConfig) {
    return declare("ConfigManager", null, {
        loadConfigData: function (json) {
            if (dojoConfig.systemConfigType == "json") {
                ytProtal.configData.applicationHeaderTitle = json.ApplicationHeaderTitle;
                ytProtal.configData.applicationHeaderIcon = json.ApplicationHeaderIcon;
                ytProtal.configData.copyright = json.Copyright;
                ytProtal.configData.clientMaps = json.ClientMaps;
                ytProtal.configData.modules = json.Modules;
                ytProtal.configData.proxyUrl = json.ProxyUrl;
                ytProtal.configData.userName = json.UserName;
                ytProtal.configData.cookie = json.Cookie;
                ytProtal.configData.maxExtent = json.MaxExtent;
            }
            appEvent.removeEventListener(appEvent.CONFIG_LOAD);
        }
    });

});
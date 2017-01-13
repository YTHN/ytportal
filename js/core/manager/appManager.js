/*
 *created by: EthanWang
 *created at: 2017/1/11
 *description:程序主接口，在配置文件引导完成后，开始启动该程序
 *
 *
 **/
define([
        "core/appEvent",
        "manager/configManager",
        "manager/layoutManager",
        "manager/mapManager",
        "dojo/dom",
        "dojo/_base/declare",
        "dojo/on",
        "dojo/_base/lang",
        "dojo/dom-style",
        "dojo/dom-class",
        "dojo/dom-attr",
        "dojo/dom-construct",
        "dojo/query",
        "dojo/window",
        "dijit/_WidgetBase",
        "dojo/i18n!application/js/nls/common",
        "dojo/domReady!"
    ],
    function (AppEvent,
              configManager,
              layoutManager,
              mapManager,
              dom,
              declare,
              on,
              lang,
              domStyle,
              domClass,
              domAttr,
              domConstruct,
              query,
              win,
              _WidgetBase,sharedNls) {
        return declare([_WidgetBase], {
            sharedNls: sharedNls,
            _layoutManager:null,
            _mapManager:null,
            _configManager:null,
            constructor:function()
            {
                _configManager=new ConfigManager();
                _layoutManager=new LayoutManager();
                _mapManager=new MapManager();
            },
            startup:function()
            {
                _layoutManager.startup();
                _configManager.loadConfigData(root+dojoConfig.systemConfigUrl);//在引导配置文件之前，各个管理器必须先要初始化，以保证事件监听被加载，如mapManager是在监听配置文件被引导后触发地图加载事件
            }
        })

    }
);
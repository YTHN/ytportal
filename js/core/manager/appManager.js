/*
 *created by: EthanWang
 *created at: 2017/1/11
 *description:程序主接口，在配置文件引导完成后，开始启动该程序
 *
 *
 **/
define([
        "core/appEvent",
        "manager/layoutManager",
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
              layoutManager,
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
            constructor:function()
            {
                _layoutManager=new layoutManager();
            },
            startup:function()
            {
                _layoutManager.startup();
            }
        })

    }
);
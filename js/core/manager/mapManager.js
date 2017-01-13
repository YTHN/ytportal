/*
 *created by: EthanWang
 *created at: 2017/1/11
 *description:
 *
 *
 **/
define(["core/appEvent", "manager/domIdManager", "dojo/_base/declare", "dojo/_base/lang", "dojo/aspect",
    "widgets/viewSettings/mapWidget",
    "dojo/dom-construct", "dojo/dom-style", "dojo/dom", "dojo/on", "dojo/domReady!"
], function (appEvent, domIdManager, declare, lang, aspect, mapWidget, domConstruct, domStyle, dom, on) {
    return declare("MapManager", null, {
        _mainMapWidget: null,
        _mapWidgets:[],
        constructor: function () {

            //添加监听事件
            appEvent.addEventListener(appEvent.CONFIG_LOAD, lang.hitch(this, this.onConfigLoaded));
            appEvent.addEventListener(appEvent.MAP_WIDGET_CREATE, lang.hitch(this, this.mapCreateHandler));
        },

        onConfigLoaded: function () {
            this.createMainMap();
        },
        createMainMap: function () {
            _mainMapWidget = new MapWidget({
                id: "mainMapWidget",
                cssPath: "widgets/viewSettings/mapWidget.css",
                workmapJson: ytPortal.configData.Workmap,
                basemapJson: ytPortal.configData.Basemaps
            });
            ytPortal.configData.mapWidgetId = "mainMapWidget";
            appEvent.publishEvent(appEvent.MAP_WIDGET_CREATE, {
                mapwidget: _mainMapWidget, relate: true
            });
        },
        mapCreateHandler: function (data) {
            if (this._mapWidgets.length == 0) {
                domConstruct.place(data.mapwidget.domNode, dom.byId(domIdManager.mapPanelContainer), "first");
                this._mapWidgets.push(data.mapwidget);
                data.mapwidget.startup();
            }
        }
    });
});
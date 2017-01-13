/*
*created by: ethan wang
*created at: 2017-1-10
 */

define(["dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/dom",
    "dojo/dom-construct",
    "core/BaseWidget",
    "core/utils/layerUtils",
    "dojo/text!widgets/viewSettings/mapWidget.html",
    "esri/map",
    "esri/views/mapView",
    "core/appEvent",
    "dojo/aspect","dojox/json/query"
    ],
    function (declare,lang,array,dom,domconstruct,BaseWidget,layerUtils,template,Map,MapView,appEvent,aspect,query) {

   var widget=declare("MapWidget",[BaseWidget],{
       templateString:template,
       id:"",
       basemapsJson:null,
       workmapJson:null,
       defaultBasemapId:"",
       widgetName:"MapWidget",
       map:null,
       mapView:null,
       base_class:"mapwidget-base",
       _controlIndex: {},
       _eventHandlers: [],

       _controlIndex: {},
       _eventHandlers: [],

       _currentBaseMapID:"",

       _isExtentChangedBySelf:true,


       constructor:function (option) {
           this._controlIndex={};
           this._eventHandlers=[];
           this._isExtentChangedBySelf=true;
           this.basemapsJson=option.basemapsJson;
           this.workmapJson=option.workmapJson;
           this.defaultBasemapId=option.defaultBasemapId;
           appEvent.addEventListener(appEvent.APPEND_TOOL,lang.hitch(this, this.appendToolHandler))
       },

       startup:function () {
           this.inherited(arguments);
           this.mapBoxDom.id=uuid();
           var map=new Map();
           this.mapView=new MapView({
               container:this.mapBoxDom.id,
               map:map
           });

           //开始加载背景图层
           if(this.basemapsJson && this.basemapsJson.length>0)
           {
               var findBasemap;
               if(this.defaultBasemapId && this.defaultBasemapId!="")
               {
                   var tmpBaseMap=query("[?MapID='" + this.defaultBasemapId + "']", this.basemapsJson);
                   if(tmpBaseMap && tmpBaseMap.length>0) findBasemap=tmpBaseMap[0];
                   else findBasemap=this.basemapsJson[0];
               }
               else
               {
                   findBasemap=this.basemapsJson[0];
               }
               this.defaultBasemapId=findBasemap.DefaultBaseMap;

               array.forEach(findBasemap.MapDetails,function(oneService)
               {
                   var layer=layerUtils.buildLayer(oneService);
                   map.add(layer);
               });
           }
           //开始加载操作图层
           if(this.workmapJson && this.workmapJson.MapDetails)
           {
               array.forEach(this.workmapJson.MapDetails,function(oneService)
               {
                   var layer=layerUtils.buildLayer(oneService);
                   map.add(layer);
               });
           }

           this.map=map;


       }
   })
});
/**
 * widget基类
 */
define([
    "dojo/_base/declare",
    "core/BaseControl",
    "core/appEvent",
    "dojo/domReady!"
], function (
    declare,
    BaseControl,
    AppEvent
){
    var Widget = declare("BaseWidget",[BaseControl],
        {
            widgetName:"BaseWidget",
            label:"BaseWidget",
            moudleId:"0",
            /**
             * 部件的布局类型：top:顶部布局、left:左边布局、cover:浮动在地图显示区域的布局、bottom表示底部、right表示右侧布局
             */
            widgetLayoutType:"",
            _isOpen:false,
            constructor:function(options)
            {
                declare.safeMixin(this, options);
            },
            startup:function()
            {
                this.inherited(arguments);
                AppEvent.publishEvent(AppEvent.WIDGET_LOADED,{name:this.id,instance:this});
            },
            /**
             * Widget打开
             * @return boolean
             */
            open:function()
            {
                this.show();
                this._isOpen=true;
                AppEvent.publishEvent(AppEvent.WIDGET_OPENED,{name:this.id,instance:this});
            },
            /**
             * Widget关闭
             * @return boolean
             */
            close:function()
            {
                this.hide();
                this._isOpen=false;
                AppEvent.publishEvent(AppEvent.WIDGET_CLOSED,{name:this.id,instance:this});
            },
            /**
             * 是否需要验证用户权限
             * @return boolean
             */
            confirmUserRight:function()
            {
                return false;
            }
        });
    return Widget;
});

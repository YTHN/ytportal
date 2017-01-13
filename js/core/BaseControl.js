/**
 * control基类
 */
define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "core/appEvent",
    "dojo/domReady!"
], function (
    declare,
    domConstruct,
    _WidgetBase,
    _TemplatedMixin,
    AppEvent
){
    var Widget = declare([_WidgetBase,_TemplatedMixin
        ],
        {
            _config: null,
            _loaded:false,
            cssPathsIndex:{},
            label:"BaseControl",
            id:"",
            /**
             * 挂接的父级control的Id
             */
            hookId:"",
            /**
             * 挂接的Map控件
             */
            map:null,
            constructor:function(options)
            {
                declare.safeMixin(this, options);
                if(this.cssPath&&!this.cssPathsIndex[this.cssPath])
                {
                    domConstruct.create("link", {
                            href: require.toUrl(this.cssPath),
                            type: 'text/css',
                            rel: 'stylesheet'
                        },
                        document.getElementsByTagName('head')[0]);
                    this.cssPathsIndex[this.cssPath]=true;
                }
                this._loaded=false;
            },
            startup:function()
            {
                this._loaded = true;
            },
            loaded:function()
            {
                return this._loaded;
            },
            /**
             * 显示控件
             * @return
             */
            show:function()
            {
            },
            /**
             * 隐藏控件
             * @return boolean
             */
            hide:function()
            {
            }
        });
    return Widget;
});

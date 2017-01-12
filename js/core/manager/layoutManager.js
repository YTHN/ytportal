/*
 *created by: EthanWang
 *created at: 2017/1/11
 *description:用于页面布局初始化管理
 *
 *
 **/
define(["dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "manager/domIdManager",
    "dijit/Menubar",
    "dijit/Toolbar",
    "dijit/layout/ContentPane",
    "dijit/layout/BorderContainer",
    "dijit/layout/TabContainer",
    "dijit/layout/AccordionContainer",
    "dijit/layout/AccordionPane",
    "dojo/dom",
    "dojo/dom-style",
    "dojo/i18n!application/js/nls/common",
    "dojo/domReady!"
], function (declare, lang,on,domIdManager, MenuBar, Toolbar, ContentPane, BorderContainer, TabContainer, AccordionContainer, AccordionPane, dom,domStyle,sharedNls) {
    return declare("LayoutManager", null, {
        sharedNls: sharedNls,
        bc:null,
        tc:null,
        menubar:null,
        toolbar:null,
        lc:null,
        rc:null,
        cmc:null,
        cec:null,

        constructor:function(){},
        startup: function () {
            //初始化最开始的界面
            bc = new BorderContainer({
                gutters: true,
                liveSplitters: false,
                style: "height:100%;width:100%;padding:0px;",
                id: domIdManager.mainPageContainer
            });
            var sizett=ytProtal.configData.uiSize*2+7;
            tc=new ContentPane({
                region:"top",
                splitter:false,
                minSize:60,
                style:"height:"+sizett+"px;padding:0px;margin:0px",
                id:domIdManager.topPanelContainer
            });
            //初始化最初的MenuBar和Toolbar
            var menubar=new MenuBar({style:"height:"+ytProtal.configData.uiSize+"px",id:domIdManager.mainMenuContainer});
            var toolbar=new Toolbar({style:"height:"+ytProtal.configData.uiSize+"px",id:domIdManager.mainToolbarContainer});
            tc.addChild(menubar);
            tc.addChild(toolbar);
            lc=new TabContainer({
                region:"leading",
                splitter:true,
                style:"width:300px",
                id:domIdManager.leftPanelContainer
            });


            var cc=new ContentPane({
                region:"center",
                style: "padding:0px;",
                id:domIdManager.centerPanelContainer
            });

            var cbc = new BorderContainer({
                gutters: true,
                style: "height:100%;width:100%;padding:0px;",
                liveSplitters: false
            });

            cmc=new ContentPane({
                region:"center",

                id:domIdManager.mapPanelContainer
            });

            cec=new TabContainer({
                region:"bottom",
                splitter:true,
                style:"height:100px",
                id:domIdManager.bottomPanelContainer
            });

            cbc.addChild(cmc);
            cbc.addChild(cec);
            cc.addChild(cbc);

            var rc=new TabContainer({
                region:"trailing",
                splitter:true,
                style:"width:300px",
                id:domIdManager.rightPanelContainer
            });

            bc.addChild(tc);
            bc.addChild(lc);
            bc.addChild(cc);
            bc.addChild(rc);
            bc.placeAt(document.body);
            bc.startup();
            this.testLayout();
        },
        resetLayout:function()
        {
            var left=dijit.byId(domIdManager.leftPanelContainer);
            if(!left.hasChildren())
            {
                domStyle.set(left.domNode,"display","none");
            }
            else
            {
                domStyle.set(left.domNode,"display","block");
            }
            var right=dijit.byId(domIdManager.rightPanelContainer);
            if(!right.hasChildren())
            {
                domStyle.set(right.domNode,"display","none");
            }
            else
            {
                domStyle.set(right.domNode,"display","block");
            }
            var bottom=dijit.byId(domIdManager.bottomPanelContainer);
            if(!bottom.hasChildren())
            {
                domStyle.set(bottom.domNode,"display","none");
            }
            else
            {
                domStyle.set(bottom.domNode,"display","block");
            }

            var mainBorder=dijit.byId(domIdManager.mainPageContainer);
            mainBorder.layout();

        },
        testLayout:function()
        {
            var left=dijit.byId(domIdManager.leftPanelContainer);
            var lg=new ContentPane({
                title:sharedNls.legend,
                closable:true,
                content:"TTTTTTTTTTTTTTTTTTTTTT"
            });
            lg.on("close",this.resetLayout);

            lg.placeAt(left);
            lg.startup();
        }
    });
});
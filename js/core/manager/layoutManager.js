/*
 *created by: EthanWang
 *created at: 2017/1/11
 *description:用于页面布局初始化管理
 *
 *
 **/
define(["dojo/_base/declare",
    "manager/domIdManager",
    "dijit/Menubar",
    "dijit/Toolbar",
    "dijit/layout/ContentPane",
    "dijit/layout/BorderContainer",
    "dijit/layout/TabContainer",
    "dijit/layout/AccordionContainer",
    "dijit/layout/AccordionPane",
    "dojo/i18n!application/js/nls/common",
    "dojo/domReady!"
], function (declare, domIdManager, MenuBar, Toolbar, ContentPane, BorderContainer, TabContainer, AccordionContainer, AccordionPane, sharedNls) {
    return declare("LayoutManager", null, {
        sharedNls: sharedNls,
        constructor:function(){},
        startup: function () {
            //初始化最开始的界面
            var bc = new BorderContainer({
                gutters: true,
                liveSplitters: false,
                style: "height:100%;width:100%",
                id: domIdManager.mainPageContainer
            });
            var tc=new ContentPane({
                region:"top",
                splitter:false,
                minSize:60,
                style:"height:60px",
                id:domIdManager.topPanelContainer
            });
            var lc=new TabContainer({
                region:"leading",
                splitter:true,
                style:"width:300px",
                id:domIdManager.leftPanelContainer
            });


            var cc=new ContentPane({
                region:"center",
                id:domIdManager.centerPanelContainer
            });

            var cbc = new BorderContainer({
                gutters: true,
                liveSplitters: false
            });

            var cmc=new ContentPane({
                region:"center",
                id:domIdManager.mapPanelContainer
            });

            var cec=new TabContainer({
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
        }
    });
});
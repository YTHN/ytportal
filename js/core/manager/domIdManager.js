
 /*
*created by: EthanWang
*created at: 2017/1/11
*description:用于管理固定的DOM对象ID
*
*
**/
define(function() {
    var _instance={
        mainPageContainer:"YT_MAINPAGE",

        mainMenuContainer:"YT_MAINMENU",
        mainMenuItemBaseName:"YT_MAINMENUITEM",

        mainToolbarContainer:"YT_MAINTOOLBAR",
        mainToolbarToolBaseName:"YT_MAINTOOLBARITEM",

        leftPanelContainer:"YT_LEFT_CONTAINER",
        leftTabBaseName:"YT_LEFT_TAB",
        leftSiderButton:"YT_SIDER_LEFT",

        rightPanelContainer:"YT_RIGHT_CONTAINER",
        rightTabBaseName:"YTL_RIGHT_TAB",
        rightSiderButton:"YT_SIDER_RIGHT",

        bottomPanelContainer:"YT_BOTTOM_CONTAINER",
        bottomTabBaseName:"YTL_BOTTOM_TAB",
        bottomSiderButton:"YT_SIDER_BOTTOM"
    };
    return _instance;
});
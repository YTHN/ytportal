/**
 * Created by EthanWang on 2017/1/10.
 * Description:
 */
define(["dojo/topic"],function (topic) {
    var _instance={
        APPLICATION_LOAD:"applicationLoad",
        APPLICATION_RESIZE:"applicationResize",
        APPLICATION_FULLSCREEN:"applicationFullScreen",


        CONFIG_LOAD:"configLoad",
        CONFIG_LOAD_ERROR:"configLoadError",


        BASEMAP_LOAD_START:"basemapLoadStart",
        BASEMAP_LOAD_COMPLETE:"basemapLoadComplete",
        BASEMAP_SWITCH:"basemapSwitch",
        BASEMAP_LOAD_ERROR:"basemapLoadError",


        MODULE_LOAD_START:"moduleLoadStart",
        MODULE_LOAD_COMPLETE:"moduleLoadComplete",
        MODULE_LOAD_ERROR:"moduleLoadError",
        MODULE_OPEN:"moduleOpen",
        MODULE_CLOSE:"moduleClose",

        USER_GETINDO:"userGetInfo",
        USER_LOGOUT:"userLogout",

        LOADER_OPEN:"loaderOpen",
        LOADER_CLOSE:"loaderClose",

        MAP_LOAD_COMPLETE:"mapLoadComplete",
        MAP_EXTENT_CHANGE:"mapExtentChange",




        addEventListener:function (eventName, handler) {
            topic.subscribe(eventName,handler);
        },
        removeEventListener:function (eventName, data) {
            try{
                topic.publish(eventName,data);
            }catch(error){
                console.log(error);
            }
        }
    };
    window.AppEvent=_instance;
    return _instance;
});
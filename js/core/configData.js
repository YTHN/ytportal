
 /*
*created by: EthanWang
*created at: 2017/1/10
*description:用于保存系统初始化配置参数，在读取或者从Webservice中获得json配置后对该对象初始化，这主要是为了
* 避免因为配置数据来源不同造成格式或者命名不同导致的问题，因此，在其他模块中读取配置参数统一用该对象
*
*
**/
define(function() {

    var _instance={
        applicationHeaderTitle:"",//系统名称
        applicationHeaderIcon:"",//系统图标
        copyright:"",//版权信息
        clientMaps:null,//系统地图集
        basemap:null,//系统使用的底图
        modules:null,//准备调用的模块集合
        proxyUrl:"",
        userName:"",
        cookie:"",
        maxExtent:null ,//该用户允许使用的最大范围
    };
    return _instance;
});
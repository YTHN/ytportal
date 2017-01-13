
 /*
*created by: EthanWang
*created at: 2017/1/13
*description:
*
*
**/
define(["esri/layers/MapImageLayer","dojo/_base/array"
],function(MapImageLayer,array) {
    return {
        buildLayer:function(serviceInfo)
        {
            //serviceInfo是ConfigData中关于图层定义的参数集合
            var serviceType=serviceInfo.ServiceType;
            if((!serviceType)|| serviceType=="")
            {
                serviceType="MapImageLayer";
            }
            if(serviceType=="MapImageLayer")
            {
                var layer=new MapImageLayer({
                    url:serviceInfo.Url,
                    title:serviceInfo.Name
                });
                return layer;
            }
        }
    }
});
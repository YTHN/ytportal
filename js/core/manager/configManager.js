/*
 *created by: EthanWang
 *created at: 2017/1/10
 *description:配置管理器，通过获取不同来源的配置信息，实例化统一的ConfigData对象,这样通过BeX5服务返回的数据可以在这儿进行转换,关于ConfigData的结构参照defaultconfig.json
 *
 *
 **/
define(["dojo/_base/declare",
    "dojo/store/Memory",
    "core/appEvent",
    "dojo/_base/array",
    "esri/request",
    "core/configData",
    "esri/config", "dojox/json/query", "dojo/json"], function (declare, memory, appEvent, array, request, configData, esriConfig, query, json) {
    return declare("ConfigManager", null, {
        loadConfigData: function (url) {
            request(url, {handleAs: "json"}).then(
                function (response) {
                    var jsonObj=response.data;
                if (dojoConfig.systemConfigType == "json") {
                    var _tmpJson = {};
                    _tmpJson.SystemInfo = jsonObj.SystemInfo;


                    //先获取Basemap类型的数据
                    var queryJson = query("[?MapType='Basemap'][/DisplayOrder]", jsonObj.SystemMaps);
                    if (queryJson) {
                        array.forEach(queryJson, function (oneItem) {
                            var mapId = oneItem.MapID;
                            var mapExtInfo = query("[?MapID='" + mapId + "']", jsonObj.Maps);
                            if (mapExtInfo && mapExtInfo.length == 1) {
                                oneItem.Name = mapExtInfo[0].Name;
                                oneItem.Description = mapExtInfo[0].Description;
                                oneItem.MinScale = mapExtInfo[0].MinScale;
                                oneItem.MaxScale = mapExtInfo[0].MaxScale;
                                oneItem.MinX = mapExtInfo[0].MinX;
                                oneItem.MinY = mapExtInfo[0].MinY;
                                oneItem.MaxX = mapExtInfo[0].MaxX;
                                oneItem.MaxY = mapExtInfo[0].MaxY;
                                oneItem.CenterX = mapExtInfo[0].CenterX;
                                oneItem.CenterY = mapExtInfo[0].CenterY;
                            }
                            var mapDetInfo = query("[?MapID='" + mapId + "'][/DisplayOrder]", jsonObj.MapDetails);
                            if (mapDetInfo && mapDetInfo.length > 0) {
                                oneItem.MapDetails = mapDetInfo;
                                array.forEach(mapDetInfo, function (oneDetail) {
                                    var serviceId = oneDetail.ServiceID;
                                    var oneService = query("[?ServiceID='" + serviceId + "']", jsonObj.MapServices);
                                    if (oneService && oneService.length == 1) {
                                        oneDetail.Name = oneService[0].Name;
                                        oneDetail.Url = oneService[0].Url;
                                        oneDetail.Description = oneService[0].Description;
                                        oneDetail.Coordsys = oneService[0].Coordsys;
                                        oneDetail.MinScale = oneService[0].MinScale;
                                        oneDetail.MaxScale = oneService[0].MaxScale;
                                        oneDetail.ServiceType = oneService[0].ServiceType;
                                        oneDetail.GeometryUrl = oneService[0].GeometryUrl;
                                        oneDetail.Unit = oneService[0].Unit;
                                        oneDetail.RegisterDate = oneService[0].RegisterDate;
                                        oneDetail.IsUsing = oneService[0].IsUsing;
                                    }
                                });
                            }
                        });
                    }
                    ytPortal.configData.Basemaps = queryJson;
                    ytPortal.configData.SystemInfo = jsonObj.SystemInfo;
                    ytPortal.configData.UserInfo = jsonObj.UserInfo;
                    //开始重新组织作业图层
                    if (jsonObj.SystemInfo.DefaultWorkMap) {
                        var tmpMap = query("[?MapID='" + jsonObj.SystemInfo.DefaultWorkMap + "'][/DisplayOrder]", jsonObj.SystemMaps);
                        queryJson = tmpMap ? tmpMap[0] : null;
                    }
                    else {
                        var tmpMap = query("[?MapType !='Basemap']", jsonObj.Maps);
                        queryJson = tmpMap ? tmpMap[0] : null;
                    }
                    if (queryJson) {

                        var mapId = queryJson.MapID;
                        var oneItem = {};
                        var mapExtInfo = query("[?MapID='" + mapId + "']", jsonObj.Maps);
                        if (mapExtInfo && mapExtInfo.length == 1) {
                            oneItem.Name = mapExtInfo[0].Name;
                            oneItem.Description = mapExtInfo[0].Description;
                            oneItem.MinScale = mapExtInfo[0].MinScale;
                            oneItem.MaxScale = mapExtInfo[0].MaxScale;
                            oneItem.MinX = mapExtInfo[0].MinX;
                            oneItem.MinY = mapExtInfo[0].MinY;
                            oneItem.MaxX = mapExtInfo[0].MaxX;
                            oneItem.MaxY = mapExtInfo[0].MaxY;
                            oneItem.CenterX = mapExtInfo[0].CenterX;
                            oneItem.CenterY = mapExtInfo[0].CenterY;
                        }
                        var mapDetInfo = query("[?MapID='" + mapId + "'][/DisplayOrder]", jsonObj.MapDetails);
                        if (mapDetInfo && mapDetInfo.length > 0) {
                            oneItem.MapDetails = mapDetInfo;
                            array.forEach(mapDetInfo, function (oneDetail) {
                                var serviceId = oneDetail.ServiceID;
                                var oneService = query("[?ServiceID='" + serviceId + "']", jsonObj.MapServices);
                                if (oneService && oneService.length == 1) {
                                    oneDetail.Name = oneService[0].Name;
                                    oneDetail.Url = oneService[0].Url;
                                    oneDetail.Description = oneService[0].Description;
                                    oneDetail.Coordsys = oneService[0].Coordsys;
                                    oneDetail.MinScale = oneService[0].MinScale;
                                    oneDetail.MaxScale = oneService[0].MaxScale;
                                    oneDetail.ServiceType = oneService[0].ServiceType;
                                    oneDetail.GeometryUrl = oneService[0].GeometryUrl;
                                    oneDetail.Unit = oneService[0].Unit;
                                    oneDetail.RegisterDate = oneService[0].RegisterDate;
                                    oneDetail.IsUsing = oneService[0].IsUsing;
                                }
                            });
                        }
                        ytPortal.configData.Workmap = oneItem;

                    }
                    console.log(ytPortal.configData);
                    appEvent.publishEvent(appEvent.CONFIG_LOAD);
                }

            },function(err){
                    alert("Load Config File Error:"+err);});
        }


    });

});
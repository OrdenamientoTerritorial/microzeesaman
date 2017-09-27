var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_UNID_ZEE_SAMAN_030 = new ol.format.GeoJSON();
var features_UNID_ZEE_SAMAN_030 = format_UNID_ZEE_SAMAN_030.readFeatures(json_UNID_ZEE_SAMAN_030, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNID_ZEE_SAMAN_030 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UNID_ZEE_SAMAN_030.addFeatures(features_UNID_ZEE_SAMAN_030);var lyr_UNID_ZEE_SAMAN_030 = new ol.layer.Vector({
                source:jsonSource_UNID_ZEE_SAMAN_030, 
                style: style_UNID_ZEE_SAMAN_030,
                title: 'UNID_ZEE_SAMAN_03<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_0.png" /> 1<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_1.png" /> 2<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_2.png" /> 3<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_3.png" /> 4<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_4.png" /> 5<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_5.png" /> 6<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_6.png" /> 7<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_7.png" /> 8<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_8.png" /> 9<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_9.png" /> 10<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_10.png" /> 11<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_11.png" /> 12<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_12.png" /> 13<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_13.png" /> 14<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_14.png" /> 15<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_15.png" /> 16<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_16.png" /> 17<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_17.png" /> 18<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_18.png" /> 19<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_19.png" /> 20<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_20.png" /> 21<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_21.png" /> 22<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_22.png" /> 23<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_23.png" /> 24<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_24.png" /> 25<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_25.png" /> 26<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_26.png" /> 27<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_27.png" /> 28<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_28.png" /> 29<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_29.png" /> 30<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_30.png" /> 31<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_31.png" /> 32<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_32.png" /> 33<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_33.png" /> 34<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_34.png" /> 35<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_35.png" /> 36<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_36.png" /> 37<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_37.png" /> 38<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_38.png" /> 39<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_39.png" /> 40<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_40.png" /> 41<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_41.png" /> 42<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_42.png" /> 43<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_43.png" /> 44<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_44.png" /> 45<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_45.png" /> 46<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_46.png" /> 47<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_47.png" /> 48<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_48.png" /> 49<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_49.png" /> 50<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_50.png" /> 51<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_51.png" /> 52<br />\
        <img src="styles/legend/UNID_ZEE_SAMAN_030_52.png" /> 53<br />'
            });

lyr_UNID_ZEE_SAMAN_030.setVisible(true);
var layersList = [baseLayer,lyr_UNID_ZEE_SAMAN_030];
lyr_UNID_ZEE_SAMAN_030.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'N_ZEE': 'N_ZEE', 'GRAN_ZONAS': 'GRAN_ZONAS', 'UNID_ZEE': 'UNID_ZEE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Area_ha': 'Area_ha', 'Porcentaje': 'Porcentaje', });
lyr_UNID_ZEE_SAMAN_030.set('fieldImages', {'OBJECTID': 'Hidden', 'N_ZEE': 'TextEdit', 'GRAN_ZONAS': 'TextEdit', 'UNID_ZEE': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Area_ha': 'TextEdit', 'Porcentaje': 'TextEdit', });
lyr_UNID_ZEE_SAMAN_030.set('fieldLabels', {'N_ZEE': 'inline label', 'GRAN_ZONAS': 'inline label', 'UNID_ZEE': 'inline label', 'Area_ha': 'inline label', 'Porcentaje': 'inline label', });
lyr_UNID_ZEE_SAMAN_030.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
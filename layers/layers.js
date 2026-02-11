var wms_layers = [];

var lyr_ORTOFOTO_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ags.cuzk.gov.cz/arcgis1/services/ORTOFOTO/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'ORTOFOTO',
                            popuplayertitle: 'ORTOFOTO',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ORTOFOTO_0, 0]);
var format_RAK_1 = new ol.format.GeoJSON();
var features_RAK_1 = format_RAK_1.readFeatures(json_RAK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAK_1.addFeatures(features_RAK_1);
var lyr_RAK_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAK_1, 
                style: style_RAK_1,
                popuplayertitle: 'RAK',
                interactive: true,
    title: 'RAK<br />\
    <img src="styles/legend/RAK_1_0.png" /> 70,1 - 80<br />\
    <img src="styles/legend/RAK_1_1.png" /> 80 - 88,6<br />\
    <img src="styles/legend/RAK_1_2.png" /> 88,6 - 97,1<br />\
    <img src="styles/legend/RAK_1_3.png" /> 97,1 - 107,3<br />\
    <img src="styles/legend/RAK_1_4.png" /> 107,3 - 126,6<br />' });
var format_POH_2 = new ol.format.GeoJSON();
var features_POH_2 = format_POH_2.readFeatures(json_POH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POH_2.addFeatures(features_POH_2);
var lyr_POH_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POH_2, 
                style: style_POH_2,
                popuplayertitle: 'POH',
                interactive: true,
    title: 'POH<br />\
    <img src="styles/legend/POH_2_0.png" /> 70,1 - 80<br />\
    <img src="styles/legend/POH_2_1.png" /> 80 - 88,6<br />\
    <img src="styles/legend/POH_2_2.png" /> 88,6 - 97,1<br />\
    <img src="styles/legend/POH_2_3.png" /> 97,1 - 107,3<br />\
    <img src="styles/legend/POH_2_4.png" /> 107,3 - 126,6<br />' });
var format_OL_3 = new ol.format.GeoJSON();
var features_OL_3 = format_OL_3.readFeatures(json_OL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OL_3.addFeatures(features_OL_3);
var lyr_OL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OL_3, 
                style: style_OL_3,
                popuplayertitle: 'OL',
                interactive: true,
    title: 'OL<br />\
    <img src="styles/legend/OL_3_0.png" /> 70,1 - 80<br />\
    <img src="styles/legend/OL_3_1.png" /> 80 - 88,6<br />\
    <img src="styles/legend/OL_3_2.png" /> 88,6 - 97,1<br />\
    <img src="styles/legend/OL_3_3.png" /> 97,1 - 107,3<br />\
    <img src="styles/legend/OL_3_4.png" /> 107,3 - 126,6<br />' });
var format_JAM_4 = new ol.format.GeoJSON();
var features_JAM_4 = format_JAM_4.readFeatures(json_JAM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAM_4.addFeatures(features_JAM_4);
var lyr_JAM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAM_4, 
                style: style_JAM_4,
                popuplayertitle: 'JAM',
                interactive: true,
    title: 'JAM<br />\
    <img src="styles/legend/JAM_4_0.png" /> 70,1 - 80<br />\
    <img src="styles/legend/JAM_4_1.png" /> 80 - 88,6<br />\
    <img src="styles/legend/JAM_4_2.png" /> 88,6 - 97,1<br />\
    <img src="styles/legend/JAM_4_3.png" /> 97,1 - 107,3<br />\
    <img src="styles/legend/JAM_4_4.png" /> 107,3 - 126,6<br />' });

lyr_ORTOFOTO_0.setVisible(true);lyr_RAK_1.setVisible(true);lyr_POH_2.setVisible(true);lyr_OL_3.setVisible(true);lyr_JAM_4.setVisible(true);
var layersList = [lyr_ORTOFOTO_0,lyr_RAK_1,lyr_POH_2,lyr_OL_3,lyr_JAM_4];
lyr_RAK_1.set('fieldAliases', {'RX': 'RX', 'layer': 'layer', 'path': 'path', });
lyr_POH_2.set('fieldAliases', {'RX': 'RX', 'layer': 'layer', 'path': 'path', });
lyr_OL_3.set('fieldAliases', {'RX': 'RX', 'layer': 'layer', 'path': 'path', });
lyr_JAM_4.set('fieldAliases', {'RX': 'RX', 'layer': 'layer', 'path': 'path', });
lyr_RAK_1.set('fieldImages', {'RX': '', 'layer': '', 'path': '', });
lyr_POH_2.set('fieldImages', {'RX': '', 'layer': '', 'path': '', });
lyr_OL_3.set('fieldImages', {'RX': '', 'layer': '', 'path': '', });
lyr_JAM_4.set('fieldImages', {'RX': '', 'layer': '', 'path': '', });
lyr_RAK_1.set('fieldLabels', {'RX': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'hidden field', });
lyr_POH_2.set('fieldLabels', {'RX': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'hidden field', });
lyr_OL_3.set('fieldLabels', {'RX': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'hidden field', });
lyr_JAM_4.set('fieldLabels', {'RX': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'hidden field', });
lyr_JAM_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
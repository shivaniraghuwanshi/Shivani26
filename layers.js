var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_waterbodies_1 = new ol.format.GeoJSON();
var features_waterbodies_1 = format_waterbodies_1.readFeatures(json_waterbodies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterbodies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterbodies_1.addFeatures(features_waterbodies_1);
var lyr_waterbodies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterbodies_1, 
                style: style_waterbodies_1,
                popuplayertitle: "water bodies",
                interactive: true,
                title: '<img src="styles/legend/waterbodies_1.png" /> water bodies'
            });
var format_02_Nalasoparaprecient_2 = new ol.format.GeoJSON();
var features_02_Nalasoparaprecient_2 = format_02_Nalasoparaprecient_2.readFeatures(json_02_Nalasoparaprecient_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02_Nalasoparaprecient_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_Nalasoparaprecient_2.addFeatures(features_02_Nalasoparaprecient_2);
var lyr_02_Nalasoparaprecient_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_Nalasoparaprecient_2, 
                style: style_02_Nalasoparaprecient_2,
                popuplayertitle: "02_Nalasopara precient",
                interactive: true,
                title: '<img src="styles/legend/02_Nalasoparaprecient_2.png" /> 02_Nalasopara precient'
            });
var format_roadsnallasopasa_3 = new ol.format.GeoJSON();
var features_roadsnallasopasa_3 = format_roadsnallasopasa_3.readFeatures(json_roadsnallasopasa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadsnallasopasa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadsnallasopasa_3.addFeatures(features_roadsnallasopasa_3);
var lyr_roadsnallasopasa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roadsnallasopasa_3, 
                style: style_roadsnallasopasa_3,
                popuplayertitle: "roads nallasopasa",
                interactive: true,
                title: '<img src="styles/legend/roadsnallasopasa_3.png" /> roads nallasopasa'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_waterbodies_1.setVisible(true);lyr_02_Nalasoparaprecient_2.setVisible(true);lyr_roadsnallasopasa_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_waterbodies_1,lyr_02_Nalasoparaprecient_2,lyr_roadsnallasopasa_3];
lyr_waterbodies_1.set('fieldAliases', {'id': 'id', 'lakes_1': 'lakes_1', });
lyr_02_Nalasoparaprecient_2.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'area_in_me': 'area_in_me', 'confidence': 'confidence', 'full_plus_': 'full_plus_', });
lyr_roadsnallasopasa_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'content': 'content', 'maxweight_': 'maxweight_', 'lanes': 'lanes', 'waterway': 'waterway', 'embankment': 'embankment', 'horse': 'horse', 'bicycle': 'bicycle', 'motor_vehi': 'motor_vehi', 'man_made': 'man_made', 'tracktype': 'tracktype', 'public_tra': 'public_tra', 'foot': 'foot', 'tracks': 'tracks', 'junction': 'junction', 'lit': 'lit', 'width': 'width', 'smoothness': 'smoothness', 'maxspeed_t': 'maxspeed_t', 'lane_marki': 'lane_marki', 'surface': 'surface', 'access': 'access', 'railway_si': 'railway_si', 'owner': 'owner', 'name_etymo': 'name_etymo', 'ref': 'ref', 'highway': 'highway', 'bridge_str': 'bridge_str', 'bridge_ref': 'bridge_ref', 'level': 'level', 'date_quadr': 'date_quadr', 'service': 'service', 'wikipedia': 'wikipedia', 'cutting': 'cutting', 'voltage_19': 'voltage_19', 'start_date': 'start_date', 'historic_v': 'historic_v', 'historic_f': 'historic_f', 'frequency_': 'frequency_', 'electrifie': 'electrifie', 'date_elect': 'date_elect', 'date_ele_1': 'date_ele_1', 'date_doubl': 'date_doubl', 'IR_zone': 'IR_zone', 'operator': 'operator', 'oneway': 'oneway', 'tunnel_nam': 'tunnel_nam', 'tunnel': 'tunnel', 'network': 'network', 'bridge_nam': 'bridge_nam', 'railway_et': 'railway_et', 'railway_pr': 'railway_pr', 'name_kn': 'name_kn', 'layer': 'layer', 'bridge': 'bridge', 'natural': 'natural', 'name_ur': 'name_ur', 'maxspeed': 'maxspeed', 'alt_name_u': 'alt_name_u', 'alt_name': 'alt_name', 'railway_tr': 'railway_tr', 'name': 'name', 'voltage': 'voltage', 'usage': 'usage', 'railway': 'railway', 'passenger_': 'passenger_', 'gauge': 'gauge', 'frequency': 'frequency', 'electrif_1': 'electrif_1', });
lyr_waterbodies_1.set('fieldImages', {'id': 'TextEdit', 'lakes_1': 'TextEdit', });
lyr_02_Nalasoparaprecient_2.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'area_in_me': 'TextEdit', 'confidence': 'TextEdit', 'full_plus_': 'TextEdit', });
lyr_roadsnallasopasa_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'content': '', 'maxweight_': '', 'lanes': '', 'waterway': '', 'embankment': '', 'horse': '', 'bicycle': '', 'motor_vehi': '', 'man_made': '', 'tracktype': '', 'public_tra': '', 'foot': '', 'tracks': '', 'junction': '', 'lit': '', 'width': '', 'smoothness': '', 'maxspeed_t': '', 'lane_marki': '', 'surface': '', 'access': '', 'railway_si': '', 'owner': '', 'name_etymo': '', 'ref': '', 'highway': '', 'bridge_str': '', 'bridge_ref': '', 'level': '', 'date_quadr': '', 'service': '', 'wikipedia': '', 'cutting': '', 'voltage_19': '', 'start_date': '', 'historic_v': '', 'historic_f': '', 'frequency_': '', 'electrifie': '', 'date_elect': '', 'date_ele_1': '', 'date_doubl': '', 'IR_zone': '', 'operator': '', 'oneway': '', 'tunnel_nam': '', 'tunnel': '', 'network': '', 'bridge_nam': '', 'railway_et': '', 'railway_pr': '', 'name_kn': '', 'layer': '', 'bridge': '', 'natural': '', 'name_ur': '', 'maxspeed': '', 'alt_name_u': '', 'alt_name': '', 'railway_tr': '', 'name': '', 'voltage': '', 'usage': '', 'railway': '', 'passenger_': '', 'gauge': '', 'frequency': '', 'electrif_1': '', });
lyr_waterbodies_1.set('fieldLabels', {'id': 'no label', 'lakes_1': 'no label', });
lyr_02_Nalasoparaprecient_2.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'area_in_me': 'no label', 'confidence': 'no label', 'full_plus_': 'no label', });
lyr_roadsnallasopasa_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'content': 'no label', 'maxweight_': 'no label', 'lanes': 'inline label - always visible', 'waterway': 'header label - always visible', 'embankment': 'no label', 'horse': 'no label', 'bicycle': 'no label', 'motor_vehi': 'no label', 'man_made': 'no label', 'tracktype': 'no label', 'public_tra': 'no label', 'foot': 'no label', 'tracks': 'no label', 'junction': 'no label', 'lit': 'no label', 'width': 'no label', 'smoothness': 'no label', 'maxspeed_t': 'no label', 'lane_marki': 'no label', 'surface': 'no label', 'access': 'no label', 'railway_si': 'no label', 'owner': 'no label', 'name_etymo': 'no label', 'ref': 'no label', 'highway': 'no label', 'bridge_str': 'no label', 'bridge_ref': 'no label', 'level': 'no label', 'date_quadr': 'no label', 'service': 'no label', 'wikipedia': 'no label', 'cutting': 'no label', 'voltage_19': 'no label', 'start_date': 'no label', 'historic_v': 'no label', 'historic_f': 'no label', 'frequency_': 'no label', 'electrifie': 'no label', 'date_elect': 'no label', 'date_ele_1': 'no label', 'date_doubl': 'no label', 'IR_zone': 'no label', 'operator': 'no label', 'oneway': 'no label', 'tunnel_nam': 'no label', 'tunnel': 'no label', 'network': 'no label', 'bridge_nam': 'no label', 'railway_et': 'no label', 'railway_pr': 'no label', 'name_kn': 'no label', 'layer': 'no label', 'bridge': 'no label', 'natural': 'no label', 'name_ur': 'no label', 'maxspeed': 'no label', 'alt_name_u': 'no label', 'alt_name': 'no label', 'railway_tr': 'no label', 'name': 'no label', 'voltage': 'no label', 'usage': 'no label', 'railway': 'no label', 'passenger_': 'no label', 'gauge': 'no label', 'frequency': 'no label', 'electrif_1': 'no label', });
lyr_roadsnallasopasa_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
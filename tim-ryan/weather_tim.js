var sat_View = 'mapbox://styles/mapbox/satellite-v9';
var street_View = 'mapbox://styles/mapbox/streets-v9';


mapboxgl.accessToken = 'pk.eyJ1IjoidGltcnlhbjEzMyIsImEiOiJjanN6MnJ0a3cwMWQyNGFsZTZwdWhzaXkzIn0.85NLdpDSOWhF_CPb_SLRBw';
var map = new mapboxgl.Map({
    container: 'map',
    style: street_View,
    center: [-98.4951,  29.4246],
    zoom: 10
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
});

map.addControl(geocoder);

// After the map style has loaded on the page, add a source layer and default
// styling for a single point.
map.on('load', function() {
    map.addSource('single-point', {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": []
        }
    });

    map.addLayer({
        "id": "point",
        "source": "single-point",
        "type": "circle",
        "paint": {
            "circle-radius": 10,
            "circle-color": "#007cbf"
        }
    });

// Listen for the `result` event from the MapboxGeocoder that is triggered when a user
// makes a selection and add a symbol that matches the result.
    geocoder.on('result', function(ev) {
        map.getSource('single-point').setData(ev.result.geometry);
    });
});

/*---Button that toggles between satalite view and street view--------------------------------------------------------------------------------------- */

var toggle_Base_Map = document.getElementById("toggle_Base_Map");

$(toggle_Base_Map).click(

    function() {
        console.log($(toggle_Base_Map))
    }
);


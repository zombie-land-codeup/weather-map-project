mapboxgl.accessToken = 'pk.eyJ1IjoidGltcnlhbjEzMyIsImEiOiJjanN6MnZuYmEwMWJlM3lrM2xzY3V5ajJnIn0.GQhMyKKfckVJzEPKXUAgVA\n';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
    center: [-77.38, 39], // starting position
    zoom: 1 // starting zoom
});





/*-Marker 1----------------------------------------------------------------------------------------- */

var marker_1_lat = 0;
var marker_2_lat = 0;


var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([0, 0])
    .addTo(map);

function onDragEnd() {

    var lngLat = marker.getLngLat();
    var marker_1_lng = lngLat.lng;
    var marker_1_lat = lngLat.lat;
    coordinates.style.display = 'block';
    coordinates.innerHTML = lngLat.lng + '<br />' + lngLat.lat;

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4222d0ef14e7dd83fc72961ea18ddc06/" + marker_1_lat+ "," + marker_1_lng, {
    }).done(function(weather) {
        console.log(weather.daily.data[0]);
    });

}

marker.on('dragend', onDragEnd);


/*--dark sky API ---------------------------------------------------------------------------------------- */





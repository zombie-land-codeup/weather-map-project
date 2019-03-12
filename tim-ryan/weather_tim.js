
/*--Creates a Map---------------------------------------------------------------------------------------- */
mapboxgl.accessToken = 'pk.eyJ1IjoidGltcnlhbjEzMyIsImEiOiJjanN6MnJ0a3cwMWQyNGFsZTZwdWhzaXkzIn0.85NLdpDSOWhF_CPb_SLRBw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-98.4951, 29.4246], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

/*--Console log the lat and lon of the mouse movement---------------------------------------------------------------------------------------- */
// map.on('mousemove', e => {
//     console.log("move", e.lngLat);
// });

/*--Console log the lat and long of a mouse click---------------------------------------------------------------------------------------- */
// map.on('click', e => {
//     console.log("click", e.lngLat);
//     const placemarker = e.lngLat.toArray();
//     console.log(placemarker);
// });

/*--Create a popup on the map---------------------------------------------------------------------------------------- */
// const popup = new mapboxgl.Popup();
// popup.setLngLat([-74.64488220213762, 40.1702115636993])
//     .setHTML(`<h1> Mapbox </h1>`)
//     .addTo(map);

/*--Create a popup on the map at each mouse click---------------------------------------------------------------------------------------- */
// map.on('click', e => {
//     const popup = new mapboxgl.Popup();
//     const placemarker = e.lngLat.toArray();
//     console.log(placemarker);
//     popup.setLngLat(placemarker)
//         .setHTML(`<h1> Mapbox </h1>`)
//         .addTo(map);
// });


var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
});

var popup = new mapboxgl.Popup({ offset: 100 })
    .setText('Construction on the Washington Monument began in 1848.');

map.addControl(geocoder);

    geocoder.on('result', function(ev) {
        new mapboxgl.Marker()
            .setLngLat(ev.result.center)
            .setPopup(popup)
            .addTo(map);
            console.log(ev.result.center)
    });

$('#display_customers').click(
    function() {
    }
);

$.get( "package.json", {
}).done(function( data ) {
    console.log(data.customers[0].name);
});

mapboxgl.accessToken = key;
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
    center: [-77.38, 39], // starting position
    zoom: 1 // starting zoom
});

function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[3].place_name;
        });
}


function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

geocode("San Antonio", key).then(function(data){
    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(data)
        .addTo(map);
        var start_loc = data;
        start_loc = data.join(',');

    $( document ).ready(function() {
        console.log(start_loc);
    });

$( document ).ready(function() {
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4222d0ef14e7dd83fc72961ea18ddc06/" + "29.4241, -98.4936", {
    }).done(function(weather) {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = lngLat.lng + '<br />' + lngLat.lat;

        /*--variable assignment---------------------------------------------------------------------------------------- */
        var day_1_Temp_High = weather.daily.data[0].temperatureHigh + '°';
        var day_1_Temp_Low  = weather.daily.data[0].temperatureLow + '°';
        var day_1_Icon = weather.daily.data[0].icon;
        var day_1_Summary = weather.daily.data[0].summary;
        var day_1_Wind = weather.daily.data[0].windSpeed;
        var day_1_Pressure = weather.daily.data[0].pressure;

        var day_2_Temp_High = weather.daily.data[1].temperatureHigh + '°';
        var day_2_Temp_Low  = weather.daily.data[1].temperatureLow + '°';
        var day_2_Icon = weather.daily.data[1].icon;
        var day_2_Summary = weather.daily.data[1].summary;
        var day_2_Wind = weather.daily.data[1].windSpeed;
        var day_2_Pressure = weather.daily.data[1].pressure;

        var day_3_Temp_High = weather.daily.data[2].temperatureHigh + '°';
        var day_3_Temp_Low  = weather.daily.data[2].temperatureLow + '°';
        var day_3_Icon = weather.daily.data[2].icon;
        var day_3_Summary = weather.daily.data[2].summary;
        var day_3_Wind = weather.daily.data[2].windSpeed;
        var day_3_Pressure = weather.daily.data[2].pressure;

        /*--console log test for variables---------------------------------------------------------------------------------------- */

        // console.log(weather.daily.data);
        //
        // console.log(day_1_Temp_High);
        // console.log(day_1_Temp_Low);
        // console.log(day_1_Icon);
        // console.log(day_1_Summary);
        // console.log(day_1_Wind);
        // console.log(day_1_Pressure);
        //
        // console.log(day_2_Temp_High);
        // console.log(day_2_Temp_Low);
        // console.log(day_2_Icon);
        // console.log(day_2_Summary);
        // console.log(day_2_Wind);
        // console.log(day_2_Pressure);
        //
        // console.log(day_3_Temp_High);
        // console.log(day_3_Temp_Low);
        // console.log(day_3_Icon);
        // console.log(day_3_Summary);
        // console.log(day_3_Wind);
        // console.log(day_3_Pressure);
    });
});


function onDragEnd() {

    var lngLat = marker.getLngLat();
    var marker_1_lng = lngLat.lng;
    var marker_1_lat = lngLat.lat;
    coordinates.style.display = 'block';
    coordinates.innerHTML = lngLat.lng + '<br />' + lngLat.lat;

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4222d0ef14e7dd83fc72961ea18ddc06/" + marker_1_lat+ "," + marker_1_lng, {
    }).done(function(weather) {

        /*--variable assignment---------------------------------------------------------------------------------------- */
        day_1_Temp_High =  weather.daily.data[0].temperatureHigh + '°';
        day_1_Temp_Low  = weather.daily.data[0].temperatureLow + '°';
        day_1_Icon = weather.daily.data[0].icon;
        day_1_Summary = weather.daily.data[0].summary;
        day_1_Wind = weather.daily.data[0].windSpeed;
        day_1_Pressure = weather.daily.data[0].pressure;

        day_2_Temp_High = weather.daily.data[1].temperatureHigh + '°';
        day_2_Temp_Low  = weather.daily.data[1].temperatureLow + '°';
        day_2_Icon = weather.daily.data[1].icon;
        day_2_Summary = weather.daily.data[1].summary;
        day_2_Wind = weather.daily.data[1].windSpeed;
        day_2_Pressure = weather.daily.data[1].pressure;

        day_3_Temp_High = weather.daily.data[2].temperatureHigh + '°';
        day_3_Temp_Low  = weather.daily.data[2].temperatureLow + '°';
        day_3_Icon = weather.daily.data[2].icon;
        day_3_Summary = weather.daily.data[2].summary;
        day_3_Wind = weather.daily.data[2].windSpeed;
        day_3_Pressure = weather.daily.data[2].pressure;


        /*--console log test for variables---------------------------------------------------------------------------------------- */

        // console.log(weather.daily.data);
        //
        // console.log(day_1_Temp_High);
        // console.log(day_1_Temp_Low);
        // console.log(day_1_Icon);
        // console.log(day_1_Summary);
        // console.log(day_1_Wind);
        // console.log(day_1_Pressure);
        //
        // console.log(day_2_Temp_High);
        // console.log(day_2_Temp_Low);
        // console.log(day_2_Icon);
        // console.log(day_2_Summary);
        // console.log(day_2_Wind);
        // console.log(day_2_Pressure);
        //
        // console.log(day_3_Temp_High);
        // console.log(day_3_Temp_Low);
        // console.log(day_3_Icon);
        // console.log(day_3_Summary);
        // console.log(day_3_Wind);
        // console.log(day_3_Pressure);
    });


}

marker.on('dragend', onDragEnd);

});








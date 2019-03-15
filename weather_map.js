$(function () {
    "use strict";

    mapboxgl.accessToken = mkey;

    function makeWeatherChange(data){// first box





        $("#temperature").html("temperature: " + data.daily.data[0].apparentTemperatureHigh);
        $("#pressure").html("pressure: " + data.daily.data[0].pressure);
        $("#windSpeed").html("windSpeed: " + data.daily.data[0].windSpeed);
        $("#humidity").html("humidity: " + data.daily.data[0].humidity);
        $("#summary").html(data.daily.data[0].summary);


// icon0
        var icon0 = (data.daily.data[0].icon);



        if (icon0 === 'partly-cloudy-day' || icon0 === 'cloudy' || icon0 === 'fog' || icon0 === 'partly-cloudy-night') {
            $("#icon").prepend('<img src="cloudy.png" />');
        }
        if (icon0 === 'clear-night' || icon0 === 'clear-day') {
            $("#icon").prepend('<img src="sun.png" />');
        }
        if (icon0 === 'rain') {
            $("#icon").prepend('<img src="rain.png" />');
        }


// second box

        $("#temperature1").html("temperature: " + data.daily.data[1].apparentTemperatureHigh);
        $("#pressure1").html("pressure: " + data.daily.data[1].pressure);
        $("#windSpeed1").html("windSpeed: " + data.daily.data[1].windSpeed);
        $("#humidity1").html("humidity: " + data.daily.data[1].humidity);
        $("#summary1").html(data.daily.data[1].summary);


// icon1
        var icon1 = (data.daily.data[1].icon);

        if (icon1 === 'partly-cloudy-day' || icon1 === 'cloudy' || icon1 === 'fog' || icon1 === 'partly-cloudy-night') {
            $("#icon1").prepend('<img src="cloudy.png" />');
        }
        if (icon1 === 'rain') {
            $("#icon1").prepend('<img src="rain.png" />');
        }
        if (icon1 === 'clear-night' || icon0 === 'clear-day') {
            $("#icon1").prepend('<img src="sun.png" />');
        }

// third box

        $("#temperature2").html("temperature: " + data.daily.data[2].apparentTemperatureHigh);
        $("#pressure2").html("pressure: " + data.daily.data[2].pressure);
        $("#windSpeed2").html("windSpeed: " + data.daily.data[2].windSpeed);
        $("#humidity2").html("humidity: " + data.daily.data[2].humidity);
        $("#summary2").html(data.daily.data[2].summary);


// icon2
        var icon2 = (data.daily.data[2].icon);

        if (icon2 === 'partly-cloudy-day' || icon2 === 'cloudy' || icon2 === 'fog' || icon2 === 'partly-cloudy-night') {
            $("#icon2").prepend('<img src="cloudy.png" />');
        }
        if (icon2 === 'rain') {
            $("#icon2").prepend('<img src="rain.png" />');
        }
        if (icon2 === 'clear-night' || icon0 === 'clear-day') {
            $("#icon2").prepend('<img src="sun.png" />');
        }
    }

// satellite and streets view button
    $(".layers").click(function (layer) {
        var layerId = layer.target.id;

        if (layerId === 'streets') {
            $(".layers").attr("id", "satellite");
            map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
        }

        if (layerId === 'satellite') {
            $(".layers").attr("id", "streets");
            map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
        }
    });


// map box
    var map = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/mapbox/streets-v9",
        zoom:3,
        center:[-98.85907099908773,39.46933743871111]

    }); //console.log(map)



    //Geocoder searching functionality implemented to map
    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
    });
    map.addControl(geocoder);

    //Geocoder results to implementation-new coordinates
    map.on('load', function () {
        map.addSource('single-point', {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": []
            }
        });

        geocoder.on('result', function (ev) {
            //Clearing body

            //Get the lat and longs from the map Source geocoder search

            map.getSource('single-point').setData(ev.result.geometry)
            var coordination = ('/' + ev.result.bbox[1] + ',' + ev.result.bbox[0]);
            console.log(coordination);



            //Feed the coordinates from the search box to the darkSky update forecast
            var weather = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + wkey + coordination);
            //Move markers to new location


            $('#location').html('')
            reverseGeocode({lng: ev.result.bbox[0], lat: ev.result.bbox[1]}, mkey).then(function (results) {
                $('#location').append(results);
                console.log(results);
            });

            // removing the old icons
            $("#icon").html(" ");
            $("#icon1").html(" ");
            $("#icon2").html(" ");

            marker.setLngLat([ev.result.bbox[0], ev.result.bbox[1]]);
            marker.addTo(map);
            weather.done(function (data) {
                makeWeatherChange(data);
            });
        });
    });


    var navZoom = new mapboxgl.NavigationControl();
    map.addControl(navZoom);

    //Setting marker default and fetching coordinates to push to darkSky
    var marker = new mapboxgl.Marker();
    marker.setLngLat([-98.85907099908773,39.46933743871111]);
    marker.addTo(map);
    marker.setDraggable(true);


    //San Antonio reverseGeoCode appending results to h2 Default after loading page
    reverseGeocode({lng: -98.85907099908773, lat: 39.46933743871111}, mkey).then(function (results) {
        $('#location').append(results);
        console.log(results);
    });

    var coordination = ('/39.46933743871111' + ',' + '-98.85907099908773');
    var weather = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ wkey + coordination);
    weather.done(function(data){

        makeWeatherChange(data)
    });

    // moving pin
    marker.on('dragend', function() {
       var coordination = ('/' + marker._lngLat.lat + ',' + marker._lngLat.lng);
       //console.log(marker.addTo(map));

        $('#location').html('')
        reverseGeocode({lng: marker._lngLat.lng, lat: marker._lngLat.lat}, mkey).then(function (results) {
            $('#location').append(results);
            console.log(results);
        });

// removing the old icons
        $("#icon").html(" ");
        $("#icon1").html(" ");
        $("#icon2").html(" ");

// weather map
    var weather = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ wkey + coordination);

    weather.done(function (data) {


        makeWeatherChange(data);

    });

  });

});
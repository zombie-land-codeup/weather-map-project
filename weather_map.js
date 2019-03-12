$(function () {
    "use strict";

    mapboxgl.accessToken = mkey;

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


// moving pin
    var marker = new mapboxgl.Marker();
    marker.setLngLat([-98.85907099908773,39.46933743871111]);
    marker.addTo(map);
    marker.setDraggable(true);

    marker.on('dragend', function() {
       var cordination = ('/' + marker._lngLat.lat + ',' + marker._lngLat.lng);
       //console.log(marker.addTo(map));


// removing the old icons
        $("#icon").html(" ");
        $("#icon1").html(" ");
        $("#icon2").html(" ");

// weather map
    var weather = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ wkey + cordination);

    weather.done(function (data,status,jqxhr) {
         // console.log(data.latitude);
         // console.log(data.longitude);
         // console.log(data.timezone);
         // console.log(data.currently.temperature);
         // console.log(data.currently.windSpeed);
         // console.log(data.currently.pressure);
         // console.log(data.currently.humidity);
         // console.log(data.currently.summary);
         // console.log(data.currently.icon);
         console.log(data);


// first box

        $("#location").html("Time Zone: " + data.timezone).append(" latitude:" + data.latitude).append(" longitude:" + data.longitude);
        $("#temperature").html("temperature: " + data.daily.data[0].apparentTemperatureHigh);
        $("#pressure").html("pressure: " + data.daily.data[0].pressure);
        $("#windSpeed").html("windSpeed: " + data.daily.data[0].windSpeed);
        $("#humidity").html("humidity: " + data.daily.data[0].humidity);
        $("#summary").html(data.daily.data[0].summary);

// icon0
        var icon0 = (data.daily.data[0].icon);

        if (icon0 === 'partly-cloudy-day' || icon0 === 'cloudy' || icon0 === 'fog' || icon0 === 'partly-cloudy-night') {
            $("#icon").prepend('<img src="cloudy.png" />');
        }  if (icon0 === 'rain' ){
            $("#icon").prepend('<img src="cloudy.png" />');
        } if (icon0 === 'clear-night' || icon0 === 'clear-day'){
            $("#icon").prepend('<img src="sun.png" />');
        } if (icon0 === 'rain') {
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
        }  if (icon1 === 'rain'){
            $("#icon1").prepend('<img src="rain.png" />');
        } if (icon1 === 'clear-night' || icon0 === 'clear-day'){
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
        }  if (icon2 === 'rain' ){
            $("#icon2").prepend('<img src="rain.png" />');
        } if (icon2 === 'clear-night' || icon0 === 'clear-day'){
            $("#icon2").prepend('<img src="sun.png" />');
        }

    });

  });

});
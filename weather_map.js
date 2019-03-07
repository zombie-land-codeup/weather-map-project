$(function () {
    "use strict";

// weather map
    var weather = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ wkey +"/29.4241,-98.4936");
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
        console.log(data.daily.data[0].summary);

// first

        $("#location").html(data.timezone).append(" latitude:" +  data.latitude).append(" longitude:" +data.longitude);
        $("#temperature").html("temperature: " + data.daily.data[0].apparentTemperatureHigh);
        $("#pressure").html("pressure: " + data.daily.data[0].pressure);
        $("#windSpeed").html("windSpeed: " + data.daily.data[0].windSpeed);
        $("#humidity").html("humidity: " + data.daily.data[0].humidity);
        $("#summary").html(data.daily.data[0].summary);

// second

        $("#temperature1").html("temperature: " + data.daily.data[1].apparentTemperatureHigh);
        $("#pressure1").html("pressure: " + data.daily.data[1].pressure);
        $("#windSpeed1").html("windSpeed: " + data.daily.data[1].windSpeed);
        $("#humidity1").html("humidity: " + data.daily.data[1].humidity);
        $("#summary1").html(data.daily.data[1].summary);

// third

        $("#temperature2").html("temperature: " + data.daily.data[2].apparentTemperatureHigh);
        $("#pressure2").html("pressure: " + data.daily.data[2].pressure);
        $("#windSpeed2").html("windSpeed: " + data.daily.data[2].windSpeed);
        $("#humidity2").html("humidity: " + data.daily.data[2].humidity);
        $("#summary2").html(data.daily.data[2].summary);

    });












// map box

    mapboxgl.accessToken = mkey;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom:10,
        center:[-98.4916,29.4252]

    });

});
$(function () {
    "use strict";

// weather map
    var weather = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ wkey +"/29.4241,-98.4936");
    weather.done(function (data,status,jqxhr) {
        console.log(data)
    })












// map box

    mapboxgl.accessToken = mkey;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom:10,
        center:[-98.4916,29.4252]

    });

});
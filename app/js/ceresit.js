/**
 * Created by Ranger on 29.11.2017.
 */



/**
 * Created by Victor on 25.02.2015.
 */

(function($, undefined) {

    /**
     * Module namespace
     */
    window.mapNs = window.mapNs || {};

    mapNs.geoCoder = false;
    mapNs.infoBubble = null;
    mapNs.map = false;
    mapNs.markerData = false;

    mapNs.markerImage = '/img/marker.png';
    mapNs.assetsPath = '';
    mapNs.colorScheme = '';
    mapNs.addressLabels = [];

    mapNs.markersType = 'outlets';

    mapNs.lang = {};

    /**
     * Initializes namespace
     */
    mapNs.init = function(params) {
        if (params) {
            for (var property in params) {
                if (params.hasOwnProperty(property) && mapNs.hasOwnProperty(property)) {
                    mapNs[property] = params[property];
                }
            }
        }

        mapNs.initMap();
        //mapNs.mapStyles(mapNs.map, mapNs.colorScheme);
        if (params.data) {
            if (mapNs.markersType == 'outlets') {
                mapNs.initMarkers(params.data);
            } else if (mapNs.markersType == 'schools') {
                mapNs.initSchoolsMarkers(params.data);
            }
        }
        if (params.location) {
            mapNs.showLocation(params.location)
        }
        mapNs.initAddressLabels();
    };

    mapNs.initMap = function() {
        if (!mapNs.map) {
            mapNs.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: new google.maps.LatLng(50.594494, 30.433636),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        }
    };

    mapNs.showLocation = function(location) {
        var address;
        if (typeof location === 'string') {
            address = location;
        } else {
            if (location.country) {
                address = location.country;
            } else {
                address = "Украина";
            }
            if (location.state) {
                address = location.state + ", " + address;
            }
            if (location.city) {
                address = location.city + ", " + address;
            }
        }

        if (!mapNs.geoCoder) {
            mapNs.geoCoder = new google.maps.Geocoder();
        }
        mapNs.geoCoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                mapNs.map.setCenter(results[0].geometry.location);
                if (results[0].geometry.viewport) {
                    mapNs.map.fitBounds(results[0].geometry.viewport);
                    var zoom = mapNs.map.getZoom();
                    mapNs.map.setZoom(zoom + 1);
                }
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    };

    mapNs.mapStyles = function(map, colorScheme) {
        if (colorScheme == 'dark') {
            map.set('styles', [
                {
                    "featureType": "landscape.man_made",
                    "stylers": [
                        { "color": "#464a4f" },
                        { "visibility": "on" }
                    ]
                },{
                    "featureType": "poi.park",
                    "stylers": [
                        { "color": "#4d524a" },
                        { "visibility": "on" }
                    ]
                },{
                    "featureType": "poi.government",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "poi.government",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "poi.place_of_worship",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "road.highway",
                    "stylers": [
                        { "color": "#333333" },
                        { "visibility": "on" }
                    ]
                },{
                    "featureType": "transit.line",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "road.local",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#333333" }
                    ]
                },{
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#808080" },
                        { "visibility": "on" }
                    ]
                },{
                    "featureType": "administrative"  },{
                    "featureType": "water",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#687985" }
                    ]
                },{
                    "featureType": "administrative",
                    "stylers": [
                        { "color": "#808080" },
                        { "visibility": "on" }
                    ]
                },{
                    "featureType": "poi",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#4f5864" }
                    ]
                },{
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        { "color": "#343e41" },
                        { "visibility": "simplified" },
                        { "invert_lightness": true }
                    ]
                },{
                },{
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#333333" }
                    ]
                },{
                },{
                    "featureType": "administrative",
                    "stylers": [
                        { "visibility": "simplified" },
                        { "color": "#807f80" }
                    ]
                },{
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "poi",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#3b454a" }
                    ]
                },{
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "transit",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#333333" }
                    ]
                },{
                    "featureType": "landscape",
                    "stylers": [
                        { "color": "#464a4f" },
                        { "visibility": "on" }
                    ]
                },{
                    "featureType": "transit",
                    "elementType": "labels.text",
                    "stylers": [
                        { "visibility": "simplified" },
                        { "color": "#808080" }
                    ]
                },{
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        { "color": "#808080" },
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                }
            ]);
        } else {
            map.set('styles', [
                {
                    "stylers": [
                        { "color": "rgb(242, 242, 242)" },
                        {saturation: -49},
                        {lightness: -9}
                    ]
                }
            ]);
        }
    };

    mapNs.initSchoolsMarkers = function(data) {
        mapNs.markerData = data;

        var locations = $.map(data, function(value, index){
            return value;
        });

        for (var i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
                icon: mapNs.assetsPath+mapNs.markerImage,
                map: mapNs.map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    var contentString = '<h1>'+locations[i]['title']+'</h1>'+
                        '<p><span>'+mapNs.lang['Адрес']+'</span>'+locations[i]['address']+'</p>'+
                        '<p><span>'+mapNs.lang['Телефон']+'</span>';
                    for (var j in locations[i]['phones']) {
                        contentString += locations[i]['phones'][j]+'<br/>';
                    }
                    contentString += '</p>';

                    $('#school-data').html(contentString);
                }
            })(marker, i));
        }
    };

    mapNs.initMarkers = function(data) {
        mapNs.markerData = data;

        var locations = $.map(data, function(value, index){
            return value;
        });

        for (var i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
                icon: mapNs.assetsPath+mapNs.markerImage,
                map: mapNs.map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    $('.wr-map').fadeOut();
                    var contentString = '<div class="bubble-content">' +
                        '<h1>' + locations[i]['name'] + '</h1>' +
                        '<div class="place">' + locations[i]['place'] + '</div>' +
                        '<div class="link"><a href="' + locations[i]['href'] + '" target="_blank" class="link">' + locations[i]['href'] + '</a></div>' +
                        '<div class="tel"><p>' + locations[i]['phone'] + '</p></div>' +
                        '</div>';
                    if (locations[i]['content']) {
                        contentString += '<div id="more-fancy-link" onclick="mapNs.placePopup('+i+')"><span>Узнать подробности</span></div>';
                    }

                    if( mapNs.infoBubble != null ) { mapNs.infoBubble.close(); } // close all before show this

                    mapNs.infoBubble = new InfoBubble({
                        map: mapNs.map,
                        content: contentString,
                        position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
                        shadowStyle: 0,
                        maxWidth: 310,
                        minWidth: 310,
                        maxHeight: 227,
                        minHeight: 227,
                        padding: 0,
                        backgroundColor: 'rgb(242,242,243)',
                        borderRadius: 0,
                        arrowSize: 8,
                        borderWidth: 0,
                        closeSrc: mapNs.assetsPath+'/img/close-small.png',
                        disableAutoPan: false,
                        arrowPosition: 50,
                        backgroundClassName: 'phoney',
                        arrowStyle: 0
                    });

                    google.maps.event.addListener(mapNs.infoBubble, 'closeclick', function() {
                        $('.wr-map').fadeIn();
                    });

                    if (!mapNs.infoBubble.isOpen()) {
                        mapNs.infoBubble.open(mapNs.map, marker);
                    }
                }
            })(marker, i));
        }
    };

    mapNs.initAddressLabels = function() {
        if (mapNs.addressLabels) {
            for (var i in mapNs.addressLabels) {
                //console.log(mapNs.addressLabels[i]);
                if (!mapNs.geoCoder) {
                    mapNs.geoCoder = new google.maps.Geocoder();
                }
                mapNs.geoCoder.geocode( { 'address': mapNs.addressLabels[i]}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()),
                            icon: mapNs.assetsPath+mapNs.markerImage,
                            map: mapNs.map
                        });
                    } else {
                        alert("Geocode was not successful for the following reason: " + status);
                    }
                });
            }
        }
    }

    mapNs.placePopup = function(i) {
        $('#fancy-contacts').fadeIn();

        var map = new google.maps.Map(document.getElementById('map-popup'), {
            zoom: 16,
            center: new google.maps.LatLng(mapNs.markerData[i]['lat'], mapNs.markerData[i]['lng']),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        //mapNs.mapStyles(map);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(mapNs.markerData[i]['lat'], mapNs.markerData[i]['lng']),
            icon: mapNs.assetsPath+mapNs.markerImage,
            map: map
        });

        $('#contact-data').html('<div class="title">'+mapNs.markerData[i]['name']+'</div>'+
            '<div class="place">'+mapNs.markerData[i]['place']+'</div>'+
            '<div class="link">'+mapNs.markerData[i]['href']+'</div>'+
            '<div class="phone">'+mapNs.markerData[i]['phone']+'</div>'+
            '<div class="txt">'+mapNs.markerData[i]['content']+'</div>');

        infoBubble.close();
    };

})(jQuery);

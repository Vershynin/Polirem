/* ================================================
 Custom Google Map
 Version: 1.0
 Author: Code & Square
 Author URI: codeandsquare.com
 ================================================ */

$(document).ready(function() {
    // 'use strict';

    //     var longitude = 50.450705;
    //     var latitude = 30.649733;
    //     var canvas = "gmap_canvas";

    // function initMap() {
    //     var uluru = {lat: -25.363, lng: 131.044};
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 4,
    //         center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map
    //     });
    // }


  //   GOOGLE MAP
    $(function() {

        var longitude = 50.450705;
        var latitude = 30.649733;
        var simplerweb = new google.maps.LatLng(50.450705, 30.649733)
        var canvas = "map";


        function load_map(canvas, lan, lat) {


            var myLatlng = new google.maps.LatLng(lan, lat);
            var myOptions = {
                zoom: 16,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                streetViewControl: false,
                panControl: false,
                disableDefaultUI: true,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                }
            }

            var map = new google.maps.Map(document.getElementById(canvas), myOptions);
           // map.panBy(200, -23);
            var marker = new google.maps.Marker({
                position: simplerweb,
                map: map,
                icon: "img/location-default.png"
            });

            var iconDefault = "img/location-default.png";
            var iconHover = "img/location-hover.png";

            google.maps.event.addListener(marker, 'mouseover', function() {
                marker.setIcon(iconHover);
            });
            google.maps.event.addListener(marker, 'mouseout', function() {
                marker.setIcon(iconDefault);
            });


            var styles = [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 20
                        },
                        {
                            "color": "#ececec"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#f0f0ef"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#f0f0ef"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#d4d4d4"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ececec"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 21
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#d4d4d4"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#303030"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "saturation": "-100"
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"


                        }
                    ]
                },
                {
                    "featureType": "poi.government",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.medical",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.place_of_worship",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.school",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.school",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "lightness": "-61"
                        },
                        {
                            "gamma": "0.00"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.sports_complex",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
            ];

            var infowindow = new google.maps.InfoWindow({
                content: "<div class='map_adresse'><div class='map_address'><span class='address'><b>Відділ продажу:</b> </span><br>вул. Віскозна, 3, м. Київ, Україна, 02094</div><br> <div class='map_tel'><span class='tel'><b>Робочий час:</b> </span><br>з 8:00 до 17:00, понеділок – п’ятниця.</div></div>"
            });

            map.setOptions({
                styles: styles
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });


        }
        load_map(canvas, longitude, latitude);

    });

});

/* ================================================
 Custom Google Map
 Version: 1.0
 Author: Code & Square
 Author URI: codeandsquare.com
 ================================================ */



$(document).ready(function () {


    $('#select-city').selectpicker({
        liveSearch: false
    });

    $('#select-region').selectpicker({
        liveSearch: false
    });
});



$(document).ready(function() {

    $(document).ready(function() {
        // execute
        (function() {
            // map options
            var options = {
                zoom: 13,
                center: new google.maps.LatLng(50.450705, 30.649733), // centered main Polyrem
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
            };




            // init map
            var map = new google.maps.Map(document.getElementById('map'), options);

            // NY and CA sample Lat / Lng
            // var southWest = new google.maps.LatLng(40.744656, -74.005966);
            // var northEast = new google.maps.LatLng(34.052234, -118.243685);
            // var lngSpan = northEast.lng() - southWest.lng();
            // var latSpan = northEast.lat() - southWest.lat();


            var locations = [
                ['Магазин №4', 50.444768, 30.663251, 4],
                ['Магазин №3', 50.442117, 30.626602, 5],
                ['Магазин №2', 50.425087, 30.680503, 3],
                ['Главный магазин', 50.450705, 30.649733, 2],
                ['Магазин №1', 50.434992, 30.647603, 1]
            ];


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

            map.setOptions({
                styles: styles
            });

            // set multiple marker
            var infowindow = new google.maps.InfoWindow();

            var marker = [], i;

            for (i = 0; i < locations.length; i++) {
                marker.push(new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    icon: "img/location-default.png"
                }));

                var icon1 = "img/location-default.png";
                var icon2 = "img/location-hover.png";



                google.maps.event.addListener(marker[i], 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    }
                })(marker[i], i));

                google.maps.event.addListener(marker[i], 'mouseover', _marker_mouseoverHandler.bind(marker[i]));
                google.maps.event.addListener(marker[i], 'mouseout', _marker_mouseoutHandler.bind(marker[i]));
            }

            function _marker_mouseoverHandler ( e ) {
                console.log(this);
                this.setIcon(icon2);
            }

            function _marker_mouseoutHandler ( e ) {
                console.log(this);
                this.setIcon(icon1);
            }

            //-------------------------------remowe arr + infowindow style--------------------------------------------------------------------------


          //---------------------------------------------------------------------------------------------------------

        })();
    });
});

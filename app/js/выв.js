//   GOOGLE MAP
$(function() {

    var longitude = 50.450705;
    var latitude = 30.649733;
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
        map.panBy(200, -23);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: "/img/location.png"
        });



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
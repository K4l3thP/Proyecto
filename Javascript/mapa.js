var id;
function initMap() {
    navigator.geolocation.clearWatch(id);
    if (navigator.geolocation) {
        id = navigator.geolocation.getCurrentPosition(function (position) {
            //Se inicializa los servicios
            var directionsService = new google.maps.DirectionsService();
            var directionsRenderer = new google.maps.DirectionsRenderer();

            var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var end = new google.maps.LatLng(10.004987131357735, -84.22762654232959);

            var mapOptions = {
                zoom: 18,
                center: start
            }

            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            directionsRenderer.setMap(map);

            //DirectionRequest que almacena la propiedades requeridas para calcular una ruta
            var request = {
                origin: start,
                destination: end,
                travelMode: 'DRIVING'
            };

            //El servicio envía el DirectionRequest al servidor y devuelve el resultado de la ruta
            directionsService.route(request, function (result, status) {

                //Comprueba que todo haya salido bien y traza la ruta
                if (status == 'OK') {
                    directionsRenderer.setDirections(result);
                }
            });
        });
        
    }

}
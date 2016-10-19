var cargarPagina = function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
};
var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
	var lon = posicion.coords.longitude;
	var map = new GMaps({
		div: "#map",
		lat: lat,
		lng: lon,
		zoom:16
	});
	var geocoder = new google.maps.Geocoder;
	var infowindow = new google.maps.InfoWindow;
	$("#submit").on('click', function() {
	geocodeLatLng(geocoder, map, infowindow);
	});
	map.addMarker({
		lat: lat,
		lng: lon,
		title:"Estás aquí"
	});

	var content = $("#direccion");
	var dir = "";
	var latlng = new google.maps.LatLng(lat, lon);
	geocoder = new google.maps.Geocoder();
	geocoder.geocode({"latLng": latlng}, function(resultado, estado){
		if (estado == google.maps.GeocoderStatus.OK){
			if (resultado[0]){
				dir = resultado[0].formatted_address;
			}
			else{
				dir = "No se ha podido obtener ninguna dirección en esas coordenadas.";
			}
		}
		else{
			dir = "El Servicio de Codificación Geográfica ha fallado con el siguiente error: " + estado;
		}
		content.text(dir);
	});
}
var funcionError = function (error) {
	console.log(error);
}
var cargar = function(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(exitoUbicacion,errorUbicaion)
	}
}
$(document).ready(cargarPagina);

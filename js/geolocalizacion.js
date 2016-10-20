var cargarPagina = function() {
	$(".white-text").eq(0).text(window.localStorage.getItem("nombre")+" "+window.localStorage.getItem("apellido"));
	$(".white-text").eq(1).text(window.localStorage.getItem("correo"));
	$(".button-collapse").sideNav({
	  menuWidth: 250,
	  edge: 'left',
	  closeOnClick: true
	}
  );
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
	alert("Tenemos un problema cin encontrar tu ubicación");
}
$(document).ready(cargarPagina);

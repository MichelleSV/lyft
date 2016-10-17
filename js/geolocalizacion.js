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
		lng: lon
	});
	map.addMarker({
		lat: lat,
		lng: lon,
	});
}
var funcionError = function (error) {
	console.log(error);
}
$(document).ready(cargarPagina);

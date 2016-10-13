$(document).ready(cargar);
function cargar(){
	$("#input-celular").keypress(onKeydown);
	$("#input-celular").keyup(onKeyup);
	$("#num").text(window.localStorage.getItem("celular"));
}

function onKeydown(evento){
	var ascii = evento.keyCode;
	if((ascii>=48 && ascii<=57) || ascii==37 || ascii==39 || ascii<=8){
		return true;
	} else{
		return false;
	}
}

function onKeyup(evento){
	var longitud = $("#input-celular").val().length;
		if (longitud == 9) {
			$("#obtener-codigo").attr("href", "comprobacion-codigo.html");
		} else {
			$("#obtener-codigo").removeAttr("href");
		}
}

$("#obtener-codigo").click(generarCodigo);
function generarCodigo(){
	var longitud = $("#input-celular").val().length;

	if(longitud == 9){
		window.localStorage.setItem("numeroAleatorio", Math.round(Math.random()*900)+99);
		alert("LAB" + window.localStorage.getItem("numeroAleatorio"));
		window.localStorage.setItem("celular", $("#input-celular").val());
	}
}

$("#codigo-comprobado").click(comprobarCodigo);
$("#input-codigo").keypress(onKeydown);
function comprobarCodigo(){
	var codigo = $("#input-codigo").val();
	if(codigo === window.localStorage.getItem("numeroAleatorio")){
			$("#codigo-comprobado").attr("href", "registro-datos.html");
		} else {
			$("#codigo-comprobado").removeAttr("href");
		}
}


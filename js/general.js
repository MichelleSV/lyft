$(document).ready(cargar);
function cargar(){
	$("#input-celular").keypress(onKeypress);
	$("#input-celular").keyup(onKeyup);
	$("#num").text(window.localStorage.getItem("celular"));
	$("#input-celular").focus();
	$(".input-codigo").eq(0).focus();
}

function onKeypress(evento){
	var ascii = evento.keyCode;
	if((ascii>=48 && ascii<=57) || ascii==37 || ascii==39 || ascii==8){
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
		alert("LAB - " + window.localStorage.getItem("numeroAleatorio"));
		window.localStorage.setItem("celular", $("#input-celular").val());
	}
}

$("#codigo-comprobado").click(comprobarCodigo);
function comprobarCodigo(){
	var codigo1 = $(".input-codigo").eq(0).val();
	var codigo2 = $(".input-codigo").eq(1).val();
	var codigo3 = $(".input-codigo").eq(2).val();
	var codigo = codigo1 + codigo2 + codigo3;
	if(codigo == window.localStorage.getItem("numeroAleatorio")){
			$("#codigo-comprobado").attr("href", "registro-datos.html");
		} else {
			$("#codigo-comprobado").removeAttr("href");
			alert("Código erróneo");
			$(".input-codigo").val("");
			$(".input-codigo").eq(0).focus();
		}
}

$(".input-codigo").keyup(onkeyupCodigo);
$(".input-codigo").keydown(onKeydownCodigo);
function onKeydownCodigo(evento){
	var ascii = evento.keyCode;
	var longitud = $(this).val().length;
	if((ascii>=48 && ascii<=57  && longitud==0) || ascii==8){
		return true;
	} else{
		return false;
	}
}
function onkeyupCodigo(evento){
	var longitud = $(this).val().length;
	var ascii = evento.keyCode;
	if(longitud==1){
		$(this).next().focus();
	}
	if(ascii==8){
		$(this).prev().focus();
	}
}

$("#reenviar-codigo").click(generarCodigo2);
function generarCodigo2(){
	window.localStorage.setItem("numeroAleatorio", Math.round(Math.random()*900)+99);
	alert("LAB - " + window.localStorage.getItem("numeroAleatorio"));
	$(".input-codigo").val("");
	$(".input-codigo").eq(0).focus();

}

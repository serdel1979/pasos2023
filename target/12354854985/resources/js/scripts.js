function descargar() {

	/*hacer una llamada ajax para generar el reporte y si la respuesta es success = true forzar la descarga en el cliente*/


	$.ajax({
		type: "GET",
		url: "client/generateReport",
		contentType: 'application/json',
		success: function(data) {
			if (data.success == false)
				bootbox.alert(data.message);

			else //forzar la descarga
				//window.location = "http://localhost:8080/eleccionesPaso/client/descargar/";

				window.location = window.location.origin + "/12354854985/client/descargar/";
		}
	});
}


function total_votos_senadores() {
	var total = 0;
	$(".senadores").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	var val = total + subtotal_votos_senadores();
	return val;
}

function subtotal_votos_senadores() {
	var total = 0;
	$(".subtotal-senadores").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	return total;
}

/*
subtotal-presidente -- alertPresidente
subtotal-parlamentarios --alertParlamentarios
subtotal-senadores -- alertSenadores // Implementado
subtotal-dip_nac --alertDipNac
subtotal-parla_reg alertParlamentRegionales
*/

function alertSubtotalSenadores() {

	if ($("#subtotal_votos_agrupaciones_politicas_senadores").val() == "")
		$("#subtotal_votos_agrupaciones_politicas_senadores").removeClass("error_columna_totales");

	else {
		if (parseInt($("#subtotal_votos_agrupaciones_politicas_senadores").val()) != subtotal_votos_senadores()) {
			if (!$("#subtotal_votos_agrupaciones_politicas_senadores").hasClass("error_columna_totales"))
				$("#subtotal_votos_agrupaciones_politicas_senadores").addClass("error_columna_totales");
		}
		else

			$("#subtotal_votos_agrupaciones_politicas_senadores").removeClass("error_columna_totales");


	}
}


function alertSenadores() {
	if ($("#total_votos_agrupaciones_politicas_senadores").val() == "")
	{
		$("#total_votos_agrupaciones_politicas_senadores").removeClass("error_columna_totales");
    }
	else {
		if (parseInt($("#total_votos_agrupaciones_politicas_senadores").val()) != total_votos_senadores()) {
			if (!$("#total_votos_agrupaciones_politicas_senadores").hasClass("error_columna_totales"))
				$("#total_votos_agrupaciones_politicas_senadores").addClass("error_columna_totales");
		}
		else

			$("#total_votos_agrupaciones_politicas_senadores").removeClass("error_columna_totales");


	}
}

function total_votos_intendente() {
	var total = 0;
	$(".intendente").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	return total;
}


function alertIntendente() {

	if ($("#total_votos_agrupaciones_politicas_intendente").val() == "")
		$("#total_votos_agrupaciones_politicas_intendente").removeClass("error_columna_totales");
	else {
		if (parseInt($("#total_votos_agrupaciones_politicas_intendente").val()) != total_votos_intendente()) {
			if (!$("#total_votos_agrupaciones_politicas_intendente").hasClass("error_columna_totales"))
				$("#total_votos_agrupaciones_politicas_intendente").addClass("error_columna_totales");
		}
		else
			$("#total_votos_agrupaciones_politicas_intendente").removeClass("error_columna_totales");


	}
}

function total_votos_gobernador() {
	var total = 0;
	$(".gobernador").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	return total;
}


function alertGobernador() {

	if ($("#total_votos_agrupaciones_politicas_gobernador").val() == "")
		$("#total_votos_agrupaciones_politicas_gobernador").removeClass("error_columna_totales");
	else {
		if (parseInt($("#total_votos_agrupaciones_politicas_gobernador").val()) != total_votos_gobernador()) {
			if (!$("#total_votos_agrupaciones_politicas_gobernador").hasClass("error_columna_totales"))
				$("#total_votos_agrupaciones_politicas_gobernador").addClass("error_columna_totales");
		}
		else
			$("#total_votos_agrupaciones_politicas_gobernador").removeClass("error_columna_totales");


	}
}


//
function total_votos_parlamentarios() {
	var total = 0;
	/*$(".parlamentarios").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});*/
	return total + subtotal_votos_parlamentarios();
}


function subtotal_votos_parlamentarios() {
	var total = 0;
	$(".subtotal-parlamentarios").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	return total;
}

function alertParlamentarios() {

	if ($("#total_votos_agrupaciones_politicas_parlamentarios_mercosur").val() == "")
		$("#total_votos_agrupaciones_politicas_parlamentarios_mercosur").removeClass("error_columna_totales");
	else {
		if (parseInt($("#total_votos_agrupaciones_politicas_parlamentarios_mercosur").val()) != total_votos_parlamentarios()) {
			if (!$("#total_votos_agrupaciones_politicas_parlamentarios_mercosur").hasClass("error_columna_totales"))
				$("#total_votos_agrupaciones_politicas_parlamentarios_mercosur").addClass("error_columna_totales");
		}
		else
			$("#total_votos_agrupaciones_politicas_parlamentarios_mercosur").removeClass("error_columna_totales");


	}
}

function alertSubtotalParlamentarios() {

	if ($("#subtotal_votos_agrupaciones_politicas_parlamentarios_mercosur").val() == "")
		$("#subtotal_votos_agrupaciones_politicas_parlamentarios_mercosur").removeClass("error_columna_totales");
	else {
		if (parseInt($("#subtotal_votos_agrupaciones_politicas_parlamentarios_mercosur").val()) != subtotal_votos_parlamentarios()) {
			if (!$("#subtotal_votos_agrupaciones_politicas_parlamentarios_mercosur").hasClass("error_columna_totales"))
				$("#subtotal_votos_agrupaciones_politicas_parlamentarios_mercosur").addClass("error_columna_totales");
		}
		else
			$("#subtotal_votos_agrupaciones_politicas_parlamentarios_mercosur").removeClass("error_columna_totales");


	}
}

//

function total_votos_dip_nac() {
	var total = 0;
	$(".dip_nac").each(function(index) {
		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	return total + subtotal_votos_dip_nac();
}

function subtotal_votos_dip_nac() {
	var total = 0;
	$(".subtotal-dip_nac").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	return total;
}

function alertDipNac() {

	if ($("#total_votos_agrupaciones_politicas_diputados").val() == ""){
		$("#total_votos_agrupaciones_politicas_diputados").removeClass("error_columna_totales");
	}
	else {
		if (parseInt($("#total_votos_agrupaciones_politicas_diputados").val()) != total_votos_dip_nac()) {
			if (!$("#total_votos_agrupaciones_politicas_diputados").hasClass("error_columna_totales"))
				$("#total_votos_agrupaciones_politicas_diputados").addClass("error_columna_totales");
		}
		else
			$("#total_votos_agrupaciones_politicas_diputados").removeClass("error_columna_totales");


	}
}

function alertSubtotalDipNac() {
	if ($("#subtotal_votos_agrupaciones_politicas_diputados_nacionales").val() == "")
		$("#subtotal_votos_agrupaciones_politicas_diputados_nacionales").removeClass("error_columna_totales");
	else {
		if (parseInt($("#subtotal_votos_agrupaciones_politicas_diputados_nacionales").val()) != subtotal_votos_dip_nac()) {
			if (!$("#subtotal_votos_agrupaciones_politicas_diputados_nacionales").hasClass("error_columna_totales"))
				$("#subtotal_votos_agrupaciones_politicas_diputados_nacionales").addClass("error_columna_totales");
		}
		else
			$("#subtotal_votos_agrupaciones_politicas_diputados_nacionales").removeClass("error_columna_totales");


	}
}



function total_votos_leg_prov() {
	var total = 0;
	$(".leg_prov").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	return total;
}


function alertLegProv() {

	if ($("#total_votos_agrupaciones_politicas_legisladores_provinciales").val() == "")
		$("#total_votos_agrupaciones_politicas_legisladores_provinciales").removeClass("error_columna_totales");
	else {
		if (parseInt($("#total_votos_agrupaciones_politicas_legisladores_provinciales").val()) != total_votos_leg_prov()) {
			if (!$("#total_votos_agrupaciones_politicas_legisladores_provinciales").hasClass("error_columna_totales"))
				$("#total_votos_agrupaciones_politicas_legisladores_provinciales").addClass("error_columna_totales");
		}
		else
			$("#total_votos_agrupaciones_politicas_legisladores_provinciales").removeClass("error_columna_totales");


	}
}

//subtotal-presidente -- alertPresidente

function subtotal_votos_presidente() {
	var total = 0;
	$(".subtotal-presidente").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	return total;
}

function total_votos_presidente() {
	var total = 0;
	/*$(".presidente").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});*/
	return total + subtotal_votos_presidente();
}


function alertSubtotalPresidente() {
	if ($("#subtotal_votos_agrupaciones_politicas_presidente").val() == "")
		$("#subtotal_votos_agrupaciones_politicas_presidente").removeClass("error_columna_totales");
	else {
		if (parseInt($("#subtotal_votos_agrupaciones_politicas_presidente").val()) != subtotal_votos_presidente()) {
			if (!$("#subtotal_votos_agrupaciones_politicas_presidente").hasClass("error_columna_totales"))
				$("#subtotal_votos_agrupaciones_politicas_presidente").addClass("error_columna_totales");
		}
		else
			$("#subtotal_votos_agrupaciones_politicas_presidente").removeClass("error_columna_totales");


	}
}



function alertPresidente() {

	if ($("#total_votos_agrupaciones_politicas_presidente").val() == "")
		$("#total_votos_agrupaciones_politicas_presidente").removeClass("error_columna_totales");
	else {
		if (parseInt($("#total_votos_agrupaciones_politicas_presidente").val()) != total_votos_presidente()) {
			if (!$("#total_votos_agrupaciones_politicas_presidente").hasClass("error_columna_totales"))
				$("#total_votos_agrupaciones_politicas_presidente").addClass("error_columna_totales");
		}
		else
			$("#total_votos_agrupaciones_politicas_presidente").removeClass("error_columna_totales");


	}
}

function subtotal_votos_parlamentarios_reg() {
	var total = 0;
	$(".subtotal-parla_reg").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	return total;
}




function total_votos_parlamentarios_reg() {
	var total = 0;
	$(".parla_reg").each(function(index) {

		if ($(this).val() != "")

			total = total + parseInt($(this).val());
	});
	return total + subtotal_votos_parlamentarios_reg();
}



function alertParlamentRegionales() {

	if ($("#total_votos_agrupaciones_politicas_parlamentarios_regionales").val() == "")
		$("#total_votos_agrupaciones_politicas_parlamentarios_regionales").removeClass("error_columna_totales");
	else {
		if (parseInt($("#total_votos_agrupaciones_politicas_parlamentarios_regionales").val()) != total_votos_parlamentarios_reg()) {
			if (!$("#total_votos_agrupaciones_politicas_parlamentarios_regionales").hasClass("error_columna_totales"))
				$("#total_votos_agrupaciones_politicas_parlamentarios_regionales").addClass("error_columna_totales");
		}
		else
			$("#total_votos_agrupaciones_politicas_parlamentarios_regionales").removeClass("error_columna_totales");


	}
}

function alertSubtotalParlamentRegionales() {

	if ($("#subtotal_votos_agrupaciones_politicas_parlamentarios_regionales").val() == "")
		$("#subtotal_votos_agrupaciones_politicas_parlamentarios_regionales").removeClass("error_columna_totales");
	else {
		if (parseInt($("#subtotal_votos_agrupaciones_politicas_parlamentarios_regionales").val()) != subtotal_votos_parlamentarios_reg()) {
			if (!$("#subtotal_votos_agrupaciones_politicas_parlamentarios_regionales").hasClass("error_columna_totales"))
				$("#subtotal_votos_agrupaciones_politicas_parlamentarios_regionales").addClass("error_columna_totales");
		}
		else
			$("#subtotal_votos_agrupaciones_politicas_parlamentarios_regionales").removeClass("error_columna_totales");


	}
}



$(document).ready(function(e) {



	//connect();

	$("#ciudadanos_que_votaron_total").keyup(function() {
		$("#ciudadanos_que_votaron_total_letras").text(NumeroALetras($(this).val()));
	});

	$("#sobres_en_la_urna_total").keyup(function() {
		$("#sobres_en_la_urna_total_letras").text(NumeroALetras($(this).val()));
	});

	$("#diferencia_total").keyup(function() {
		$("#diferencia_total_letras").text(NumeroALetras($(this).val()));
	});


	$("#total_votos_agrupaciones_politicas_diputados").keyup(function() {
		//validar columna de diputados nacionales
		alertDipNac();
	});


	$("#subtotal_votos_agrupaciones_politicas_diputados_nacionales").keyup(function() {
		//validar columna de diputados nacionales
		alertSubtotalDipNac();
	});



	$("#total_votos_agrupaciones_politicas_legisladores_provinciales").keyup(function() {
		//validar columna de legisladores provinciales
		alertLegProv();
	});

	$("#total_votos_agrupaciones_politicas_parlamentarios_regionales").keyup(function() {
		//validar columna de concejales
		alertParlamentRegionales();
	});

	$("#total_votos_agrupaciones_politicas_presidente").keyup(function() {
		//validar columna de concejales
		alertPresidente();
	});

	$("#subtotal_votos_agrupaciones_politicas_presidente").keyup(function() {
		//validar columna de concejales
		alertSubtotalPresidente();
	});


	$("#total_votos_agrupaciones_senadores").keyup(function() {
		//validar columna de concejales
		alertSenadores();
	});

	$("#subtotal_votos_agrupaciones_senadores").keyup(function() {
		//validar columna de concejales
		alertSubtotalSenadores();
	});

	$("#total_votos_agrupaciones_politicas_parlamentarios_mercosur").keyup(function() {
		//validar columna de concejales
		alertParlamentarios();
	});

	$("#subtotal_votos_agrupaciones_politicas_parlamentarios_mercosur").keyup(function() {
		//validar columna de concejales
		alertSubtotalParlamentarios();
	});

	$("#total_votos_agrupaciones_politicas_intendente").keyup(function() {
		//validar columna de concejales
		alertIntendente();
	});

	$("#total_votos_agrupaciones_politicas_gobernador").keyup(function() {
		//validar columna de concejales
		alertGobernador();
	});


	$.getJSON("client/loadPartidosPoliticos", function(provider) {

		listas_provinciales = [];


		var html_inner = "";

		$.each(provider, function(index, value) {
			var ap = value.descripcion;



			$.each(value.listaInterna, function(ind, val) {
				if (val.allowIntendente || val.allowLegProv || val.allowGobernador) {
					val.agrupacion = ap;
					listas_provinciales.push(val);
				}

				if (val.nro_orden < 32 && (val.allowDipNac || val.allowParlamentarios || val.allowSenadores || val.allowPresidente)) {

					html_inner = html_inner + '<tr class="detalle_registro_votos_nacionales_1">';




					html_inner = html_inner + '<th class="tg-yw4l">' + val.nro_lista + '</th>';//numero de lista

					html_inner = html_inner + '<th colspan="2" class="tg-yw4l aleft">' + ap + '</th>';//agrupacion politica

			//		html_inner = html_inner + '<th class="tg-yw4l aleft">' + val.descripcion + '</th>';//lista interna


					if (val.allowPresidente)

						html_inner = html_inner + '<th class="tg-yw4l"><input class="subtotal-presidente" type="text" style="width:150px;" id="li_presidente_' + val.idListaInterna + '" onkeyup="alertSubtotalPresidente()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//presidente

					else

						html_inner = html_inner + '<th class="tg-yw4l"></th>';



					if (val.allowParlamentarios)

						html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="subtotal-parlamentarios" type="text" style="width:150px;" id="li_parlamentarios_' + val.idListaInterna + '" onkeyup="alertSubtotalParlamentarios()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//diputados nacionales

					else

						html_inner = html_inner + '<th class="tg-yw4l"></th>';



					if (val.allowSenadores)

						html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="subtotal-senadores" type="text" style="width:150px;" id="li_senadores_' + val.idListaInterna + '" onkeyup="alertSubtotalSenadores()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//presidente

					else

						html_inner = html_inner + '<th class="tg-yw4l"></th>';



					if (val.allowDipNac)

						html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="subtotal-dip_nac" type="text" style="width:150px;" id="li_diputados_nacionales_' + val.idListaInterna + '" onkeyup="alertSubtotalDipNac()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//diputados nacionales

					else

						html_inner = html_inner + '<th class="tg-yw4l"></th>';



					if (val.allowParlamentariosMercosurReg)

						html_inner = html_inner + '<th class="tg-yw4l"><input class="subtotal-parla_reg" type="text" style="width:150px;" id="li_parlamentarios_regionales_' + val.idListaInterna + '" onkeyup="alertSubtotalParlamentRegionales()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//concejales

					else
						html_inner = html_inner + '<th class="tg-yw4l"></th>';


					/* 
							   
							   if(val.allowGobernador) //para gobernador
							    
									html_inner = html_inner + '<th class="tg-yw4l"><input  style:"display: none" class="gobernador" type="text" style="width:150px;" id="li_gobernador_'+val.idListaInterna+'" onkeyup="alertGobernador()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//diputados nacionales
							    
								else
								    
									html_inner = html_inner + '<th class="tg-yw4l"></th>';  
													    
												    
							    
								if(val.allowLegProv)
								    
									html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="leg_prov" type="text" style="width:150px;" id="li_legisladores_provinciales_'+val.idListaInterna+'" onkeyup="alertLegProv()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//legisladores provinciales
							    
								else
								    
									html_inner = html_inner + '<th class="tg-yw4l"></th>';
							    
							    
							   
								if(val.allowIntendente) //pensado para intendente
							    
									html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="intendente" type="text" style="width:150px;" id="li_intendente_'+val.idListaInterna+'" onkeyup="alertIntendente()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//diputados nacionales
							    
								else
								    
									html_inner = html_inner + '<th class="tg-yw4l"></th>';			*/

					html_inner = html_inner + '</tr>';

				}

			});
			// aca cierra el primer each


		});
		html_inner = html_inner + '<tr style="border-bottom: 3px #000 solid; background: #d0d0d0">' +
			'<th class="tg-yw4l aleft"  colspan="3">SUBTOTAL VOTOS AGRUPACIONES POLITICAS</th>' +
			'<td class="tg-yw4l"><input type="text" style="width:120px;" id="subtotal_votos_agrupaciones_politicas_presidente" onkeyup="alertSubtotalPresidente()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>' +
			'<td class="tg-yw4l"><input type="text" style="width:120px;" id="subtotal_votos_agrupaciones_politicas_parlamentarios_mercosur" onkeyup="alertSubtotalParlamentarios()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>' +
			'<td class="tg-yw4l"><input type="text" style="width:120px;" id="subtotal_votos_agrupaciones_politicas_senadores" onkeyup="alertSubtotalSenadores()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>' +
			'<td class="tg-yw4l"><input type="text" style="width:120px;" id="subtotal_votos_agrupaciones_politicas_diputados_nacionales" onkeyup="alertSubtotalDipNac()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>' +
			'<td class="tg-yw4l"><input type="text" style="width:120px;" id="subtotal_votos_agrupaciones_politicas_parlamentarios_regionales" onkeyup="alertSubtotalParlamentRegionales()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>' +
			'</tr>';


		$(html_inner).insertAfter("#tr_totales_label_nacionales_1");

		html_inner = "";
		$.each(provider, function(index, value) {
			var ap = value.descripcion;


			$.each(value.listaInterna, function(ind, val) {
				if (val.nro_orden > 31 && val.nro_orden < 48 && (val.allowDipNac || val.allowParlamentarios || val.allowSenadores || val.allowPresidente)) {

					html_inner = html_inner + '<tr class="detalle_registro_votos_nacionales_2">';




					html_inner = html_inner + '<th class="tg-yw4l">' + val.nro_lista + '</th>';//numero de lista

					html_inner = html_inner + '<th colspan="2" class="tg-yw4l aleft">' + ap + '</th>';//agrupacion politica

			//		html_inner = html_inner + '<th class="tg-yw4l aleft">' + val.descripcion + '</th>';//lista interna


					if (val.allowPresidente)

						html_inner = html_inner + '<th class="tg-yw4l"><input class="presidente" type="text" style="width:150px;" id="li_presidente_' + val.idListaInterna + '" onkeyup="alertPresidente()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//presidente

					else

						html_inner = html_inner + '<th class="tg-yw4l"></th>';



					if (val.allowParlamentarios)

						html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="parlamentarios" type="text" style="width:150px;" id="li_parlamentarios_' + val.idListaInterna + '" onkeyup="alertParlamentarios()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//diputados nacionales

					else

						html_inner = html_inner + '<th class="tg-yw4l"></th>';



					if (val.allowSenadores)

						html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="senadores" type="text" style="width:150px;" id="li_senadores_' + val.idListaInterna + '" onkeyup="alertSenadores()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//presidente

					else

						html_inner = html_inner + '<th class="tg-yw4l"></th>';



					if (val.allowDipNac)

						html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="dip_nac" type="text" style="width:150px;" id="li_diputados_nacionales_' + val.idListaInterna + '" onkeyup="alertDipNac()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//diputados nacionales

					else

						html_inner = html_inner + '<th class="tg-yw4l"></th>';



					if (val.allowParlamentariosMercosurReg)

						html_inner = html_inner + '<th class="tg-yw4l"><input class="parla_reg" type="text" style="width:150px;" id="li_parlamentarios_regionales_' + val.idListaInterna + '" onkeyup="alertParlamentRegionales()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//concejales

					else
						html_inner = html_inner + '<th class="tg-yw4l"></th>';


					/*  
								 
								 if(val.allowGobernador) //para gobernador
								  
									  html_inner = html_inner + '<th class="tg-yw4l"><input  style:"display: none" class="gobernador" type="text" style="width:150px;" id="li_gobernador_'+val.idListaInterna+'" onkeyup="alertGobernador()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//diputados nacionales
								  
								  else
									  
									  html_inner = html_inner + '<th class="tg-yw4l"></th>';  
														  
													  
								  
								  if(val.allowLegProv)
									  
									  html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="leg_prov" type="text" style="width:150px;" id="li_legisladores_provinciales_'+val.idListaInterna+'" onkeyup="alertLegProv()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//legisladores provinciales
								  
								  else
									  
									  html_inner = html_inner + '<th class="tg-yw4l"></th>';
								  
								  
								 
								  if(val.allowIntendente) //pensado para intendente
								  
									  html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="intendente" type="text" style="width:150px;" id="li_intendente_'+val.idListaInterna+'" onkeyup="alertIntendente()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//diputados nacionales
								  
								  else
									  
									  html_inner = html_inner + '<th class="tg-yw4l"></th>';
									  
									  */

					html_inner = html_inner + '</tr>';
				}

			});
			// aca cierra el primer each


		});
		$(html_inner).insertAfter("#tr_totales_label_nacionales_2");

		html_inner = "";							//insertar gobernadores
		listas_provinciales.sort(function(a, b) {
			return parseInt(a.nroOrdenPcial) - parseInt(b.nroOrdenPcial);
		});


		$.each(listas_provinciales, function(ind, val) {

			html_inner = html_inner + '<tr><tr class="detalle_registro_votos_provinciales">';




			html_inner = html_inner + '<th class="tg-yw4l">' + val.nro_lista + '</th>';//numero de lista

			html_inner = html_inner + '<th colspan="4" class="tg-yw4l aleft">' + val.agrupacion + '</th>';//agrupacion politica

	//		html_inner = html_inner + '<th colspan="3" class="tg-yw4l aleft">' + val.descripcion + '</th>';//lista interna



			if (val.allowGobernador) //para gobernador

				html_inner = html_inner + '<th class="tg-yw4l"><input  style:"display: none" class="gobernador" type="text" style="width:150px;" id="li_gobernador_' + val.idListaInterna + '" onkeyup="alertGobernador()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//diputados nacionales

			else

				html_inner = html_inner + '<th class="tg-yw4l"></th>';



			if (val.allowLegProv)

				html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="leg_prov" type="text" style="width:150px;" id="li_legisladores_provinciales_' + val.idListaInterna + '" onkeyup="alertLegProv()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//legisladores provinciales

			else

				html_inner = html_inner + '<th class="tg-yw4l"></th>';



			if (val.allowIntendente) //pensado para intendente

				html_inner = html_inner + '<th class="tg-yw4l"><input style:"display: none" class="intendente" type="text" style="width:150px;" id="li_intendente_' + val.idListaInterna + '" onkeyup="alertIntendente()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"></th>';//diputados nacionales

			else

				html_inner = html_inner + '<th class="tg-yw4l"></th>';



			html_inner = html_inner + '</tr></tr>';

		});
		// aca cierra el primer each



		$(html_inner).insertAfter("#tr_cargos_provinciales");


		$('.detalle_registro_votos_nacionales_1').find('input[type="text"]').prop('readonly', true);
		$('.detalle_registro_votos_nacionales_2').find('input[type="text"]').prop('readonly', true);
		$('.detalle_registro_votos_provinciales').find('input[type="text"]').prop('readonly', true);
		
		





	});



});






function cargar_mesa() {
	/*if($("#nro_circuito").val()=="")
	{
		$("#nro_circuito").focus();
		return false;
	}*/

	if ($("#nro_mesa").val() == "") {
		$("#nro_mesa").focus();
		return false;
	}


	$.getJSON("client/getInfoFromMesaCircuito?mesa=" + $("#nro_mesa").val(), function(provider) {

		if (!provider.success)
			bootbox.alert("La Mesa ingresada No Existe");
		else {
			//parsear la respuesta y actualizar la estructura de listas y el formulario

			$('.detalle_registro_votos_nacionales_1').find('input[type="text"]').prop('readonly', false);
			$('.detalle_registro_votos_nacionales_2').find('input[type="text"]').prop('readonly', false);
			$('.detalle_registro_votos_provinciales').find('input[type="text"]').prop('readonly', false);

			$(".dip_nac").val("0");
			$(".subtotal-dip_nac").val("0");
			$(".senadores").val("0");
			$(".subtotal-senadores").val("0");
			$(".leg_prov").val("0");
			$(".parla_reg").val("0");
			$(".subtotal-parla_reg").val("0");
			$(".presidente").val("0");
			$(".subtotal-presidente").val("0");
			$(".gobernador").val("0");
			$(".subtotal-parlamentarios").val("0");
			$(".intendente").val("0");


			$.each(provider.mesa.escrutinios, function(index, value) {

				$("#li_diputados_nacionales_" + value.idListaInterna).val(value.totalVotosDiputadosNacionales);
				$("#li_legisladores_provinciales_" + value.idListaInterna).val(value.totalVotosLegisladoresProvinciales);
				$("#li_concejales_" + value.idListaInterna).val(value.totalVotosConcejales);
				$("#li_presidente_" + value.idListaInterna).val(value.totalVotosPresidente);
				$("#li_gobernador_" + value.idListaInterna).val(value.totalVotosGobernador);
				$("#li_intendente_" + value.idListaInterna).val(value.totalVotosIntendente);
				$("#li_parlamentarios_" + value.idListaInterna).val(value.totalVotosParlamentariosMercosur);
				$("#li_parlamentarios_regionales_" + value.idListaInterna).val(value.totalVotosParlamentariosMercosurReg);

				$("#li_senadores_" + value.idListaInterna).val(value.totalVotosSenadores);


			});

			$("#ciudadanos_que_votaron_total").val(provider.mesa.totalVotosXIndividuo);

			$("#ciudadanos_que_votaron_total_letras").text(NumeroALetras(provider.mesa.totalVotosXIndividuo));

			$("#sobres_en_la_urna_total").val(provider.mesa.totalsobres);

			$("#sobres_en_la_urna_total_letras").text(NumeroALetras(provider.mesa.totalsobres));

			$("#diferencia_total").val(Math.abs(provider.mesa.totalVotosXIndividuo - provider.mesa.totalsobres));

			$("#diferencia_total_letras").text(NumeroALetras(Math.abs(provider.mesa.totalVotosXIndividuo - provider.mesa.totalsobres)));




			$("#total_votos_agrupaciones_politicas_diputados").val(provider.mesa.totalVotosDiputadosNacionales);
			$("#total_votos_agrupaciones_politicas_legisladores_provinciales").val(provider.mesa.totalVotosLegisladoresProvinciales);
			$("#total_votos_agrupaciones_politicas_parlamentarios_regionales").val(provider.mesa.totalVotosParlamentariosMercosurReg);
			$("#total_votos_agrupaciones_politicas_senadores").val(provider.mesa.totalVotosSenadores);
			$("#total_votos_agrupaciones_politicas_gobernador").val(provider.mesa.totalVotosGobernador);
			$("#total_votos_agrupaciones_politicas_parlamentarios_mercosur").val(provider.mesa.totalVotosParlamentariosMercosur);
			$("#total_votos_agrupaciones_politicas_intendente").val(provider.mesa.totalVotosIntendente);
			$("#total_votos_agrupaciones_politicas_presidente").val(provider.mesa.totalVotosPresidente);


			$("#total_votos_nulos_presidente").val(provider.mesa.totalVotosNulosPresidente);
			$("#total_votos_nulos_senadores").val(provider.mesa.totalVotosNulosSenadores);
			$("#total_votos_nulos_parlamentarios_mercosur").val(provider.mesa.totalVotosNulosParlamentariosMercosur);
			$("#total_votos_nulos_diputados_nacionales").val(provider.mesa.totalVotosNulosDiputadosNacionales);
			$("#total_votos_nulos_gobernador").val(provider.mesa.totalVotosNulosGobernador);
			$("#total_votos_nulos_legisladores_provinciales").val(provider.mesa.totalVotosNulosLegisladoresProvinciales);
			$("#total_votos_nulos_intendente").val(provider.mesa.totalVotosNulosIntendente);
			$("#total_votos_nulos_parlamentarios_regionales").val(provider.mesa.totalVotosNulosParlamentariosMercosurReg);

			$("#total_votos_recurridos_presidente").val(provider.mesa.totalVotosRecurridosPresidente);
			$("#total_votos_recurridos_senadores").val(provider.mesa.totalVotosRecurridosSenadores)
			$("#total_votos_recurridos_diputados_nacionales").val(provider.mesa.totalVotosRecurridosDiputadosNacionales);
			$("#total_votos_recurridos_parlamentarios_mercosur").val(provider.mesa.totalVotosRecurridosParlamentariosMercosur);
			$("#total_votos_recurridos_gobernador").val(provider.mesa.totalVotosRecurridosGobernador)
			$("#total_votos_recurridos_legisladores_provinciales").val(provider.mesa.totalVotosRecurridosLegisladoresProvinciales);
			$("#total_votos_recurridos_parlamentarios_regionales").val(provider.mesa.totalVotosRecurridosParlamentariosMercosurReg);
			$("#total_votos_recurridos_intendente").val(provider.mesa.totalVotosRecurridosIntendente);

			$("#total_votos_impugnados_presidente").val(provider.mesa.totalVotosImpugnadoPresidente);
			$("#total_votos_impugnados_senadores").val(provider.mesa.totalVotosImpugnadoLegisladoresProvinciales);
			$("#total_votos_impugnados_diputados_nacionales").val(provider.mesa.totalVotosImpugnadoDiputadosNacionales);
			$("#total_votos_impugnados_parlamentarios_mercosur").val(provider.mesa.totalVotosImpugnadoParlamentariosMercosur);
			$("#total_votos_impugnados_gobernador").val(provider.mesa.totalVotosImpugnadoGobernador);
			$("#total_votos_impugnados_legisladores_provinciales").val(provider.mesa.totalVotosImpugnadoLegisladoresProvinciales);
			$("#total_votos_impugnados_intendente").val(provider.mesa.totalVotosImpugnadoIntendente);
			$("#total_votos_impugnados_parlamentarios_regionales").val(provider.mesa.totalVotosImpugnadoParlamentariosMercosurReg);


			$("#total_votos_comando_electoral_presidente").val(provider.mesa.totalVotosBolsinPresidente);
			$("#total_votos_comando_electoral_senadores").val(provider.mesa.totalVotosBolsinSenadores);
			$("#total_votos_comando_electoral_diputados_nacionales").val(provider.mesa.totalVotosBolsinDiputadosNacionales);
			$("#total_votos_comando_electoral_parlamentarios_mercosur").val(provider.mesa.totalVotosBolsinParlamentariosMercosur);
			$("#total_votos_comando_electoral_gobernador").val(provider.mesa.totalVotosBolsinGobernador);
			$("#total_votos_comando_electoral_legisladores_provinciales").val(provider.mesa.totalVotosBolsinLegisladoresProvinciales);
			$("#total_votos_comando_electoral_intendente").val(provider.mesa.totalVotosBolsinIntendente);
			$("#total_votos_comando_electoral_parlamentarios_regionales").val(provider.mesa.totalVotosBolsinParlamentariosMercosurReg);


			$("#total_votos_en_blanco_presidente").val(provider.mesa.totalVotosBlancoPresidente);
			$("#total_votos_en_blanco_senadores").val(provider.mesa.totalVotosBlancoSenadores);
			$("#total_votos_en_blanco_diputados_nacionales").val(provider.mesa.totalVotosBlancoDiputadosNacionales);
			$("#total_votos_en_blanco_parlamentarios_mercosur").val(provider.mesa.totalVotosBlancoParlamentariosMercosur);
			$("#total_votos_en_blanco_gobernador").val(provider.mesa.totalVotosBlancoGobernador);
			$("#total_votos_en_blanco_legisladores_provinciales").val(provider.mesa.totalVotosBlancoLegisladoresProvinciales);
			$("#total_votos_en_blanco_intendente").val(provider.mesa.totalVotosBlancoIntendente);
			$("#total_votos_en_blanco_parlamentarios_regionales").val(provider.mesa.totalVotosBlancoParlamentariosMercosurReg);

			$("#total_votos_x_columna_presidente").val(provider.mesa.totalVotosXColumnaPresidente);
			$("#total_votos_x_columna_senadores").val(provider.mesa.totalVotosXColumnaSenadores);
			$("#total_votos_x_columna_diputados_nacionales").val(provider.mesa.totalXColumnaDiputadosNacionales);
			$("#total_votos_x_columna_parlamentarios_mercosur").val(provider.mesa.totalVotosXColumnaParlamentariosMercosur);
			$("#total_votos_x_columna_gobernador").val(provider.mesa.totalVotosXColumnaGobernador);
			$("#total_votos_x_columna_legisladores_provinciales").val(provider.mesa.totalXColumnaLegisladoresProvinciales);
			$("#total_votos_x_columna_intendente").val(provider.mesa.totalVotosXColumnaIntendente);
			$("#total_votos_x_columna_parlamentarios_regionales").val(provider.mesa.totalVotosXColumnaParlamentariosMercosurReg);


			$("#subtotal_votos_agrupaciones_politicas_presidente").val(subtotal_votos_presidente);
			$("#subtotal_votos_agrupaciones_politicas_parlamentarios_mercosur").val(subtotal_votos_parlamentarios);
			$("#subtotal_votos_agrupaciones_politicas_senadores").val(subtotal_votos_senadores);
			$("#subtotal_votos_agrupaciones_politicas_diputados_nacionales").val(subtotal_votos_dip_nac);
			$("#subtotal_votos_agrupaciones_politicas_parlamentarios_regionales").val(subtotal_votos_parlamentarios_reg);
			
			alertGobernador();
			alertDipNac();
			alertSubtotalDipNac();
			alertLegProv();
			alertSubtotalParlamentarios();
			alertParlamentRegionales();
			alertParlamentarios();
			alertSubtotalParlamentRegionales();
			alertSenadores();
			alertSubtotalSenadores();
			alertPresidente();
			alertSubtotalPresidente();
			alertIntendente();
		}

	});
}

function setParam(value) {
	if ($.trim(value) == "")
		return "0";
	else
		return value;

}

var stompClient = null;

function connect() {
	var socket = new SockJS('/12354854985/results-websocket');
	stompClient = Stomp.over(socket);
	stompClient.connect({}, function(frame) { console.log('Connected: ' + frame); });
}


/*	$(document).ready(function() {
  	var claseBuscada = 'miClase';
  
  	if ($('.' + claseBuscada).length > 0) {
    		console.log('Al menos un elemento tiene la clase ' + claseBuscada + '.');
  		} else {
    		console.log('Ningún elemento tiene la clase ' + claseBuscada + '.');
  		}
	}); */

function persistir_mesa() {
	/*stompClient.subscribe('/topic/messages', function (message) {

		response =JSON.parse(message.body)
		console.log (response);

		if($("#nro_mesa").val()==response.nroTable) {
				bootbox.alert("Se ha actualizado la mesa");
				$(".form-basic")[0].reset();
				$("#ciudadanos_que_votaron_total_letras").text("");
				$("#sobres_en_la_urna_total_letras").text("");
				$("#diferencia_total_letras").text("");
				$(".error_columna_totales").removeClass("error_columna_totales");
			 ///console.log(JSON.parse(message.body).totalMesas);
		}}
	 ) ;

	/*if($("#nro_circuito").val()=="")
	{
		$("#nro_circuito").focus();
		return false;
	}*/



	if ($("#nro_mesa").val() == "") {
		$("#nro_mesa").focus();
		return false;
	}


	var dataRequest = new Object();

	//dataRequest.circuito = $("#nro_circuito").val();
	dataRequest.mesa = $("#nro_mesa").val();


	dataRequest.ciudadanos_que_votaron_total = setParam($("#ciudadanos_que_votaron_total").val());
	dataRequest.sobres_en_la_urna_total = setParam($("#sobres_en_la_urna_total").val());
	dataRequest.diferencia_total = setParam($("#diferencia_total").val());



	dataRequest.total_votos_agrupaciones_politicas_diputados_nacionales = setParam($("#total_votos_agrupaciones_politicas_diputados").val());
	dataRequest.total_votos_agrupaciones_politicas_legisladores_provinciales = setParam($("#total_votos_agrupaciones_politicas_legisladores_provinciales").val());
	dataRequest.total_votos_agrupaciones_politicas_parlamentarios_mercosur = setParam($("#total_votos_agrupaciones_politicas_parlamentarios_mercosur").val());
	dataRequest.total_votos_agrupaciones_politicas_intendente = setParam($("#total_votos_agrupaciones_politicas_intendente").val());
	dataRequest.total_votos_agrupaciones_politicas_senadores = setParam($("#total_votos_agrupaciones_politicas_senadores").val());
	dataRequest.total_votos_agrupaciones_politicas_gobernador = setParam($("#total_votos_agrupaciones_politicas_gobernador").val());
	dataRequest.total_votos_agrupaciones_politicas_presidente = setParam($("#total_votos_agrupaciones_politicas_presidente").val());
	dataRequest.total_votos_agrupaciones_politicas_parlamentarios_regionales = setParam($("#total_votos_agrupaciones_politicas_parlamentarios_regionales").val());



	dataRequest.total_votos_nulos_diputados_nacionales = setParam($("#total_votos_nulos_diputados_nacionales").val());
	dataRequest.total_votos_nulos_legisladores_provinciales = setParam($("#total_votos_nulos_legisladores_provinciales").val());
	dataRequest.total_votos_nulos_parlamentarios_mercosur = setParam($("#total_votos_nulos_parlamentarios_mercosur").val());
	dataRequest.total_votos_nulos_presidente = setParam($("#total_votos_nulos_presidente").val());
	dataRequest.total_votos_nulos_senadores = setParam($("#total_votos_nulos_senadores").val());
	dataRequest.total_votos_nulos_parlamentarios_regionales = setParam($("#total_votos_nulos_parlamentarios_regionales").val());
	dataRequest.total_votos_nulos_gobernador = setParam($("#total_votos_nulos_gobernador").val());
	dataRequest.total_votos_nulos_intendente = setParam($("#total_votos_nulos_intendente").val());



	dataRequest.total_votos_recurridos_diputados_nacionales = setParam($("#total_votos_recurridos_diputados_nacionales").val());
	dataRequest.total_votos_recurridos_legisladores_provinciales = setParam($("#total_votos_recurridos_legisladores_provinciales").val());
	dataRequest.total_votos_recurridos_parlamentarios_mercosur = setParam($("#total_votos_recurridos_parlamentarios_mercosur").val());
	dataRequest.total_votos_recurridos_presidente = setParam($("#total_votos_recurridos_presidente").val());
	dataRequest.total_votos_recurridos_gobernador = setParam($("#total_votos_recurridos_gobernador").val());
	dataRequest.total_votos_recurridos_parlamentarios_regionales = setParam($("#total_votos_recurridos_parlamentarios_regionales").val());
	dataRequest.total_votos_recurridos_intendente = setParam($("#total_votos_recurridos_intendente").val());
	dataRequest.total_votos_recurridos_senadores = setParam($("#total_votos_recurridos_senadores").val());


	dataRequest.total_votos_impugnados_diputados_nacionales = setParam($("#total_votos_impugnados_diputados_nacionales").val());
	dataRequest.total_votos_impugnados_legisladores_provinciales = setParam($("#total_votos_impugnados_legisladores_provinciales").val());
	dataRequest.total_votos_impugnados_parlamentarios_mercosur = setParam($("#total_votos_impugnados_parlamentarios_mercosur").val());
	dataRequest.total_votos_impugnados_presidente = setParam($("#total_votos_impugnados_presidente").val()); //
	dataRequest.total_votos_impugnados_parlamentarios_regionales = setParam($("#total_votos_impugnados_parlamentarios_regionales").val());
	dataRequest.total_votos_impugnados_gobernador = setParam($("#total_votos_impugnados_gobernador").val());
	dataRequest.total_votos_impugnados_intendente = setParam($("#total_votos_impugnados_intendente").val());
	dataRequest.total_votos_impugnados_senadores = setParam($("#total_votos_impugnados_senadores").val());


	dataRequest.total_votos_comando_electoral_diputados_nacionales = setParam($("#total_votos_comando_electoral_diputados_nacionales").val());
	dataRequest.total_votos_comando_electoral_legisladores_provinciales = setParam($("#total_votos_comando_electoral_legisladores_provinciales").val());
	dataRequest.total_votos_comando_electoral_parlamentarios_mercosur = setParam($("#total_votos_comando_electoral_parlamentarios_mercosur").val());
	dataRequest.total_votos_comando_electoral_presidente = setParam($("#total_votos_comando_electoral_presidente").val());
	dataRequest.total_votos_comando_electoral_senadores = setParam($("#total_votos_comando_electoral_senadores").val());
	dataRequest.total_votos_comando_electoral_parlamentarios_regionales = setParam($("#total_votos_comando_electoral_parlamentarios_regionales").val());
	dataRequest.total_votos_comando_electoral_gobernador = setParam($("#total_votos_comando_electoral_gobernador").val());
	dataRequest.total_votos_comando_electoral_intendente = setParam($("#total_votos_comando_electoral_presidente").val());

	dataRequest.total_votos_en_blanco_diputados_nacionales = setParam($("#total_votos_en_blanco_diputados_nacionales").val());
	dataRequest.total_votos_en_blanco_legisladores_provinciales = setParam($("#total_votos_en_blanco_legisladores_provinciales").val());
	dataRequest.total_votos_en_blanco_parlamentarios_mercosur = setParam($("#total_votos_en_blanco_parlamentarios_mercosur").val());
	dataRequest.total_votos_en_blanco_presidente = setParam($("#total_votos_en_blanco_presidente").val());
	dataRequest.total_votos_en_blanco_senadores = setParam($("#total_votos_en_blanco_senadores").val());
	dataRequest.total_votos_en_blanco_parlamentarios_regionales = setParam($("#total_votos_en_blanco_parlamentarios_regionales").val());
	dataRequest.total_votos_en_blanco_gobernador = setParam($("#total_votos_en_blanco_gobernador").val());
	dataRequest.total_votos_en_blanco_intendente = setParam($("#total_votos_en_blanco_intendente").val());


	dataRequest.total_votos_x_columna_diputados_nacionales = setParam($("#total_votos_x_columna_diputados_nacionales").val());
	dataRequest.total_votos_x_columna_legisladores_provinciales = setParam($("#total_votos_x_columna_legisladores_provinciales").val());
	dataRequest.total_votos_x_columna_parlamentarios_mercosur = setParam($("#total_votos_x_columna_parlamentarios_mercosur").val());
	dataRequest.total_votos_x_columna_presidente = setParam($("#total_votos_x_columna_presidente").val());
	dataRequest.total_votos_x_columna_senadores = setParam($("#total_votos_x_columna_senadores").val());
	dataRequest.total_votos_x_columna_parlamentarios_regionales = setParam($("#total_votos_x_columna_parlamentarios_regionales").val());
	dataRequest.total_votos_x_columna_gobernador = setParam($("#total_votos_x_columna_gobernador").val());
	dataRequest.total_votos_x_columna_intendente = setParam($("#total_votos_x_columna_intendente").val());




	var escrutinio_detalle = [];

	$(".detalle_registro_votos_nacionales_1").each(function(index) {
		var detalle = new Object();
		var input_text = $(this).find('input[type="text"]:first').attr("id");

		if (input_text) {
			detalle.lista_interna = input_text.match(/\d+$/)[0];
			
			detalle.senadores =  setParam($(this).find(".subtotal-senadores").val());
			detalle.diputados_nacionales = setParam($(this).find(".subtotal-dip_nac").val());
			detalle.presidente = setParam($(this).find(".subtotal-presidente").val());
			detalle.parlamentarios_mercosur = setParam($(this).find(".subtotal-parlamentarios").val());
			detalle.parlamentarios_regionales = setParam($(this).find(".subtotal-parla_reg").val());
			detalle.legisladores_provinciales = 0;
			detalle.intendente = 0;
			detalle .gobernador = 0;

			escrutinio_detalle.push(detalle);

		};
		});
		
	   
	   $(".detalle_registro_votos_nacionales_2").each(function(index) {
		var detalle = new Object();
		var input_text = $(this).find('input[type="text"]:first').attr("id");

		if (input_text) {
			detalle.lista_interna = input_text.match(/\d+$/)[0];
			
			detalle.senadores = setParam($(this).find(".senadores").val()) ;
			detalle.diputados_nacionales = setParam($(this).find(".dip_nac").val());
			detalle.presidente = setParam($(this).find(".presidente").val());
			detalle.parlamentarios_mercosur = setParam($(this).find(".parlamentarios").val());
			detalle.parlamentarios_regionales = setParam($(this).find(".parla_reg").val());
			detalle.legisladores_provinciales = 0;
			detalle.intendente = 0;
			detalle .gobernador = 0;
			escrutinio_detalle.push(detalle);

		}
		});		
		
	$(".detalle_registro_votos_provinciales").each(function(index) {
		var input_text = $(this).find('input[type="text"]:first').attr("id");

		if (input_text) {
			foundDetalle = escrutinio_detalle.find(detalle => detalle.lista_interna == input_text.match(/\d+$/)[0]);
			if (foundDetalle){
				foundDetalle.legisladores_provinciales = setParam($(this).find(".leg_prov").val());
				foundDetalle.intendente = setParam($(this).find(".intendente").val());
				foundDetalle .gobernador = setParam($(this).find(".gobernador").val());
					
			}
			else {
				var detalle = new Object();
				detalle.lista_interna = input_text.match(/\d+$/)[0];
				detalle.senadores = 0;
				detalle.diputados_nacionales = 0;
				detalle.legisladores_provinciales = setParam($(this).find(".leg_prov").val());
				detalle.intendente = setParam($(this).find(".intendente").val());
				detalle.presidente = 0;
				detalle.gobernador = setParam($(this).find(".gobernador").val());
				detalle.parlamentarios_mercosur = 0;
				detalle.parlamentarios_regionales =0;
   			    escrutinio_detalle.push(detalle);
				}
	

		}		
		
	});
		

		/*if($(this).find(".dip_nac").length > 0)
			detalle.lista_interna = $( this ).find(".dip_nac").attr("id").replace("li_diputados_nacionales_","");
		else
			{
							   
	
							
					if($( this ).find(".leg_prov").length > 0)
						detalle.lista_interna = $( this ).find(".leg_prov").attr("id").replace("li_legisladores_provinciales_","");
					else
						{
							if($( this ).find(".concej").length > 0)
											
								   detalle.lista_interna = $( this ).find(".concej").attr("id").replace("li_concejales_","");
						}
							
	
			}*/








	dataRequest.escrutinio_detalle = escrutinio_detalle;


	/*console.log(JSON.stringify(dataRequest));
	stompClient.send("/12354854985/updateMesa", {}, JSON.stringify(dataRequest));*/

	$.ajax({
		type: "POST",
		url: "client/updateMesa",
		data: JSON.stringify(dataRequest),
		contentType: 'application/json',
		success: function(data) {
			if (!data.existe_mesa)
				bootbox.alert("La Mesa ingresada No Existe");
			else {
				bootbox.alert("Se ha actualizado la mesa");

				$(".form-basic")[0].reset();

				$("#ciudadanos_que_votaron_total_letras").text("");

				$("#sobres_en_la_urna_total_letras").text("");

				$("#diferencia_total_letras").text("");

				$(".error_columna_totales").removeClass("error_columna_totales");


			}

		}
	});

}




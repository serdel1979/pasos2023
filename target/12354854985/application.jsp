<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Municipalidad de Tres de Febrero - Elecciones Generales 2021</title>
        <!-- CSS -->
		<link href="<c:url value="/resources/bootstrap/css/bootstrap.min.css" />" rel="stylesheet"  type="text/css" />
        
        <link href="<c:url value="/resources/css/demo.css" />" rel="stylesheet"  type="text/css" />
        <link href="<c:url value="/resources/css/form-basic.css" />" rel="stylesheet"  type="text/css" />
 		<link href="<c:url value="/resources/css/style.css" />" rel="stylesheet"  type="text/css" />



    </head>
    
    
    
    
    <body>
            <div class="main-content">

	        <!-- You only need this form and the form-basic.css -->
	
	        <form class="form-basic">
	
				<div class="principal">
					
					<div id="principal_descripcion">
					<img src="./resources/img/escudo.jpg">
	
					JUZGADO FEDERAL CON COMPETENCIA ELECTORAL<br>DISTRITO BUENOS AIRES<br><div class="texto_no_resaltado">ELECCIONES PRIMARIAS, ABIERTAS, SIMULTANEAS Y OBLIGATORIAS DEL 13/08/2023</div><br><div class="texto_resaltado_grande">CERTIFICADO DE ESCRUTINIO</div>
	
					</div>
					<div id="principal_circuito_mesa">
					<div class="texto_no_resaltado">SECCION ELECTORAL</div><br>
					<div style="margin-bottom: 5px;">118 - TRES DE FEBRERO</div>
					<!-- span class="texto_no_resaltado">CIRCUITO<input id="nro_circuito" type="text" onkeypress='if(event.charCode==13) $("#b_cargar_mesa").click();return event.charCode >= 48 && event.charCode <= 57' /></span -->
					<span class="texto_no_resaltado">MESA <input id="nro_mesa" type="text" onkeypress='if(event.charCode==13) $("#b_cargar_mesa").click();return event.charCode >= 48 && event.charCode <= 57' type="text" /></span>
					<a id="b_cargar_mesa" onclick="cargar_mesa()" style="color:#39bd44">Cargar</a>	
					</div>
					
					
					<div style="width: 100%;height: 100%;float: left;">
						<div style="width: 100%;padding:5px;">
							<table class="tg">
							
							  <col width="396">
							  <col width="304">
							  <col width="182">
							  <col width="334">
							
							  <tr>
								<th class="tg-yw4l" rowspan="4" style="padding-top:20px;font:bold 14px sans-serif;">SE&#209;OR PRESIDENTE: INTRODUCIR UNO EN LA<br>URNA Y ENTREGAR OTRO IGUAL A CADA UNO<br>DE LOS FISCALES QUE LO SOLICITEN</th>
								<th class="tg-031e"></th>
								<th class="tg-031e">En Numeros</th>
								<th class="tg-031e">En Letras</th>
							  </tr>
							  <tr>
								<td class="tg-yw4l">Cantidad de ciudadanos que han votado</td>
								<td class="tg-yw4l"><input type="text" style="width:150px;" id="ciudadanos_que_votaron_total" onkeypress='return event.charCode >= 48 && event.charCode <= 57'/></td>
								<td class="tg-yw4l" id = "ciudadanos_que_votaron_total_letras"></td>
							  </tr>
							  <tr>
								<td class="tg-yw4l">Cantidad de sobres utilizados en la urna</td>
								<td class="tg-yw4l"><input type="text" style="width:150px;" id="sobres_en_la_urna_total" onkeypress='return event.charCode >= 48 && event.charCode <= 57' /></td>
								<td class="tg-yw4l" id = "sobres_en_la_urna_total_letras"></td>
							  </tr>
							  <tr>
								<td class="tg-yw4l">Diferencia</td>
								<td class="tg-yw4l"><input type="text" style="width:150px;" id="diferencia_total" onkeypress='return event.charCode >= 48 && event.charCode <= 57' /></td>
								<td class="tg-yw4l" id = "diferencia_total_letras"></td>
							  </tr>
							</table>
						</div>
						<span style="font-size:12px;">CERTIFICO:en mi caracter de presidente de esta mesa, de acuerdo con lo establecido con el art. 102 del C&oacute;digo Electoral Nacional que el escrutinio arroj&oacute; los siguientes resultados:</span>
						<div style="width: 100%;padding:5px;">
							<table class="tg">
							  
							  <col width="20">
							  <!-- col width="340" -->
							  <!--col width="304"-->
							  
							  <col width="1288"> <!--unifica las 2 columnas para las generales-->
							  
							  <col width="100">
							  <col width="100">
							  <col width="156">

							  <tr>
								<th class="tg-031e" rowspan="2">N&deg;</th>
								<th class="tg-031e agrupaciones-politicas" rowspan="2">AGRUPACIONES POLITICAS</th>
								<th class="tg-031e" rowspan="2">LISTAS INTERNAS</th>

								
								<th class="tg-031e">Presidente <br> Vicepresidente</th>
								<th class="tg-031e">Parlamentarios <br>del mercosur <br> nacional (D.N)</th>
								<th class="tg-031e">Senadores <br> Nacionales</th>
								<th class="tg-031e">Diputados <br> Nacionales</th>
								<th class="tg-031e">Parlamentarios <br>del mercosur <br> regional (D.N)</th>
								
							<!--  
								
								<th class="tg-031e">Gobernador</th>
								<th class="tg-031e">Legisladores <br> Provinciales</th>
								<th class="tg-031e">Intendente <br> concejales y <br> consejeros escolares </th>
								
								-->	

							  </tr>
							  <tr id="tr_totales_label_nacionales_1">
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								
							<!--  	
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								
								-->
							  </tr>
							  
							  <!-- tr>
								<th class="tg-031e cellempty"></th>
								<th class="tg-031e cellempty"></th>
								<th class="tg-031e cellempty"></th>

								<th class="tg-031e cellempty" rowspan="3"></th>
								<th class="tg-031e cellempty" rowspan="3"></th>
								<th class="tg-031e cellempty" rowspan="3"></th>
							  </tr>
							  <tr>
								<td class="tg-031e cellempty"></td>
								<td class="tg-031e cellempty"></td>
								<td class="tg-031e cellempty"></td>
							  </tr>
							  <tr>
								<td class="tg-yw4l cellempty"></td>
								<td class="tg-yw4l cellempty"></td>
								<td class="tg-yw4l cellempty"></td>
							  </tr-->
							  
							  <!--  Duplicado -->
							  <tr>
								<th class="tg-031e" rowspan="2">N&deg;</th>
								<th class="tg-031e agrupaciones-politicas" rowspan="2">AGRUPACIONES POLITICAS</th>
								<th class="tg-031e" rowspan="2">LISTAS INTERNAS</th>

								
								<th class="tg-031e">Presidente <br> Vicepresidente</th>
								<th class="tg-031e">Parlamentarios <br>del mercosur <br> nacional (D.N)</th>
								<th class="tg-031e">Senadores <br> Nacionales</th>
								<th class="tg-031e">Diputados <br> Nacionales</th>
								<th class="tg-031e">Parlamentarios <br>del mercosur <br> regional (D.N)</th>
								
							<!--  	
								<th class="tg-031e">Gobernador</th>
								<th class="tg-031e">Legisladores <br> Provinciales</th>
								<th class="tg-031e">Intendente <br> concejales y <br> consejeros escolares </th>
							-->
							  </tr>
							 
							  <tr id="tr_totales_label_nacionales_2">
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								
							<!-- ACA 
							  <tr style="border-bottom: 3px #000 solid;">
								  <tr colspan="3">
									<td colspan="5" class="tg-yw4l aleft" >TOTAL VOTOS AGRUPACIONES POLITICAS:</td>
									<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_gobernador" onkeyup="total_votos_gobernador()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
									<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_legisladores_provinciales" onkeyup="total_votos_leg_prov()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
									<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_intendente" onkeyup="alertIntendente()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
									
								  </tr>	
							
							<!--  
							
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_gobernador" onkeyup="total_votos_gobernador()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_legisladores_provinciales" onkeyup="total_votos_leg_prov()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_intendente" onkeyup="alertIntendente()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
							-->	
							  </tr>
							  <td class="tg-yw4l aleft" colspan="3">TOTAL VOTOS AGRUPACIONES POLITICAS</td>
								<td class="tg-yw4l">
								<input type="text" style="width:120px;" onkeyup="alertPresidente()" id="total_votos_agrupaciones_politicas_presidente" />
								</td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" onkeyup="alertParlamentarios()" id="total_votos_agrupaciones_politicas_parlamentarios_mercosur" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" onkeyup="alertSenadores()" id="total_votos_agrupaciones_politicas_senadores" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" onkeyup="alertDipNac()" id="total_votos_agrupaciones_politicas_diputados" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" onkeyup="alertParlamentRegionales()" id="total_votos_agrupaciones_politicas_parlamentarios_regionales" /></td>

							  </tr>
							  <tr>
								<td class="tg-yw4l aleft" colspan="3">VOTOS NULOS</td>

								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_presidente" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_parlamentarios_mercosur" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_senadores" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_diputados" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_parlamentarios_regionales" /></td>
								
								<!--  
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_intendente" /></td>
								
								
							  
							  </tr>
							  <tr>
								<td class="tg-yw4l aleft" colspan="3">VOTOS RECURRIDOS QUE SE REMITEN EN SOBRE Nro. 3</td>
							  	<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_presidente" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_parlamentarios_mercosurs" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_senadores" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_diputados" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_parlamentarios_regionales" /></td>
								
							<!--  	
							  	<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_intendente" /></td>
								
								-->
								
							  </tr>
							  <tr>
							  	<td class="tg-yw4l aleft" colspan="3">VOTOS DE INDENTIDAD IMPUGNADA QUE SE REMITEN ES SOBRE Nro. 3 </td>
							  	<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_presidente" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_parlamentarios_mercosurs" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_senadores" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_diputados" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_parlamentarios_regionales" /></td>
							
							<!--  	
							  	<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_intendente" /></td>
								-->
							  </tr>
							  <tr>
								<td class="tg-yw4l aleft" colspan="3">VOTOS DEL COMANDO ELECTORAL QUE SE REMITEN EN EL BOLSIN</td>
								
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_presidente" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_parlamentarios_mercosurs" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_senadores" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_diputados" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_parlamentarios_regionales" /></td>
								
							<!--  	
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_intendente" /></td>
								
								-->
							  </tr>
							  <tr style="border-bottom: 3px #000 solid;">
							  <td class="tg-yw4l aleft" colspan="3">VOTOS EN BLANCO</td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_presidente" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_parlamentarios_mercosur" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_senadores" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_diputados" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_parlamentarios_regionales" /></td>
								<!--  
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_intendente" /></td>
								-->
							  </tr>
							  <tr style="border-bottom: 3px #000 solid;">
							  <td class="tg-yw4l aleft" colspan="3">TOTAL POR COLUMNAS</td>
								<td class="tg-yw4l">
								<input type="text" style="width:120px;" id="total_votos_x_columna_presidente" />
								</td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_parlamentarios_mercosur" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_senadores" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_diputados" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_parlamentarios_regionales" /></td>
								<!--  
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_intendente" /></td>
								-->
							  </tr>
													  
							  <tr>
								<td colspan="11">(*) SR. PRESIDENTE: LA SUMA DE LOS TOTALES POR COLUMNA DEBERA COINCIDIR CON LA CANTIDAD DE SOBRES UTILIZADOS EN LA URNA</td>
								
							  </tr>
							 
							
							
							 -->	
								
							<!--  	
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
								<td class="tg-031e">Total de votos de la lista</td>
							  
							  -->
							  
							  </tr>
							  <tr id="tr_cargos_provinciales">
								<th class="tg-031e" rowspan="2">N&deg;</th>
								<th class="tg-031e agrupaciones-politicas"  rowspan="2">AGRUPACIONES POLITICAS</th>
								<th class="tg-031e" colspan="3" rowspan="2">LISTAS INTERNAS</th>
								<th class="tg-031e"  rowspan="2">Gobernador</th>
								<th class="tg-031e"  rowspan="2">Legisladores <br> Provinciales</th>
								<th class="tg-031e"  rowspan="2">Intendente <br> concejales y <br> consejeros escolares </th>
							
							  </tr>
							  
							  
							  <tr style="border-bottom: 3px #000 solid;">
								  <tr colspan="3">
									<td colspan="5" class="tg-yw4l aleft" >TOTAL VOTOS AGRUPACIONES POLITICAS:</td>
									<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_gobernador" onkeyup="total_votos_gobernador()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
									<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_legisladores_provinciales" onkeyup="total_votos_leg_prov()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
									<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_intendente" onkeyup="alertIntendente()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
									
								  </tr>	
							
							<!--  
							
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_gobernador" onkeyup="total_votos_gobernador()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_legisladores_provinciales" onkeyup="total_votos_leg_prov()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_agrupaciones_politicas_intendente" onkeyup="alertIntendente()" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" /></td>
							-->	
							  </tr>
							  <tr>
								<td class="tg-yw4l aleft" colspan="5">VOTOS NULOS</td>

								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_intendente" /></td>
								
								<!--  
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_nulos_intendente" /></td>
								
								-->
							  
							  </tr>
							  <tr>
								<td class="tg-yw4l aleft" colspan="5">VOTOS RECURRIDOS QUE SE REMITEN EN SOBRE Nro. 3</td>
							  	<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_intendente" /></td>
								
							<!--  	
							  	<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_recurridos_intendente" /></td>
								
								-->
								
							  </tr>
							  <tr>
							  	<td class="tg-yw4l aleft" colspan="5">VOTOS DE INDENTIDAD IMPUGNADA QUE SE REMITEN ES SOBRE Nro. 3 </td>
							  	<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_intendente" /></td>
							
							<!--  	
							  	<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_impugnados_intendente" /></td>
								-->
							  </tr>
							  <tr>
								<td class="tg-yw4l aleft" colspan="5">VOTOS DEL COMANDO ELECTORAL QUE SE REMITEN EN EL BOLSIN</td>
								
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_intendente" /></td>
								
							<!--  	
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_comando_electoral_intendente" /></td>
								
								-->
							  </tr>
							  <tr style="border-bottom: 3px #000 solid;">
							  <td class="tg-yw4l aleft" colspan="5">VOTOS EN BLANCO</td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_intendente" /></td>
								
								<!--  
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_en_blanco_intendente" /></td>
								-->
							  </tr>
							  <tr style="border-bottom: 3px #000 solid;">
							  <td class="tg-yw4l aleft" colspan="5">TOTAL POR COLUMNAS</td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_intendente" /></td>
								<!--  
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_gobernador" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_legisladores_provinciales" /></td>
								<td class="tg-yw4l"><input type="text" style="width:120px;" id="total_votos_x_columna_intendente" /></td>
								-->
							  </tr>
													  
							  <tr>
								<td colspan="11">(*) SR. PRESIDENTE: LA SUMA DE LOS TOTALES POR COLUMNA DEBERA COINCIDIR CON LA CANTIDAD DE SOBRES UTILIZADOS EN LA URNA</td>
								
							  </tr>
							  
							  
							</table>
							
							
						</div>
						<div style="width: 100%;padding:5px;">
							    <button type="button" class="btn btn-primary" onclick="persistir_mesa()">Actualizar Mesa</button>
							
							    <sec:authorize access="checkAccess('ADMIN')">
							        <div style="display: flex;">
    								     <button type="button" class="btn btn-primary" onclick="descargar()">Descargar Detalle de Mesas cargadas</button>
    								     <button type="button" class="btn btn-primary" onclick="window.location=window.location.href +'dashboard'">Ver Resultados</button>
							    
							        </div>
							    </sec:authorize>
							
							
						</div>
						
					</div>
				
				</div>
	
	
	
	  
	
	        </form>
	
		</div>

		
        <!-- Javascript -->
		<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.11.1.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/resources/bootstrap/js/bootstrap.min.js" />"></script>

		<script type="text/javascript" src="<c:url value="/resources/js/bootbox.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/resources/js/NumeroALetras.js" />"></script>
		<script type="text/javascript" src="<c:url value="/resources/js/scripts.js" />"></script>
		<script type="text/javascript" src="<c:url value="/resources/js/sockjs.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/resources/js/stomp.min.js" />"></script>
		<!--  script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script-->


    </body>
</html>
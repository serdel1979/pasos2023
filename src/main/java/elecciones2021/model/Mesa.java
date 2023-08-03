package elecciones2021.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="mesa", schema="elecciones")
public class Mesa implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
	@Column(name = "id_mesa")
	private int idMesa;
	
	@Column(name = "circuito")
	private String circuito;

	@Column(name = "mesa")
	private int mesa;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "fecha_de_carga", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
	private Date fecha;
	
	public Date getFecha() {
		return fecha;
	}
	
	public void setFecha(Date fecha)
	{
		this.fecha = fecha;
	}

	

	@Column(name = "total_votos_blanco_diputados_nacionales", columnDefinition = "integer default 0")
	private int totalVotosBlancoDiputadosNacionales;


	@Column(name = "total_votos_blanco_legisladores_provinciales", columnDefinition = "integer default 0")
	private int totalVotosBlancoLegisladoresProvinciales;
	
	@Column(name = "total_votos_blanco_concejales", columnDefinition = "integer default 0")
	private int totalVotosBlancoConcejales;
	
	@Column(name = "total_votos_blanco_intendente", columnDefinition = "integer default 0")
	private int totalVotosBlancoIntendente;
	
	@Column(name = "total_votos_blanco_gobernador", columnDefinition = "integer default 0")
	private int totalVotosBlancoGobernador;
	
	@Column(name = "total_votos_blanco_parlamentarios_mercosur", columnDefinition = "integer default 0")
	private int totalVotosBlancoParlamentariosMercosur;
	
	@Column(name = "total_votos_blanco_presidente", columnDefinition = "integer default 0")
	private int totalVotosBlancoPresidente;
	
	@Column(name = "total_votos_blanco_senadores", columnDefinition = "integer default 0")
	private int totalVotosBlancoSenadores;
	
	
	@Column(name = "total_votos_impugnado_diputados_nacionales", columnDefinition = "integer default 0")
	private int totalVotosImpugnadoDiputadosNacionales;

	
	@Column(name = "total_votos_impugnado_legisladores_provinciales", columnDefinition = "integer default 0")
	private int totalVotosImpugnadoLegisladoresProvinciales;
	
	@Column(name = "total_votos_impugnado_concejales", columnDefinition = "integer default 0")
	private int totalVotosImpugnadoConcejales;
	
	@Column(name = "total_votos_impugnado_senadores", columnDefinition = "integer default 0")
	private int totalVotosImpugnadoSenadores;
	
	@Column(name = "total_votos_impugnado_intendente", columnDefinition = "integer default 0")
	private int totalVotosImpugnadoIntendente;
	
	@Column(name = "total_votos_impugnado_parlamentarios_mercosur", columnDefinition = "integer default 0")
	private int totalVotosImpugnadoParlamentariosMercosur;
	
	@Column(name = "total_votos_impugnado_presidente", columnDefinition = "integer default 0")
	private int totalVotosImpugnadoPresidente;
	
	@Column(name = "total_votos_impugnado_gobernador", columnDefinition = "integer default 0")
	private int totalVotosImpugnadoGobernador;
	
	
	@Column(name = "total_votos_nulos_diputados_nacionales", columnDefinition = "integer default 0")
	private int totalVotosNulosDiputadosNacionales;
	
	@Column(name = "total_votos_nulos_legisladores_provinciales", columnDefinition = "integer default 0")
	private int totalVotosNulosLegisladoresProvinciales;
	
	@Column(name = "total_votos_nulos_senadores", columnDefinition = "integer default 0")
	private int totalVotosNulosSenadores;
	
	@Column(name = "total_votos_nulos_intendente", columnDefinition = "integer default 0")
	private int totalVotosNulosIntendente;
	
	@Column(name = "total_votos_nulos_presidente", columnDefinition = "integer default 0")
	private int totalVotosNulosPresidente;
	
	@Column(name = "total_votos_nulos_gobernador", columnDefinition = "integer default 0")
	private int totalVotosNulosGobernador;
	
	
	@Column(name = "total_votos_nulos_parlamentarios_mercosur", columnDefinition = "integer default 0")
	private int totalVotosNulosParlamentariosMercosur;
	
	
	@Column(name = "total_votos_nulos_concejales", columnDefinition = "integer default 0")
	private int totalVotosNulosConcejales;

	
	
	@Column(name = "total_votos_individuos", columnDefinition = "integer default 0")
	private int totalVotosXIndividuo;

	@Column(name = "total_sobres", columnDefinition = "integer default 0")
	private int totalsobres;





	@Column(name = "total_x_col_diputados_nacionales", columnDefinition = "integer default 0")
	private int totalXColumnaDiputadosNacionales;
	
	@Column(name = "total_x_col_legisladores_provinciales", columnDefinition = "integer default 0")
	private int totalXColumnaLegisladoresProvinciales;
	
	@Column(name = "total_x_col_concejales", columnDefinition = "integer default 0")
	private int totalVotosXColumnaConcejales;
	
	@Column(name = "total_x_col_senadores", columnDefinition = "integer default 0")
	private int totalVotosXColumnaSenadores;
	
	
	@Column(name = "total_x_col_parlamentarios_mercosur", columnDefinition = "integer default 0")
	private int totalVotosXColumnaParlamentariosMercosur;
	
	@Column(name = "total_x_col_presidente", columnDefinition = "integer default 0")
	private int totalVotosXColumnaPresidente;
	
	@Column(name = "total_x_col_gobernador", columnDefinition = "integer default 0")
	private int totalVotosXColumnaGobernador;
	
	@Column(name = "total_x_col_intendente", columnDefinition = "integer default 0")
	private int totalVotosXColumnaIntendente;
	
	
	
	@Column(name = "total_votos_recurridos_diputados_nacionales", columnDefinition = "integer default 0")
	private int totalVotosRecurridosDiputadosNacionales;

	@Column(name = "total_votos_recurridos_legisladores_provinciales", columnDefinition = "integer default 0")
	private int totalVotosRecurridosLegisladoresProvinciales;
	
	@Column(name = "total_votos_recurridos_concejales", columnDefinition = "integer default 0")
	private int totalVotosRecurridosConcejales;
	
	
	@Column(name = "total_votos_recurridos_senadores", columnDefinition = "integer default 0")
	private int totalVotosRecurridosSenadores;
	
	@Column(name = "total_votos_recurridos_gobernador", columnDefinition = "integer default 0")
	private int totalVotosRecurridosGobernador;
	
	
	@Column(name = "total_votos_recurridos_parlamentario_mercosur", columnDefinition = "integer default 0")
	private int totalVotosRecurridosParlamentariosMercosur;
	
	@Column(name = "total_votos_recurridos_intendente", columnDefinition = "integer default 0")
	private int totalVotosRecurridosIntendente;
	
	@Column(name = "total_votos_recurridos_presidente", columnDefinition = "integer default 0")
	private int totalVotosRecurridosPresidente;
	

	@Column(name = "total_votos_diputados_nacionales", columnDefinition = "integer default 0")
	private int totalVotosDiputadosNacionales;
	
	@Column(name = "total_votos_legisladores_provinciales", columnDefinition = "integer default 0")
	private int totalVotosLegisladoresProvinciales;
	
	@Column(name = "total_votos_concejales", columnDefinition = "integer default 0")
	private int totalVotosConcejales;
	
	
	@Column(name = "total_votos_senadores", columnDefinition = "integer default 0")
	private int totalVotosSenadores;
	
	@Column(name = "total_votos_gobernador", columnDefinition = "integer default 0")
	private int totalVotosGobernador;
	
	
	@Column(name = "total_votos_parlamentarios_mercosur", columnDefinition = "integer default 0")
	private int totalVotosParlamentariosMercosur;
	
	@Column(name = "total_votos_intendente", columnDefinition = "integer default 0")
	private int totalVotosIntendente;
		
	@Column(name = "total_votos_presidente", columnDefinition = "integer default 0")
	private int totalVotosPresidente;
	
	
	
	@Column(name = "total_votos_bolsin_diputados_nacionales", columnDefinition = "integer default 0")
	private int totalVotosBolsinDiputadosNacionales;

	
	@Column(name = "total_votos_bolsin_legisladores_provinciales", columnDefinition = "integer default 0")
	private int totalVotosBolsinLegisladoresProvinciales;
	
	@Column(name = "total_votos_bolsin_concejales", columnDefinition = "integer default 0")
	private int totalVotosBolsinConcejales;
	
	@Column(name = "total_votos_bolsin_presidente", columnDefinition = "integer default 0")
	private int totalVotosBolsinPresidente;
	
	@Column(name = "total_votos_bolsin_gobernador", columnDefinition = "integer default 0")
	private int totalVotosBolsinGobernador;
	
	
	@Column(name = "total_votos_bolsin_intendente", columnDefinition = "integer default 0")
	private int totalVotosBolsinIntendente;
	
	@Column(name = "total_votos_bolsin_senadores", columnDefinition = "integer default 0")
	private int totalVotosBolsinSenadores;
	
	@Column(name = "total_votos_bolsin_parlamentarios_mercosur", columnDefinition = "integer default 0")
	private int totalVotosBolsinParlamentariosMercosur;
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	public int getTotalVotosBlancoDiputadosNacionales() {
		return totalVotosBlancoDiputadosNacionales;
	}

	public int getTotalVotosBlancoLegisladoresProvinciales() {
		return totalVotosBlancoLegisladoresProvinciales;
	}

	public int getTotalVotosBlancoConcejales() {
		return totalVotosBlancoConcejales;
	}

	public int getTotalVotosBolsinDiputadosNacionales() {
		return totalVotosBolsinDiputadosNacionales;
	}

	public int getTotalVotosBolsinLegisladoresProvinciales() {
		return totalVotosBolsinLegisladoresProvinciales;
	}

	public int getTotalVotosBolsinConcejales() {
		return totalVotosBolsinConcejales;
	}

	public int getTotalVotosImpugnadoDiputadosNacionales() {
		return totalVotosImpugnadoDiputadosNacionales;
	}

	public int getTotalVotosImpugnadoLegisladoresProvinciales() {
		return totalVotosImpugnadoLegisladoresProvinciales;
	}

	public int getTotalVotosImpugnadoConcejales() {
		return totalVotosImpugnadoConcejales;
	}

	public int getTotalVotosNulosDiputadosNacionales() {
		return totalVotosNulosDiputadosNacionales;
	}

	public int getTotalVotosNulosLegisladoresProvinciales() {
		return totalVotosNulosLegisladoresProvinciales;
	}

	public int getTotalVotosNulosConcejales() {
		return totalVotosNulosConcejales;
	}

	public int getTotalVotosRecurridosDiputadosNacionales() {
		return totalVotosRecurridosDiputadosNacionales;
	}

	public int getTotalVotosRecurridosLegisladoresProvinciales() {
		return totalVotosRecurridosLegisladoresProvinciales;
	}

	public int getTotalVotosRecurridosConcejales() {
		return totalVotosRecurridosConcejales;
	}

	public int getTotalVotosXIndividuo() {
		return totalVotosXIndividuo;
	}

	public int getTotalsobres() {
		return totalsobres;
	}

	public int getTotalVotosDiputadosNacionales() {
		return totalVotosDiputadosNacionales;
	}

	public int getTotalVotosLegisladoresProvinciales() {
		return totalVotosLegisladoresProvinciales;
	}

	public int getTotalVotosConcejales() {
		return totalVotosConcejales;
	}

	public int getTotalXColumnaDiputadosNacionales() {
		return totalXColumnaDiputadosNacionales;
	}

	public int getTotalXColumnaLegisladoresProvinciales() {
		return totalXColumnaLegisladoresProvinciales;
	}

	public int getTotalVotosXColumnaConcejales() {
		return totalVotosXColumnaConcejales;
	}

	public void setTotalVotosBlancoDiputadosNacionales(int totalVotosBlancoDiputadosNacionales) {
		this.totalVotosBlancoDiputadosNacionales = totalVotosBlancoDiputadosNacionales;
	}

	public void setTotalVotosBlancoLegisladoresProvinciales(int totalVotosBlancoLegisladoresProvinciales) {
		this.totalVotosBlancoLegisladoresProvinciales = totalVotosBlancoLegisladoresProvinciales;
	}

	public void setTotalVotosBlancoConcejales(int totalVotosBlancoConcejales) {
		this.totalVotosBlancoConcejales = totalVotosBlancoConcejales;
	}

	public void setTotalVotosBolsinDiputadosNacionales(int totalVotosBolsinDiputadosNacionales) {
		this.totalVotosBolsinDiputadosNacionales = totalVotosBolsinDiputadosNacionales;
	}

	public void setTotalVotosBolsinLegisladoresProvinciales(int totalVotosBolsinLegisladoresProvinciales) {
		this.totalVotosBolsinLegisladoresProvinciales = totalVotosBolsinLegisladoresProvinciales;
	}

	public void setTotalVotosBolsinConcejales(int totalVotosBolsinConcejales) {
		this.totalVotosBolsinConcejales = totalVotosBolsinConcejales;
	}

	public void setTotalVotosImpugnadoDiputadosNacionales(int totalVotosImpugnadoDiputadosNacionales) {
		this.totalVotosImpugnadoDiputadosNacionales = totalVotosImpugnadoDiputadosNacionales;
	}

	public void setTotalVotosImpugnadoLegisladoresProvinciales(int totalVotosImpugnadoLegisladoresProvinciales) {
		this.totalVotosImpugnadoLegisladoresProvinciales = totalVotosImpugnadoLegisladoresProvinciales;
	}

	public void setTotalVotosImpugnadoConcejales(int totalVotosImpugnadoConcejales) {
		this.totalVotosImpugnadoConcejales = totalVotosImpugnadoConcejales;
	}

	public void setTotalVotosNulosDiputadosNacionales(int totalVotosNulosDiputadosNacionales) {
		this.totalVotosNulosDiputadosNacionales = totalVotosNulosDiputadosNacionales;
	}

	public void setTotalVotosNulosLegisladoresProvinciales(int totalVotosNulosLegisladoresProvinciales) {
		this.totalVotosNulosLegisladoresProvinciales = totalVotosNulosLegisladoresProvinciales;
	}

	public void setTotalVotosNulosConcejales(int totalVotosNulosConcejales) {
		this.totalVotosNulosConcejales = totalVotosNulosConcejales;
	}

	public void setTotalVotosRecurridosDiputadosNacionales(int totalVotosRecurridosDiputadosNacionales) {
		this.totalVotosRecurridosDiputadosNacionales = totalVotosRecurridosDiputadosNacionales;
	}

	public void setTotalVotosRecurridosLegisladoresProvinciales(int totalVotosRecurridosLegisladoresProvinciales) {
		this.totalVotosRecurridosLegisladoresProvinciales = totalVotosRecurridosLegisladoresProvinciales;
	}

	public void setTotalVotosRecurridosConcejales(int totalVotosRecurridosConcejales) {
		this.totalVotosRecurridosConcejales = totalVotosRecurridosConcejales;
	}

	public void setTotalVotosXIndividuo(int totalVotosXIndividuo) {
		this.totalVotosXIndividuo = totalVotosXIndividuo;
	}

	public void setTotalsobres(int totalsobres) {
		this.totalsobres = totalsobres;
	}

	public void setTotalVotosDiputadosNacionales(int totalVotosDiputadosNacionales) {
		this.totalVotosDiputadosNacionales = totalVotosDiputadosNacionales;
	}

	public void setTotalVotosLegisladoresProvinciales(int totalVotosLegisladoresProvinciales) {
		this.totalVotosLegisladoresProvinciales = totalVotosLegisladoresProvinciales;
	}

	public void setTotalVotosConcejales(int totalVotosConcejales) {
		this.totalVotosConcejales = totalVotosConcejales;
	}

	public void setTotalXColumnaDiputadosNacionales(int totalXColumnaDiputadosNacionales) {
		this.totalXColumnaDiputadosNacionales = totalXColumnaDiputadosNacionales;
	}

	public void setTotalXColumnaLegisladoresProvinciales(int totalXColumnaLegisladoresProvinciales) {
		this.totalXColumnaLegisladoresProvinciales = totalXColumnaLegisladoresProvinciales;
	}

	public void setTotalVotosXColumnaConcejales(int totalVotosXColumnaConcejales) {
		this.totalVotosXColumnaConcejales = totalVotosXColumnaConcejales;
	}




	
    @OneToMany( fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval=true)
    @JoinColumn(name="mesa_id", referencedColumnName="id_mesa")
	private Set<Escrutinio> escrutinios;

	public int getIdMesa() {
		return idMesa;
	}

	public void setIdMesa(int idMesa) {
		this.idMesa = idMesa;
	}

	public String getCircuito() {
		return circuito;
	}

	public void setCircuito(String circuito) {
		this.circuito = circuito;
	}

	public int getMesa() {
		return mesa;
	}

	public void setMesa(int mesa) {
		this.mesa = mesa;
	}

	
	public Set<Escrutinio> getEscrutinios() {
		return escrutinios;
	}

	public void setEscrutinios(Set<Escrutinio> escrutinios) {
		this.escrutinios = escrutinios;
	}

	public int getTotalVotosBlancoIntendente() {
		return totalVotosBlancoIntendente;
	}

	public void setTotalVotosBlancoIntendente(int totalVotosBlancoIntendente) {
		this.totalVotosBlancoIntendente = totalVotosBlancoIntendente;
	}

	public int getTotalVotosBlancoGobernador() {
		return totalVotosBlancoGobernador;
	}

	public void setTotalVotosBlancoGobernador(int totalVotosBlancoGobernador) {
		this.totalVotosBlancoGobernador = totalVotosBlancoGobernador;
	}

	public int getTotalVotosBlancoParlamentariosMercosur() {
		return totalVotosBlancoParlamentariosMercosur;
	}

	public void setTotalVotosBlancoParlamentariosMercosur(int totalVotosBlancoParlamentariosMercosur) {
		this.totalVotosBlancoParlamentariosMercosur = totalVotosBlancoParlamentariosMercosur;
	}

	public int getTotalVotosBlancoPresidente() {
		return totalVotosBlancoPresidente;
	}

	public void setTotalVotosBlancoPresidente(int totalVotosBlancoPresidente) {
		this.totalVotosBlancoPresidente = totalVotosBlancoPresidente;
	}

	public int getTotalVotosBlancoSenadores() {
		return totalVotosBlancoSenadores;
	}

	public void setTotalVotosBlancoSenadores(int totalVotosBlancoSenadores) {
		this.totalVotosBlancoSenadores = totalVotosBlancoSenadores;
	}

	public int getTotalVotosImpugnadoSenadores() {
		return totalVotosImpugnadoSenadores;
	}

	public void setTotalVotosImpugnadoSenadores(int totalVotosImpugnadoSenadores) {
		this.totalVotosImpugnadoSenadores = totalVotosImpugnadoSenadores;
	}

	public int getTotalVotosImpugnadoIntendente() {
		return totalVotosImpugnadoIntendente;
	}

	public void setTotalVotosImpugnadoIntendente(int totalVotosImpugnadoIntendente) {
		this.totalVotosImpugnadoIntendente = totalVotosImpugnadoIntendente;
	}

	public int getTotalVotosImpugnadoParlamentariosMercosur() {
		return totalVotosImpugnadoParlamentariosMercosur;
	}

	public void setTotalVotosImpugnadoParlamentariosMercosur(int totalVotosImpugnadoParlamentariosMercosur) {
		this.totalVotosImpugnadoParlamentariosMercosur = totalVotosImpugnadoParlamentariosMercosur;
	}

	public int getTotalVotosImpugnadoPresidente() {
		return totalVotosImpugnadoPresidente;
	}

	public void setTotalVotosImpugnadoPresidente(int totalVotosImpugnadoPresidente) {
		this.totalVotosImpugnadoPresidente = totalVotosImpugnadoPresidente;
	}

	public int getTotalVotosImpugnadoGobernador() {
		return totalVotosImpugnadoGobernador;
	}

	public void setTotalVotosImpugnadoGobernador(int totalVotosImpugnadoGobernador) {
		this.totalVotosImpugnadoGobernador = totalVotosImpugnadoGobernador;
	}

	public int getTotalVotosNulosSenadores() {
		return totalVotosNulosSenadores;
	}

	public void setTotalVotosNulosSenadores(int totalVotosNulosLegisladoresSenadores) {
		this.totalVotosNulosSenadores = totalVotosNulosLegisladoresSenadores;
	}

	public int getTotalVotosNulosIntendente() {
		return totalVotosNulosIntendente;
	}

	public void setTotalVotosNulosIntendente(int totalVotosNulosLegisladoresIntendente) {
		this.totalVotosNulosIntendente = totalVotosNulosLegisladoresIntendente;
	}

	public int getTotalVotosNulosPresidente() {
		return totalVotosNulosPresidente;
	}

	public void setTotalVotosNulosPresidente(int totalVotosNulosLegisladoresPresidente) {
		this.totalVotosNulosPresidente = totalVotosNulosLegisladoresPresidente;
	}

	public int getTotalVotosNulosGobernador() {
		return totalVotosNulosGobernador;
	}

	public void setTotalVotosNulosGobernador(int totalVotosNulosLegisladoresGobernador) {
		this.totalVotosNulosGobernador = totalVotosNulosLegisladoresGobernador;
	}

	public int getTotalVotosNulosParlamentariosMercosur() {
		return totalVotosNulosParlamentariosMercosur;
	}

	public void setTotalVotosNulosParlamentariosMercosur(
			int totalVotosNulosLegisladoresParlamentariosMercosur) {
		this.totalVotosNulosParlamentariosMercosur = totalVotosNulosLegisladoresParlamentariosMercosur;
	}

	public int getTotalVotosXColumnaSenadores() {
		return totalVotosXColumnaSenadores;
	}

	public void setTotalVotosXColumnaSenadores(int totalVotosXColumnaSenadores) {
		this.totalVotosXColumnaSenadores = totalVotosXColumnaSenadores;
	}

	public int getTotalVotosXColumnaParlamentariosMercosur() {
		return totalVotosXColumnaParlamentariosMercosur;
	}

	public void setTotalVotosXColumnaParlamentariosMercosur(int totalVotosXColumnaParlamentariosMercosur) {
		this.totalVotosXColumnaParlamentariosMercosur = totalVotosXColumnaParlamentariosMercosur;
	}

	public int getTotalVotosXColumnaPresidente() {
		return totalVotosXColumnaPresidente;
	}

	public void setTotalVotosXColumnaPresidente(int totalVotosXColumnaPresidente) {
		this.totalVotosXColumnaPresidente = totalVotosXColumnaPresidente;
	}

	public int getTotalVotosXColumnaGobernador() {
		return totalVotosXColumnaGobernador;
	}

	public void setTotalVotosXColumnaGobernador(int totalVotosXColumnaGobernador) {
		this.totalVotosXColumnaGobernador = totalVotosXColumnaGobernador;
	}

	public int getTotalVotosXColumnaIntendente() {
		return totalVotosXColumnaIntendente;
	}

	public void setTotalVotosXColumnaIntendente(int totalVotosXColumnaIntendente) {
		this.totalVotosXColumnaIntendente = totalVotosXColumnaIntendente;
	}

	public int getTotalVotosRecurridosSenadores() {
		return totalVotosRecurridosSenadores;
	}

	public void setTotalVotosRecurridosSenadores(int totalVotosRecurridosSenadores) {
		this.totalVotosRecurridosSenadores = totalVotosRecurridosSenadores;
	}

	public int getTotalVotosRecurridosGobernador() {
		return totalVotosRecurridosGobernador;
	}

	public void setTotalVotosRecurridosGobernador(int totalVotosRecurridosGobernador) {
		this.totalVotosRecurridosGobernador = totalVotosRecurridosGobernador;
	}

	public int getTotalVotosRecurridosParlamentariosMercosur() {
		return totalVotosRecurridosParlamentariosMercosur;
	}

	public void setTotalVotosRecurridosParlamentariosMercosur(int totalVotosRecurridosParlamentariosMercosur) {
		this.totalVotosRecurridosParlamentariosMercosur = totalVotosRecurridosParlamentariosMercosur;
	}

	public int getTotalVotosRecurridosIntendente() {
		return totalVotosRecurridosIntendente;
	}

	public void setTotalVotosRecurridosIntendente(int totalVotosRecurridosIntendente) {
		this.totalVotosRecurridosIntendente = totalVotosRecurridosIntendente;
	}

	public int getTotalVotosRecurridosPresidente() {
		return totalVotosRecurridosPresidente;
	}

	public void setTotalVotosRecurridosPresidente(int totalVotosRecurridosPresidente) {
		this.totalVotosRecurridosPresidente = totalVotosRecurridosPresidente;
	}

	public int getTotalVotosSenadores() {
		return totalVotosSenadores;
	}

	public void setTotalVotosSenadores(int totalVotosSenadores) {
		this.totalVotosSenadores = totalVotosSenadores;
	}

	public int getTotalVotosGobernador() {
		return totalVotosGobernador;
	}

	public void setTotalVotosGobernador(int totalVotosGobernador) {
		this.totalVotosGobernador = totalVotosGobernador;
	}

	public int getTotalVotosParlamentariosMercosur() {
		return totalVotosParlamentariosMercosur;
	}

	public void setTotalVotosParlamentariosMercosur(int totalVotosParlamentariosMercosur) {
		this.totalVotosParlamentariosMercosur = totalVotosParlamentariosMercosur;
	}

	public int getTotalVotosIntendente() {
		return totalVotosIntendente;
	}

	public void setTotalVotosIntendente(int totalVotosIntendente) {
		this.totalVotosIntendente = totalVotosIntendente;
	}

	public int getTotalVotosPresidente() {
		return totalVotosPresidente;
	}

	public void setTotalVotosPresidente(int totalVotosPresidente) {
		this.totalVotosPresidente = totalVotosPresidente;
	}

	public int getTotalVotosBolsinPresidente() {
		return totalVotosBolsinPresidente;
	}

	public void setTotalVotosBolsinPresidente(int totalVotosBolsinPresidente) {
		this.totalVotosBolsinPresidente = totalVotosBolsinPresidente;
	}

	public int getTotalVotosBolsinGobernador() {
		return totalVotosBolsinGobernador;
	}

	public void setTotalVotosBolsinGobernador(int totalVotosBolsinGobernador) {
		this.totalVotosBolsinGobernador = totalVotosBolsinGobernador;
	}

	public int getTotalVotosBolsinIntendente() {
		return totalVotosBolsinIntendente;
	}

	public void setTotalVotosBolsinIntendente(int totalVotosBolsinIntendente) {
		this.totalVotosBolsinIntendente = totalVotosBolsinIntendente;
	}

	public int getTotalVotosBolsinSenadores() {
		return totalVotosBolsinSenadores;
	}

	public void setTotalVotosBolsinSenadores(int totalVotosBolsinSenadores) {
		this.totalVotosBolsinSenadores = totalVotosBolsinSenadores;
	}

	public int getTotalVotosBolsinParlamentariosMercosur() {
		return totalVotosBolsinParlamentariosMercosur;
	}

	public void setTotalVotosBolsinParlamentariosMercosur(int totalVotosBolsinParlamentariosMercosur) {
		this.totalVotosBolsinParlamentariosMercosur = totalVotosBolsinParlamentariosMercosur;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	

}

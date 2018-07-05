package com.myorg.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.OneToMany;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Entity;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Curso
{
    @Id
    @GeneratedValue
    private int idCurso;
    private String Nombre;
    private int creditos;
    private String descripcion;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name="idCarrera")//porque son cursos de carrera
    private Carrera carrera;


    @OneToMany(mappedBy = "curso")
    private List<Video> videos;


    public Curso(String nombre, int creditos, String descripcion, Carrera carrera) {
        this.Nombre = nombre;
        this.creditos = creditos;
        this.descripcion = descripcion;
        this.carrera = carrera;
    }
}
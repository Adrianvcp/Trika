package com.myorg.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Carrera
{
    @Id
    @GeneratedValue
    private int idCarrera;
    private String nombre;
    private String coordinador;

 /*   @OneToMany(mappedBy = "carrera")
    private List<Alumno> alumnos;
*/
    @OneToMany(mappedBy = "carrera")
    private List<Curso> cursos;

    public Carrera(String coordinador,String nombre) {
        this.nombre = nombre;
        this.coordinador = coordinador;

    }
}
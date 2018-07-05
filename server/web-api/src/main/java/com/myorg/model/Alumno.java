package com.myorg.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;

@Data
@Entity
public class Alumno
{
    @Id
    @GeneratedValue
    private int idAlumno;
    private String dni;
    private String nombre;
    private String apellido;
    private String correo;
    private String direccion;

    @OneToOne
    @JoinColumn(name = "idCarrera")
    private Carrera carrera;

    public Alumno(){}

    public Alumno(String apellido, String correo, String direccion , String dni, String nombre, Carrera carrera) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion;
        this.carrera = carrera;
    }
}


package com.myorg.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Video
{
    @Id
    @GeneratedValue
    private int idVideo;
    private String titulo;
    private String descripcion;
    private String link;
    private String miniatura;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name="idCurso")
    private Curso curso;

    public Video(String descripcion, String link, String miniatura,String titulo , Curso curso) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.link = link;
        this.miniatura = miniatura;
        this.curso = curso;
    }
}
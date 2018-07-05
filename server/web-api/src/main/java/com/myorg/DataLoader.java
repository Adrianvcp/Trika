package com.myorg;

import com.myorg.model.*;
import com.myorg.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    AlumnoService alumnoService;
    @Autowired
    CarreraService carreraService;
    @Autowired
    CursoService cursoService;
    @Autowired
    VideoService videoService;

    @Override
    public void run(String... args) throws Exception
    {


        Carrera objCarrera = new Carrera("Luis Callo","Ingenieria de Software");
        carreraService.createCarrera(objCarrera);


        Carrera objCarrera2 = new Carrera("ABC","Nueva Carrera");
        carreraService.createCarrera(objCarrera2);


        Alumno objAlumno = new Alumno("Angel","Angel_De_Dios@hotmail.com","Av.El cielo Calle 666","74582365","Angelito",objCarrera);
        alumnoService.createAlumno(objAlumno);

        Curso objCurso = new Curso("Complejidad Algoritmicas",4,"Curso de Ingenieria de Software",objCarrera);
        cursoService.createCurso(objCurso);

        Curso objCurso2 = new Curso("Open Source",4,"Curso de Ingenieria de Software",objCarrera);
        cursoService.createCurso(objCurso2);

        Curso objCurso3 = new Curso("Open SDSD",4,"Curso de Ingenieria de Software",objCarrera2);
        cursoService.createCurso(objCurso3);

        Video objVideo = new Video("Video muy bueno","https://vidlox.me/xf2tytw0ttvn","https://static.pelisfox.tv/static/serie/cover/original/2757c5a240f1dd396a07c4429936c81a.jpg","Campo Vectorial",objCurso);
        videoService.createVideo(objVideo);


        Video objVideo2 = new Video("Video muy bueno","www.tuvideitoeasy.com","https://static.pelisfox.tv/static/serie/cover/original/1816b38c6a80589cd905714103c3e2a3.jpg","Centro de Masa",objCurso);
        videoService.createVideo(objVideo2);


    }
}

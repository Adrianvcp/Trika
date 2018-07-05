package com.myorg.controller;


import com.myorg.model.Curso;
import com.myorg.service.CursoService;
import com.myorg.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping(path = "/curso")
public class CursoController {

    @Autowired
    public CursoService cursoService;

    @RequestMapping(path = "/{id}")
    public List<Curso> listarcursos(@PathVariable("id") int id)
    {
       return cursoService.listarCursoPorCarrera(id);
    }

}

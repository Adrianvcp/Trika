package com.myorg.controller;

import com.myorg.model.Alumno;
import com.myorg.service.AlumnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="alumno")
public class AlumnoController {

    @Autowired
    public AlumnoService alumnoService;

    @RequestMapping(path = "addAlumno",method = RequestMethod.POST)
    public Alumno addAlumno(@RequestBody Alumno alumno)
    {
        return alumnoService.createAlumno(alumno);
    }
}

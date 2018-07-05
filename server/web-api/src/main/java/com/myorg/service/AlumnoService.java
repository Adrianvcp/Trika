package com.myorg.service;

import com.myorg.model.Alumno;
import com.myorg.repository.AlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AlumnoService {

    @Autowired
    AlumnoRepository repository;

    public Alumno createAlumno(Alumno a) {
        return repository.save(a);
    }


    public void removeAlumno(Alumno a) {
        repository.delete(a);

    }
}

package com.myorg.service;

import com.myorg.model.Curso;
import com.myorg.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CursoService
{
    @Autowired
    CursoRepository repository;

    public Curso createCurso(Curso a) {
        return repository.save(a);
    }


    public void removeCurso(Curso a) {
        repository.delete(a);

    }


    public List<Curso> listarCursoPorCarrera(Integer id)
    {
        return repository.findAllByCarrera_IdCarrera(id);
    }
}

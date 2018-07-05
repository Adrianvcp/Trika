package com.myorg.repository;

import com.myorg.model.Curso;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CursoRepository extends CrudRepository<Curso,Integer>
{
    public List<Curso> findAllByCarrera_IdCarrera(int id);
}

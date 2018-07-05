package com.myorg.repository;


import com.myorg.model.Alumno;
import org.springframework.data.repository.CrudRepository;


public interface AlumnoRepository extends CrudRepository<Alumno, Integer> {
}

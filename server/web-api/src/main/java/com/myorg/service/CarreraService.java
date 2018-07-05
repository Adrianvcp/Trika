package com.myorg.service;


import com.myorg.model.Carrera;
import com.myorg.repository.CarreraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CarreraService {

    @Autowired
    CarreraRepository repository;

    public Carrera createCarrera(Carrera a) {
        return repository.save(a);
    }


    public void removeCarrera(Carrera a) {
        repository.delete(a);

    }
}

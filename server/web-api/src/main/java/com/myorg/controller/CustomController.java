package com.myorg.controller;

import com.myorg.model.Video;
import com.myorg.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping(path = "/api")
public class CustomController {

    @Autowired
    public VideoService videoService;

    @RequestMapping(path = "/date")
    public String helloWorld() {
        return new Date().toString();
    }

    @RequestMapping(path = "/add",method = RequestMethod.POST)
    public String addVideo(@RequestBody Video vdato)
    {
        videoService.createVideo(vdato);
        return "Guardar dato.";
    }


    @RequestMapping(path = "/addV",method = RequestMethod.POST)
    public String addVideo(@RequestBody String titulo,@RequestBody String desc,@RequestBody String link,@RequestBody String minia)
    {
        Video objv = new Video();
        objv.setTitulo(titulo);
        objv.setDescripcion(desc);
        objv.setLink(link);
        objv.setMiniatura(minia);
        videoService.createVideo(objv);
        return "Guardar dato.";
    }

}

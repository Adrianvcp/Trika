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
@RequestMapping(path = "/videos")
public class VideoController {

    @Autowired
    public VideoService videoService;

    @RequestMapping(path = "/addMovie",method = RequestMethod.POST)
    public Video addVideo(@RequestBody Video vdato)
    {
        return videoService.createVideo(vdato);
    }

    @RequestMapping(path = "/delMovie",method = RequestMethod.DELETE)
    public void delVideo(Video vdato)
    {
        videoService.removeCurso(vdato);
    }
}

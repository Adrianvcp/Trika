package com.myorg.service;

import com.myorg.model.Video;
import com.myorg.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VideoService
{
    @Autowired
    VideoRepository repository;

    public Video createVideo(Video v) {
        return repository.save(v);
    }


    public void removeCurso(Video a) {
        repository.delete(a);

    }
}

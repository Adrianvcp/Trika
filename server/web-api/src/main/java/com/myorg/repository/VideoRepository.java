package com.myorg.repository;

import com.myorg.model.Video;
import org.springframework.data.repository.CrudRepository;

public interface VideoRepository extends CrudRepository<Video,Integer>
{

}

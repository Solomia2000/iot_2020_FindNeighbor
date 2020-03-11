package com.iot.findneighbor.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Lob;
import java.time.Instant;

@Data
@Builder
public class UserProfile {
    private Long id;
    private String name;
    private int age;
    private String sex;
    @Lob
    @JsonProperty("image")
    private byte[] image;

    public UserProfile(Long id, String name, int age, String sex, byte[] image) {
        this.id=id;
        this.name=name;
        this.age=age;
        this.sex=sex;
        this.image=image;
    }

}

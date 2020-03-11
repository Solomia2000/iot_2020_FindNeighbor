package com.iot.findneighbor.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Lob;

@Data
@Builder
@Getter
@Setter
public class FilterUserProfile {
    private Long id;
    private String name;
    private int age;
    @Lob
    @JsonProperty("image")
    private byte[] image;

    public FilterUserProfile(Long id, String name, int age, byte[] image){
        this.id=id;
        this.name=name;
        this.age=age;
        this.image=image;
    }
}

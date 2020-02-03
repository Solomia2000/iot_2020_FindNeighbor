package com.iot.findneighbor.request;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Data
@Builder
public class UserProfile {
    private Long id;
    private String username;
    private String name;
    private Instant joinedAt;

}

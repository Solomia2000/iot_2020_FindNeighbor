package com.iot.findneighbor.domain;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;

@Data
@Builder
@Entity
@Table(name = "filters")
public class Filters {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private int startAge;
    private int endAge;
    private String sex;
    private String pets;
    private String badHabits;
    private int startPrice;
    private int endPrice;
    @OneToOne
    @JoinColumn(referencedColumnName = "username")
    private User user;
}

package com.iot.findneighbor.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "additional_info")
public class AdditionalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    private boolean pets;
    private boolean badHabits;
    private boolean kindOfActivity;
    private boolean sex;
    private String maritalStatus;
    private int age;
    private boolean haveJobOrJobless;
    private String moreAboutUser;

    @OneToOne
    @JoinColumn(referencedColumnName = "username")
    //@MapsId
    private User user;
}
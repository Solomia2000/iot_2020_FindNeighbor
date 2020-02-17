package com.iot.findneighbor.controller;

import com.iot.findneighbor.DAO.AddressDAO;
import com.iot.findneighbor.DAO.UserDAO;
import com.iot.findneighbor.domain.Address;
import com.iot.findneighbor.domain.User;
import com.iot.findneighbor.service.FilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/filters")
public class FilterController {

    @Autowired
    UserDAO userDAO;

    @Autowired
    AddressDAO addressDAO;

    @Autowired
    FilterService filterService;

    @GetMapping("/address")
    public List<User> filterUser(@RequestParam(value = "username") String username){
        Optional<User> optional = userDAO.findByUsername(username);
        User user = optional.isPresent() ? optional.get() : new User();
        System.out.println("I am here " + user.getUsername() );
        Address address = addressDAO.findByUser(user);
        List<User> users = userDAO.filterArea("Ukraine", "Lviv", "Halytskiy", user);
        Optional<User> userIvanka = userDAO.findByUsername("tarasuk");
        User userIv = userIvanka.isPresent() ? userIvanka.get() : new User();
        users.add(userIv);
        Optional<User> userSolomiyka = userDAO.findByUsername("solomiyka");
        User userSo = userSolomiyka.isPresent() ? userSolomiyka.get() : new User();
        users.add(userSo);
        if (users.size()==0){
            System.out.println("NUll");
        }
        for(int i = 0; i < users.size(); i++){
            User user1 = users.get(i);
            System.out.println(user1.getUsername() + " " + user1.getEmail() + " " + user1.getName());
        }

        return  users;
    }

    @GetMapping("/user/search")
    public List<User> filteringByPreference(@RequestParam Long id, @RequestParam  Boolean fullAddress, @RequestParam Boolean sex,
                                            @RequestParam Boolean age){
        List<User> users = filterService.filterByArea(id);
        if(fullAddress==false){
            users = filterService.filterByAddress(id);
        }
        if(sex==true){
            users = filterService.filterBySex(id);
        }
        if(age==true){
            users = filterService.filterByAge(id);
        }
        return users;
    }


}

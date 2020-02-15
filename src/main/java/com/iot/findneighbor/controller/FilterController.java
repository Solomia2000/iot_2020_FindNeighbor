package com.iot.findneighbor.controller;

import com.iot.findneighbor.DAO.AddressDAO;
import com.iot.findneighbor.DAO.PreferencesDAO;
import com.iot.findneighbor.DAO.UserDAO;
import com.iot.findneighbor.domain.Address;
import com.iot.findneighbor.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api")
public class FilterController {

    @Autowired
    PreferencesDAO filtersDAO;

    @Autowired
    UserDAO userDAO;

    @Autowired
    AddressDAO addressDAO;


    @GetMapping( "/filters/byAddress")
    public User filterByAddress(@RequestParam String username){
        Optional<User> optional = userDAO.findByUsername(username);
        User user = optional.isPresent() ? optional.get() : new User();
        System.out.println("I am here " + user.getUsername() );
        Address address = addressDAO.findByUser(user);
        List<User> users = userDAO.filterArea("Ukraine", "Lviv", "Halytskiy", user);
        Optional<User> userIvanka = userDAO.findByUsername("tarasuk");
        User userIv = userIvanka.isPresent() ? userIvanka.get() : new User();
        users.add(userIv);
        if (users.size()==0){
            System.out.println("NUll");
        }
        for(int i = 0; i < users.size(); i++){
            User user1 = users.get(i);
            System.out.println(user1.getUsername() + " " + user1.getEmail() + " " + user1.getName());
        }

        return userIv;
    }


}

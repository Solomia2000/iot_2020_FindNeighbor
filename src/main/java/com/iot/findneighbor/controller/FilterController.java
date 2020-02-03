package com.iot.findneighbor.controller;

import com.iot.findneighbor.DAO.AddressDAO;
import com.iot.findneighbor.DAO.FiltersDAO;
import com.iot.findneighbor.DAO.UserDAO;
import com.iot.findneighbor.domain.Address;
import com.iot.findneighbor.domain.User;
import com.iot.findneighbor.service.FiltersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/filters")
public class FilterController {

    @Autowired
    FiltersDAO filtersDAO;

    @Autowired
    UserDAO userDAO;

    @Autowired
    FiltersService filtersService;

    @Autowired
    AddressDAO addressDAO;

//    @GetMapping("/user/checkFilters")
//    public Filters checkIfUserFilterExist(@RequestParam(name = "username") String username){
//        Filters filter = filtersDAO.findByUser(username);
//        return filter;
//    }

    @GetMapping("/byAddress")
    public List<User> filterByAddress(@RequestParam(value="username") String username){
        Optional<User> optional = userDAO.findByUsername(username);
        User user = optional.isPresent() ? optional.get() : new User();
        System.out.println("I am here " + user.getUsername() );
        Address address = addressDAO.findByUser(user);
        List<User> users = userDAO.filterAddress("Ukraine", "Lviv", "Halytskiy", user);
        for(int i = 0; i < users.size(); i++){
            User user1 = users.get(i);
            System.out.println(user1.getUsername() + " " + user1.getEmail() + " " + user1.getName());
        }
        return users;
    }

}

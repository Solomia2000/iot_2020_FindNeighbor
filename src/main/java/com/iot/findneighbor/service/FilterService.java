package com.iot.findneighbor.service;

import com.iot.findneighbor.DAO.AdditionalInfoDAO;
import com.iot.findneighbor.DAO.AddressDAO;
import com.iot.findneighbor.DAO.UserDAO;
import com.iot.findneighbor.domain.Address;
import com.iot.findneighbor.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FilterService{
    @Autowired
    UserDAO userDAO;

    @Autowired
    AdditionalInfoDAO additionalInfoDAO;

    @Autowired
    AddressDAO addressDAO;

    User findUser(Long id){
        Optional<User> optional = userDAO.findById(id);
        User user = optional.isPresent() ? optional.get() : new User();
        return user;
    }

    List<User> filterByAddress(Long id){
        User user = findUser(id);
        Address address = addressDAO.findByUser(user);
        List<User> users = userDAO.filterAddress(address.getCountry(), address.getCity(), user);
        return users;
    }

    List<User> filterByArea(Long id){
        User user = findUser(id);
        Address address = addressDAO.findByUser(user);
        List<User> users = userDAO.filterArea(address.getCountry(), address.getCity(), address.getArea(), user);
        return users;
    }

    List<User> filterBySex(Long id){
        User user = findUser(id);
        List<User> users = userDAO.filterSex(user);
        return users;
    }

}

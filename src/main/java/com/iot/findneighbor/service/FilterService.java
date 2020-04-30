package com.iot.findneighbor.service;

import com.iot.findneighbor.DAO.AdditionalInfoDAO;
import com.iot.findneighbor.DAO.AddressDAO;
import com.iot.findneighbor.DAO.PreferencesDAO;
import com.iot.findneighbor.DAO.UserDAO;
import com.iot.findneighbor.domain.AdditionalInfo;
import com.iot.findneighbor.domain.Address;
import com.iot.findneighbor.domain.Preferences;
import com.iot.findneighbor.domain.User;
import com.iot.findneighbor.exception.ResourceNotFoundException;
import com.iot.findneighbor.exception.UserNotFoundException;
import com.iot.findneighbor.request.UserProfile;
import com.iot.findneighbor.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FilterService{
    @Autowired
    UserDAO userDAO;

    @Autowired
    AdditionalInfoDAO additionalInfoDAO;

    @Autowired
    PreferencesDAO preferencesDAO;

    @Autowired
    AddressDAO addressDAO;

    @Transactional
    public User findUser(Long id) {
        User user = userDAO.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("User", "id", id)
        );

        return user;
    }

    @Transactional
    public Address findAddress(User user) {
        Address address = addressDAO.findByUser(user)
                .orElseThrow(
                () -> new UserNotFoundException("Address", "user", user)
        );
        return address;
    }

    @Transactional
    public Preferences findPreferences(User user) {
        Preferences preferences = preferencesDAO.findByUser(user)
                .orElseThrow(
                        () -> new UserNotFoundException("Preferences", "user", user)
                );
        return preferences;
    }

    @Transactional
    public AdditionalInfo findAdditional(User user) {
        AdditionalInfo additionalInfo = additionalInfoDAO.findByUser(user)
                .orElseThrow(
                        () -> new UserNotFoundException("Additional info", "user", user)
                );
        return additionalInfo;
    }

    @Transactional
    public List<User> filterByAddress(Long id) throws ResourceNotFoundException{
        User user = findUser(id);
        Address address = findAddress(user);
        List<User> users = userDAO.filterAddress(address.getCountry(), address.getCity(), user);
        return users;
    }

    public List<User> filterByArea(Long id){
        User user = findUser(id);
        Address address = findAddress(user);
        List<User> users = userDAO.filterArea(address.getCountry(), address.getCity(), address.getArea(), user);
        return users;
    }

    public List<User> filterBySex(Long id){
        User user = findUser(id);
        Preferences userPreferences = findPreferences(user);

        List<User> users = new ArrayList<>();
        if(userPreferences.getSex() != "-") {
             users = userDAO.filterSex(userPreferences.getSex());
        }
        else {
            return null;
        }

        return users;
    }

    public List<User> filterByAge(Long id){
        User user = findUser(id);
        Preferences userPreferences = findPreferences(user);
        List<User> users = userDAO.filterAge(userPreferences.getStartAge(), userPreferences.getEndAge());
        return users;
    }

    public List <User> userFiltrationByAge(Long id, List<User> users){

        List <User> usersByAge = filterByAge(id);
        for(int i = 0; i < users.size(); i++){
            User user = users.get(i);
            if(!usersByAge.contains(user)){
                users.remove(user);
            }
        }
        return users;

    }

    public List <User> userFiltrationBySex(Long id, List<User> users){
        List <User> usersBySex = filterBySex(id);

        if(usersBySex.size() != 0) {
            for (int i = 0; i < users.size(); i++) {
                User user = users.get(i);
                if (!usersBySex.contains(user)) {
                    users.remove(user);
                }
            }
        }

        return users;
    }

    public List setUserProfiles(List<User> usersByAddress) throws IOException {
        List<UserProfile> userProfiles = new ArrayList<>();
        for (int i = 0; i < usersByAddress.size(); i++){
            User user = usersByAddress.get(i);
            AdditionalInfo additionalInfo = findAdditional(user);
            System.out.println("Im " + additionalInfo.getImage());
            Image userImage = getImage(additionalInfo.getImage());
            UserProfile userProfile = new UserProfile(user.getId(), user.getName(), additionalInfo.getAge(), additionalInfo.getSex(),
                    userImage);

            userProfiles.add(userProfile);
        }

        return userProfiles;
    }

    public Image getImage(byte[] image) throws IOException {
//        System.out.println(image);
//        ByteArrayInputStream bais = new ByteArrayInputStream(image);
//        BufferedImage bImage = ImageIO.read(bais);
//        System.out.println(bImage);
//        return bImage;
        System.out.println(image);
        BufferedImage buffered_image= ImageIO.read(new File("userImage.png"));
        ByteArrayOutputStream output_stream= new ByteArrayOutputStream();
        ImageIO.write(buffered_image, "png", output_stream);
        byte [] byte_array = output_stream.toByteArray();
        ByteArrayInputStream input_stream= new ByteArrayInputStream(byte_array);
        System.out.println("140 " + input_stream);
        BufferedImage final_buffered_image = ImageIO.read(input_stream);
        System.out.println("142 " + final_buffered_image);
        ImageIO.write(final_buffered_image , "png", new File("final_file.png") );
        System.out.println("Converted Successfully!");
        return null;
    }
}

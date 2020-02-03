package com.iot.findneighbor.service;

import com.iot.findneighbor.DAO.AddressDAO;
import com.iot.findneighbor.DAO.FilterByPreferencesDAO;
import com.iot.findneighbor.DAO.FiltersDAO;
import com.iot.findneighbor.DAO.UserDAO;
import com.iot.findneighbor.domain.Address;
import com.iot.findneighbor.domain.User;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FiltersService implements FilterByPreferencesDAO{

    @Autowired
    FiltersDAO filtersDAO;

    @Autowired
    AddressDAO addressDAO;

    @Autowired
    UserDAO userDAO;

    @Override
    public List<User> filterAddress(String country, String city, String area, String username) {
        return null;
    }


//
//    @Autowired
//    FilterByPreferencesDAO filterByPreferencesDAO;

//    @Autowired
//    Session session;
//
//    public List<String> filterAddress(String username) {
//        Optional<User> optional = userDAO.findByUsername(username);
//        User user = optional.isPresent() ? optional.get() : new User();
//        Address address = addressDAO.findByUser(user);
//        List<User> userWithSameAddress = filterByPreferencesDAO.filterAddress(address.getCountry(), address.getCity(),
//                address.getArea(), username);
//////        Optional<User> optionalUser = userDAO.findByUsername(username);
//////        User user = optionalUser.isPresent() ? optionalUser.get() : new User();
//////        Address address = addressDAO.findByUser(user);
//////        Query query = session.createQuery("SELECT user FROM Address" +
//////                " where city =:city AND country=:country AND \n" +
//////                "preferredArea=:preferredArea AND " +
//////                "user='volodymurko'");
//////
//////        List<User> userList = query.list();
//
//
//        return null;
//    }



//    List<Address> findByFullAddress(String username){
//        List<Address> expenses = new ArrayList<String>();
//        try {
//            Statement stmt = myConnection.createStatement();
//            ResultSet result = stmt.executeQuery("SELECT * FROM expenses");
//            while (result.next()) {
//                expenses.add(result.getString(1));
//                expenses.add(result.getString(2));
//                expenses.add(result.getString(3));
//                expenses.add(result.getString(4));
//            }
//        }
//        catch (SQLException e) {
//            System.out.println(e.getMessage());
//        }
//        return expenses;
//    }
//    public Filters findByUsername(User user){
//        String username = user.getUsername();
//
//    }
}


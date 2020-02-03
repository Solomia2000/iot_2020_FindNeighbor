package com.iot.findneighbor.DAO;

import com.iot.findneighbor.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilterByPreferencesDAO {

    @Query("SELECT a.user FROM Address a WHERE a.country ='Ukraine' AND a.city = 'Lviv' " +
            "AND a.area = 'Halytskiy' AND a.user <> 'volodymurko'")
    List<User> filterAddress(String country, String city, String area, String username);

}

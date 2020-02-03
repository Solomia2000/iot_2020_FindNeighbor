package com.iot.findneighbor.DAO;

import com.iot.findneighbor.domain.User;
import com.sun.xml.bind.v2.model.core.ID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserDAO extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    List<User> findByIdIn(List<Long> userIds);

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    User findById(ID id);

    @Query("SELECT a.user FROM Address a WHERE a.country = ?1 AND a.city = ?2 " +
            "AND a.area = ?3 AND a.user <> ?4")
    List<User> filterAddress(String country, String city, String area, User username);

}
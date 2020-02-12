package com.iot.findneighbor.DAO;

import com.iot.findneighbor.domain.Preferences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreferencesDAO extends JpaRepository<Preferences, Long> {

    Preferences findByUser(String username);

}

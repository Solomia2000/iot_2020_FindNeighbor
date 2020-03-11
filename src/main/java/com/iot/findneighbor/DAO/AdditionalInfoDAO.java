package com.iot.findneighbor.DAO;

import com.iot.findneighbor.domain.AdditionalInfo;
import com.iot.findneighbor.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdditionalInfoDAO extends JpaRepository<AdditionalInfo, Long> {

    AdditionalInfo findByUser(User user);
}

package com.iot.findneighbor.DAO;

import com.iot.findneighbor.domain.AdditionalInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdditionalInfoDAO extends JpaRepository<AdditionalInfo, Long> {
}

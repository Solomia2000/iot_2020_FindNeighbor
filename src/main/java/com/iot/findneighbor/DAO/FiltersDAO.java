package com.iot.findneighbor.DAO;

import com.iot.findneighbor.domain.Filters;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FiltersDAO extends JpaRepository<Filters, Long> {


    Filters findByUser(String username);


}

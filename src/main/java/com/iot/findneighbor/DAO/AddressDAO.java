package com.iot.findneighbor.DAO;

import com.iot.findneighbor.domain.Address;
import com.iot.findneighbor.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressDAO extends JpaRepository<Address, Long> {

    Address findByUser(User username);

}

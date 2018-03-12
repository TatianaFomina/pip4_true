package com.pip.lab4.lab4_true.repository;

import com.pip.lab4.lab4_true.entity.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserAccount, Long>{
   // UserAccount findById(Long id);
    List<UserAccount> findByUsername(String username);
}

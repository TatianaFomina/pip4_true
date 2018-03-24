package com.pip.lab4.lab4_true.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users", schema = "s225128")
public class UserAccount {
    @Id
    @GeneratedValue
    private Long id;


    private String username;

    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPasswordHash() {
        return password;
    }

    public void setPasswordHash(String passwordHash) {
        this.password = passwordHash;
    }

    public UserAccount() {
    }

    public UserAccount(String username, String passwordHash) {
        this.username = username;
        this.password = passwordHash;
    }

    public UserAccount(String username) {
        this.username = username;
    }
}

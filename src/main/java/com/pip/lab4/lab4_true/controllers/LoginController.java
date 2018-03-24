package com.pip.lab4.lab4_true.controllers;

import com.pip.lab4.lab4_true.entity.UserAccount;
import com.pip.lab4.lab4_true.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.stream.Collectors;

@Controller
//@RestController
public class LoginController {

    private UserRepository repository;

    @Autowired
    public LoginController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public Collection<UserAccount> goodBeers() {
        return repository.findAll().stream().collect(Collectors.toList());
    }

    @RequestMapping(value = "/signup")
    public String signup() {
        return "registration.html";
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/register")
    public void register(@RequestParam("username") String username, @RequestParam("password") String password){
        repository.save(new UserAccount(username, String.valueOf(password.hashCode())));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/check_username")
    public boolean userExists(@RequestParam("username") String username){
        return !repository.findByUsername(username).isEmpty() ;
    }
}

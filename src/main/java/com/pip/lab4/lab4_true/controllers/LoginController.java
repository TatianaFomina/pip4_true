package com.pip.lab4.lab4_true.controllers;

import com.pip.lab4.lab4_true.entity.UserAccount;
import com.pip.lab4.lab4_true.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collection;
import java.util.stream.Collectors;

//@Controller
@RestController
public class LoginController {

    private UserRepository repository;

    @Autowired
    public LoginController(UserRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value = "/register")
    public void register(@RequestParam("username") String username, @RequestParam("password") String password, HttpServletResponse response) throws IOException {
        repository.save(new UserAccount(username, String.valueOf(password.hashCode())));
        response.sendRedirect("/success");
    }

    @RequestMapping(value = "/check_username")
    public boolean userExists(@RequestParam("username") String username){
        return !repository.findByUsername(username).isEmpty() ;
    }

    @RequestMapping(value = "/check_user")
    public boolean userExists2(@RequestParam("username") String username, @RequestParam("password") String password){
        return !repository.findByUsernameAndPassword(username, String.valueOf(password.hashCode())).isEmpty() ;
    }
}

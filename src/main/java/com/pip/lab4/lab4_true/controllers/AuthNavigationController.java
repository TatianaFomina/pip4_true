package com.pip.lab4.lab4_true.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AuthNavigationController {
    @RequestMapping(value = "/signup")
    public String signup() {
        return "registration.html";
    }

    @RequestMapping(value = "/signin")
    public String signin() {
        return "signin.html";
    }
}

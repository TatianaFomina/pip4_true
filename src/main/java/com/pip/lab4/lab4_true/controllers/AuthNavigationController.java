package com.pip.lab4.lab4_true.controllers;

import org.springframework.boot.web.servlet.server.Session;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;

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

    @RequestMapping(value = "/go", method = RequestMethod.POST)
    public String indexPOST(@RequestParam("username") String username, @RequestParam("password") String password) {
        ///Session.Cookie cookieLogin = new Cookie("username", loginStr);
//        Session session =
//                request.getSession().setAttribute("login", loginStr);
//        request.getSession().setMaxInactiveInterval(60*20);
//        cookieLogin.setMaxAge(60*60);
//        response.addCookie(cookieLogin);
        return "redirect:index.html";
    }
}

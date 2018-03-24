package com.pip.lab4.lab4_true.controllers;

import com.pip.lab4.lab4_true.entity.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.util.Collection;
import java.util.stream.Collectors;

@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public String index() {
        return "index.html";
    }

   /* @RequestMapping(value = "/user/registration", method = RequestMethod.GET)
    public String showRegistrationForm(WebRequest request, Model model) {
        UserDto userDto = new UserDto();
        model.addAttribute("user", userDto);
        return "registration";
    }*/
}

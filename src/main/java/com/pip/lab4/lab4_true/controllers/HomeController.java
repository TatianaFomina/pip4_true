package com.pip.lab4.lab4_true.controllers;

import com.pip.lab4.lab4_true.entity.Point;
import com.pip.lab4.lab4_true.entity.UserDto;
import com.pip.lab4.lab4_true.repository.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import com.google.gson.Gson;

import java.util.Collection;
import java.util.stream.Collectors;

@Controller

public class HomeController {

    @RequestMapping(value = "/")
    public String index() {
        return "index.html";
    }

    @RequestMapping(value = "/success")
    public String success() {
        return "success.html";
    }

//    @RequestMapping(value = ".")
//    public String index_redirect() {
//        return "redirect:/";
//    }


}

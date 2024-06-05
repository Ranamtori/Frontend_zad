package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller

public class PathValieble {
    @GetMapping("/")

    public String home() {
        return "home page";
    }

}

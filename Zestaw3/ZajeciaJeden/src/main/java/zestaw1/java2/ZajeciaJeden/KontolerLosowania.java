package zestaw1.java2.ZajeciaJeden;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Random;

@Controller
@RequestMapping("/api")
public class                 KontolerLosowania {

    @GetMapping("/test")
    public String test(Model model) {
        model.addAttribute("nazwa", "Jan Kowalski");
        return "test";
    }

    @GetMapping("/testParam")
    public String testParametr(@RequestParam int a, Model model) {
        model.addAttribute("nazwa", a);
        return "test";
    }


    //zapytanie np.: http://localhost:8080/api/losowanie/10/20
    @RequestMapping("/losowanie/{min}/{max}")
    public String zadanieJeden(@PathVariable int min, @PathVariable int max, Model model) {
        Random random = new Random();
        int liczba = random.nextInt(max - min) + min;
        model.addAttribute("liczba", liczba);
        return "losowanie1";
    }

}

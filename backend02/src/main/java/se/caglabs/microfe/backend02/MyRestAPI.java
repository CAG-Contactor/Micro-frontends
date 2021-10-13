package se.caglabs.microfe.backend02;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyRestAPI {
    @GetMapping("/api/ping")
    public String ping() {
        return "pong";
    }
}

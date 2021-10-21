package se.joelabs.bootwithreact.rest;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * This controller serves the frontend angular application.
 */
@RestController
@Slf4j
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class PingController {
  @GetMapping("/ping")
  public String ping() {
    return "pong";
  }
}

package se.joelabs.bootwithreact.rest;

import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * This controller serves the frontend react application.
 */
@Controller
@Slf4j
public class FrontendController {
  @RequestMapping("/**/{*path:[^\\.]*}")
  public String redirect(HttpServletRequest req) {
    log.info("Forwarding path: " + req.getRequestURI() + " to /index.html");
    return "forward:/index.html";
  }
}

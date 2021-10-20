package se.joelabs.bootwithreact.rest;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PingControllerTest {

  private PingController pingController;

  @BeforeEach
  void setUp() {
    pingController = new PingController();
  }

  @Test
  void pingShouldReturnPong() {
    assertThat(pingController.ping()).isEqualTo("pong");
  }
}

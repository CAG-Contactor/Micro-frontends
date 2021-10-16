package se.caglabs.microfe.backend01;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Arrays;

@RestController
@RequestMapping("/api/v1/images")
public class ImageController {
    private static final Logger logger = LoggerFactory.getLogger(ImageController.class);

    private final HttpClient httpClient = HttpClient.newBuilder()
            .version(HttpClient.Version.HTTP_2)
            .connectTimeout(Duration.ofSeconds(10))
            .followRedirects(HttpClient.Redirect.ALWAYS)
            .build();

    @Operation(
            summary = "Get random image",
            operationId = "getRandomImage",
            responses = {
                    @ApiResponse(responseCode = "200"),
            }
    )

    @GetMapping(value = "/random/{width}/{height}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public ResponseEntity<?> getRandomImage(@PathVariable int width, @PathVariable int height) throws IOException, InterruptedException {
        byte[] image = getImage(width, height);
        return ResponseEntity.ok().contentLength(image.length).contentType(MediaType.IMAGE_JPEG).body(image);
    }

    private byte[] getImage(int width, int height) throws IOException, InterruptedException {
        HttpResponse<byte[]> response = sendRequest("https://picsum.photos/" + width + "/" + height);
        HttpStatus httpStatus = HttpStatus.valueOf(response.statusCode());
        if (httpStatus.isError()) {
            throw new ResponseStatusException(httpStatus, Arrays.toString(response.body()));
        }
        return response.body();
    }

    private HttpResponse<byte[]> sendRequest(String urlString) throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .GET()
                .uri(URI.create(urlString))
                .headers(HttpHeaders.ACCEPT, MediaType.IMAGE_JPEG_VALUE,
                        HttpHeaders.ACCEPT, MediaType.APPLICATION_OCTET_STREAM_VALUE,
                        HttpHeaders.ACCEPT, "application/signed-exchange")
                .build();
        return httpClient.send(request, HttpResponse.BodyHandlers.ofByteArray());
    }
}

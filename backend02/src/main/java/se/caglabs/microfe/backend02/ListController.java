package se.caglabs.microfe.backend02;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ListController {
    private final ListService listService;

    @Operation(
            summary = "Add a list item",
            operationId = "addListItems",
            responses = {
                    @ApiResponse(responseCode = "200"),
            }
    )
    @PostMapping("/api/listItems")
    public void addListItems(@RequestBody String item) {
        listService.addItems(item);
    }

    @Operation(
            summary = "Get all list item",
            operationId = "getListItems",
            responses = {
                    @ApiResponse(responseCode = "200"),
            }
    )
    @GetMapping("/api/listItems")
    public List<String> getListItems() {
        return listService.getItems();
    }

    @Operation(
            summary = "Delete all list item",
            operationId = "deleteListItems",
            responses = {
                    @ApiResponse(responseCode = "200"),
            }
    )
    @DeleteMapping("/api/listItems")
    public void deleteListItems() {
        listService.deleteItems();
    }
}

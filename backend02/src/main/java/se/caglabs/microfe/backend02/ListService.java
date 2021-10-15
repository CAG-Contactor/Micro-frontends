package se.caglabs.microfe.backend02;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ListService {
    private List<String> items = new ArrayList<>();

    public void addItems(String item){
        items.add(item);
    }

    public List<String> getItems(){
        return items;
    }

    public void deleteItems() {
        items.clear();
    }
}

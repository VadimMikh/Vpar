import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items-service.service';

@Component({
  selector: '[appItemsList]',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.itemsService.getItems().subscribe(
        result => {
          this.items = result;
        },
        error => console.warn(error)
    );
  }

}

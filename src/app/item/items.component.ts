import { Component, OnInit } from '@angular/core'

import { Restaurant } from './restaurant'
import { ItemService } from './item.service'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Array<Restaurant>

  constructor(private itemService: ItemService, private routeEx: RouterExtensions) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }

  newRestaurant() {
    this.routeEx.navigate(['/newRestaurant']);
  }
}

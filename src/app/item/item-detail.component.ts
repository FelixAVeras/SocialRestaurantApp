import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Restaurant } from './restaurant'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Restaurant

  constructor(private itemService: ItemService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.item = this.itemService.getItem(id)
  }
}

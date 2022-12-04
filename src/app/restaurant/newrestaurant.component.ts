import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ns-newRestaurant',
  templateUrl: './newRestaurant.component.html',
  styleUrls: ['./newRestaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
  
  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
}

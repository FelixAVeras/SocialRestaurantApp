import { Injectable } from '@angular/core'
import { Restaurant } from './restaurant'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Restaurant>(
    { 
      id: 1, 
      image: 'https://www.gunaydindubai.com/gunaydindubai_files/2017524152350187_DSC09682-HDR-3.jpg',
      name: 'Luna', 
      description: 'Restaurant con servicio y alimentos de calidad.',
      address: 'Calle luna calle sol #33',
      details: [
        { title: 'Julio Cespedes', description: 'Muy buen restaurante' }
      ]
    }
  );

  getItems(): Array<Restaurant> {
    return this.items
  }

  getItem(id: number): Restaurant {
    return this.items.filter((item) => item.id === id)[0]
  }
}

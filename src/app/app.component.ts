import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'restaurant';

  menu = [
    {
      name: 'Pizza',
      ingredients: ['pepperoni', 'mushrom', 'mozarella'],
      id: 0,
      price: 14,
      emoji: '/assets/pizza.png',
    },
    {
      name: 'Hamburger',
      ingredients: ['beef', 'cheese', 'lettuce'],
      price: 12,
      emoji: '/assets/burger.png',
      id: 1,
    },
    {
      name: 'Beer',
      ingredients: ['grain, hops, yeast, water'],
      price: 12,
      emoji: '/assets/beer.png',
      id: 2,
    },
  ];
}

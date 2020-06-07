import { Component, OnInit } from '@angular/core';
import { Ingredients } from './ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Pizza',10),
    new Ingredients('Apple',5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

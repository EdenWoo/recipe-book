import { EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

export class ShoppingListService {
  private items: Ingredient[] = [];
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;
  constructor() {}

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
    console.log(this.items);
  }

  addItem(item: Ingredient){
    this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}

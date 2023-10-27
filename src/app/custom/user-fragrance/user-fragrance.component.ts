import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ingredient} from "../../shared/models";

@Component({
  selector: 'app-user-fragrance',
  templateUrl: './user-fragrance.component.html',
  styleUrls: ['./user-fragrance.component.css']
})
export class UserFragranceComponent {
  name: string = ''
  @Input() ingredients: Ingredient[] = [];
  //The component emits events to notify the parent component when the button is clicked and when the custom fragrance name is specified.
  @Output() buttonClicked = new EventEmitter<void>();
  @Output() nameCustomFragrance = new EventEmitter<string>();


  onButtonClick() {
    this.nameCustomFragrance.emit(this.name);
    this.buttonClicked.emit();
  }

}

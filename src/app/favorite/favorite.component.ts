import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  styles:[
    `
    .teste{
      color:blue;
    }
    `
  ]

})
// vai prevalecer os dados do styles, porque ele fica após o styleURL, logo ele roda o styleURL e depois o style, sobescrevendo sobre o styleURLs.
export class FavoriteComponent {

  //inputs vindo do elemento (pai)app.component
  @Input('is-favorite') isFavorite: boolean | undefined;
  @Input() title: string | undefined;

  @Output('change') click = new EventEmitter();


  onClick(){
    this.isFavorite = !this.isFavorite;

    this.click.emit();
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

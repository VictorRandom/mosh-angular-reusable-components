import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  //inputs vindo do elemento (pai)app.component
  @Input('is-favorite') isFavorite: boolean | undefined;
  @Input() title: string | undefined;

  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



  onClick(){
    this.isFavorite = !this.isFavorite;

    this.change.emit();
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

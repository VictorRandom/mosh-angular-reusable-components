import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  //inputs vindo do elemento (pai)app.component
  @Input() isFavorite: boolean | undefined;
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }



  onClick(){
    this.isFavorite = !this.isFavorite;
  }

  onFavoriteChange(){
    console.log('aqui')
  }

}

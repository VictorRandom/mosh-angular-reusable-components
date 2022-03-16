import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '03-reusable-components';
  imageUrl = "https://picsum.photos/400/200";
  post = {
    title: "Title",
    isFavorite: true
  }

  onClick(){
    console.log('aqui')
  }
}

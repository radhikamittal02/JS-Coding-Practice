import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-app';
  feature = 'recipe';
  serverElements =  [{name: 'test',content: 'this isjghj'}];

  serverAdded(event) {
    this.serverElements.push({
      name: event.name,
      content: event.content
    });
  }

  onNavigate(feature : string) {
    this.feature = feature;
  }
}

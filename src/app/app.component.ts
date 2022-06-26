import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  items = ['make lunch!', 'create awesome todo app', 'walk the dog'];

  removeItem(item: string): void {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

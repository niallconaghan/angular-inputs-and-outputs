import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  // Input is imported from @angular/core
  @Input() item = '';

  // Output and EventEmitter are imported from @angular/core
  @Output() removeItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  remove(): void {
    this.removeItem.emit(this.item);
  }
}

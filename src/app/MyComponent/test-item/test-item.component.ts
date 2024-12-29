import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrl: './test-item.component.css',
  imports: [NgClass]
})
export class TestItemComponent implements OnInit {

  @Input() todo: Todo = new Todo;
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  OnClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("OnClick has been triggred");
  }

  OnCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
    console.log("OnCheckboxClick has been triggred");
  }
}

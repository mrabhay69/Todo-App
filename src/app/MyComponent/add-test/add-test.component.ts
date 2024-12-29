import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrl: './add-test.component.css',
  imports: [FormsModule]
})
export class AddTestComponent implements OnInit {

  title: string | undefined;
  desc: string | undefined;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit() {
    const todo = {
      sno: 4,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}

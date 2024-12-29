import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor, NgIf } from '@angular/common';
import { TestItemComponent } from "../test-item/test-item.component";
import { AddTestComponent } from "../add-test/add-test.component";

@Component({
  selector: 'app-testapp',
  templateUrl: './testapp.component.html',
  styleUrls: ['./testapp.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, TestItemComponent, AddTestComponent]
})

export class TestappComponent implements OnInit{

  localItem: string | null;
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}

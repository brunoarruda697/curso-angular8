import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items = ['item 1'];
  tarefa = '';

  constructor() { }

  ngOnInit() {
  }

  addTarefa() {
    this.items.push(this.tarefa);
  }

  removeTarefa(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

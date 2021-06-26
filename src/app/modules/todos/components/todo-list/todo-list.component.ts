import {Component, OnInit} from '@angular/core';
import {Router,} from '@angular/router';
import {DataTransferService} from 'src/app/services';
import {IToDo} from 'src/models/toDo';
import {TodoListService} from '../../services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: IToDo[]

  constructor(private dataTransferService: DataTransferService,
              private router: Router,
              private toDoListService: TodoListService) {
    this.toDoListService.getAllTodos();
    this.dataTransferService.state.subscribe(value => this.todos = value)
  }

  ngOnInit(): void {
  }

  getAddToDoMenu(): void {
    this.router.navigate(['todoList/addToDo'])
  }

}

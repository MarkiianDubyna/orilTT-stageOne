import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataTransferService} from 'src/app/services';
import {IToDo} from 'src/models/toDo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  toDo: IToDo
  @Input()
  i: number
  toDoStatus = false


  constructor(private router: Router, private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
  }

  getEditMenu(): void {
    this.router.navigate(['todoList/editToDo', this.i])
  }

  getRemoveMenu(): void {
    this.router.navigate(['todoList/removeToDo', this.i])
  }

  completeToDo(): void {
    if (!this.toDoStatus) {
      this.toDoStatus = true;
      this.toDo.completed = 'true'
    } else {
      this.toDoStatus = false
      this.toDo.completed = 'false'
    }
  }
}

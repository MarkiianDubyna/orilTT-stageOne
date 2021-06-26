import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataTransferService} from 'src/app/services';
import {IToDo} from 'src/models';
import {TodoListService} from '../../services';

@Component({
  selector: 'app-remove-to-do',
  templateUrl: './remove-to-do.component.html',
  styleUrls: ['./remove-to-do.component.css']
})
export class RemoveToDoComponent implements OnInit {
  toDoIndex: number
  toDoTitle: string
  toDo: IToDo

  constructor(private activatedRoute: ActivatedRoute,
              private dataTransferService: DataTransferService,
              private router: Router,
              private toDoListService: TodoListService) {
    this.activatedRoute.params.subscribe(param => this.toDoIndex = param.i);
    this.dataTransferService.state.subscribe(todos => this.toDo = todos[this.toDoIndex])
  }

  ngOnInit(): void {
  }

  closeRemoveToDoMenu(): void {
    this.router.navigate(['todoList']);
  }

  removeToDo(): void {
    if (confirm('Are you sure you want to remove this ToDo? It would be impossible to restore it afterwards.')) {
      this.toDoListService.removeTodo(this.toDoIndex).subscribe(value => {
      });
      this.dataTransferService.state.subscribe(todos => todos.splice(this.toDoIndex, 1));
    }
    this.closeRemoveToDoMenu()
  }
}


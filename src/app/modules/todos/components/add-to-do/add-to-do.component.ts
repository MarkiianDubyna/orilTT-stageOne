import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DataTransferService} from 'src/app/services';
import {IToDo} from 'src/models';
import {TodoListService} from '../../services';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  toDo: IToDo
  toDos: IToDo[]
  addToDoForm: FormGroup = new FormGroup({
    toDoTitle: new FormControl('', Validators.required)
  })

  constructor(private todoListService: TodoListService, private dataTransferService: DataTransferService, private router: Router) {
    this.dataTransferService.state.subscribe(toDos => this.toDos = toDos);
  }

  ngOnInit(): void {
  }

  closeAddToDoMenu(): void {
    this.router.navigate(['todoList']);
  }

  addToDo(): void {
    this.toDo = {
      userId: 0,
      title: this.addToDoForm.controls.toDoTitle.value,
      completed: 'false'
    };
    this.todoListService.postTodo(this.toDo).subscribe(value => {
    });
    this.dataTransferService.state.subscribe(value => value.unshift(this.toDo));
    this.closeAddToDoMenu()
  }
}

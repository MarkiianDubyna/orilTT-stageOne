import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DataTransferService} from 'src/app/services';
import {IToDo} from 'src/models';
import {TodoListService} from '../../services';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css']
})
export class EditToDoComponent implements OnInit {
  toDo: IToDo
  toDoIndex: number
  editToDoForm: FormGroup

  constructor(private router: Router,
              private dataTransferService: DataTransferService,
              private activatedRoute: ActivatedRoute,
              private toDoListService: TodoListService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => this.toDoIndex = param.i);
    this.dataTransferService.state.subscribe(toDos => this.toDo = toDos[this.toDoIndex]);
    this.editToDoForm = new FormGroup({
      toDoTitle: new FormControl(this.toDo.title, Validators.required)
    })
  }

  closeEditToDoMenu(): void {
    this.router.navigate(['todoList']);
  }

  editToDo(): void {
    this.toDoListService.updateTodo(this.toDo, this.toDoIndex).subscribe(value => {
    })
    this.dataTransferService.state.subscribe(toDos => {
      toDos[this.toDoIndex].title = this.editToDoForm.controls.toDoTitle.value
    });
    this.closeEditToDoMenu();
  }
}

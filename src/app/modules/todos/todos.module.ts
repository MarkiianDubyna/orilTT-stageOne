import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodosRoutingModule} from './todos-routing.module';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {HttpClientModule} from '@angular/common/http';
import {TodoListService} from './services';
import {TodoComponent} from './components/todo/todo.component';
import {AddToDoComponent} from './components/add-to-do/add-to-do.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {EditToDoComponent} from './components/edit-to-do/edit-to-do.component';
import {RemoveToDoComponent} from './components/remove-to-do/remove-to-do.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent,
    AddToDoComponent,
    EditToDoComponent,
    RemoveToDoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    TodosRoutingModule
  ],
  providers: [TodoListService]
})
export class TodosModule {
}

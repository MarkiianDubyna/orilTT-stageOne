import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddToDoComponent} from './components/add-to-do/add-to-do.component';
import {EditToDoComponent} from './components/edit-to-do/edit-to-do.component';
import {RemoveToDoComponent} from './components/remove-to-do/remove-to-do.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    children: [
      {path: 'addToDo', component: AddToDoComponent},
      {path: 'editToDo/:i', component: EditToDoComponent},
      {path: 'removeToDo/:i', component: RemoveToDoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {
}

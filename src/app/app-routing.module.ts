import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'signUp', pathMatch: 'full'},
      {path: 'signUp', component: SignUpComponent},
      {path: 'todoList', loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule)}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}

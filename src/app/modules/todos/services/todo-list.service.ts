import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {urls} from 'src/constants';
import {IToDo} from 'src/models/toDo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  toDo: IToDo

  constructor(private httpClient: HttpClient) {
  }

  getAllTodos(): Observable<IToDo[]> {
    return this.httpClient.get<IToDo[]>(urls.todos);
  }

  postTodo(todo: IToDo): Observable<IToDo> {
    return this.httpClient.post<IToDo>(urls.todos, todo)
  }

  updateTodo(todo: IToDo, id: number): Observable<IToDo> {
    return this.httpClient.put<IToDo>(`${urls.todos}/${id}`, todo)
  }

  removeTodo(id: number): Observable<IToDo> {
    return this.httpClient.delete<IToDo>(`${urls.todos}/${id}`)
  }
}

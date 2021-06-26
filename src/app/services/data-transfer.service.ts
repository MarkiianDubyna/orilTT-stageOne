import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IToDo} from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  state = new BehaviorSubject<IToDo[]>([]);

  constructor() {
  }
}

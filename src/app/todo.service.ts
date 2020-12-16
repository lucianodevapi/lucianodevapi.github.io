import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiURL: string = environment.apiURL;
  constructor(private http: HttpClient) { }

  salvar(todo: Todo) : Observable<Todo> {
    const url = `${this.apiURL }/created`;
    return this.http.post<Todo>(url , todo)
  }

  marcarComoConcluido(id: number) : Observable<Todo>{
    const url = `${this.apiURL }/update/${id}/done`;
    return this.http.patch<Todo>(url, {});
  }

  listar(): Observable<Todo[]> {
    const url = `${this.apiURL }/all`;
    return this.http.get<Todo[]>(url);
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiURL }/delete/${id}`;
    return this.http.delete<void>(url);
  }
}

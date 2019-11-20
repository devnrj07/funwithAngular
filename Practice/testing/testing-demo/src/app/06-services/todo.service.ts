
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map((response :any) => response.json()))
  }

  getTodos() { 
    return this.http.get('...').pipe(map((response :any) => response.json()))
  }

  delete(id) {
    return this.http.delete('...').pipe(map((response :any) => response.json()))
  }
}
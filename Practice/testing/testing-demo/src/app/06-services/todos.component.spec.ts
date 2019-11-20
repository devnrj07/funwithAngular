import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable, from, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service : TodoService;
  beforeEach(() => {
    service = new TodoService(null); //Just for faking service response
    component = new TodosComponent(service);
  });

  it('should set todo property with items returned from service', () => {
    //Arrange : A fake service implementation using spy
    let todos = [1,2,4]
    spyOn(service,'getTodos').and.callFake(()=>{
      //fake implementation with same signature
      return from([todos])
     })

     //Act
     component.ngOnInit();

     //Assert
     expect(component.todos).toBe(todos)
  });
  //part 1 : called part
  it('should call todo method', ()=>{
    let spy = spyOn(service, 'add').and.callFake( t =>{
        return empty();
    })

    component.add()

    expect(spy).toHaveBeenCalled()
  })

  // part 2 : push part
  it('should push new todo returned from the server', ()=>{
    let postdata = [{id :1}]
/*     let spy = spyOn(service, 'add').and.callFake( t =>{
        return from(postdata)
    }) */

    spyOn(service, 'add').and.returnValue(from(postdata))

    component.add()

    expect(component.todos.indexOf(postdata)).toBeGreaterThanOrEqual(-1)
  })

  //part 3 : error part
  it('should push new todo returned from the server', ()=>{
    let postdata = [{id :1}]
    let errorMessage = [{error:'what the heck happn'}]
    spyOn(service, 'add').and.returnValue(throwError(errorMessage))

    component.add()

    expect(component.message).toBe(errorMessage)
  })

  //for delete method
  it('should call server and delete item',() =>{
    //control/ faking the alert pop up
    spyOn(window,'confirm').and.returnValue(true)
    let spy = spyOn(service,'delete').and.returnValue(empty())

    component.delete(1)

    expect(spy).toHaveBeenCalledWith(1)

  })

  it('should call server and but not delete the item',() =>{
    //control/ faking the alert pop up
    spyOn(window,'confirm').and.returnValue(false)
    let spy =spyOn(service,'delete').and.returnValue(empty())

    component.delete(1)

    expect(spy).not.toHaveBeenCalledWith(1)

  })
});
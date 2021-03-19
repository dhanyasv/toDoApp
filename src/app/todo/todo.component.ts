import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { ToDo } from "./todo.model";
import { TodoService } from "./todoservices/todo.service";

@Component({
    selector : 'todo-app',
    templateUrl : './todo.component.html',
    styleUrls : ['./todo.component.css']
})
export class TodoComponent implements OnInit{

 allToDos : ToDo[] = [];
 toDo : ToDo;
 completedStatus : boolean;
 toDoId : number;
 toDoForm = new FormGroup({
    todoName : new FormControl('')
 })
 ngOnInit(){
    this.getAllToDos();
 }
 constructor(private toDoService: TodoService){
 }
 getAllToDos(){
    this.allToDos = this.toDoService.getAll();
 }
 completeTask(id:number){
    console.log(id)
    this.allToDos.filter((toDo) => {toDo.todoId == id ? toDo.completedStatus = ! toDo.completedStatus : ''});
 }
 editToDo(event){
    
}
 deleteToDo(toDo : ToDo){
    const index = this.allToDos.indexOf(toDo);
    if (index > -1) {
        this.allToDos.splice(index, 1);
    } 
}
}
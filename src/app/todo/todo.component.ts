import { Component, HostBinding, OnInit } from "@angular/core";
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
 editForm : boolean = false;
 @HostBinding('class.test') addClass: string;
 ngOnInit(){
    this.getAllToDos();
 }
 constructor(private toDoService: TodoService){
 }
 getAllToDos(){
    this.allToDos = this.toDoService.getAll();
 }
 completeTask(id:number){
    this.allToDos.filter((toDo) => {toDo.todoId == id ? toDo.completedStatus = ! toDo.completedStatus : ''});
 }
 editToDo(event){
    console.log(event)
    this.editForm = true;
}
 addNewToDo(){
    let addTODoNAme = (this.toDoForm.value).todoName;
    this.toDo = new ToDo(addTODoNAme,false,Math.random())
    console.log(this.toDo)

    //this.toDo = new ToDo(this.toDoName,this.completedStatus,this.toDoId);
    this.toDoService.addToDo(this.toDo);
 }
 deleteToDo(toDo : ToDo){
    const index = this.allToDos.indexOf(toDo);
    if (index > -1) {
        this.allToDos.splice(index, 1);
    } 
}
}
import { Injectable } from "@angular/core";
import { ToDo } from '../todo.model';

@Injectable({
    providedIn : "root"
})
export class TodoService {

    toDos : ToDo[] = [new ToDo('todo1',false,1),new ToDo('todo2',true,2),new ToDo('todo3',true,3)];
    
    constructor(){

    }

    getAll(){
       //this.toDos = this.toDos.sort(function(a,b){ return b-a; }); 
       return this.toDos;
    }
    addToDo(toDo:ToDo){
        this.toDos.push(toDo)
    }

    

}
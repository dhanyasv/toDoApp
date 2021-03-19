import {Component, Input} from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ToDo } from '../../todo.model';
import { TodoService } from "../../todoservices/todo.service";

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'add-toDo',
  templateUrl: './todoItemAdd.component.html',
  styleUrls: ['./todoItemAdd.component.css'],
})
export class ToDoItemAddComponent {
    @Input() toDo : ToDo;
    toDoForm = new FormGroup({
        todoName : new FormControl('',[Validators.required,
        ])
     })
     constructor(private toDoService : TodoService){

     }
     setValue() {
        this.toDoForm.setValue({todoName : ''});
      }
      addNewToDo(){
          console.log("Dhanya")
        let addTODoNAme = (this.toDoForm.value).todoName;
        this.toDo = new ToDo(addTODoNAme,false,Math.random())
        console.log(this.toDo)
    
        //this.toDo = new ToDo(this.toDoName,this.completedStatus,this.toDoId);
        this.toDoService.addToDo(this.toDo);
     }
}
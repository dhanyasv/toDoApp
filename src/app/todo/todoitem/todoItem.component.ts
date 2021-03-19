import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ToDo } from '../todo.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToDoEditDialog } from './todoItemEditDialog';

@Component({
    selector: 'todoitem',
    templateUrl: 'todoItem.component.html',
    styleUrls: ['todoItem.component.css']
})
export class TodoItemComponent {
    @Input() todo : ToDo;
    @Output() deleteToDo = new EventEmitter<ToDo>();
    constructor(public dialog: MatDialog){
    }
    openDialog(): void {
        const dialogRef = this.dialog.open(ToDoEditDialog, {
          width: '250px',
          data: this.todo
        });
        dialogRef.afterClosed().subscribe(result => {
    
        });
      }
     delete(){
        this.deleteToDo.emit(this.todo);
     } 
}
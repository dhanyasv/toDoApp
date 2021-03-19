import { Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToDo } from '../todo.model';

@Component({
    selector: 'todo-edit',
    templateUrl: 'todoItemEditDialog.html',
  })
  export class ToDoEditDialog implements OnInit {

    //@Input() toDo : ToDo;
    constructor(
      public dialogRef: MatDialogRef<ToDoEditDialog>,
      @Inject(MAT_DIALOG_DATA) public data: ToDo) {}
    ngOnInit(){
        console.log(this.data);
    } 
    onNoClick(): void {
      this.dialogRef.close();
    }
}
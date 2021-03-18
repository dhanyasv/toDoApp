export class ToDo {
    public todoName:string;
    public completedStatus:boolean;
    public todoId:number
    constructor(todoName:string,todoStatus:boolean,todoId:number){
        this.todoName = todoName;
        this.completedStatus = todoStatus;
        this.todoId = todoId;
    }
}
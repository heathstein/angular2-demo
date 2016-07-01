import {Component,Input} from "angular2/core";
import {TodoService} from "./todo-service";
import {TodoItemRender} from "./todo-item-render";
import {SearchPipe} from "./search-pipe";
import {StartedPipe} from "./started-pipe";

@Component({
    selector:'todo-list',
    directives:[TodoItemRender],
    pipes:[StartedPipe,SearchPipe],
    template:`
                <ul>
                <li *ngFor="#todo of todoService.todos
                | started : status
                | search : term
                ">
                  <todo-item-render
                  (toggle)="todoService.toggleToDo($event)"
                  [todo]="todo">
                  </todo-item-render>
                </li>
             </ul>

             <div>HE man </div>

             `
})

export class TodoList{
    @Input() status;
    @Input() term;

    constructor(public todoService:TodoService){

    }

    updateTest(_val){

        console.log("_val " , _val)
        this.todoService.filterArray(_val);
    }






};



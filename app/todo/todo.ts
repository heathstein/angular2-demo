/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component} from "angular2/core";
import {TodoInput} from './todo-input';
import {TodoList} from './todo-list';
import {TodoService} from './todo-service';
import {StatusSelector} from './status-selector';
import {SearchBox} from './search-box';
import { Inject } from 'angular2/core';



@Component({
    selector:'todo-component',
    directives: [TodoInput,TodoList,StatusSelector,SearchBox],
    template:`
    <div class="col s12 m6"><div class="card-panel yellow darken-1 white-text center-align">
        <search-box (update)="term = $event"></search-box>
        <todo-input></todo-input>
        <status-selector (select)="status = $event"></status-selector>
        <todo-list [status]="status" [term]="term"></todo-list>
    </div>
        <div class="completed" >Completed</div>
        <div class="started" >Started</div>
    </div>`,
})
// componentServices: [TodoService] //IF WE DO NOT HAVE TodoService Injected Globally ex(bootstrap(MyAppComponent,  [TodoService])



export class Todo{
    constructor(@Inject(TodoService) TodoService) {


    }
}
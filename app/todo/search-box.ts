/**
 * Created by 212544474 on 2/5/2016.
 */
import {Component,Output,EventEmitter} from "angular2/core";

@Component({
    selector: 'search-box',
    template: `<div>
    <input #input type="text" (input)="update.emit(input.value)">
    </div>`
})

export class SearchBox{
    @Output() update = new EventEmitter();
    ngOnInit(){
        this.update.emit("");
    }
}


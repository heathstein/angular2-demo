/**
 * Created by 212544474 on 2/15/2016.
 */
/**
 * Created by 212544474 on 2/15/2016.
 */
/*
 * Angular
 */
import {Component} from '@angular/core';
//import {RouteParams} from '@angular/router';

@Component({
    selector: 'edit',
    template: `Edit List: {{id}}.`
})
export class EditItem {
    id: string;

    constructor(/*public routeParams: RouteParams*/) {
       // this.id = routeParams.get('id');
    }
}

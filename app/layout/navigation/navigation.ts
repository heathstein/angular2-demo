/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component, View} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'navigation',
    host: {'class': 'gt-top-nav pull-right'},
    directives: [RouterLink],
    template: `<ul class="gt-header-nav">
        <li><a class="active" [routerLink]="['/Home']">Home</a><div class="gt-badge badge-xs badge-green">3</div></li>
        <li><a class="" [routerLink]="['/Products']">Products</a><div class="gt-badge badge-xs badge-blue">12</div></li>
        <li><a class="" [routerLink]="['/Superheros']">Superheros</a><div class="gt-badge badge-xs badge-red">1</div></li>
    </ul>`
})
export class Navigation {
    constructor() {
        console.log("test: " , $('.tooltipped') );
    }
}
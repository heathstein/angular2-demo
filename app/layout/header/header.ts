/**
 * Created by 212544474 on 2/16/2016.
 */
import {Component, View} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {Navigation} from '../navigation/navigation';

@Component({
    selector: 'header',
    directives: [RouterLink,Navigation],
    templateUrl: "app/layout/header/header.html"
})
export class Header {
    constructor() {

    }
}
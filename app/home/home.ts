/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component,View,provide,EventEmitter} from 'angular2/core';
import {Todo} from 'app/todo/todo';
import {TicTacToe} from 'app/tictactoe/tictactoe';
import {CanvasArt} from 'app/canvas-art/canvas-art';


@Component({
    selector: 'home',
    directives: [Todo,TicTacToe,CanvasArt],
    template: `<h1>Welcome</h1>
    <canvas-art></canvas-art>
    <todo-component></todo-component>
    <h1>Tic Tac Toe</h1>
    <tic-tac-toe></tic-tac-toe>
    `
})
export class Home {
    constructor() {

    }
}

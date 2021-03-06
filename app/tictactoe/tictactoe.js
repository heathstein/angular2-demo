System.register(["angular2/core", "./tictactoe-game"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tictactoe_game_1;
    var TicTacToe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tictactoe_game_1_1) {
                tictactoe_game_1 = tictactoe_game_1_1;
            }],
        execute: function() {
            TicTacToe = (function () {
                ///public todoService:TodoService
                function TicTacToe() {
                    this.ticTacToeGame = new tictactoe_game_1.TicTacToeGame();
                }
                TicTacToe.prototype.makeMove = function (_index) {
                    this.ticTacToeGame.makePlayerMove(_index);
                };
                TicTacToe.prototype.startGame = function () {
                    this.ticTacToeGame.startGame();
                    console.log("test sasdsa");
                };
                TicTacToe.prototype.setSkillLevel = function ($event) {
                    console.log($event);
                };
                TicTacToe = __decorate([
                    core_1.Component({
                        selector: 'tic-tac-toe',
                        directives: [],
                        template: "\n    <div class=\"tictactoe\">\n    <div class=\"status\">{{ticTacToeGame.results.status}}</div>\n    <select [(ngModel)]=\"ticTacToeGame.skillLevel\">\n        <option [value]=\"i.level\" *ngFor=\"#i of ticTacToeGame.skillLevels\">{{i.label}}</option>\n    </select>\n    <button  class=\"btn btn-default\" (click)=\"startGame()\">Start Game</button>\n    <div class=\"score-board\">{{ticTacToeGame.playerLabel}}</div>\n             <div class=\"tac-container\"><div [ngClass]=\"{active: cell.active}\" *ngFor=\"#cell of ticTacToeGame.cells; #i = index\" (click)=\"makeMove(i)\">{{ cell.value }}</div>\n    </div>\n    </div>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], TicTacToe);
                return TicTacToe;
            })();
            exports_1("TicTacToe", TicTacToe);
        }
    }
});
//# sourceMappingURL=tictactoe.js.map
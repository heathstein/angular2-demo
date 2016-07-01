System.register(['angular2/core', 'app/todo/todo', 'app/tictactoe/tictactoe', 'app/canvas-art/canvas-art'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_1, tictactoe_1, canvas_art_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (tictactoe_1_1) {
                tictactoe_1 = tictactoe_1_1;
            },
            function (canvas_art_1_1) {
                canvas_art_1 = canvas_art_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home() {
                }
                Home = __decorate([
                    core_1.Component({
                        selector: 'home',
                        directives: [todo_1.Todo, tictactoe_1.TicTacToe, canvas_art_1.CanvasArt],
                        template: "<h1>Welcome</h1>\n    <canvas-art></canvas-art>\n    <todo-component></todo-component>\n    <h1>Tic Tac Toe</h1>\n    <tic-tac-toe></tic-tac-toe>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            })();
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.js.map
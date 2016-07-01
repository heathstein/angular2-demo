System.register(["angular2/core", './todo-input', './todo-list', './todo-service', './status-selector', './search-box', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, todo_input_1, todo_list_1, todo_service_1, status_selector_1, search_box_1, core_2;
    var Todo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_input_1_1) {
                todo_input_1 = todo_input_1_1;
            },
            function (todo_list_1_1) {
                todo_list_1 = todo_list_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (status_selector_1_1) {
                status_selector_1 = status_selector_1_1;
            },
            function (search_box_1_1) {
                search_box_1 = search_box_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            Todo = (function () {
                function Todo(TodoService) {
                }
                Todo = __decorate([
                    core_1.Component({
                        selector: 'todo-component',
                        directives: [todo_input_1.TodoInput, todo_list_1.TodoList, status_selector_1.StatusSelector, search_box_1.SearchBox],
                        template: "\n    <div class=\"col s12 m6\"><div class=\"card-panel yellow darken-1 white-text center-align\">\n        <search-box (update)=\"term = $event\"></search-box>\n        <todo-input></todo-input>\n        <status-selector (select)=\"status = $event\"></status-selector>\n        <todo-list [status]=\"status\" [term]=\"term\"></todo-list>\n    </div>\n        <div class=\"completed\" >Completed</div>\n        <div class=\"started\" >Started</div>\n    </div>",
                    }),
                    __param(0, core_2.Inject(todo_service_1.TodoService)), 
                    __metadata('design:paramtypes', [Object])
                ], Todo);
                return Todo;
            })();
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=todo.js.map
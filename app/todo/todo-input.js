System.register(["angular2/core", "./todo-service", "app/utilites/alerts/alert-service", "./todo-model"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1, alert_service_1, todo_model_1;
    var TodoInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            },
            function (todo_model_1_1) {
                todo_model_1 = todo_model_1_1;
            }],
        execute: function() {
            TodoInput = (function () {
                function TodoInput(todoService, alertService) {
                    this.todoService = todoService;
                    this.alertService = alertService;
                    this.todoModel = new todo_model_1.TodoModel();
                    console.log(todoService);
                    console.log(alertService);
                }
                TodoInput.prototype.onEnter = function ($event) {
                    console.log("test");
                    if ($event.keyCode === 13) {
                        this.addTodo();
                    }
                };
                TodoInput.prototype.addTodo = function () {
                    //old - this.todoService.todos.push(this.todoModel)
                    if (this.todoModel.title.length > 0) {
                        this.alertService.addAlert('success', "Todo {{this.todoModel.title}} Item was added", 6000, true);
                        this.todoService.addTodo(this.todoModel); //added new method
                        this.todoModel = new todo_model_1.TodoModel();
                    }
                    else {
                        this.alertService.addAlert('danger', 'Please add name before submitting!', 3000, true);
                    }
                    //this.alertService.alerts.push({msg: 'You added a TODO!', type: 'warning', closable: true});
                    console.log('this.todoModel: ', this.todoModel);
                    console.log('this.alertService: ', this.alertService);
                };
                TodoInput = __decorate([
                    core_1.Component({
                        selector: 'todo-input',
                        template: "<div>\n    <form>\n    <input (keydown)=\"onEnter($event)\" type=\"text\" [(ngModel)]=\"todoModel.title\">\n    <div class=\"btn\" (click)=\"addTodo()\">Click Me</div>\n    </form>\n    </div>",
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService, (typeof (_a = typeof alert_service_1.AlertService !== 'undefined' && alert_service_1.AlertService) === 'function' && _a) || Object])
                ], TodoInput);
                return TodoInput;
                var _a;
            })();
            exports_1("TodoInput", TodoInput);
        }
    }
});
//# sourceMappingURL=todo-input.js.map
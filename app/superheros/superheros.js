System.register(['angular2/core', 'angular2/router', 'angular2/http', './addItem', './editItem'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, addItem_1, editItem_1, router_2;
    var Superheros;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (addItem_1_1) {
                addItem_1 = addItem_1_1;
            },
            function (editItem_1_1) {
                editItem_1 = editItem_1_1;
            }],
        execute: function() {
            Superheros = (function () {
                function Superheros(location, http, routeParam, router) {
                    this.http = http;
                    this.router = router;
                    this.data = [];
                    var self = this;
                    this.routeParam = routeParam;
                    console.log("this.routeParam: ", this.routeParam);
                }
                Superheros.prototype.makeRequest = function () {
                    var _this = this;
                    var url = "json/people.json";
                    // let url = 'http://jsonplaceholder.typicode.com/posts/1';
                    this.loading = true;
                    var self = this;
                    this.http.request(url)
                        .subscribe(function (res) {
                        _this.data = res.json();
                        console.log("------------------------------------: ", _this.data);
                        _this.loading = false;
                    });
                };
                Superheros.prototype.edit = function (item) {
                    console.log("item:", item);
                    this.router.navigate(['./EditItem', { id: item.id }]);
                };
                Superheros.prototype.logError = function (error) {
                    console.log(error);
                };
                Superheros.prototype.logData = function (data) {
                    console.log(data);
                    this.data = data;
                };
                Superheros.prototype.addUser = function () {
                    var newUser = { "id": 0, "name": "Heath Stein" };
                    console.log(this.data);
                    this.data.push({
                        "id": 3,
                        "name": "New Superhero",
                        "powers": "Coder",
                        "age": 44,
                        "height": "6'1",
                        "weight": "210"
                    });
                };
                Superheros.prototype.removeUser = function (_user) {
                    console.log(_user);
                };
                Superheros = __decorate([
                    core_1.Component({
                        directives: [router_1.RouterOutlet, router_1.RouterLink],
                        templateUrl: "app/superheros/superheroLists.html"
                    }),
                    router_1.RouteConfig([
                        { path: '/add', name: 'AddItem', component: addItem_1.AddItem, useAsDefault: true },
                        { path: '/edit/:id', name: 'EditItem', component: editItem_1.EditItem },
                    ]), 
                    __metadata('design:paramtypes', [router_2.Location, http_1.Http, router_2.RouteParams, router_1.Router])
                ], Superheros);
                return Superheros;
            })();
            exports_1("Superheros", Superheros);
        }
    }
});
//# sourceMappingURL=superheros.js.map
/**
 * Created by heathstein on 7/10/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var SuperherosList = (function () {
    function SuperherosList(http) {
        this.http = http;
        this.data = [];
    }
    SuperherosList.prototype.ngOnInit = function () {
        this.makeRequest();
    };
    SuperherosList.prototype.makeRequest = function () {
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
    SuperherosList.prototype.edit = function (item) {
        console.log("item:", item);
        //this.router.navigate(['./EditItem', {id: item.id}]);
    };
    SuperherosList.prototype.logError = function (error) {
        console.log(error);
    };
    SuperherosList.prototype.logData = function (data) {
        console.log(data);
        this.data = data;
    };
    SuperherosList.prototype.addUser = function () {
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
    SuperherosList.prototype.removeUser = function (_user) {
        console.log(_user);
    };
    SuperherosList = __decorate([
        core_1.Component({
            directives: [],
            templateUrl: "app/superheros/superheroLists.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SuperherosList);
    return SuperherosList;
}());
exports.SuperherosList = SuperherosList;
//# sourceMappingURL=superhero.list.js.map
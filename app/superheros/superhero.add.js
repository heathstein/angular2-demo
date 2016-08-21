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
/**
 * Created by 212544474 on 2/15/2016.
 */
/*
 * Angular
 */
var core_1 = require('@angular/core');
var AddItem = (function () {
    function AddItem() {
        console.log("//////////////////////////////////////////////////////////////");
        console.log("///////////////////////// AddItem /////////////////////////////");
        console.log("//////////////////////////////////////////////////////////////");
    }
    AddItem = __decorate([
        core_1.Component({
            selector: 'additem',
            template: "Welcome to the products section. Please select a product above."
        }), 
        __metadata('design:paramtypes', [])
    ], AddItem);
    return AddItem;
}());
exports.AddItem = AddItem;
//# sourceMappingURL=superhero.add.jsadd.js.map
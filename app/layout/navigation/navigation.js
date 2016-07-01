System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var Navigation;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Navigation = (function () {
                function Navigation() {
                    console.log("test: ", $('.tooltipped'));
                }
                Navigation = __decorate([
                    core_1.Component({
                        selector: 'navigation',
                        host: { 'class': 'gt-top-nav pull-right' },
                        directives: [router_1.RouterLink],
                        template: "<ul class=\"gt-header-nav\">\n        <li><a class=\"active\" [routerLink]=\"['/Home']\">Home</a><div class=\"gt-badge badge-xs badge-green\">3</div></li>\n        <li><a class=\"\" [routerLink]=\"['/Products']\">Products</a><div class=\"gt-badge badge-xs badge-blue\">12</div></li>\n        <li><a class=\"\" [routerLink]=\"['/Superheros']\">Superheros</a><div class=\"gt-badge badge-xs badge-red\">1</div></li>\n    </ul>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Navigation);
                return Navigation;
            })();
            exports_1("Navigation", Navigation);
        }
    }
});
//# sourceMappingURL=navigation.js.map
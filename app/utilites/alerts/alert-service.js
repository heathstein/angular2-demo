System.register(["angular2/core", "./alert-model"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, alert_model_1;
    var AlertService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (alert_model_1_1) {
                alert_model_1 = alert_model_1_1;
            }],
        execute: function() {
            AlertService = (function () {
                function AlertService() {
                    this.alerts = [
                        new alert_model_1.AlertModel("danger", "This my message", 3000, true),
                    ];
                }
                AlertService.prototype.getAlerts = function () {
                    return this.alerts;
                };
                AlertService.prototype.addAlert = function (type, msg, time, close) {
                    this.alerts.push(new alert_model_1.AlertModel(type, msg, time, close));
                };
                AlertService.prototype.closeAlert = function () {
                };
                AlertService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AlertService);
                return AlertService;
            })();
            exports_1("AlertService", AlertService);
        }
    }
});
//# sourceMappingURL=alert-service.js.map
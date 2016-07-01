System.register(["angular2/core", 'ng2-bootstrap/ng2-bootstrap', './alert-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_bootstrap_1, alert_service_1;
    var Alerts;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            }],
        execute: function() {
            Alerts = (function () {
                function Alerts(alertService) {
                    this.alertService = alertService;
                    //  this.alerts = this.alertService.getAlerts();
                    // console.log("---------------------------app-alerts  " ,  this.alerts)
                }
                Alerts.prototype.getAlerts = function () {
                    this.alerts = this.alertService.alerts;
                    // this.alerts = ["test"]
                    console.log("this.alerts ", this.alerts);
                    console.log(this.alerts[0].message);
                };
                Alerts.prototype.closeAlert = function (i) {
                    console.log("i====================: ", i);
                    this.alertService.alerts.splice(i, 1);
                };
                Alerts = __decorate([
                    core_1.Component({
                        selector: 'app-alerts',
                        directives: [ng2_bootstrap_1.Alert],
                        host: { 'class': 'alert-holder' },
                        template: "<alert *ngFor=\"#alert of alertService.alerts;#i = index\" dismissOnTimeout=\"{{ alert.closeTime }}\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n              {{ alert?.message }} o {{ alert.closeTime }}\n              </alert>",
                    }), 
                    __metadata('design:paramtypes', [alert_service_1.AlertService])
                ], Alerts);
                return Alerts;
            })();
            exports_1("Alerts", Alerts);
        }
    }
});
/*


<alert dismissOnTimeout="3000">This alert will dismiss in 3s</alert>

<button type="button" class='btn btn-primary' (click)="addAlert()">Add Alert</button>
*/ 
//# sourceMappingURL=alert-component.js.map
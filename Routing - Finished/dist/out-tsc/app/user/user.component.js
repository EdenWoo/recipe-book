var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
var UserComponent = (function () {
    function UserComponent(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subscription = activatedRoute.params.subscribe(function (param) { return _this.id = param['id']; });
    }
    UserComponent.prototype.onNavigate = function () {
        this.router.navigate(['/'], {
            queryParams: { 'analytics': 100 },
            preserveQueryParams: true
        });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Component({
        selector: 'app-user-component',
        template: "\n      <h1>User Component</h1>\n      <button (click)=\"onNavigate()\">Go Home</button>\n      <hr>\n      {{id}}\n      <hr>\n      <router-outlet></router-outlet>\n    "
    }),
    __metadata("design:paramtypes", [Router, ActivatedRoute])
], UserComponent);
export { UserComponent };
//# sourceMappingURL=../../../../src/app/user/user.component.js.map
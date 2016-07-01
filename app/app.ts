import { bootstrap } from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { Inject } from 'angular2/core';
import {Component,View,provide,EventEmitter} from 'angular2/core';
import {Header} from './layout/header/header';
import {Home} from './home/home';
import {Products} from './products/products'
import {Superheros} from './superheros/superheros'
import {Todo} from './todo/todo';
import {TodoService} from './todo/todo-service';
import {AlertService} from './utilites/alerts/alert-service';
import {Alerts} from './utilites/alerts/alert-component';


import { CanActivate,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    RouteConfig,
    Location,
    LocationStrategy,
    HashLocationStrategy,
    RouterLink, RouterOutlet} from 'angular2/router';

@Component({
  selector: 'my-app',
  templateUrl: "app/app.html",
 // directives: [Navigation,SuperForm,Statistics,FooterContent,ROUTER_DIRECTIVES,RouterLink, RouterOutlet]
  directives: [ROUTER_DIRECTIVES,Header,RouterLink,RouterOutlet,Alerts]
})


@RouteConfig([
   { path: '/', name: 'root', redirectTo: ['/Home'] },
   { path: '/home', name: 'Home', component: Home },
   { path: '/products/...', name: 'Products', component: Products },
   { path: '/superheros/...', name: 'Superheros', component: Superheros },
 //  { path: '/contact', name: 'Contact', component: ContactComponent },
  // { path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
])


class MyAppComponent {
  constructor() {
    console.log("ROUTER_DIRECTIVES" , ROUTER_DIRECTIVES);
    console.log();
  }


}

bootstrap(MyAppComponent,  [
  TodoService,
  AlertService,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,

  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
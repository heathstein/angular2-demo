
/**
 * Created by 212544474 on 2/1/2016.
 */
import {Component, View, CORE_DIRECTIVES} from 'angular2/core';
import { Router,
    RouterOutlet,
    RouteConfig,
    RouterLink} from 'angular2/router';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import {DateFormatPipe} from './datepipe';
import {AddItem} from './addItem';
import {EditItem} from './editItem';



import { ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,RouteParams,
    RouteConfig,RouterLink,
    Location} from 'angular2/router';


@Component({
    directives: [RouterOutlet, RouterLink],
    templateUrl: "app/superheros/superheroLists.html"
})

@RouteConfig([
    { path: '/add', name: 'AddItem', component: AddItem, useAsDefault: true },
    { path: '/edit/:id',  name: 'EditItem', component: EditItem },
])






export class Superheros {

        data:array = [];
        routeParam: RouteParams;
        loading: boolean;


        constructor(location: Location , public http: Http, routeParam: RouteParams, public router: Router) {
            var self = this;
            this.routeParam = routeParam;
            console.log( "this.routeParam: " , this.routeParam)
        }


        makeRequest(): void {
            let url = "json/people.json";
           // let url = 'http://jsonplaceholder.typicode.com/posts/1';
            this.loading = true;
            var self = this;
            this.http.request(url)
            .subscribe((res: Response) => {
                this.data = res.json();
                console.log("------------------------------------: " , this.data)
                this.loading = false;
              });
        }


        edit(item: string): void {
            console.log("item:" , item)
            this.router.navigate(['./EditItem', {id: item.id}]);
        }


        logError(error){
            console.log(error)
        }

        logData(data){
            console.log(data)
            this.data = data;
        }

        addUser(){
            var newUser = {"id": 0, "name": "Heath Stein"}
            console.log(this.data)
            this.data.push({
                "id": 3,
                "name": "New Superhero",
                "powers": "Coder",
                "age": 44,
                "height": "6'1",
                "weight": "210"
            });
        }

        removeUser(_user){
            console.log(_user);
        }





}
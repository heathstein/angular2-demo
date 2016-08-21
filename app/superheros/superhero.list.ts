/**
 * Created by heathstein on 7/10/16.
 */


import { Component, OnInit }   from '@angular/core';
import { Http, Response } from '@angular/http';
import {AddItem} from './superhero.add';
import {EditItem} from './superhero.edit';



@Component({
    directives: [],
    templateUrl: "app/superheros/superheroLists.html"
})


export class SuperherosList implements OnInit{

    data:Array<T> = [];
    loading: boolean;


    constructor(public http: Http) {

    }


    ngOnInit() {
        this.makeRequest();
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
        //this.router.navigate(['./EditItem', {id: item.id}]);
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
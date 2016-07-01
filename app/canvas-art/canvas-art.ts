/**
 * Created by 212544474 on 3/24/2016.
 */
/**
 * Created by 212544474 on 2/12/2016.
 */

/// <reference path="three.d.ts" />

import {Component,View,provide,EventEmitter,HostListener} from 'angular2/core';

@Component({
    selector: 'canvas-art',
   // directives: [],
    template: `
    <div class="particle-container" id="peParentElement">
    <canvas id="canvas-art"  (mousedown)="toggleAttract()" (mousemove)="mouseMove($event)" width="600" height="400"></canvas>
    <div class="tool-try">
       <div class="try-header">
       <div class="btn btn-xs"(click)="toggleOnOff($event)">Start/Stop</div>
       <i class="fa fa-times"></i>
       </div>
       <label>Number Of Dots</label>
       <input [(ngModel)]="numDots" name="numVal" type="number"  >


       <label>Speed</label>
       <input [(ngModel)]="speed" name="numVal" type="number"  >

    </div>
    </div>`


})




export class CanvasArt {

    public scene:Scene;
    public numDots;
    public speed;
    public numClicked;
    public canvas;


    constructor() {

        this.scene = null;

        this.scene = new Scene();
        this.scene.started = false;
        this.numDots = 2000;
        this.speed = 3;
        this.numClicked = 1;


    }

    ngOnDestroy(): void {
        //WE AER USING A
        this.scene.killLoop()
    }

    mouseMove(e) {
        this.scene.mouse.onMouseMove(e);
    }

    toggleOnOff(e){
        this.scene.toggleOnOff();
    }


    toggleAttract(){
        this.numClicked++
        this.scene.toggleAttract();
    }




}


class Utils {


    public test:string;

    constructor( ) {


    }



    rgbToFillStyle(r, g, b, a) {
        if(a === undefined) {
            return ["rgb(",r,",",g,",",b,")"].join('');
        } else {
            return ["rgba(",r,",",g,",",b,",",a,")"].join('');
        }
    }



    hslToFillStyle(h, s, l, a) {
        if(a === undefined) {
            return ["hsl(",h,",",s,"%,",l,"%)"].join('');
        } else {
            return ["hsla(",h,",",s,"%,",l,"%,",a,")"].join('');
        }
    }


};





class Dot {

    public speed:number;
    public size:number;
    public wavePosition:number;
    public position;
    public direction;
    public attractSpeed;
    public attractDistance;
    public color;
    public util:Utils = new Utils();


    constructor(public x:number ,public y:number , public scene:Scene) {

        this.speed =  0.01;
        this.size =  4;
        this.wavePosition = 0;

        this.position = new THREE.Vector2(x,y);
        this.direction = new THREE.Vector2(
            this.speed * Math.random() -  this.speed / 2,
            this.speed * Math.random() -  this.speed / 2
        );

        this.attractSpeed = 1000 * Math.random() + 500;
        this.attractDistance = (150 * Math.random()) + 180;
        this.color = this.util.hslToFillStyle(this.position.x / this.scene.canvas.width * 360, 50, 50, 0.5);

    }


    update( dt ) {
        this.updatePosition( dt );
        this.updateWave( dt );
        if(this.scene.attractedToMouse ){
            this.attractMouse( dt );
        }
        this.draw( dt );
    }



    updatePosition(dt) {
    //This is a little trick to create a variable outside of the render loop
    //It's expensive to allocate memory inside of the loop.
    //The variable is only accessible to the function below.
        var moveDistance = new THREE.Vector2();
        //This is the actual function
        moveDistance.copy( this.direction );
        moveDistance.multiplyScalar( dt );
        this.position.add( moveDistance );
        //Keep the dot on the screen
        this.position.x = (this.position.x + this.scene.canvas.width) % this.scene.canvas.width;
        this.position.y = (this.position.y + this.scene.canvas.height) % this.scene.canvas.height;

     }


    pushMouse(dt) {

        /*
        var moveDistance = new THREE.Vector2();
        //This is the actual function
        moveDistance.copy( this.direction );
        moveDistance.multiplyScalar( dt );
        this.position.add( moveDistance );
        //Keep the dot on the screen
        this.position.x = (this.position.x + this.scene.canvas.width) % this.scene.canvas.width;
        this.position.y = (this.position.y + this.scene.canvas.height) % this.scene.canvas.height;
        */
        var moveDistance = new THREE.Vector2();


    }





    attractMouse(dt) {

        //Again, create some private variables for this method
        var vectorToMouse = new THREE.Vector2(), vectorToMove = new THREE.Vector2();

        var distanceToMouse, distanceToMove, moveLength;

        vectorToMouse
            .copy( this.scene.mouse.position )
            .sub( this.position );

        distanceToMouse = vectorToMouse.length();
        moveLength = dt * (this.attractDistance - distanceToMouse) / this.attractSpeed;


        if( moveLength > 0 ) {

            //Resize the vector to the mouse to the desired move length
            vectorToMove
                .copy( vectorToMouse )
                .divideScalar( distanceToMouse )
                .multiplyScalar( moveLength );

            //Go ahead and add it to the current position now, rather than in the draw call
            this.position.add(vectorToMove);

        }


    }




    draw(dt) {
        //Get a short variable name for convenience
        var ctx = this.scene.context;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y + this.wavePosition, this.size, this.size);

    }

    updateWave( dt ) {
        this.wavePosition = Math.sin( this.scene.currTime / 500 + this.position.x / this.scene.canvas.width * 4 ) * 20;
    }



}



class Mouse{


    public position;
    mousemove  = new EventEmitter();

    constructor(public scene:Scene) {
        this.position = new THREE.Vector2(-10000, -10000);
    }






    onMouseMove(e){

        var canvas = this.scene.canvas;
        var parentElement = this.scene.parentElement

        if(typeof(e.pageX) == "number") {
            //Note that this is a little different from the article to allow for responsively resizing the canvas
            this.position.x = e.pageX * canvas.width  / canvas.width - parentElement.offsetLeft;
            this.position.y = e.pageY * canvas.height / canvas.height -  parentElement.offsetTop;
        } else {
            this.position.x = -100000;
            this.position.y = -100000;
        }

    }

    copyPosition( vector ){
        vector.copy( this.position );
    }

    getPosition(){
        return this.position.clone();
    }

};





    class DotManager {


    public dots;
    public numberOfDots:number;
    public scene:Scene;


    constructor(numberOfDots:number , scene:Scene) {
        this.dots = [];
        this.numberOfDots = numberOfDots;
        this.scene = scene;

        for(var i=0; i < numberOfDots; i++) {
            this.dots.push( new Dot(
                Math.random() * this.scene.canvas.width,
                Math.random() * this.scene.canvas.height,
                this.scene
            ));
        }
    }


    update(dt){
        for(var i=0; i < this.numberOfDots; i++) {
            this.dots[i].update( dt );
        }
    }



 }



 class Scene  {

    public currTime;
    public prevTime;
    public canvas;
    public context:CanvasRenderingContext2D;
    public dotManager:DotManager;
    public started:Boolean = false;
    public mouse:Mouse;
    public attractedToMouse:Boolean = true;
    public numDots:number;
    public parentElement;


    constructor() {

        this.numDots = 2000;
        this.currTime = this.prevTime = new Date().getTime();	//Timing variables
        this.canvas = document.getElementById('canvas-art');
        this.parentElement = document.getElementById('peParentElement');


        console.log("this.canvas  " , this.canvas)


        this.context = this.canvas.getContext('2d');
        this.dotManager = new DotManager(this.numDots, this);
        this.mouse = new Mouse( this );
        this.update( 16 ) //Draw Once
        this.loop();

    }


    toggleOnOff(){
        this.started = !this.started;

        if( this.started ){
            this.loop();
        }
    }


     killLoop(){

         this.started = false;
     }


     toggleAttract(){
         this.attractedToMouse = !this.attractedToMouse;
     }




     loop() {
         //this is the change in time in milliseconds

         var dt;
         if(! this.started ) return;
         this.currTime = new Date().getTime();
         dt = Math.min( this.currTime - this.prevTime, 100);

         //Update then request a new animation frame
         this.update( dt );
         requestAnimationFrame( this.loop.bind(this) );
         this.prevTime = this.currTime;
     }

         update( dt ) {
         //Clear the canvas
         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
         //Start your update code here
         this.dotManager.update( dt );

     }


}







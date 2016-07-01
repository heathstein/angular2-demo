/**
 * Created by 212544474 on 3/24/2016.
 */
/**
 * Created by 212544474 on 2/12/2016.
 */
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CanvasArt, Utils, Dot, Mouse, DotManager, Scene;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CanvasArt = (function () {
                function CanvasArt() {
                    this.scene = null;
                    this.scene = new Scene();
                    this.scene.started = false;
                    this.numDots = 2000;
                    this.speed = 3;
                    this.numClicked = 1;
                }
                CanvasArt.prototype.ngOnDestroy = function () {
                    //WE AER USING A
                    this.scene.killLoop();
                };
                CanvasArt.prototype.mouseMove = function (e) {
                    this.scene.mouse.onMouseMove(e);
                };
                CanvasArt.prototype.toggleOnOff = function (e) {
                    this.scene.toggleOnOff();
                };
                CanvasArt.prototype.toggleAttract = function () {
                    this.numClicked++;
                    this.scene.toggleAttract();
                };
                CanvasArt = __decorate([
                    core_1.Component({
                        selector: 'canvas-art',
                        // directives: [],
                        template: "\n    <div class=\"particle-container\" id=\"peParentElement\">\n    <canvas id=\"canvas-art\"  (mousedown)=\"toggleAttract()\" (mousemove)=\"mouseMove($event)\" width=\"600\" height=\"400\"></canvas>\n    <div class=\"tool-try\">\n       <div class=\"try-header\">\n       <div class=\"btn btn-xs\"(click)=\"toggleOnOff($event)\">Start/Stop</div>\n       <i class=\"fa fa-times\"></i>\n       </div>\n       <label>Number Of Dots</label>\n       <input [(ngModel)]=\"numDots\" name=\"numVal\" type=\"number\"  >\n\n\n       <label>Speed</label>\n       <input [(ngModel)]=\"speed\" name=\"numVal\" type=\"number\"  >\n\n    </div>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CanvasArt);
                return CanvasArt;
            })();
            exports_1("CanvasArt", CanvasArt);
            Utils = (function () {
                function Utils() {
                }
                Utils.prototype.rgbToFillStyle = function (r, g, b, a) {
                    if (a === undefined) {
                        return ["rgb(", r, ",", g, ",", b, ")"].join('');
                    }
                    else {
                        return ["rgba(", r, ",", g, ",", b, ",", a, ")"].join('');
                    }
                };
                Utils.prototype.hslToFillStyle = function (h, s, l, a) {
                    if (a === undefined) {
                        return ["hsl(", h, ",", s, "%,", l, "%)"].join('');
                    }
                    else {
                        return ["hsla(", h, ",", s, "%,", l, "%,", a, ")"].join('');
                    }
                };
                return Utils;
            })();
            ;
            Dot = (function () {
                function Dot(x, y, scene) {
                    this.x = x;
                    this.y = y;
                    this.scene = scene;
                    this.util = new Utils();
                    this.speed = 0.01;
                    this.size = 4;
                    this.wavePosition = 0;
                    this.position = new THREE.Vector2(x, y);
                    this.direction = new THREE.Vector2(this.speed * Math.random() - this.speed / 2, this.speed * Math.random() - this.speed / 2);
                    this.attractSpeed = 1000 * Math.random() + 500;
                    this.attractDistance = (150 * Math.random()) + 180;
                    this.color = this.util.hslToFillStyle(this.position.x / this.scene.canvas.width * 360, 50, 50, 0.5);
                }
                Dot.prototype.update = function (dt) {
                    this.updatePosition(dt);
                    this.updateWave(dt);
                    if (this.scene.attractedToMouse) {
                        this.attractMouse(dt);
                    }
                    this.draw(dt);
                };
                Dot.prototype.updatePosition = function (dt) {
                    //This is a little trick to create a variable outside of the render loop
                    //It's expensive to allocate memory inside of the loop.
                    //The variable is only accessible to the function below.
                    var moveDistance = new THREE.Vector2();
                    //This is the actual function
                    moveDistance.copy(this.direction);
                    moveDistance.multiplyScalar(dt);
                    this.position.add(moveDistance);
                    //Keep the dot on the screen
                    this.position.x = (this.position.x + this.scene.canvas.width) % this.scene.canvas.width;
                    this.position.y = (this.position.y + this.scene.canvas.height) % this.scene.canvas.height;
                };
                Dot.prototype.pushMouse = function (dt) {
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
                };
                Dot.prototype.attractMouse = function (dt) {
                    //Again, create some private variables for this method
                    var vectorToMouse = new THREE.Vector2(), vectorToMove = new THREE.Vector2();
                    var distanceToMouse, distanceToMove, moveLength;
                    vectorToMouse
                        .copy(this.scene.mouse.position)
                        .sub(this.position);
                    distanceToMouse = vectorToMouse.length();
                    moveLength = dt * (this.attractDistance - distanceToMouse) / this.attractSpeed;
                    if (moveLength > 0) {
                        //Resize the vector to the mouse to the desired move length
                        vectorToMove
                            .copy(vectorToMouse)
                            .divideScalar(distanceToMouse)
                            .multiplyScalar(moveLength);
                        //Go ahead and add it to the current position now, rather than in the draw call
                        this.position.add(vectorToMove);
                    }
                };
                Dot.prototype.draw = function (dt) {
                    //Get a short variable name for convenience
                    var ctx = this.scene.context;
                    ctx.beginPath();
                    ctx.fillStyle = this.color;
                    ctx.fillRect(this.position.x, this.position.y + this.wavePosition, this.size, this.size);
                };
                Dot.prototype.updateWave = function (dt) {
                    this.wavePosition = Math.sin(this.scene.currTime / 500 + this.position.x / this.scene.canvas.width * 4) * 20;
                };
                return Dot;
            })();
            Mouse = (function () {
                function Mouse(scene) {
                    this.scene = scene;
                    this.mousemove = new core_1.EventEmitter();
                    this.position = new THREE.Vector2(-10000, -10000);
                }
                Mouse.prototype.onMouseMove = function (e) {
                    var canvas = this.scene.canvas;
                    var parentElement = this.scene.parentElement;
                    if (typeof (e.pageX) == "number") {
                        //Note that this is a little different from the article to allow for responsively resizing the canvas
                        this.position.x = e.pageX * canvas.width / canvas.width - parentElement.offsetLeft;
                        this.position.y = e.pageY * canvas.height / canvas.height - parentElement.offsetTop;
                    }
                    else {
                        this.position.x = -100000;
                        this.position.y = -100000;
                    }
                };
                Mouse.prototype.copyPosition = function (vector) {
                    vector.copy(this.position);
                };
                Mouse.prototype.getPosition = function () {
                    return this.position.clone();
                };
                return Mouse;
            })();
            ;
            DotManager = (function () {
                function DotManager(numberOfDots, scene) {
                    this.dots = [];
                    this.numberOfDots = numberOfDots;
                    this.scene = scene;
                    for (var i = 0; i < numberOfDots; i++) {
                        this.dots.push(new Dot(Math.random() * this.scene.canvas.width, Math.random() * this.scene.canvas.height, this.scene));
                    }
                }
                DotManager.prototype.update = function (dt) {
                    for (var i = 0; i < this.numberOfDots; i++) {
                        this.dots[i].update(dt);
                    }
                };
                return DotManager;
            })();
            Scene = (function () {
                function Scene() {
                    this.started = false;
                    this.attractedToMouse = true;
                    this.numDots = 2000;
                    this.currTime = this.prevTime = new Date().getTime(); //Timing variables
                    this.canvas = document.getElementById('canvas-art');
                    this.parentElement = document.getElementById('peParentElement');
                    console.log("this.canvas  ", this.canvas);
                    this.context = this.canvas.getContext('2d');
                    this.dotManager = new DotManager(this.numDots, this);
                    this.mouse = new Mouse(this);
                    this.update(16); //Draw Once
                    this.loop();
                }
                Scene.prototype.toggleOnOff = function () {
                    this.started = !this.started;
                    if (this.started) {
                        this.loop();
                    }
                };
                Scene.prototype.killLoop = function () {
                    this.started = false;
                };
                Scene.prototype.toggleAttract = function () {
                    this.attractedToMouse = !this.attractedToMouse;
                };
                Scene.prototype.loop = function () {
                    //this is the change in time in milliseconds
                    var dt;
                    if (!this.started)
                        return;
                    this.currTime = new Date().getTime();
                    dt = Math.min(this.currTime - this.prevTime, 100);
                    //Update then request a new animation frame
                    this.update(dt);
                    requestAnimationFrame(this.loop.bind(this));
                    this.prevTime = this.currTime;
                };
                Scene.prototype.update = function (dt) {
                    //Clear the canvas
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    //Start your update code here
                    this.dotManager.update(dt);
                };
                return Scene;
            })();
        }
    }
});
//# sourceMappingURL=canvas-art.js.map
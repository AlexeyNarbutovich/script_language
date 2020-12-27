let Person = function(name){
    this.name = name;
    Person.prototype.sayHello = function(){
        console.log(`Hello ${this.name}`);
    }
    Person.prototype.toString = function(){ //public overload method toString()
        console.log(`typeof(this): ${typeof(this)}, name: ${this.name}`);
    }
}

let p1 = new Person("p1");
console.log(p1.name);
console.log(p1.sayHello());
console.log(p1.toString());

let p2 = new Person("p2");
console.log(p2.name);
console.log(p2.sayHello());
console.log(p2.toString());

function Worker(name, job){
    Person.call(this, name);
    this.job = job;
}

Worker.prototype = Object.create(Person.prototype); //points a prototype of Student onto Person
Worker.prototype.constructor = Worker;

let w1 = new Worker("w1", "Designer");
console.log(w1 instanceof(Worker)); // returns true
console.log(w1 instanceof(Person)); //returns true

let Person2 = function(name){
    this.name = name;
    let A = 10;
    let self = this;
    this.Hello = function(){
        console.log(A);
        Some(); //Invoke inner functions
    }
    function Some(){ //private function which is not accessible from out of function
        console.log(`Some function call ${self.name}`);
    }
}

let p11 = new Person2("p11");
p11.Hello(); // returns 10 Some function call p1
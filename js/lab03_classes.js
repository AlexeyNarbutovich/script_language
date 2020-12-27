function Machine(name){
    this.name = name;
    this.process = function(){
        console.log("Machine is working");
    }

    Machine.prototype.toString = function(){
        console.log(`machine name is ${this.name}`);
    }
}

function Lathe(name, maxDiameter){
    Machine.call(this, name);
    this.maxDiameter = maxDiameter; //public fields
    this.rotateSpindle = function(){ //public methods
        console.log(`Spindle with diameter ${this.maxDiameter} is rotating`);
    }
    Lathe.prototype.toString = function() { //public method of prototype
        Machine.prototype.toString();
        console.log(`Max diameter is ${this.maxDiameter}`);
    }
}

function CNCLathe(name, maxDiameter, cncSystem){
    Lathe.call(this, name, maxDiameter);
    this.cncSystem = cncSystem;
    CNCLathe.prototype.toString = function(){
        Lathe.toString();
        console.log(`cncSystem is ${this.cncSystem}`);
    }
}

let cnc = new CNCLathe("cnc", 200, "Fanuc");
console.log(cnc); //CNCLathe {name: "cnc", maxDiameter: 200, cncSystem: "Fanuc", process: ƒ, rotateSpindle: ƒ}
console.log(cnc.cncSystem); // "Fanuc"
console.log(`Name: ${cnc.name}, maxDiameter: ${cnc.maxDiameter}`);
console.log(cnc.rotateSpindle()); // Spindle with diameter 200 is rotating
console.log(cnc.process()); // Machine is working

/**
 * class with private field
 */
function PrivateFieldAndMethod(name){
    this.name = name;
    const self = this;
    this.print = function(){ // provides a possibility to inner function Print()
        Print();
    }
    function Print(){ //Print() is not visible outside PrivateFieldAndMethod
        console.log(self.name);
    }
}

let p1 = new PrivateFieldAndMethod("p1");
console.log(p1.print()); //p1




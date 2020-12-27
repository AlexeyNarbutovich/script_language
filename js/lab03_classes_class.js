class Machine{
    constructor(name) {
        this.name = name;
    }

    toString(){
        console.log(`machine name is ${this.name}`);
    }
}

class Lathe extends Machine{
    constructor(name, maxDiameter) {
        super(name);
        this.maxDiameter = maxDiameter;
    }

    rotateSpindle(){ //public methods
        console.log(`Spindle with diameter ${this.maxDiameter} is rotating`);
    }

    toString(){
        super.toString();
        console.log(`Max diameter is ${this.maxDiameter}`);
    }
}

class CNCLathe extends Lathe{
    constructor(name, maxDiameter, cncSystem) {
        super(name, maxDiameter);
        this.cncSystem = cncSystem;
    }

    toString(){
        super.toString();
        console.log(`cncSystem is ${this.cncSystem}`);
    }
}

let cnc = new CNCLathe("cnc", 150, "Fanuc"); // create new object with type CNCLathe
cnc.toString(); //invoke toString();
// output
// machine name is cnc - invoked toString() of Machine
// Max diameter is 150 - invoked toString() of Lathe
// cncSystem is Fanuc - invoked toString() of CNCLathe
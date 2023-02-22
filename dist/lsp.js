class Vehicle {
    startEngine() {
        // Default engine start functionality
        console.log('Start engine SUPER!!!!');
    }
    accelerate() {
        // Default acceleration functionality
        console.log('Accelerate engine SUPER!!!!');
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log('Start engine CAR!!!!');
        this.engageIgnition();
        super.startEngine();
    }
    engageIgnition() {
        // Ignition procedure
        console.log('engage Ignition CAR!!!!');
    }
}
class ElectricBus extends Vehicle {
    accelerate() {
        console.log('accelerate engine ELCAR!!!!');
        this.increaseVoltage();
        this.connectIndividualEngines();
    }
    increaseVoltage() {
        // Electric logic
        console.log('increase voltage ELCAR!!!!');
    }
    connectIndividualEngines() {
        // Connection logic
        console.log('connect ind engine ELCAR!!!!');
    }
}
class Driver {
    go(v) {
        v.startEngine();
        v.accelerate();
    }
}
const sp = new ElectricBus();
const drv = new Driver();
drv.go(sp);
console.log('END');

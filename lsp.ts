class Vehicle {
 
    public startEngine() {
        // Default engine start functionality
        console.log('Start engine SUPER!!!!');
    }
  
    public accelerate() {
        // Default acceleration functionality
        console.log('Accelerate engine SUPER!!!!');
    }
  }

  class Car extends Vehicle {
    public startEngine() {
        console.log('Start engine CAR!!!!');
        this.engageIgnition();
        super.startEngine();
        
    }
  
    private engageIgnition() {
        // Ignition procedure
        console.log('engage Ignition CAR!!!!');
    }
  
  }
  
  class ElectricBus extends Vehicle {
    public accelerate() {
        console.log('accelerate engine ELCAR!!!!');
        this.increaseVoltage();
        this.connectIndividualEngines();
     
        
    }
  
    private increaseVoltage() {
        // Electric logic
        console.log('increase voltage ELCAR!!!!');
    }
  
    private connectIndividualEngines() {
        // Connection logic
        console.log('connect ind engine ELCAR!!!!');
    }
  
  }

  class Driver {
    go(v: ElectricBus) {
        v.startEngine();
        v.accelerate();
    }
  }

  const sp = new ElectricBus();
  const drv = new Driver();
  drv.go(sp);
  console.log('END');  
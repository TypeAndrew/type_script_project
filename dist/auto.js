class Zhiguli_8 {
    constructor() {
        this.needRepair = false;
        this.maxEngineLoad = 3;
    }
    /**
     * Заводит двигатель машины если это возможно
     */
    checkEngine() {
        // Проверяем не сломан ли двигатель
        if (this.needRepair) {
            throw new Error('Engine not work');
        }
        // Пробуем его завести
        const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
        if (this.maxEngineLoad === engineLoad) {
            this.needRepair = true;
            throw new Error('Engine broken again');
        }
    }
    /**
     * Завести двигатель
     */
    startEngine() {
        this.checkEngine();
        console.log('Ta-ta-ta-ta');
    }
    /**
     * Ремонт двигателя
     */
    repairEngine() {
        this.needRepair = false;
        console.log('Engine rebuilt');
    }
}
const auto = new Zhiguli_8();
try {
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
    auto.startEngine();
}
catch (e) {
    console.log(e);
    auto.repairEngine();
    auto.startEngine();
}

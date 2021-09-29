class ElectricLamp {
    status;

    constructor(status) {
        this.status = status;
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    getStatus() {
        if(this.status) {
            console.log("Đèn đã sáng")
        } else {
            console.log("Đèn đã tắt")
        }
    }
}
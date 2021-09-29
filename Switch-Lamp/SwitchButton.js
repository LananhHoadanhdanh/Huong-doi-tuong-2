class SwitchButton {
    status;
    lamp;

    constructor() {
        this.status = false;
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchOn() {
        this.status = true;
        this.lamp.turnOn();
        this.lamp.getStatus()
        this.getStatus()
    }

    switchOff() {
        this.status = false;
        this.lamp.turnOff();
        this.lamp.getStatus()
        this.getStatus()
    }

    getStatus() {
        if(this.status) {
            console.log("Công tắc đã bật")
        } else {
            console.log("Công tắc đã tắt")
        }
    }
}
class Mouse {
    name;
    weight;
    speed;
    status;
    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }
    chuotKeu(string) {
        return this.name + ' kêu ' + string
    }
}
class Cat {
    name;
    weight;
    maxSpeed;
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }
    meoKeu(string) {
        return this.name + ' kêu ' + string
    }
    catch(Mouse) {
        if (this.maxSpeed >= Mouse.speed) {
            console.log(this.name + ' đã bắt ' + Mouse.name)
            return true
        } else {
            console.log(this.name + ' không bắt được ' + Mouse.name)
            return false
        }
    }
    eat(Mouse) {
        if (this.catch(Mouse) && Mouse.status) {
            this.weight ++
            Mouse.status = false
        } else {
            return 'Không thể ăn'
        }
    }
}
let tomSpeed = prompt('Nhập tốc độ tối đa của Tom')
let tom = new Cat('Tom', 10, tomSpeed);
let jerrySpeed = prompt('Nhập tốc độ của Jerry')
let jerry = new Mouse('Jerry', 10, jerrySpeed, true);
tom.eat(jerry);
console.log(jerry.status)
console.log(tom.weight)
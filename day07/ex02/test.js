const Targaryen =  require('./Targaryen.class.js');

class Viserys extends Targaryen {
}
class Daenerys extends Targaryen {
    resistsFire() {
        return true;
    }
}
var viserys = new Viserys();
var daenerys = new Daenerys();

console.log("Viserys " + viserys.getburned() + '.')
console.log("Daenerys " + daenerys.getburned() + '.')
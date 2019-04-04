const house2 = require('./House.class.js')

class DrHouse extends house2 {
    diagnose() {
        console.log("It's not lupus !");
    }
}
var hous = new DrHouse();
hous.introduce();
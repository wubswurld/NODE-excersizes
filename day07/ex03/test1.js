const house = require('./House.class.js');

class HouseStark extends house {
    getHouseName() {
        return "Stark";
    }
    getHouseMotto() {
        return "Winter is coming";
    }
    getHouseSeat() {
        return "Winterfell";
    }
}

class HouseMartell extends house {
	getHouseName() {
		return "Martell";
	}
	getHouseMotto() {
		return "Unbowed, Unbent, Unbroken";
	}
	getHouseSeat() {
		return "Sunspear";
	}
}

var hous = [new HouseStark(), new HouseMartell()];

hous.forEach(function(house){
    house.introduce();
}) 
const Greyjoy = require('./greyjoy.class.js');

class Euron extends Greyjoy {
    announceMotto() {
        return this.familyMotto;
    }
}
module.exports = Euron;
class Targaryen {
    constructor() {
    }
    resistsFire() {
        return false;
    }
    getburned() {
        if (this.resistsFire()) {
            return "emerges naked but unharmed"
        }
        else {
        return "burns alive";
        }
    }
}
module.exports = Targaryen;
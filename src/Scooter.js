class Scooter {
	static nextSerial = 1;
	constructor(station) {
		this.station = station;
		this.user = null;
		this.serial = Scooter.nextSerial;
		Scooter.nextSerial++;
		this.charge = 100;
		this.isBroken = false;
	}

	rent(user) {
		if (this.charge > 20 && !this.isBroken) {
			this.station = null;
			this.user = user;
		} else {
			if (this.charge <= 20 && this.isBroken)
				throw new Error("need to RECHARGE AND REPAIR!");
			else if (this.charge <= 20) throw new Error("need to RECHARGE!");
			else if (this.isBroken) throw new Error("need to Repair!");
		}
	}

	dock(station) {
		this.station = station;
		this.user = null;
	}

	recharge() {
		let id = setInterval(() => {
			this.charge += 25;
			if (this.charge >= 100) {
				this.charge = 100;
				console.log(`Charged to ${this.charge}%`);
				clearInterval(id);
			} else console.log(`Charged to ${this.charge}%`);
		}, 2000);
	}

	requestRepair() {
		console.log("Repairing......");
		setTimeout(() => {
			this.isBroken = false;
			console.log("Repair Completed!");
		}, 5000);
	}
}

// let s1 = new Scooter();
// s1.isBroken = true;
// s1.requestRepair();

module.exports = Scooter;

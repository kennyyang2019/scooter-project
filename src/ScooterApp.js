const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
	constructor() {
		this.stations = {
			"123 mcd st": [],
			"456 popeyes st": [],
			"7st burger": [],
		};
		this.registeredUsers = {};
	}

	registerUser(username, password, age) {
		if (age < 18) throw new Error("too young to register");
		else if (this.registerUser[username]) throw new Error("already registered");
		else {
			let newUser = new User(username, password, age);
			this.registeredUsers[username] = newUser;
			return newUser;
		}
	}

	loginUser(username, password) {
		if (this.registeredUsers[username]) {
			this.registeredUsers[username].login(password);
			console.log("user has been logged in");
		} else throw new Error("Username or password in incorrect");
	}
	logoutUser(username) {
		if (this.registeredUsers[username]) {
			this.registeredUsers[username].logout();
			console.log(`user is logged out`);
		} else throw new Error(`no such user is logged in`);
	}
	createScooter(station) {
		if (!this.stations[station]) {
			throw new Error(`no such station`);
		} else {
			const newScooter = new Scooter(station);
			this.stations[station].push(newScooter);
			console.log(`created new scooter`);
			return newScooter;
		}
	}

	dockScooter(scooter, station) {
		if (scooter.station) throw new Error("scooter already at station");
		else if (!this.stations[station]) throw new Error("no such station");
		else {
			scooter.dock(station);
			this.stations[station].push(scooter);
			console.log(`scooter is docked`);
		}
	}

	rentScooter(scooter, user) {
		if (scooter.station) {
			const index = this.stations[scooter.station].indexOf(scooter);
			this.stations[scooter.station].splice(index, 1);
			scooter.rent(user);
		} else {
			throw new Error(`scooter is rented`);
		}
	}

	print() {
		console.log("Registered Users Currently : ", this.registeredUsers);
		const stations = this.stations;
		console.log("All Stations and Scooter :------------------------------");
		for (const station in stations) {
			console.log(
				`${station} : ${stations[station].map((scooter) => scooter.serial)}`
			);
		}
	}
}
// const a = "123 mcd st";
// const b = "456 popeyes st";
// const c = "7st burger";

// const app = new ScooterApp();

// let s1 = app.createScooter(a);
// let s2 = app.createScooter(a);
// let s3 = app.createScooter(a);
// let s4 = app.createScooter(b);
// let s5 = app.createScooter(b);
// let s6 = app.createScooter(b);
// let s7 = app.createScooter(c);
// let s8 = app.createScooter(c);
// let s9 = app.createScooter(c);

// let u1 = app.registerUser("bob", "123", 20);
// let u2 = app.registerUser("tom", "456", 20);
// let u3 = app.registerUser("jim", "789", 20);
// let u4 = app.registerUser("ash", "321", 20);

// app.loginUser("bob", "123");
// app.loginUser("tom", "456");
// app.loginUser("jim", "789");
// app.loginUser("ash", "321");

// app.rentScooter(s1, u1)

// app.print();
// console.log(s1)
// console.log(u1)

module.exports = ScooterApp

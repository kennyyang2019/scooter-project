const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
	test("Should return instance of User", () => {
		const response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
		// console.log("this is response",response)
		expect(response).toBeInstanceOf(User);
	});

	// log in
	let user;
	test("should login with the correct pw", () => {
		user = scooterApp.registerUser("tom", "456", 20);
		scooterApp.loginUser(user.username, user.password);
		expect(user.loggedIn).toBe(true);
	});
	// console.log(scooterApp.registeredUsers)
	test("should logout with the correct username", () => {
		// let user = scooterApp.registeredUsers['tom']

		scooterApp.logoutUser(user.username);
		expect(user.loggedIn).toBe(false);
	});

	// test("some random test", () => {
	//   console.log('This is scooterApp', scooterApp.registeredUsers)
	// })
	let newScooter;
	test("creating scooter", () => {
		newScooter = scooterApp.createScooter("123 mcd st");
		expect(newScooter.station).toBe("123 mcd st");
	});
	test("should allow user to rent scooter", () => {
		scooterApp.loginUser(user.username, user.password);
		scooterApp.rentScooter(newScooter, user);
		expect(newScooter.user).toBe(user);
		console.log("this is newScooter", newScooter);
		expect(newScooter.station).toBe(null);
	});
	test("should allow user to dock scooter", () => {
		scooterApp.dockScooter(newScooter, "456 popeyes st");
		expect(newScooter.user).toBe(null);
		console.log("this is newScooter", newScooter);
		expect(newScooter.station).toBe("456 popeyes st");
	});
});

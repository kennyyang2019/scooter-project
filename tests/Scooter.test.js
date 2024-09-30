const Scooter = require("../src/Scooter");
const User = require("../src/User");

// typeof scooter === object
describe("scooter object", () => {
	test("Scooter class should create Scooter instance", () => {
		const scooter = new Scooter();
		expect(scooter).toBeInstanceOf(Scooter);
	});
});
jest.useFakeTimers()
// Method tests
describe("scooter methods", () => {
	let newStation = "123 mcd st";
	let s1;
	let u1;
	beforeEach(()=>{
		s1 = new Scooter(newStation);
		u1 = new User("bob", "123", 20);
	})
	// rent method
	test("testing rent method", () => {
		s1.rent(u1);
		expect(s1.user).toBe(u1);
		expect(s1.station).toBe(null);
	});
	// dock method
	test("testing dock method", () => {
		s1.dock(newStation);
		expect(s1.station).toBe(newStation);
		expect(s1.user).toBe(null);
	});
	// requestRepair method
	test("testing requestRepair method", () => {
		s1.charge = 10;
		expect(() => s1.rent(u1)).toThrow("need to RECHARGE!");
	});
	// charge method
	test("testing charge method", () => {
		s1.recharge();
		expect(s1.charge).toBe(100);
	});
	test("testing repair method", () => {
		s1.isBroken = true;
		expect(() => s1.rent(u1)).toThrow("need to Repair!");
		s1.requestRepair();


		jest.advanceTimersByTime(5000)
		expect(s1.isBroken).toBe(false);
	});

});

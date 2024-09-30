const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })
  // test password
  // test age
  test("should initialize user with coreect properties", () => {
    expect(user.username).toBe("Joe Bloggs");
    expect(user.password).toBe("test123");
    expect(user.age).toBe(21);
    expect(user.loggedIn).toBe(false);
  })
  
  // test login
  test('should login with the correct pw', ()=>{
    user.login('test123')
    expect(user.loggedIn).toBe(true);
  })
  // test logout
  test("should log out", ()=>{
    user.logout();
    expect(user.loggedIn).toBe(false);
  })
  test("logging in with wrong passowrd", ()=>{
    expect(() => user.login("lolol")).toThrow("Incorrect Password!");
  })
  test('show throw error when already logged in', ()=>{
    user.login("test123")
    expect(() => user.login("test123")).toThrow("User is ALREADY logged in!");
  })
})


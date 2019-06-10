describe("Fizzbuzz", function() {
  var fizzbuzz; 

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("returns 'Fizz' when a number is divisible by 3", function() {
    expect(fizzbuzz.says(3)).toEqual('Fizz');
  });

  it("returns 'Buzz' when a number is divisible by 5", function() {
    expect(fizzbuzz.says(5)).toEqual('Buzz');
  });

  it("returns 'FizzBuzz' when a number is divisible by 5 and 3", function() {
    expect(fizzbuzz.says(15)).toEqual('Fizzbuzz');
  });
  
  it("returns itself for anything else", function() {
    expect(fizzbuzz.says(17)).toEqual(17);
  });
  
});
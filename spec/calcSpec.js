/* For project description, see calculator.js */


describe("Calculator", function() {
	
	it("should have an add function", function() {
    	expect(add).toBeDefined();
  	});

  	it("should add two numbers", function(){
  		expect(add(5,5)).toBe(10);
  	});

  	it("should have a subract function", function() {
    	expect(subtract).toBeDefined();
  	});

  	it("should subtract two numbers", function(){
  		expect(subtract(5,5)).toBe(0);
  	});

  	it("should have a multiply function", function() {
    	expect(multiply).toBeDefined();
  	});

  	it("should add multiply numbers", function(){
  		expect(multiply(5,5)).toBe(25);
  	});

  	it("should have a divide function", function() {
    	expect(divide).toBeDefined();
  	});

  	it("should divide two numbers", function(){
  		expect(divide(5,5)).toBe(1);
  	});

  	it("should have a square function", function() {
    	expect(square).toBeDefined();
  	});

  	it("should square two numbers", function(){
  		expect(square(5,2)).toBe(25);
  	});

  	it("should have a square root function", function() {
    	expect(squareRoot).toBeDefined();
  	});

  	it("should find the square root of two numbers", function(){
  		expect(squareRoot(16)).toBe(4);
  	});

});
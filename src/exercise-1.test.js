const {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
} = require("./exercise-1");

describe("addNumbers", () => {
  it("Adds two numbers", () => {
    const result = addNumbers(10, 20);
    expect(result).toBe(30);
  });

  it("Adds two numbers", () => {
    const result = addNumbers(10, 10);
    expect(result).toBe(20);
  });

  it("Adds two numbers", () => {
    const result = addNumbers(-10, 10);
    expect(result).toBe(0);
  });
});

describe("subtractNumbers", () => {
  it("Subtracts a number from another number", () => {
    const result = subtractNumbers(30, 20);
    expect(result).toBe(10);
  });

  it("Subtracts a number from another number", () => {
    const result = subtractNumbers(10, 20);
    expect(result).toBe(-10);
  });

  it("Subtracts a number from another number", () => {
    const result = subtractNumbers(50, 50);
    expect(result).toBe(0);
  });
});

describe("multiplyNumbers", () => {
  it("Multiplies two numbers", () => {
    const result = multiplyNumbers(10, 20);
    expect(result).toBe(200);
  });

  it("Multiplies two numbers", () => {
    const result = multiplyNumbers(50, 0);
    expect(result).toBe(0);
  });

  it("Multiplies two numbers", () => {
    const result = multiplyNumbers(1, 70);
    expect(result).toBe(70);
  });
});

describe("divideNumbers", () => {
  it("Divides one number from another", () => {
    const result = divideNumbers(10, 5);
    expect(result).toBe(2);
  });

  it("Divides one number from another", () => {
    const result = divideNumbers(10, 10);
    expect(result).toBe(1);
  });

  it("Divides one number from another", () => {
    const result = divideNumbers(13, 5);
    expect(result).toBe(2.6);
  });

  it("Divides one number from another", () => {
    const result = divideNumbers(100, 0);
    expect(result).toBe("Can't divide by 0");
  });
});

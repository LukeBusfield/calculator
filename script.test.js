import {sum, subtract, multiply, divide, operate} from './script.js';

test('Adds two numbers as expected', () => {
    expect(sum(3, 4)).toBe(7);
});
test('Subtracts two numbers as expected', () => {
    expect(subtract(3, 4)).toBe(-1);
});
test('Mulitplies two numbers as expected', () => {
    expect(multiply(3, 4)).toBe(12);
});
test('Divides two numbers as expected', () => {
    expect(divide(3, 4)).toBe(0.75);
});
test('Handles two numbers and an operator as expected', () => {
    expect(operate(3, 4, "+")).toBe(7);
});
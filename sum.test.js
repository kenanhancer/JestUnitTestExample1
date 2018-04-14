const sum = require('./sum');

test('adds 1 + 2 to equal 3', function () {
    expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', function () {
    expect(2 + 2).toBe(4);
});

test('object assignment', function () {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', function () {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

test('null', function () {
    const n = null;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', function () {
    const z = 0;

    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('two plus two', function () {
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    //toBe and toEqual are equivalent for numbers;
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('adding floating point numbers', function () {
    const value = 0.1 + 0.2;

    // This won't work because of rounding error
    // expect(value).toBe(0.3);
    expect(value).toBeCloseTo(0.3);
});

test('there is no I in team', function () {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Cristoph', function () {
    expect('Cristoph').toMatch(/stop/);
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer'
];

test('the shopping list has beer on it', function () {
    expect(shoppingList).toContain('beer');
});
function myIsNaN(value) {
    // Перевірка, чи передане значення не є числом
    // (враховуючи, що typeof NaN === 'number')
    return typeof value === 'number' && value !== value;
}

// Приклади функції:
console.log(myIsNaN(123)); // false
console.log(myIsNaN('hello')); // false
console.log(myIsNaN(NaN)); // true
console.log(myIsNaN('42')); // false
console.log(myIsNaN(undefined)); // false
console.log(myIsNaN(null)); // false
console.log(myIsNaN(true)); // false
console.log(myIsNaN(false)); // false
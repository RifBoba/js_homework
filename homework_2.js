function pad(str, symbol, count, addToStart) {
    // Перевірка, чи необхідно додавати символи
    if (count <= str.length) {
        return str; // Немає потреби додавати символи
    }

    // Обчислення різниці між потрібною кількістю символів та довжиною рядка
    const diff = count - str.length;
    // Повторення символу для отримання необхідної кількості
    const repeatedSymbol = symbol.repeat(diff);

    // Вибір, де додавати символи: на початок або в кінець
    if (addToStart) {
        return repeatedSymbol + str; // Додавання до початку рядка
    } else {
        return str + repeatedSymbol; // Додавання до кінця рядка
    }
}

// Приклади використання
console.log(pad('qwerty', '+', 5, true)); // 'qwerty'
console.log(pad('hello', '*', 5, false)); // 'hello'
console.log(pad('world', '-', 10, true)); // '-----world'
console.log(pad('test', '#', 8, false)); // 'test####'
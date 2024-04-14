// Функція pow(x, y) приймає два параметри: x (число) та y (ступінь)
function pow(x, y) {
    let result = 1; // Змінна для збереження результату

    // Цикл для обчислення x в ступені y
    for (let i = 0; i < y; i++) {
        result *= x; // Помножити результат на x
    }

    return result; // Повернути обчислений результат
}

// Виклик функції з числом 2 та ступенем 7
const base = 2;
const exponent = 7;
const result = pow(base, exponent);
console.log(`pow(${base}, ${exponent}) = ${result}`);
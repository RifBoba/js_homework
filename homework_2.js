let sum = 0; // Змінна для збереження суми

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        // Якщо число не кратне 3, додаємо його до суми
        sum += i;
    }
}

console.log(`Сума чисел від 1 до 100 (не кратних 3): ${sum}`);
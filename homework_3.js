function checkProbabilityTheory(count) {
    let evenCount = 0; // Кількість парних чисел
    let oddCount = 0; // Кількість непарних чисел

    for (let i = 0; i < count; i++) {
        // Генеруємо випадкове число в діапазоні від 100 до 1000 включно
        const randomNum = Math.floor(Math.random() * 901) + 100;

        if (randomNum % 2 === 0) {
            evenCount++; // Збільшуємо лічильник парних чисел
        } else {
            oddCount++; // Збільшуємо лічильник непарних чисел
        }
    }

    // Обчислюємо відсоткове співвідношення парних до непарних чисел
    const percentage = (evenCount / count) * 100;

    // Виводимо результати
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${percentage.toFixed(2)}%`);
}

// Приклад використання
checkProbabilityTheory(986);
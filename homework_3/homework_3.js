// Одиниця вимірювання та кількість
const unit = "км"; // Введіть "км", "год" або "кг"
const amount = 10; // Введіть кількість

let convertedValue;
let convertedUnit;

switch (unit) {
    case "км":
        convertedValue = amount * 1000;
        convertedUnit = "м";
        break;
    case "год":
        convertedValue = amount * 60;
        convertedUnit = "хв";
        break;
    case "кг":
        convertedValue = amount * 1000;
        convertedUnit = "грм";
        break;
    default:
        console.log("Невідома одиниця виміру. Введіть км, год або кг.");
        break;
}

if (convertedValue !== undefined) {
    console.log(`${amount} ${unit} це ${convertedValue} ${convertedUnit}.`);
}
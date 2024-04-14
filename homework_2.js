// Створюємо об'єкт з послугами та їх вартістю
const services = {
    "кебаб": "400 грн",
    "люля кебаб": "280 грн",
    "шаурма": "340 грн"
  };
  
  // Додаємо нову послугу та її вартість
  services['Кетчуп'] = "25 грн";
  services['Майонез'] = "30 грн";
  
  // Метод, який обчислює загальну вартість послуг
  services.price = function() {
    let total = 0;
    for (const service in this) {
      if (typeof this[service] === 'string') {
        // Видаляємо " грн" зі строки та перетворюємо на число
        const price = parseFloat(this[service].replace(' грн', ''));
        total += price;
      }
    }
    return total + ' грн';
  };
  
  // Метод, який повертає мінімальну вартість послуг
  services.minPrice = function() {
    let min = Infinity;
    for (const service in this) {
      if (typeof this[service] === 'string') {
        const price = parseFloat(this[service].replace(' грн', ''));
        if (price < min) {
          min = price;
        }
      }
    }
    return min + ' грн';
  };
  
  // Метод, який повертає максимальну вартість послуг
  services.maxPrice = function() {
    let max = 0;
    for (const service in this) {
      if (typeof this[service] === 'string') {
        const price = parseFloat(this[service].replace(' грн', ''));
        if (price > max) {
          max = price;
        }
      }
    }
    return max + ' грн';
  };
  
  // Виводимо результати
  console.log('Загальна вартість послуг:', services.price());
  console.log('Мінімальна вартість послуг:', services.minPrice());
  console.log('Максимальна вартість послуг:', services.maxPrice());
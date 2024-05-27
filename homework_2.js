// Ваш об'єкт компанії
const company = {
    name: 'EA',
    type:'Основний Видавець',
    platform: 'Ігровий видавець',
    jobsSolution: 'Фінансує розробників',
    clients: [
        {
            name: 'Bioware',
            type: 'Компанія розробників',
            uses: 'Розробляє ПО',
            job: 'Велика будівля де сидять розробники',
            partners: [
                {
                    name: 'Давід Музика',
                    type: 'Розробник',
                    uses: 'Використовує фінансування від ЕА',
                    job: 'Геймдизайнер',
                },
                {
                    name: 'Чел Поркінс',
                    type: 'Розробник',
                    uses: 'Використовує фінансування від ЕА',
                    job: 'QA тімлід',
                    partners: [
                        {
                            name: 'Девід Аркет',
                            type: 'розробник',
                            uses: 'Використовує фінансування від ЕА',
                            job: 'QA middle',
                        }
                    ]
                }
            ]
        },
    ]
};

// Функція для пошуку компанії за назвою в глибоко вкладеному об'єкті
function findValueByKey(companyName, company) {
    // Перевіряємо, чи назва компанії співпадає з назвою, яку ми шукаємо
    if (company.name === companyName) {
        return company;
    }

    // Якщо компанія має клієнтів, ми шукаємо серед них
    if (Array.isArray(company.clients)) {
        for (let i = 0; i < company.clients.length; i++) {
            let result = findValueByKey(companyName, company.clients[i]);
            // Якщо ми знайшли компанію, повертаємо її
            if (result) {
                return result;
            }
        }
    }

    // Якщо компанія має партнерів, ми шукаємо серед них
    if (Array.isArray(company.partners)) {
        for (let i = 0; i < company.partners.length; i++) {
            let result = findValueByKey(companyName, company.partners[i]);
            // Якщо ми знайшли компанію, повертаємо її
            if (result) {
                return result;
            }
        }
    }

    // Якщо ми не знайшли компанію, повертаємо null
    return null;
}

// Викликаємо функцію findValueByKey з назвою компанії, яку ми шукаємо, та об'єктом компанії
let result = findValueByKey('Bioware', company);

// Виводимо результат
console.log(result);
console.log(result.partners[0])

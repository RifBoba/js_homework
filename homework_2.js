// Масив об'єктів з email-адресами
var arr = [
  {
      userName: "Ayleen",
      lastName: "Mamamilk",
      email: "ayleen_mamamilk@gmail.com"
  },
  {
      userName: "Dmytro",
      lastName: "Panatsey",
      email: "Dmytro.Panatsey@yahoo.com"
  },
  {
      userName: "stariy",
      lastName: "did",
      email: "stariy_did@ukr.net"
  }
];

// Регулярний вираз для перевірки email-адрес
var validEmailRegex = /^[a-zA-Z0-9.-_]+@(gmail\.com|yahoo\.com)$/;

// Фільтруємо адреси, які підходять за умовами
var trustedEmails = arr.filter(function(obj) {
  return validEmailRegex.test(obj.email);
});

// Виводимо результат
for (var i = 0; i < trustedEmails.length; i++) {
  console.log("Email-адреса:", trustedEmails[i].email);
}
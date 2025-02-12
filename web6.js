// Статус входа
let loggedInUser = null;

// Обработка регистрации
document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Регистрация успешна! Пожалуйста, войдите в систему.');
    window.location.href = 'web6(3).html'; // Перенаправление на страницу входа
});

// Обработка входа
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    // Проверка данных для сотрудников
    if (email && password) {
        if (email === 'admin@example.com' && password === 'admin123') {
            // Вход для администратора
            alert('Добро пожаловать, администратор!');
            window.location.href = 'admin.html'; // Перенаправление на страницу администрации
        } else {
            alert('Неверный логин или пароль. Попробуйте снова.');
        }
    }
});

// Обработка входа для сотрудников
document.getElementById('employeeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Данные сотрудника сохранены.');
});

// Обработка создания отчета
document.getElementById('reportForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Отчет отправлен.');
});
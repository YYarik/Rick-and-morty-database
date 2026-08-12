# Rick and Morty Wiki

Даний проєкт — це база даних про персонажів, епізоди та локації з серіалу Rick and Morty. Додаток побудований на React, використовує відкритий API The Rick and Morty API та має пошук, фільтрацію, пагінацію та навігацію між розділами.

## Що реалізовано

- перегляд списку персонажів;
- пошук за ім'ям;
- фільтрація за статусом, статтю та видом;
- пагінація результатів;
- сторінка деталей персонажа;
- розділи "Episodes" і "Location" з вибором конкретного епізоду або локації;
- навігаційне меню між секціями.

## Технології

- React
- React Router DOM
- Bootstrap 5
- Sass
- React Paginate
- The Rick and Morty API
- GitHub Pages

## Встановлення

1. Клонувати репозиторій:

```bash
git clone https://github.com/YYarik/rick-and-morty-database.git
cd rick-and-morty-database
```

2. Встановити залежності:

```bash
npm install
```

## Запуск локально

```bash
npm start
```

Після цього відкрийте в браузері:

```text
http://localhost:3000
```

## Збірка для продакшн

```bash
npm run build
```

Готовий build буде збережений у папці `build`.

## Деплой на GitHub Pages

У файлі `package.json` вже налаштовано параметр `homepage` для GitHub Pages. Якщо ваше ім'я користувача GitHub або назва репозиторію інші, змініть значення:

```json
"homepage": "https://YOUR_USERNAME.github.io/rick-and-morty-database"
```

Після цього виконайте:

```bash
npm run deploy
```

Команда автоматично збере проект і завантажить вміст папки `build` на GitHub Pages.

## Структура проєкту

```text
src/
├── App.js
├── App.css
├── index.css
├── index.js
├── components/
│   ├── Cards/
│   ├── Filters/
│   ├── Navbar/
│   ├── Pagination/
│   └── Search/
├── Pages/
│   ├── Episodes.js
│   └── Location.js
└── ...
```

## Примітки

- Для GitHub Pages використовується `HashRouter`, щоб маршрути працювали коректно на статичному хостингу.
- Дані завантажуються з відкритого API The Rick and Morty API.
- Проєкт підходить для навчальних цілей, демонстрації React-стеку та практики роботи з API.

## Автор

Проєкт створено як навчальний React-додаток для роботи з API та маршрутизацією.

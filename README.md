# Тестовое задание для кандидатов

## Запуск проекта
``
npm i && npm run all
``
# Задание

## 1
Вывести данные запроса ('http://localhost:3004/events') в виде таблицы:
колонки: Дата (date), Сумма (totalAmount), Количество (quantity), Название (label), Комментарий (comment), Период (period), Выбор (Добавить в колонку чекбокс для выбора данной строки)

Добавить кнопку "Показать выбранные" по клику на которую будут суммироваться только выбранные строки в таблице и выводиться ниже в виде строки:
(∑ "totalAmount") по каждому типу события (определяется по полю "type")

**Пример: DIVIDEND: 100, COUPON: 56**

## 2
Создать компонент отображения данных события, должен открываться на отдельной странице
по клику на строку таблицы. На новой странице просто вывести данные события

## 3
центрировать таблицу по центру, остальная стилизация на усмотрение выполняющего

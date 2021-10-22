from operator import itemgetter
from models.book import Book
from models.book_store import BookStore
from models.book_to_store import BookToStore

# Магазины
stores = [
    BookStore(1, 'Дом книги'),
    BookStore(2, 'Пушкинская лавка'),
    BookStore(3, 'Читай город'),

    BookStore(11, 'Альманах'),
    BookStore(22, 'Библио-Глобус'),
    BookStore(33, 'Книги на Бауманской'),
]

# Книги
books = [
    Book(1, 'Преступление и наказание', 2700, 1),
    Book(2, 'Идиот', 1200, 2),
    Book(3, 'Братья Карамазовы', 600, 3),
    Book(4, 'Записки из подполья', 1100, 3),
    Book(5, 'Бесы', 800, 3),
]

store_to_books = [
    BookToStore(1, 1),
    BookToStore(2, 2),
    BookToStore(3, 3),
    BookToStore(3, 4),
    BookToStore(3, 5),

    BookToStore(11, 1),
    BookToStore(22, 2),
    BookToStore(33, 1),
    BookToStore(33, 2),
    BookToStore(33, 5),
]


def main():
    """Основная функция"""

    # Соединение данных один-ко-многим
    one_to_many = [(book.name, book.cost, store.name)
                   for store in stores
                   for book in books
                   if book.store_id == store.id]

    # Соединение данных многие-ко-многим
    many_to_many_temp = [(store.name, store_to_book.store_id, store_to_book.book_id)
                         for store in stores
                         for store_to_book in store_to_books
                         if store.id == store_to_book.store_id]

    many_to_many = [(book.name, book.cost, store_name)
                    for store_name, store_id, book_id in many_to_many_temp
                    for book in books if book.id == book_id]

    print('Задание Д1')
    res_11 = [(book.name, book.cost, store.name)
              for store in stores
              for book in books
              if book.store_id == store.id and book.cost > 1000]
    print(res_11)

    print('\nЗадание Д2')
    res_12_unsorted = []
    # Перебираем все магазины
    for store in stores:
        # Список книг магазина
        store_books = list(filter(lambda i: i[2] == store.name, one_to_many))
        # Если магазин не пуст
        if len(store_books) > 0:
            # Цены книг
            books_costs = [cost for _, cost, _ in store_books]
            # Средняя цена книг
            books_costs_mean = sum(books_costs) / len(books_costs)
            res_12_unsorted.append((store.name, books_costs_mean))

    # Сортировка по средней цене
    res_12 = sorted(res_12_unsorted, key=itemgetter(1), reverse=True)
    print(res_12)

    print('\nЗадание Д3')
    res_13 = {}
    # Перебираем все магазины
    for store in stores:
        if store.name.lower().startswith('а'):
            # Список книг магазинов
            books_of_store = list(
                filter(lambda i: i[2] == store.name, many_to_many))
            # Только названия книг
            books_names = [x for x, _, _ in books_of_store]
            # Добавляем результат в словарь
            # ключ - магазин, значение - список названий
            res_13[store.name] = books_names

    print(res_13)


if __name__ == '__main__':
    main()

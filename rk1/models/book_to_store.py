class BookToStore:
    """
    'Книги магазина' для реализации
    связи многие-ко-многим
    """

    def __init__(self, store_id, book_id):
        self.store_id = store_id
        self.book_id = book_id

# Итератор для удаления дубликатов
# Нужно реализовать конструктор
# В качестве ключевого аргумента, конструктор должен принимать bool-параметр ignore_case,
# в зависимости от значения которого будут считаться одинаковыми строки в разном регистре
# Например: ignore_case = True, Aбв и АБВ - разные строки
#           ignore_case = False, Aбв и АБВ - одинаковые строки, одна из которых удалится
# По-умолчанию ignore_case = False

class Unique(object):
    def __init__(self, items, **kwargs):
        self.used_elements = set()
        self.data = items
        self.index = 0

        if 'ignore_case' not in kwargs:
            self.ignore_case = False
        else:
            self.ignore_case = kwargs['ignore_case']

    def __iter__(self):
        return self

    def __next__(self):
        while True:
            if self.index >= len(self.data):
                raise StopIteration
            else:
                current = self.data[self.index]
                self.index += 1
                cased = current.lower() if self.ignore_case else current
                if cased not in self.used_elements:
                    self.used_elements.add(cased)
                    return current


if __name__ == '__main__':
    data = ['a', 'A', 'b', 'B', 'a', 'A', 'b', 'B']

    print('======================================== IGNORE CASE ========================================')
    for val in Unique(data, ignore_case=True):
        print(val)

    print('======================================== DONT IGNORE CASE ========================================')
    for val in Unique(data):
        print(val)

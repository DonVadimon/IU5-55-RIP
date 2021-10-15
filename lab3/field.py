def field(items, *args):
    assert len(args) > 0
    if len(args) == 1:
        for item in items:
            if args[0] in item.keys():
                yield item[args[0]]
    else:
        for item in items:
            res = dict()
            for key in args:
                if key in item.keys():
                    res[key] = item[key]
            yield res

if __name__ == '__main__':
    goods = [
        {'title': 'Ковер', 'price': 2000, 'color': 'green'},
        {'title': 'Диван для отдыха', 'price': 5300, 'color': 'black'}
    ]

    for val in field(goods, 'title', 'price'):
        print(val)

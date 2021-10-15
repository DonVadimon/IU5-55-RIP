from .classes.circle import Circle
from .classes.rectangle import Rectangle
from .classes.square import Square

def main():
    rect = Rectangle(5, 5, 'синий')
    circ = Circle(5, 'зеленый')
    squar = Square(5, 'красный')
    print('{0!r}'.format(rect))
    print('{0!r}'.format(circ))
    print('{0!r}'.format(squar))


if __name__ == "__main__":
    main()

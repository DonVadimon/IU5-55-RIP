from .rectangle import Rectangle
from .fig_color import FigColor


class Square(Rectangle):
    def __init__(self, side, color):
        self._width = side
        self._height = side
        self._color = FigColor(color)

    def __repr__(self):
        return 'Квадрат со стороной ' + str(self._width) + ' и цветом: ' + str(self._color._color)

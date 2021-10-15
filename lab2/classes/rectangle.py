from .geom_figure import GeomFigure
from .fig_color import FigColor


class Rectangle(GeomFigure):
    def __init__(self, width, height, color):
        self._width = width
        self._height = height
        self._color = FigColor(color)

    def square(self):
        return self._width * self._height

    def __repr__(self):
        return 'Прямоугольник с высотой ' + str(self._height) + ', шириной ' + str(self._width) + ' и цветом: ' + str(self._color._color)

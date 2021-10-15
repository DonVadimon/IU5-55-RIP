from .geom_figure import GeomFigure
from .fig_color import FigColor
from math import pi


class Circle(GeomFigure):
    def __init__(self, radius, color):
        self._radius = radius
        self._color = FigColor(color)

    def square(self):
        return pi * self._radius**2

    def __repr__(self):
        return 'Круг с радиусом ' + str(self._radius) + ' и цветом: ' + str(self._color._color)

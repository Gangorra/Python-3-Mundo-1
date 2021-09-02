""" co = float(input('Comprimento do cateto oposto:'))
ca = float(input('Comprimento do cateto adjacente:'))
hi = (co ** 2 + ca ** 2) ** (1/2)
print(f'O comprimento da hipotenusa é{hi:.2f}') """

'''import math
co = float(input('Comprimento do cateto oposto: '))
ca = float(input('Comprimento do cateto adjacente: '))
hi = math.sqrt(pow(co, 2) + pow(ca, 2))
print(f'O comprimento da hipotenusa é {hi:.2f}')'''

import math
co = float(input('O comprimento do cateto oposto:'))
ca = float(input('O comprimento do cateto adjacente:'))
hi = math.hypot(co, ca)
print(f'O comprimento da hipotenusa é {hi:.2f}.')

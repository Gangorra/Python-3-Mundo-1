import math
angulo = float(input('Digite o ângulo que deseja: '))
sen = math.sin(math.radians(angulo))
cos = math.cos(math.radians(angulo))
tan = math.tan(math.radians(angulo))
print(f'O ângulo de {angulo} tem o seno de {sen:.2f}.')
print(f'O ângulo de {angulo} tem o cosseno de {cos:.2f}.')
print(f'O ângulo de {angulo} tem o tangente de {tan:.2f}.')

"""from math import sin, cos, tan, radians
a = float(input('Digite o angulo:'))
sen = sin(radians(a))
cos = cos(radians(a))
tan = tan(radians(a))
print(f'Tem o seno de {sen:.2f}')
print(f'Tem o cosseno de {cos:.2f}')
print(f'Tem o tangente de {tan:.2f}')"""

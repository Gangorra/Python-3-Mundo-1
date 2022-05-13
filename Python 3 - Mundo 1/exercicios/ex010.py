Real = float(input('Quanto dinheiro você tem? R$'))
Dolar = Real / 5.07
Euro = Real / 6.15
Iene = Real / 0.49
print(f'Com R${Real} você pode comprar US${Dolar:.2f} dolares!')
print(f'Com R${Real} você pode comprar €${Euro:.2f} euros!')
print(f'Com R${Real} você pode comprar ¥${Iene:.2f} ienes!')

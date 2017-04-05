sodas = ['Pepsi', 'Cherry Coke Zero', 'Sprite']
chips = ['Doritos', 'OLW']
candy = ['Gott och blandat', 'Marabou', 'Ahlgrens bilar']

while True:
    choice = input('What do you want down your gobble? SODA, CHIPS or CANDY? ').lower()
    try:
        if choice == 'soda':
            snack = sodas.pop()
        elif choice == 'chips':
            snack = chips.pop()
        elif choice == 'candy':
            snack = candy.pop()
        else:
            print('Sorry we dont have that')
            continue
    except IndexError:
        print('All out of them {0} tings'.format(choice))
    else:
        print('Here is your {0}: {1}'.format(choice, snack))

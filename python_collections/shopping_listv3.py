import os

# make a list to hold onto our items
shopping_list = []

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

print('What should we pick up at the store?')
print('Enter \'DONE\' to stop adding items.')
print('Enter \'REMOVE\' to delete an item from the list.')

def print_help_msg():
    clear_screen()
    # print out instructions on how to use the app
    print('''
Enter items that you want to add to the shopping list.
When you are finished, enter \'DONE\'.
If you want to see what is in your list, enter \'SHOW\'
''')

def show_list_items():
    clear_screen()
    # print out the list
    print('Here is your list:')

    for index, item in enumerate(shopping_list):
        print('{0}. {1}'.format(index, item))
        
    print('-' * 10)

def remove_from_list():
    show_list_items()
    what_to_remove = input('What would you like to remove?\n> ')
    try:
        shopping_list.remove(what_to_remove)
    except ValueError:
        pass

    show_list_items()

def add_to_list(new_item):
    show_list_items()

    if len(shopping_list):
        position = input('Where should I add {0}?\n'
                         'Press ENTER to add to the end of the list\n'
                         '> '.format(new_item))
    else:
        position = 0

    try:
        position = abs(int(position))
    except ValueError:
        position = None
    if position is not None:
        shopping_list.insert(position-1, new_item)
    else:
        shopping_list.append(new_item)

    show_list_items()

while True:
    # ask for new items
    new_item = input('> ')

    # be able to quit the app
    if new_item.upper() == 'DONE' or new_item.upper() == 'QUIT':
        break
    elif new_item.upper() == 'HELP':
        print_help_msg()
        continue
    elif new_item.upper() == 'SHOW':
        show_list_items()
        continue
    elif new_item.upper() == 'REMOVE':
        remove_from_list()
    else:
        add_to_list(new_item)

show_list_items()

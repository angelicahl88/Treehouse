# make a list to hold onto our items
shopping_list = []

# print out instructions on how to use the app
print('What should we pick up at the store?')
print('Enter \'DONE\' to stop adding items.')

def print_help_msg():
    print('''
Enter items that you want to add to the shopping list.
When you are finished, enter \'DONE\'.
If you want to see what is in your list, enter \'SHOW\'
''')

def show_list_items():
    # print out the list
    print('Here is your list:')
    for item in shopping_list:
        print(item)

def add_to_list(new_item):
    # add new items to our list
    shopping_list.append(new_item)
    print('Added {0}. List now has {1} items'.format(new_item, len(shopping_list)))

while True:
    # ask for new items
    new_item = input('> ')

    # be able to quit the app
    if new_item == 'DONE':
        break
    elif new_item == 'HELP':
        print_help_msg()
        continue
    elif new_item == 'SHOW':
        show_list_items()
        continue

    add_to_list(new_item)

show_list_items()

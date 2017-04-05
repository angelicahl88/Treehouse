flowers = ['roses', 'dandelions', 'lilies', 'tulips']

# add one item to list (non mutating - will not save over the flowers list)
flowers + ['daffodils']

# add one item to list (mutating - will add daffodils to flowers list)
flowers += ['daffodils']

# creates new variable with flowers list and new item (flowers is still intact)
bouquet = flowers + ['snowdrops']


# mutates the list that append method is called upon (appending a list will insert a list into the flowers list)
flowers.append('cactus')

# extend takes to lists and flattens them - extend takes any iterable
flowers.extend(['poppies', 'daisies'])

# insert allows insertion into a list as long as you pass an index (passing a list will insert a list)
flowers.insert(1, 'sunflowers')


# deleting items from list by index
del flowers[0]

# deleting items from list by value - removes only first instance of the value then stops looking
# to remove all instances of a value you can loop through the list until you receive a ValueError (no instance)
flowers.remove('lilies')

# delete last value and return the deleted value
removed_flower = flowers.pop()

# delete value by index and return deleted value
removed_flower2 = flower.pop(3)

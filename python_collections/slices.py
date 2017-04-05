clothes = ['pants', 'sweater', 'tshirt', 'socks', 'panties', 'bra', 'cardigan', 'knit']

# slice the list from index 1 to 5 (returns index 1, 2, 3, 4) returns a list with the item
packing = clothes[1:5]

# slice to get the last item in the list - the last index can be as high as possible
last_pieces = clothes[4:10]

# slice to all up to the 3rd index
some_clothes = clothes[:3]

# slice to all from the 2nd index to the end of the list
last = clothes[2:]

# slice to return a full COPY of the list
copy_clothes = clothes[:]

# slice using negative numbers
last_three_clothes = clothes[-3:]



# slices with steps. can be applied to every iterable
numbers = list(range(20))

# slices and returns every two items (default is 1)
numbers[::2]

# reverse through to get last three items with negative steps
last_three_nums = numbers[-1:-4:-1]

# return the numbers in reverse
reverse_nums = numbers[::-1]



rainbow = ['red', 'orange', 'green', 'yellow', 'blue', 'black', 'white', 'aqua', 'purple', 'pink']

# delete black white and aqua
del rainbow[5:8]

# change values of a list
rainbow[2:4] = ['yellow', 'green']

# can also insert new values
rainbow[4:5] = ['blue', 'indigo']

# replace the last two with another values
rainbow[-2:] = 'violet'

# tuples - like lists, iterable but IMMUTABLE (also more memory efficient)
my_tuple = (1, 2, 3)
# outputs (1, 2, 3)

my_second_tuple = 1, 2, 3
# outputs (1, 2, 3)

# the comma is what makes it a tuple as it marks something as a single bit of data

my_single_tuple = 1,
# outputs (3,)

my_new_tuple = tuple([2, 3, 4])
# not working..?


tuple_with_a_list = (1, 'apple', [2, 3, 5])
# change value in a list within a tuple (tuple itself cannot be changed)
tuple_with_a_list[2][1] = 1
# outputs (1, 'apple', [2, 1, 5])



# packing and unpacking tuple (simulateous assignments)
a = 5
b = 20

# how to swap values -  unpacks into a varaiable (on the left side)
a, b = b, a

def add(*nums):
    total = 0
    for num in nums:
        total += num
    return total

add(5,5)
# returns 10
add(32)
# return 32

def add2(base, *args):
    total = base
    for num in args:
        total += num
    return total

add2(5,5,10)
# returns 20



course_minutes = {'Python Basics': 232, 'Django Basics': 237, 'Java Basics': 189 }
for course, minutes in course_minutes.items():
    # unpacking the tuple (key value pair) into variables course and minutes
    print('{} is {} minutes long'.format(course, minutes))


list(enumerate('abc'))
# outputs [(0, 'a'), (1, 'b'), (2, 'c')]

def combo(item1, item2):
    list = []
    for index, item in enumerate(item1):
        list.append((item1[index], item2[index]))
    return list

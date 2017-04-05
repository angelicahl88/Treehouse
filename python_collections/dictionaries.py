# dictionary
course = { 'title': 'Python Collections' }

# retrieve the value of title
course['title']

# create using dict function
dict([['key', 'value']])

# dictionary with multiple keys
course = { 'title': 'Python Collections', 'teacher': 'Kenneth Love', 'video': 22 }

# nested dictionaries
course = { 'title': 'Python Collections', 'teacher': {'first_name': 'Kenneth Love', 'last_name': 'Love' }, 'video': 22 }

# change a key value
course['title'] = 'Python Dictionaries'

# change several keys at once

course.update({'teacher': {'first_name': 'Angelica', 'last_name': 'Hart Lindh'}})

# delete a key value
del course['video']


# packing and unpacking dicitonaries
# packing takes multiple values and combines into single variable **kwargs has to be the last parameter
# unpacking takes single variable and splits into multiple values
def packer(**kwargs):
    print(kwargs)

packer(name='Kennet', num=42, spanish_inquisition=None)
## output: {'name': 'Kennet', 'num': 42, 'spanish_inquisition': None}

def packer2(name=None, **kwargs):
    print(kwargs)

packer2(name='Kennet', num=42, spanish_inquisition=None)
## output: {'num': 42, 'spanish_inquisition': None}

def unpacker(first_name=None, last_name=None):
    if first_name and last_name:
        print('Hi {0} {1}!'.format(first_name, last_name))
    else:
        print('Hi no name!')

unpacker(**{'last_name': 'Hart Lindh', 'first_name': 'Angelica'})
## output: Hi Angelica Hart Lindh!

# unpack multiple dicionaries in a list
def unpacker2(args):
    output = []
    for arg in args:
        output.append('Hi {first_name} {last_name}!'.format(**arg))
    return output

unpacker2([{'last_name': 'Hart Lindh', 'first_name': 'Angelica'}, { 'last_name': 'Stratton', 'first_name': 'Owain' }])
## output: ['Hi Angelica Hart Lindh!', 'Hi Owain Stratton!']


# iterating through Dictionaries
course_minutes = { 'Python Basics': 232, 'Django Basics': 237, 'Flask Basics': 189, 'Java Basics': 133 }

# return keys
for key in course_minutes.keys():
    print(key)

# return values
for value in course_minutes.values():
    print(value)

# return full key value pair in dictionary
for item in course_minutes.items():
    print(item)



def word_count(str):
    list_of_str = str.lower().split()
    dictionary = {}
    for word in list_of_str:
        dictionary.update({ word: list_of_str.count(word) })
    return dictionary

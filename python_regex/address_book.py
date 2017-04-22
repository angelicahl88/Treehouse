import re

# names_file = open('names.txt', encoding='utf-8')
# data = names_file.read() # put all of the contents of names_file into data
# names_file.close() # close file after we've read it to save memory

### more efficient way of opening and reading file contents
## this will cause the file to automatically close once the action inside of it finishes (i.e. read)
with open('names.txt', encoding='utf-8') as open_file:
    data = open_file.read()

print(re.match(r'Love', data)) # r tells python it is a raw string, match matches from the beginning of the string
print(re.search(r'Kenneth', data)) # search matches for somewhere in the string

print(re.findall(r'\(?\d{3}\)?-?\s?\d{3}-\d{4}', data)) # findall will return all instances
print(re.findall(r'\w*, \w+', data))

print(re.findall(r'[-\w\d+.]+@[-\w\d.]+', data))
print(re.findall(r'\b[trehous]{9}\b', data, re.I))

## match all email addresses but leave off end if ending in .gov
print(re.findall(r'\b@[-\w\d.]*[^gov\t]+\b', data, re.VERBOSE | re.I))

## re.X is shorthand for verbose so it ignores all of hte spaces in the regex pattern
## find word boundary, 1+ hyphens or chars with a comma, find 1 whitespace, find 1+ hyphens and chars and explicit spaces, ignore tabs and newlines
print(re.findall(r'\b[-\w]*,\s[-w ]+[^\t\n]', data, re.X))
print(re.findall(r'''
    \b[-\w]*,
    \s
    [-w ]+
    [^\t\n]
''', data, re.X))





# print(re.findall(r'([-\w ]+, \s[-\w ]+)\t([-\w\d.+]+@[-\w\d.]+)\t(\(?\d{3}\)?-?\s?\d{3}-\d{4})\t([\w\s]+,\s[\w\s]+)\t(@[\w\d]+)', data, re.X))

# compile lets us use the regex and make it ready for use, take out data attr to make it reusable
line = re.compile(r'''
    ^(?P<name>(?P<first>[-\w ]*), (?P<last>\s[-\w ]+))\t # first and last names
    (?P<email>[-\w\d.+]+@[-\w\d.]+)\t # email addresses
    (?P<phone>\(?\d{3}\)?-?\s?\d{3}-\d{4})?\t # phone number
    (?P<job>[\w\s]+,\s[\w\s.]+)\t? # job and company
    (?P<twitter>@[\w\d]+)?$ # Twitter
''', re.X | re.M)

print(line.search(data).groupdict()) # returns first instances

for match in line.finditer(data):
    print('{first} {last} <{email}>'.format(**match.groupdict()))

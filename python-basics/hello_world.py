def hows_the_parrot():
    print('he is pining for the fjords')

hows_the_parrot()

def lumberjack(name, pronoun):
        print('{0} sleeps all night and {1} works all day'.format(name, pronoun))

lumberjack('beeds', 'she')

def average(num1, num2):
    return(num1+num2) / 2

avg = average(4,6)
print(avg)


# exceptions
try:
    count = int(input('give me a number '))
except ValueError:
    print('thats not a number!!!!')
else:
    print('hi ' * count)

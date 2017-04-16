import random

from combat import Combat

COLORS = ['yellow', 'red', 'blue', 'green']


class Monster(Combat):
    min_hp = 1
    max_hp = 100
    min_xp = 1
    max_xp = 99
    weapon = 'sword'
    sound = 'roar'

    def __init__(self, **kwargs):
        self.hp = random.randint(self.min_hp, self.max_hp)
        self.xp = random.randint(self.min_xp, self.max_xp)
        self.color = random.choice(COLORS)

        for key, value in kwargs.items():
            setattr(self, key, value)

    def __str__(self):
        return '{0} {1}, HP: {2}, XP: {3}'.format(  self.color.title(),
                                                    self.__class__.__name__,
                                                    self.hp,
                                                    self.xp)

    # self is the instance of the method you're calling
    def battlecry(self):
        return self.sound.upper()


    # another way where we only take attributes as an argument to the method
    # def __init__(self, **kwargs):
    #     self.hit_points = kwargs.get('hit_points', 5)
    #     self.weapon = kwargs.get('weapon', 'sword')
    #     self.color = kwargs.get('color', 'yellow')
    #     self.sound = kwargs.get('sound', 'roar')




# instance of a Monster
# from monster import Monster
# jubjub = Monster()

# change attribute of jubjub
# jubjub.hit_points = 3

# subclass
class Goblin(Monster):
    max_hp = 1
    max_xp = 5
    sound = 'speak'

# create an instance of a subclass
# azog = monster.Goblin()


class Troll(Monster):
    min_hp = 3
    max_hp = 8
    min_xp = 0
    sound = 'growl'


class Dragon(Monster):
    min_hp = 5
    max_hp = 10
    weapon = 'firebreath'

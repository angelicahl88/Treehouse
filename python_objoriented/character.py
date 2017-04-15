import random
from combat import Combat

class Character(Combat):
    attack_limit = 10
    xp = 0
    hp = 10

    def attack(self):
        roll = random.randint(1, self.attack_limit)
        if self.weapon == 'sword':
            roll += 1
        elif self.weapon == 'axe':
            roll += 2
        return roll > 4

    def get_weapon(self):
        weapon_choice = input('Weapon: [S]word, [B]ow, [A]xe ').lower()
        if weapon_choice in 'sab':
            if weapon_choice == 's':
                return 'sword'
            elif weapon_choice == 'b':
                return 'bow'
            else:
                return 'axe'
        else:
            return self.get_weapon()


    def __init__(self, **kwargs):
        self.name = input('Name: ')
        self.weapon = self.get_weapon()

        for key, value in kwargs.items():
            setattr(self, key, value)

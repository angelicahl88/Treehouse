import sys

from character import Character
from monster import Dragon, Goblin, Troll

class Game():
    def setup(self):
        self.player = Character()
        self.monsters = [
            Goblin(),
            Troll(),
            Dragon()
        ]
        self.monster = self.get_next_monster()

    def player_drop_health(self):
        self.player.hp -= 1

    def get_next_monster(self):
        try:
            return self.monsters.pop(0)
        except IndexError:
            return None

    def monster_turn(self):
        if self.monster.attack():
            print('{} is attacking!'.format(self.monster))

            if input('Dodge? Y/N ').lower() == 'y':
                if self.player.dodge():
                    print('Pheww you dodged the attack')
                else:
                    print('You took a real beating there')
                    self.player_drop_health()
            else:
                print('{} hit you for 1 point!'.format(self.monster))
                self.player_drop_health()
        else:
            print('{} is not attacking this turn'.format(self.monster))

    def player_turn(self):
        player_choice = input('[A]ttack, [R]est or [Q]uit? ').lower()

        if player_choice == 'a':
            print('You are attacking {}!'.format(self.monster))

            if self.player.attack():
                if self.monster.dodge():
                    print('{} dodged your attack'.format(self.monster))
                else:
                    if self.player.lvl_up:
                        self.monster.hp -= 2
                    else:
                        self.monster.hp -= 1

                    print('You got {} right in the kisser with your {}!'.format(self.monster, self.player.weapon))
            else:
                print('You missed!')
        elif player_choice == 'r':
            self.player.rest()
        elif player_choice == 'q':
            sys.exit()
        else:
            self.player_turn()

    def cleanup(self):
        if self.monster.hp <= 0:
            self.player.xp += self.monster.xp
            print('You slayed {}!'.format(self.monster))

            self.monster = self.get_next_monster()

    def __init__(self):
        self.setup()

        while self.player.hp and (self.monster or self.monsters):
            print('\n' + '='*20)
            print(self.player)
            self.monster_turn()
            print('-'*20)
            self.player_turn()
            self.cleanup()
            print('\n' + '='*20)

        if self.player.hp:
            print('You are the winner!! Boo yah!')
        elif self.monster or self.monsters:
            print('You lost. You are dead.')

        sys.exit()

Game()

import random
import os


CELLS = list((x, y) for x in range(5) for y in range(5))

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def get_locations():
    return random.sample(CELLS, 3)

def move_player(player, move):
    x, y = player

    if move == 'LEFT':
        y -= 1
    if move == 'RIGHT':
        y += 1
    if move == 'UP':
        x -= 1
    if move == 'DOWN':
        x += 1

    return x, y

def get_moves(player):
    moves = ['LEFT', 'RIGHT', 'UP', 'DOWN']
    x, y = player

    if y == 0:
        moves.remove('LEFT')
    if y == 4:
        moves.remove('RIGHT')
    if x == 0:
        moves.remove('UP')
    if x == 4:
        moves.remove('DOWN')

    return moves

def draw_map(player):
    print(' _' * 5)
    tile = '|{}'

    for cell in CELLS:
        x, y = cell
        if y < 4:
            line_end = ''
            if cell == player:
                output = tile.format('X')
            else:
                output = tile.format('_')
        else:
            line_end = '\n'
            if cell == player:
                output = tile.format('X|')
            else:
                output = tile.format('_|')
        print(output, end=line_end)

def game_loop():
    monster, door, player = get_locations()
    playing = True

    while playing:
        clear_screen()
        draw_map(player)
        valid_moves = get_moves(player)

        print('You\'re currently in room {}'.format(player))
        print('You can move {}'.format(', '.join(valid_moves)))
        print('Enter QUIT to quit')

        move = input('> ')
        move = move.upper()

        if move == 'QUIT':
            print('See yaaaahh!')
            break
        if move in valid_moves:
            player = move_player(player, move)

            if player == monster:
                print('The monster got you. Unbelievable.... \n')
                playing = False
            if player == door:
                print('\n Nice one! You found the secret door!')
                playing = False

        else:
            input('\n ** Walls are hard. Don\'t run into them! **\n')

    else:
        if input('Play again? [Y/n] ').lower() != 'n':
            game_loop()


clear_screen()

print('Welcome to the dungeon')
input('Press return to enter the dungeon. At your own risk moaahahahah!!!')

clear_screen()
game_loop()

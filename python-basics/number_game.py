import random

def number_guess():
    # generate a random number between 1 and 10
    secret_num = random.randint(1, 10)
    question_cnt = 5

    # limit number of guesses
    while question_cnt > 0:
        # get a number guess from a player
        try:
            guess_num = int(input('Guess a number between 1 and 10: '))
        except ValueError:
            print('That\'s not a number!!')
            continue

        # compare guess to secret number
        if guess_num == secret_num:
            # print hit / miss
            print('You got it! My number was {0}.'.format(secret_num))
            break
        else:
            # print 'too low' or 'too high' messages for bad guesses
            if guess_num > secret_num:
                print('You guessed too high.')
            else:
                print('You guessed too low.')

        question_cnt -= 1
        print('You have {0} more guess(es)'.format(question_cnt))

    # allow user to try again
    try_again = input('Type \'AGAIN\' to try again or \'QUIT\' to quit: ')
    if try_again == 'AGAIN':
        number_guess()
    elif try_again == 'QUIT':
        print('Thanks for playing')


number_guess()

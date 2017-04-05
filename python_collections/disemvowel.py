def disemvowel(word):
    vowels = ['a', 'e', 'o', 'i', 'u', 'A', 'E', 'O', 'I', 'U']
    word_list = list(word)

    for vowel in vowels:

        while vowel in word_list:
            print('{0} is in {1}'.format(vowel, word_list))
            try:
                word_list.remove(vowel)
            except ValueError:
                break

    return ''.join(word_list)


print(disemvowel('AnGe89LICa'))

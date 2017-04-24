#!/usr/bin/env python3


from collections import OrderedDict
import datetime
import os
import sys

from peewee import *

db = SqliteDatabase('diary.db')

class Entry(Model):
    content = TextField()
    timestamp = DateTimeField(default=datetime.datetime.now) # no parentheseis to avoid it running when script is read and run when entry is created

    class Meta:
        database = db



def initialise():
    '''Create the database and the table if they don't exist'''
    db.connect()
    db.create_tables([Entry], safe=True)

def menu_loop():
    '''Show the menu'''
    choice = None

    while choice != 'q':
        clear_screen()
        print('Enter [q] to quit.')
        for key, value in menu.items():
            print('[{}] {}'.format(key, value.__doc__)) # value is a function, __doc__ is the docstring for the function
        choice = input('Action: ').lower().strip()

        if choice in menu:
            clear_screen()
            menu[choice]()


def add_entry():
    '''Add an entry'''
    print('Enter your entry. Press ctrl+d when finished.')
    data = sys.stdin.read().strip()

    if data:
        if input('Save entry? [y]/[n] ').lower() != 'n':
            Entry.create(content=data)
            print('Saved successfully!')


def view_entries(search_query=None):
    '''View previous entries'''
    entries = Entry.select().order_by(Entry.timestamp.desc())
    if search_query:
        entries = entries.where(Entry.content.contains(search_query))

    for entry in entries:
        timestamp = entry.timestamp.strftime('%A %B %d, %Y %I:%M%p')
        clear_screen()
        
        print(timestamp)
        print('=' * len(timestamp))
        print(entry.content)
        print('\n\n' + '=' * len(timestamp))
        print('[n] for next entry, [r] return to main menu, [d] to delete the entry')

        next_action = input('Action: [n]/[r]/[d] ').lower().strip()

        if next_action == 'r':
            break
        elif next_action == 'd':
            delete_entry(entry)

def find_entry():
    '''Find entry from a string'''
    view_entries(input('What are you looking for? '))

def delete_entry(entry):
    '''Delete an entry'''
    if input('Are you sure?? [y][n] ').lower() == 'y':
        entry.delete_instance()
        print('Entry was successfully deleted!')

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')



menu = OrderedDict([
    ('a', add_entry),
    ('v', view_entries),
    ('f', find_entry)
])

# prevents code from being executed when importing a module, put into function or class or iside which if condition
if __name__ == '__main__':
    initialise()
    menu_loop()

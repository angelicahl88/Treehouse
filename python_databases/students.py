from peewee import *

db = SqliteDatabase('students.db')


class Student(Model):
    username = CharField(max_length=255, unique=True)
    points = IntegerField(default=0)

    # sets up various thing about the class in the table (i.e. sort order, index column)
    class Meta:
        database = db


students = [
    {'username': 'angelicaHartLindh',
     'points': 8000},
    {'username': 'owainStratton',
     'points': 40099},
    {'username': 'kennethLove',
     'points': 6700},
    {'username': 'andrewChalkley',
     'points': 2000},
]

def add_students():
    for student in students:
        try:
            Student.create(username=student['username'], points=student['points'])
        except IntegrityError:
            student_record = Student.get(username=student['username'])
            student_record.points = student['points']
            student_record.save()

def top_student():
    student = Student.select().order_by(Student.points.desc()).get() # select gets all of the records, get only returns the first record in the result
    return student

if __name__ == '__main__':
    db.connect()
    db.create_tables([Student], safe=True)
    add_students()
    print('Our top student right now is: {0.username}'.format(top_student()))

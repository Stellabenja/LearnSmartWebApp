from mongoengine import ReferenceField
from werkzeug.security import generate_password_hash, check_password_hash

from backend.database.db import db
from wtforms.fields.html5 import DateField


class User(db.Document):
    username = db.StringField(required=True, max_length=30, unique=True)
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True, min_length=6)

    def hash_password(self):
        self.password = generate_password_hash(self.password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def change_password(self, password):
        print(password)
        self.password = generate_password_hash(password)
        print(self.password)
        return check_password_hash(self.password, password)

    def change_username(self, username):
        print(username)
        self.username = username
        print(self.username)

    def change_email(self, email):
        print(email)
        self.email = email
        print(self.email)

class Userstatus(db.Document):
    relatedTopic = db.StringField(required=True)
    user = ReferenceField(User)
    score = db.IntField(required=True)


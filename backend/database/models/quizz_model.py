from mongoengine import CASCADE

from backend.database.db import db
from backend.database.models.topic_model import Topic



class Quiz(db.Document):
    topic_id = db.StringField(required=True)
    text = db.StringField(required=True)
    status = db.BooleanField(default=True)


class User_quiz(db.Document):
    user_id = db.StringField(required=True, unique=True)
    text = db.StringField(required=True)
    status = db.BooleanField(default=True)
    related_quiz_id = db.StringField(required=True, unique=True)
    related_topic_id = db.StringField(required=True, unique=True)


class Singlechoice(db.Document):
    topic_name = db.StringField(required=True)
    question = db.StringField(required=True)
    assumptions = db.ListField(required=True)
    answer = db.StringField(required=True)

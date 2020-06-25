from backend.database.db import db


class quiz(db.Document):
    topic_id = db.StringField(required=True, unique=True)
    text = db.StringField(required=True)
    status = db.BooleanField(default=True)


class user_quiz(db.Document):
    user_id = db.StringField(required=True, unique=True)
    text = db.StringField(required=True)
    status = db.BooleanField(default=True)
    related_quiz_id = db.StringField(required=True, unique=True)
    related_topic_id = db.StringField(required=True, unique=True)

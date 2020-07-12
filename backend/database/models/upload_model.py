from mongoengine import ReferenceField

from backend.database.db import db

class Upload(db.Document):
    topicname = db.StringField(required=True)
    typeofupload = db.StringField(required=True)
    link = db.StringField(required=True)


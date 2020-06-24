from flask import request
from backend.database.User import User
from flask_restful import Resource


# Endpoint creates a user document with email and password received from the JSON object sent by the user.
class SignupApi(Resource):
    def post(self):
        body = request.get_json()
        user = User(**body)
        user.hash_password()
        user.save()
        id = user.id
        return {'id': str(id)}, 200

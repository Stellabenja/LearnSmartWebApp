
from flask import Response, request
from backend.database.models.user_model import User
from flask_restful import Resource


# This creates an endpoint which accepts GET request.
class UserApi(Resource):
    def post(self):
        body = request.get_json()
        print(body)
        user = User.objects().get(id=body.get('userID'))
        if user is None:
            return {'error': 'Your are not registered yet, please register and try again'}, 401
        userdata = {'username': user.username, 'email': user.email}
        return {'userData': userdata}, 200
#@jwt_required to restrict unauthorised users to enter our app


class ChangeUserDataApi(Resource):
    def post(self):
        body = request.get_json()
        print(body)
        user = User.objects().get(id=body.get('userID'))
        if user is None:
            return {'error': 'Your are not registered yet, please register and try again'}, 401
        user.change_username(body.get('userName'))
        user.change_email(body.get('email'))
        user.save()
        userdata = {'username': user.username, 'email': user.email}
        return {'userData': userdata}, 200
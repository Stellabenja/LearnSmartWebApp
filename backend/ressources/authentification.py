from flask import request

from flask_jwt_extended import create_access_token

from backend.database.models.user_model import User

from flask_restful import Resource
import datetime


# Endpoint creates a user document with email and password received from the JSON object sent by the user.
class SignupApi(Resource):
    def post(self):
        body = request.get_json()
        user = User(**body)
        user.hash_password()
        user.save()
        id = user.id
        return {'id': str(id)}, 200


class LoginApi(Resource):
    def post(self):
        body = request.get_json()
        user = User.objects.get(email=body.get('email'))
        authorized = user.check_password(body.get('password'))
        id = str(user.id)
        if not authorized:
            return {'error': 'Email or password invalid'}, 401
        expires = datetime.timedelta(days=7)
        access_token = create_access_token(identity=str(user.id), expires_delta=expires)
        return {'id': id, 'access_token': access_token}, 200


class ChangePasswordApi(Resource):
    def post(self):
        body = request.get_json()
        print(body)
        user = User.objects().get(id=body.get('userID'))
        if user is None:
            return {'error': 'did not work'}, 401
        passwordIsEqual = user.check_password(body.get('actualPassWord'))
        if not passwordIsEqual:
            return {'error': 'Actual password is wrong'}, 401
        authorized = user.change_password(body.get('newPassword'))
        user.save()
        if not authorized:
            return {'error': 'Password change was not successfull'}, 401
        return {'success': 'Password successfully changed'}, 200

from flask import Response, request
from backend.database.models.user_model import User
from flask_restful import Resource


# This creates an endpoint which accepts GET request.
class UserApi(Resource):
    def post(self):
        body = request.get_json()
        print(body)
        user = User.objects().get(id=body.get('userId'))
        if user is None:
            return {'error': 'did not work'}, 401
        userData = {'username': user.username, 'email': user.email}
        return {'userData': userData}, 200
#@jwt_required to restrict unauthorised users to enter our app

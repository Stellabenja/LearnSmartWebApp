from flask import Response, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from backend.database.models.user_model import User, Score
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


# @jwt_required to restrict unauthorised users to enter our app


class ChangeUserDataApi(Resource):
    @jwt_required
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


class ScoreApi(Resource):
    @jwt_required
    def post(self):
        current_user = get_jwt_identity()
        body = request.get_json()
        new_score = {"related_topic": body['relatedtopic'],
                     "user": current_user,
                     "score": body['score']
                     }
        user_score = Score(**new_score).save()
        return {'id': user_score.to_json()}, 200

    @jwt_required
    def get(self):
        visited_topic = Score.objects(user=get_jwt_identity()).distinct("related_topic")
        print(visited_topic)
        return Response({"topics":visited_topic}, status=200)

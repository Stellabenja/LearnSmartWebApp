
from flask import Response, request
from flask_jwt_extended import jwt_required

from backend.database.models.topic_model import Topic
from flask_restful import Resource


# This creates an endpoint which accepts GET request.
class TopicsApi(Resource):
    @jwt_required
    def get(self):
        topics = Topic.objects().to_json()
        return Response(topics, mimetype="application/json", status=200)

    # @jwt_required to restrict unauthorised users to enter our app
    @jwt_required
    def post(self):
        body = request.get_json()
        topic = Topic(**body).save()
        id = topic.id
        return {'id': str(id)}, 200

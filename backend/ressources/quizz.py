from flask import Response, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from backend.database.models.quizz_model import Quiz, Singlechoice
from flask_restful import Resource

from backend.database.models.user_model import Score


class QuizApi(Resource):
    @jwt_required
    def post(self):
        body = request.get_json()
        quiz = Quiz(**body).save()
        id = quiz.id
        return {'id': str(id)}, 200

    @jwt_required
    def get(self):
        quizes = Quiz.objects().to_json()
        return Response(quizes, mimetype="application/json", status=200)


class QuizByTopicApi(Resource):
    @jwt_required
    def get(self, topic_name):
        sortedquizes = Quiz.objects(topic_id=topic_name).to_json()
        return Response(sortedquizes, mimetype="application/json", status=200)


class SinglechoiceApi(Resource):
    def post(self):
        body = request.get_json()
        single_choice = Singlechoice(**body).save()
        id = single_choice.id
        return {'id': str(id)}, 200

    @jwt_required
    def get(self, topic_name):
        sortedquestions = Singlechoice.objects(topic_name=topic_name).to_json()
        return Response(sortedquestions, mimetype="application/json", status=200)





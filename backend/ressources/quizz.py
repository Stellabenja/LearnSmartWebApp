from flask import Response, request
from backend.database.models.quizz_model import Quiz
from flask_restful import Resource


class QuizApi(Resource):
    def post(self):
        body = request.get_json()
        quiz = Quiz(**body).save()
        id = quiz.id
        return {'id': str(id)}, 200

    def get(self):
        quizes = Quiz.objects().to_json()
        return Response(quizes, mimetype="application/json", status=200)


class QuizByTopicApi(Resource):
    def get(self, topic_name):
        sortedquizes = Quiz.objects(topic_id=topic_name).to_json()
        return Response(sortedquizes, mimetype="application/json", status=200)

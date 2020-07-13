from flask_jwt_extended import jwt_required

from flask import Response, request
from backend.database.models.upload_model import Upload
from flask_restful import Resource


class UploadApi(Resource):
    @jwt_required
    def post(self):
        body = request.get_json()
        upload = Upload(**body)
        print(body)
        upload.save()
        uploaded = upload.link
        topic = upload.topicname
        typeofupload = upload.typeofupload
        print('hello', str(typeofupload), str(uploaded), str(topic))
        return {'uploaded': str(uploaded), 'topic': topic, 'type': typeofupload}, 200


class ShowUploads(Resource):
    @jwt_required
    def post(self):
        body = request.get_json()
        print('heloo', body)
        uploads = Upload.objects(topicname=body.get('topicname')).to_json()
        print(uploads)
        return Response(uploads, mimetype="application/json", status=200)

import os
os.environ['ENV_FILE_LOCATION'] = './.env'
from flask_bcrypt import Bcrypt
from flask import Flask, Response, request
from flask_restful import Api
from backend.database.db import initialize_db
from backend.ressources.routes import initialize_routes
from flask_jwt_extended import JWTManager
app = Flask(__name__)
app.config.from_envvar('ENV_FILE_LOCATION')
api = Api(app)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/quizz-db'
}

initialize_db(app)
# Let's call this function witch initializes the routes
initialize_routes(api)

app.run()

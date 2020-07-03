import os

os.environ['ENV_FILE_LOCATION'] = './.env'
from flask_bcrypt import Bcrypt
from flask import Flask, Response, request
from flask_restful import Api
from backend.database.db import initialize_db
from backend.ressources.routes import initialize_routes
from flask_jwt_extended import JWTManager
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config.from_envvar('ENV_FILE_LOCATION')
app.config['JWT_BLACKLIST_ENABLED'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']
api = Api(app)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/quizz-db'
}
blacklist = set()
initialize_db(app)
# Let's call this function witch initializes the routes
initialize_routes(api)


@jwt.token_in_blacklist_loader
def check_if_token_in_blacklist(decrypted_token):
    jti = decrypted_token['jti']
    return jti in blacklist


app.run()

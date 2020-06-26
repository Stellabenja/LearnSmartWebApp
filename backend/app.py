from flask_bcrypt import Bcrypt
from flask import Flask, Response, request
from flask_restful import Api
from LearnSmart.backend.database.db import initialize_db
from LearnSmart.backend.ressources.routes import initialize_routes

app = Flask(__name__)
api = Api(app)
bcrypt = Bcrypt(app)
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/quizz-db'
}

initialize_db(app)
# Let's call this function witch initializes the routes
initialize_routes(api)

app.run()

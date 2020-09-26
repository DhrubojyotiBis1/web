from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from advolet_app.constants import General

app = Flask(__name__)

app.config.from_pyfile(General.CONFIG_FILE)
db = SQLAlchemy(app)

#DO NOT CHANGE THIS
from advolet_app import route
from advolet_app import db
from advolet_app.model_operation import Operations


class User(db.Model, Operations):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(10), nullable=False)
    phone_number = db.Column(db.String(13), nullable=True)
    account_type = db.Column(db.Integer, nullable=False)
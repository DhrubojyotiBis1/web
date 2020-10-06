import bcrypt
from flask_jwt import JWT, jwt_required, current_identity
from flask import request

from . import  app
from .models import User
from .constants import Route, Response_code, Request, General
from .security import authenticate, identity

jwt = JWT(app, authenticate, identity)

@app.route(Route.SIGNUP, methods=['POST'])
def signup():
    json = request.get_json()
    if json:
        name = json.get(Request.NAME)
        email = json.get(Request.EMAIL)
        password = json.get(Request.PASSWORD)
        phone_number = json.get(Request.PHONE_NUMBER)
        account_type = json.get(Request.ACCOUNT_TYPE)
        if name and email and password and account_type != None:
            hashed_passowrd = bcrypt.hashpw(password.encode(General.HASH_TYPE), bcrypt.gensalt())
            user = User(name = name, email=email, password=hashed_passowrd, phone_number=phone_number, account_type = account_type)
            inserted = user.insert()
            if inserted:
                #FIX REQUIRED
                #login using login API and return toten (BETTER ARCHITECTURE REQUIRED)
                return {'access_token': 'some_token'}, Response_code.OK
            return {'reason': 'Account already exist'}, Response_code.ALREDY_EXIST
        return {'reason': f'{Request.NAME} or {Request.EMAIL} or {Request.PASSWORD} or {Request.ACCOUNT_TYPE} not found'}, Response_code.BAD_REQUEST
    return {'reason': 'Required JSON not found'}, Response_code.BAD_REQUEST
class General():
    CONFIG_FILE = 'config.cfg'
    HASH_TYPE = 'utf-8'


class Route():
    BASE = '/api'

    SIGNUP = BASE + '/signup'


class Response_code():
    NOT_FOUND = 404
    BAD_REQUEST = 400
    OK = 200
    ALREDY_EXIST = 409

class Request():
    NAME = 'name'
    PASSWORD = 'pass'
    EMAIL = 'email'
    PHONE_NUMBER = 'phone' 
    ACCOUNT_TYPE = 'type'

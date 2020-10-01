# Backend
It is the backend application for the Advolet's web application.

# How to run
- Install [python3](https://www.python.org/downloads/)
- Install [pip](https://pip.pypa.io/en/stable/installing/)
- Move to the `web` directory created after cloning
- Run `pip install -r src/backend/requirements.txt`
- Run `python3 src/backend/src/run.py`
- Use curl, Postman, etc to test the APIs

# How to run test
- Run `python -m pytest` to run each and very test
- Run `pytest test_file_name.py` to run specific module
- You can also use ` pytest test_directory/` to run tests in a directory
Please see [pytest doc](https://docs.pytest.org/en/stable/usage.html) for more info
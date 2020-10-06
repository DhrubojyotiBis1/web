from  advolet_app import app, db
from advolet_app.models import User

if __name__ == "__main__":
    #development
    db.create_all()

    #Production
    app.run()
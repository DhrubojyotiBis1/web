from advolet_app import db

class Operations():
    def insert(self):
        db.session.add(self)
        return self.COMMIT()
    
    def update(self):
        return self.insert()
    
    def delete(self):
        db.session.delete(self)
        return self.COMMIT()

    #Dont use this fuction outside this class
    def COMMIT(self):
        #FIX try expect block
        try:
            db.session.commit()
            return True
        except:
            return False
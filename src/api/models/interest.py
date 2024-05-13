from . import db

#-----------------------------------Notas: Antes de popular base de datos, incluso test,---------------------------------------------
#----------------------------------------  asegurar de no modifcar models               ---------------------------------------------
#------------------------------------------------------------------------------------------------------------------------------------

class Interest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    tag_name = db.Column(db.Integer, nullable=False)
    

    def __repr__(self):
        return '<Interest %r>' % self.id

    def serialize(self): 
        return {
            "id": self.id,
            "user_id": self.user_id,
            "tag_name": self.tag_name
        }

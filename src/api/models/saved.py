from . import db

#-----------------------------------Notas: Antes de popular base de datos, incluso test,---------------------------------------------
#----------------------------------------  asegurar de no modifcar models               ---------------------------------------------
#------------------------------------------------------------------------------------------------------------------------------------

class Saved(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    deal_id = db.Column(db.Integer, db.ForeignKey("deal.id"), nullable=False)
    

    def __repr__(self):
        return '<Saved %r>' % self.id

    def serialize(self): 
        return {
            "id": self.id,
            "user_id": self.user_id,
            "deal_id": self.deal_id
        }

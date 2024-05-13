from . import db

#-----------------------------------Notas: Antes de popular base de datos, incluso test,---------------------------------------------
#----------------------------------------  asegurar de no modifcar models               ---------------------------------------------
#------------------------------------------------------------------------------------------------------------------------------------

class User(db.Model): #(todo)
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    image_url = db.Column(db.String)
    username = db.Column(db.String(30), nullable=False)
    steam_username = db.Column(db.String(40))
    twitch_username = db.Column(db.String(40))
    interest = db.relationship('Interest', backref='user', lazy=True) 
    saved = db.relationship('Saved', backref='user', lazy=True)
    posts = db.relationship('Deal', backref='user', lazy=True)
    # alerts = db.relationship('Alerts', backref='user', lazy=True)
    newsletter = db.Column(db.Boolean())
     

    def __repr__(self):
        return '<User %r>' % self.id
    

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "image_url": self.image_url,
            "username": self.username,
            "steam_username": self.steam_username,
            "twitch_username": self.twitch_username,
            "interests": [interest.serialize() for interest in self.interest],
            "saved" : [saved.serialize() for saved in self.saved],
            "posts": [posts.serialize() for posts in self.saved],
            #"alerts": [alerts.serialize() for alerts in self.saved],
            "newsletter": self.newsletter,
    
        }
    
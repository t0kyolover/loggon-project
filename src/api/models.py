from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

#--------------------------------------------------------User------------------------------------------------------------------------ 
#-----------------------------------Notas: Antes de popular base de datos, incluso test,---------------------------------------------
#----------------------------------------  asegurar de no modifcar models               ---------------------------------------------
#----------------------------------------  Katia tenemos que hablar de un error               ---------------------------------------

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    image_url = db.Column(db.String)
    username = db.Column(db.String(30), nullable=False)
    steam_username = db.Column(db.String(40))
    twitch_username = db.Column(db.String(40))
    interests = db.relationship('Interest', backref='user', lazy=True)
    saved = db.relationship('Saved', backref='user', lazy=True)
    posts = db.Column(db.String) #hablar con katia
    alerts = db.Column(db.String)
    newsletter = db.Column(db.Boolean())
    

    def __repr__(self):
        return '<User %r>' % self.id
    

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "image": self.image,
            "steam_profile": self.steam_profile,
            "twitch_profile": self.twitch_profile,
            "interests": [interest.serialize() for interest in self.interest],
            "saved" : [saved.serialize() for saved in self.saved],
            "posts": self.posts,
            "newsletter": self.newsletter,
    
        }
    
#--------------------------------------------------Deal--------------------------------------------------------------
    
class Deal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    game_title = db.Column(db.String(200), nullable=False)
    platform = db.Column(db.Enum('PC', 'Xbox', 'PS5', 'Nintendo', name='Platform_options'), nullable=False)
    date_of_creation = db.Column(db.DateTime, nullable=False)
    expiration_date = db.Column(db.DateTime)
    original_price = db.Column(db.Float, nullable=False)
    offer_price = db.Column(db.Float, nullable=False)
    format = db.Column(db.Enum('Digital', 'CD', name='Format_options'), nullable=False)
    item_type = db.Column(db.Enum('opcion1','opcion2','opcion3','opcion4','opcion5', name='Type_options'), nullable=False)
    promo_code = db.Column(db.String(250))
    scheduled = db.Column(db.Boolean())
    scheduled_date = db.Column(db.DateTime)
    scheduled_time = db.Column(db.DateTime)
    offer_link = db.Column(db.String(200), unique=True, nullable=False)
    image_url = db.Column(db.String(200))
    rating = db.Column(db.String(5))
    
    
    

    def __repr__(self):
        return f'<Deal {Deal.user_id}>'
    

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "game_title": self.game_title,
            "platform": self.platform,
            "date_of_creation": self.date_of_creation,
            "end_date": self.end_date,
            "original_price": self.original_price,
            "format": self.format,
            "item_type": self.item_type,
            "promo_code": self.promo_code,
            "scheduled": self.scheduled,
            "url": self.url,
            "img_url": self.img_url,
    
        }
    
#------------------------------------------------------Interest----------------------------------------------------------------------
    
class Interest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    tag_id = db.Column(db.Integer, nullable=False)
    

    def __repr__(self):
        return '<Interest %r>' % self.id

    def serialize(self): 
        return {
            "id": self.id,
            "user_id": self.user_id,
            "tag_id": self.tag_id
            
            
           
        }
    
#---------------------------------------------------------Save------------------------------------------------------------------------

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
    
#---------------------------------------------------------Vote-------------------------------------------------------------------------
    
class Vote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    deal_id = db.Column(db.Integer,db.ForeignKey("deal.id"), nullable=False)
    upvote = db.Column(db.Boolean(), nullable=False)
    

    def __repr__(self):
        return '<Vote %r>' % self.id

    def serialize(self): 
        return {
            "id": self.id,
            "user_id": self.user_id,
            "deal_id": self.deal_id,
            "upvote": self.upvote
            
            
           
        }
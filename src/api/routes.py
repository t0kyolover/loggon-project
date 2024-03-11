"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, session
from api.models import db, User, Deal, Saved, Interest, Vote
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



#---------------------------------------------------------Signup-------------------------------------------------------------

@api.route("/signup", methods=["POST"])

def signup():

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)

# Consulta la base de datos por el nombre de usuario y la contraseña

    user = User.query.filter_by(email=email).first()

    if user is not None:

        

        return jsonify({"msg": "User already exists"}), 400

    new_user = User(email=email, password=password, username=username)
    db.session.add(new_user)
    db.session.commit()


    return jsonify({ "message": "success" }), 200

#----------------------------------------------------------Google----------------------------------------------------------------------------

('''
from flask import request, jsonify, url_for, Blueprint, session, redirect
from api.models import db, User
from api.utils import APIException
from flask_cors import CORS
from flask_oauthlib.client import OAuth

# Asegúrate de tener tu instancia de Blueprint configurada
api = Blueprint('api', __name__)

# Configura la instancia de OAuth
oauth = OAuth()

# Configura el proveedor de autenticación de Google
google = oauth.remote_app(
    'google',
    consumer_key='your_google_client_id',
    consumer_secret='your_google_client_secret',
    request_token_params={
        'scope': 'email',
    },
    base_url='https://www.googleapis.com/plus/v1/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
)

@api.route('/')
def index():
    return 'Welcome to the Flask App!'

@api.route('/login')
def login():
    return google.authorize(callback=url_for('api.authorized', _external=True))

@api.route('/logout')
def logout():
    session.pop('google_token', None)
    return redirect(url_for('api.index'))

@api.route('/login/google/authorized')
def authorized():
    response = google.authorized_response()
    if response is None or response.get('access_token') is None:
        return 'Access denied: reason={} error={}'.format(
            request.args['error_reason'],
            request.args['error_description']
        )

    session['google_token'] = (response['access_token'], '')
    user_info = google.get('people/me')

    # Verificar si el usuario ya existe en la base de datos
    user = User.query.filter_by(email=user_info.data['emails'][0]['value']).first()

    if not user:
        # Si no existe, crear un nuevo usuario
        user = User(email=user_info.data['emails'][0]['value'])
        db.session.add(user)
        db.session.commit()

    # Puedes iniciar sesión al usuario aquí si lo deseas

    return 'Logged in as: ' + user.email

@google.tokengetter
def get_google_oauth_token():
    return session.get('google_token')
    ''')

#---------------------------------------------------------------------------------------------------------------------------------------------------

('''


vote

guardar post

recuperar contrasena


''')
#---------------------------------------------------------------Login---------------------------------------------------------------------------------

@api.route("/login", methods=["POST"])

def Login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)

# Consulta la base de datos por el nombre de usuario y la contraseña

    user = User.query.filter_by(email=email, password=password, username=username).first()

    if user is None:
        return jsonify({"msg": "Bad email or password"}), 401

    # Crea un nuevo token con el id de usuario dentro

    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token })

#---------------------------------------------------------------Modificar usuario-------------------------------------------------------------------

@api.route('/user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        # Obtener el usuario existente por su ID
        user = User.query.get(user_id)

        if not user:
            return jsonify({"error": "User not found"}), 404

        
        data = request.get_json()

        # Modificar solo los campos que necesitemos actualizar
        user.email = data.get('email', user.email)
        user.password = data.get('password', user.password)
        user.username = data.get('username', user.username)
        # Actualiza otros campos según sea necesario

        # Guardar los cambios en la base de datos
        db.session.commit()

        return jsonify({"message": "User updated successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

#---------------------------------------------------------------Ver un usuario(probarlo)-------------------------------------------------------------------

@api.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        # Obtener el usuario por su ID
        user = User.query.get(user_id)

        if not user:
            return jsonify({"error": "User not found"}), 404

        # Serializar los datos del usuario para la respuesta
        user_data = {
            "id": user.id,
            "email": user.email,
            "username": user.username,
           
        }

        return jsonify(user_data), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


#---------------------------------------------------------------Create Post-------------------------------------------------------------------------


@api.route('/deal', methods=['POST'])

def create_deal():
    try:
        
        data = request.get_json()

        # Crear una nueva instancia de Deal
        new_deal = Deal(
            user_id=data['user_id'],
            game_title=data['game_title'],
            platform=data['platform'],
            date_of_creation=data['date_of_creation'],
            expiration_date=data['expiration_date'],
            original_price=data['original_price'],
            offer_price=data['offer_price'],
            format=data['format'],
            item_type=data['item_type'],
            promo_code=data['promo_code'],
            scheduled=data['scheduled'],
            scheduled_date=data['scheduled_date'],
            scheduled_time=data['scheduled_time'],
            offer_link=data['offer_link'],
            image_url=data['image_url'],
            rating=data['rating']
        )

        # Agregar la instancia a la base de datos
        db.session.add(new_deal)
        db.session.commit()

        return jsonify({"message": "Deal created successfully"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
#---------------------------------------------------------------Modificar Post-------------------------------------------------------------------------
    
@api.route('/deal/<int:deal_id>', methods=['PUT'])
def update_deal(deal_id):
    try:
        # Obtener el post existente por su ID
        deal = Deal.query.get(deal_id)

        if not deal:
            return jsonify({"error": "Deal not found"}), 404

        
        data = request.get_json()

        # Modificar solo los campos que necesitemos actualizar
        deal.promo_code = data.get('promo_code', deal.promo_code)
        deal.image_url = data.get('image_url', deal.image_url)
        deal.expiration_date = data.get('expiration_date', deal.expiration_date)
        deal.offer_price = data.get('offer_price', deal.offer_price)
        deal.scheduled_date = data.get('scheduled_date', deal.scheduled_date)
        #  Actualiza otros campos según sea necesario

        # Guardar los cambios en la base de datos
        db.session.commit()

        return jsonify({"message": "Deal updated successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
#---------------------------------------------------------------------Eliminar un Deal-----------------------------------------------------------------

@api.route('/deal/<int:deal_id>', methods=['DELETE'])
def delete_deal(deal_id):
    try:
        # Obtener el post existente por su ID
        deal = Deal.query.get(deal_id)

        if not deal:
            return jsonify({"error": "Deal not found"}), 404

        # Eliminar el post de la base de datos
        db.session.delete(deal)
        db.session.commit()

        return jsonify({"message": "Deal deleted successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    
#---------------------------------------------------------------------Ver un Deal(probarlo)-----------------------------------------------------------------
    
@api.route('/deal/<int:deal_id>', methods=['GET'])
def get_deal(deal_id):
    try:
        # Obtener el deal por su ID
        deal = Deal.query.get(deal_id)

        if not deal:
            return jsonify({"error": "Deal not found"}), 404

        # Serializar los datos del deal para la respuesta
        deal_data = {
            "id": deal.id,
            "user_id": deal.user_id,
            "game_title": deal.game_title,
            "platform": deal.platform,
            "date_of_creation": deal.date_of_creation,
            "expiration_date": deal.expiration_date,
            "original_price": deal.original_price,
            "offer_price": deal.offer_price,
            "format": deal.format,
            "item_type": deal.item_type,
            "promo_code": deal.promo_code,
            "scheduled": deal.scheduled,
            "scheduled_date": deal.scheduled_date,
            "scheduled_time": deal.scheduled_time,
            "offer_link": deal.offer_link,
            "image_url": deal.image_url,
            "rating": deal.rating
            # Modificar a gusto lo que se pueda ver
        }

        return jsonify(deal_data), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
#--------------------------------------------------------------Ver todos los Deals(probarlo)-----------------------------------------------------------
    

@api.route('/deals', methods=['GET'])
def get_all_deals():
    try:
        # Obtener todos los deals de la base de datos
        deals = Deal.query.all()

        # Serializar los datos de los deals para la respuesta
        deals_data = [
            {
                "id": deal.id,
                "user_id": deal.user_id,
                "game_title": deal.game_title,
                "platform": deal.platform,
                "date_of_creation": deal.date_of_creation,
                "expiration_date": deal.expiration_date,
                "original_price": deal.original_price,
                "offer_price": deal.offer_price,
                "format": deal.format,
                "item_type": deal.item_type,
                "promo_code": deal.promo_code,
                "scheduled": deal.scheduled,
                "scheduled_date": deal.scheduled_date,
                "scheduled_time": deal.scheduled_time,
                "offer_link": deal.offer_link,
                "image_url": deal.image_url,
                "rating": deal.rating
                # modificar a gusto
            }
            for deal in deals
        ]

        return jsonify(deals_data), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

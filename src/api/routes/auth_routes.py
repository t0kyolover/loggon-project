"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import request, jsonify, url_for, session
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_oauthlib.client import OAuth
from werkzeug.security import generate_password_hash
from ..models import db, User

from . import api

#---------------------------------------------------------Signup-------------------------------------------------------------

@api.route("/signup", methods=["POST"])
def signup():
    # Get the request data
    data = request.get_json()
    if not data:
        return jsonify({"msg": "Bad Request"}), 400

    # Validate the data
    email = data.get("email")
    password = data.get("password")
    username = data.get("username")
    if not email or not password or not username:
        return jsonify({"msg": "Missing required fields"}), 400

    # Check if the user already exists
    user = User.query.filter_by(email=email).first()
    if user is not None:
        return jsonify({"msg": "User already exists"}), 400

    # Hash the password and create the new user
    new_user = User(email=email, password=password, username=username)
    
    db.session.add(new_user)
    db.session.commit()
  

    return jsonify({ "message": "success" }), 200

#----------------------------------------------------------Login Google-------------------------------------------------------------------------


# Configura la instancia de OAuth
oauth = OAuth()

# Configura el proveedor de autenticación de Google
google = oauth.remote_app(
    'google',
    consumer_key='141396503593-5ucoa6ughl6iobs8tmks7rjmvp27die2.apps.googleusercontent.com',
    consumer_secret='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',
    request_token_params={
        'scope': 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    },
    base_url='https://www.googleapis.com/plus/v1/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
)

# cuando pasemos a render comentar linea 82 y descomentar linea 81
@api.route('/google_login')
def google_login():
    print(url_for('api.authorized', _external=True))
    # return google.authorize(callback=url_for('api.authorized', _external=True))
    return google.authorize(callback="https://curly-palm-tree-5gqrjj97pq4rc7gg7-3001.app.github.dev/api/google_login/google/authorized")

@api.route('/google_login/google/authorized')
def authorized():
    response = google.authorized_response()
    
    
    if response is None or response.get('access_token') is None:
        return jsonify({"msg": "Google login Failed"}), 401

    session['google_token'] = (response['access_token'], '')
    user_info = google.get('https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses')
    

    # Verificar si el usuario ya existe en la base de datos
    user = User.query.filter_by(email=user_info.data['emailAddresses'][0]['value']).first()

    if not user:
        # Si no existe, crear un nuevo usuario
        user = User(email=user_info.data['emailAddresses'][0]['value'], username=user_info.data['names'][0]['displayName'], password=user_info.data['resourceName'])
        db.session.add(user)
        db.session.commit()

    # Puedes iniciar sesión al usuario aquí si lo deseas

    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token })

@google.tokengetter
def get_google_oauth_token():
    return session.get('google_token')


#-------------------------------------------------Login Steam (Esperando por autorizacion de steam)----------------------------------------------------------------------

('''
steam = oauth.remote_app(
    'steam',
    consumer_key='DC6C64C101D47449665EB173CF4E9A62',
    consumer_secret='https://steamcommunity.com/oauth/login?response_type=token&client_id=&state=lo_que_quieras',
    base_url='https://api.steampowered.com',
    request_token_params=None,
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://steamcommunity.com/openid/login',
    authorize_url='https://steamcommunity.com/openid/login',
)

@api.route('/login_steam/steam')
def login_steam():
    return steam.authorize(callback=url_for('api.authorized_steam', _external=True))

@api.route('/login_steam/steam/authorized')
def authorized_steam():
    response = steam.authorized_response()
    if response is None or 'openid.claimed_id' not in response:
        return 'Access denied: Unable to authorize via Steam.'

    steam_id = response['openid.claimed_id'].split('/')[-1]
    # Aquí puedes usar el steam_id para identificar y manejar al usuario en tu aplicación
    print(steam_id)
     # Verificar si el usuario ya existe en la base de datos
    user = User.query.filter_by(steam_id=steam_id).first()

    if not user:
        # Si no existe, crear un nuevo usuario
        user = User(steam_id=steam_id)
        db.session.add(user)
        db.session.commit()

    return 'Logged in via Steam with SteamID: ' + steam_id

@steam.tokengetter
def get_steam_oauth_token():
    return session.get('steam_token')
    ''')


#---------------------------------------------------------------------------------------------------------------------------------------------------

('''


Que nos Falta? dinero JAJAJAJ



''')
#---------------------------------------------------------------Login---------------------------------------------------------------------------------

@api.route("/login", methods=["POST"])

def Login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)


# Consulta la base de datos por el nombre de usuario y la contraseña

    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
        return jsonify({"msg": "User doesn't exist"}), 401
      

    # Crea un nuevo token con el id de usuario dentro

    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token })

#----ADDED THIS-------------------------------------------------------Verify Identity---------------------------------------------------------------------------------

@api.route('/verify_identity', methods=['GET'])
@jwt_required()
def verify():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id=current_user_id).first()
    print(current_user_id)
    print(user)

    if user is not None:
        return jsonify({ "user": user.serialize() }), 200
    
    return jsonify({ "error": "Este usuario no existe" }), 401

   
#---------------------------------------------------------Recuperar Contraseña(chequear)-----------------------------------------------------
    
('''@api.route('/reset-password', methods=['POST'])
@jwt_required()
def reset_password_request():
    id = get_jwt_identity()
    try:
        # Obtener el correo electrónico del cuerpo de la solicitud
        data = request.get_json()
        email = data.get('email')

        # Verificar si el correo electrónico está asociado a un usuario
        user = User.query.filter_by(email=email).first()

        if not user:
            return jsonify({"error": "User not found"}), 404

        # Generar un token de restablecimiento de contraseña y enviar un correo electrónico al usuario
        send_password_reset_email(user)

        return jsonify({"message": "Password reset email sent successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    ''')

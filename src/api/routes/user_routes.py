"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import request, jsonify, session
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..models import db, User

from . import api

#---------------------------------------------------------------Modificar usuario-------------------------------------------------------------------

@api.route('/user/<int:user_id>', methods=['PUT'])
@jwt_required()
def update_user(user_id):
    id = get_jwt_identity()
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

#---------------------------------------------------------------Ver usuarios-------------------------------------------------------------------
    
@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    user_list = [{'id': user.id, 'email': user.email, 'steam_username': user.steam_username} for user in users]
    return jsonify(user_list)


#---------------------------------------------------------------Ver un usuario-------------------------------------------------------------------

@api.route('/user/<int:user_id>', methods=['GET'])
@jwt_required()
def get_user(user_id):
    id = get_jwt_identity()
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
            "steam_username": user.steam_username,
            "twitch_username": user.twitch_username,
            "image_url": user.image_url
           
        }

        return jsonify(user_data), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500



"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import request, jsonify
from ..models import db, Deal

from flask_jwt_extended import jwt_required, get_jwt_identity


from . import api


#---------------------------------------------------------------Create Post-------------------------------------------------------------------------


@api.route('/deal', methods=['POST'])
@jwt_required()
def create_deal():
    id = get_jwt_identity()
    try:
        
        data = request.get_json()

        # Crear una nueva instancia de Deal
        print(data)
        new_deal = Deal(
            user_id=id,
            game_title=data['game_title'],
            platform=data['platform'],
            expiration_date=data['expiration_date'],
            original_price=data['original_price'],
            offer_price=data['offer_price'],
            format=data['format'],
            item_type=data['type'],
            promo_code=data['promo_code'],
            scheduled=data['scheduled'],
            scheduled_date=data['scheduled_date'],
            scheduled_time=data['scheduled_time'],
            offer_link=data['offer_link'],
            image_url=data['image_url'],
            rating=data['rating'],
            game_tags=data['game_tags']
        )

        # Agregar la instancia a la base de datos
        db.session.add(new_deal)
        db.session.commit()

        return jsonify({"message": "Deal created successfully"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
#---------------------------------------------------------------Modificar Post-------------------------------------------------------------------------
    
@api.route('/deal/<int:deal_id>', methods=['PUT'])
@jwt_required()
def update_deal(deal_id):
    id = get_jwt_identity()
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
@jwt_required()
def delete_deal(deal_id):
    id = get_jwt_identity()
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
    
    
#---------------------------------------------------------------------Ver un Deal-----------------------------------------------------------------------
    
@api.route('/deal/<int:deal_id>', methods=['GET'])
@jwt_required()
def get_deal(deal_id):
    id = get_jwt_identity()
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
    
#--------------------------------------------------------------Ver todos los Deals------------------------------------------------------------------
    

@api.route('/deals', methods=['GET'])
@jwt_required()
def get_all_deals():
    id = get_jwt_identity()
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
    
#-------------------------------------------------------- Rating (chequear)--------------------------------------------------------------------
    
@api.route('/deal/up_rating/<int:item_id>', methods=['PATCH'])
@jwt_required()
def like_item(item_id):
    id = get_jwt_identity()
    try:
        # Obtener el elemento por su ID
        item = Deal.query.get(item_id)

        if not item:
            return jsonify({"error": "Item not found"}), 404

        # Incrementar el contador de likes
        item.rating += 10
        db.session.commit()

        return jsonify({"message": "Item liked successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@api.route('/deal/down_rating/<int:item_id>', methods=['PATCH'])
@jwt_required()
def dislike_item(item_id):
    id = get_jwt_identity()
    try:
        # Obtener el elemento por su ID
        item = Deal.query.get(item_id)

        if not item:
            return jsonify({"error": "Item not found"}), 404

        # Incrementar el contador de likes
        item.rating -= 10
        db.session.commit()

        return jsonify({"message": "Item liked successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


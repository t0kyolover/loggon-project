from flask import Blueprint
from flask_cors import CORS

api = Blueprint('api', __name__)

CORS(api)

from . import auth_routes, deal_routes, user_routes
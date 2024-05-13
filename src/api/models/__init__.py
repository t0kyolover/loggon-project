from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .user import User
from .deal import Deal
from .interest import Interest
from .saved import Saved
from .vote import Vote


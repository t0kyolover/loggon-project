"""empty message

Revision ID: fac604b51fde
Revises: f3f2122e3d4a
Create Date: 2024-03-10 23:12:12.952056

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'fac604b51fde'
down_revision = 'f3f2122e3d4a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('deal', schema=None) as batch_op:
        batch_op.add_column(sa.Column('expiration_date', sa.DateTime(), nullable=True))
        batch_op.add_column(sa.Column('scheduled_date', sa.DateTime(), nullable=True))
        batch_op.add_column(sa.Column('scheduled_time', sa.DateTime(), nullable=True))
        batch_op.add_column(sa.Column('offer_link', sa.String(length=200), nullable=False))
        batch_op.add_column(sa.Column('image_url', sa.String(length=200), nullable=True))
        batch_op.add_column(sa.Column('rating', sa.String(length=5), nullable=True))
        batch_op.drop_constraint('deal_url_key', type_='unique')
        batch_op.create_unique_constraint(None, ['offer_link'])
        batch_op.drop_column('url')
        batch_op.drop_column('end_date')
        batch_op.drop_column('img_url')

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image_url', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('steam_username', sa.String(length=40), nullable=True))
        batch_op.add_column(sa.Column('twitch_username', sa.String(length=40), nullable=True))
        batch_op.add_column(sa.Column('alerts', sa.String(), nullable=True))
        batch_op.drop_column('image')
        batch_op.drop_column('twitch_profile')
        batch_op.drop_column('steam_profile')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('steam_profile', sa.VARCHAR(length=40), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('twitch_profile', sa.VARCHAR(length=40), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('image', sa.VARCHAR(), autoincrement=False, nullable=True))
        batch_op.drop_column('alerts')
        batch_op.drop_column('twitch_username')
        batch_op.drop_column('steam_username')
        batch_op.drop_column('image_url')

    with op.batch_alter_table('deal', schema=None) as batch_op:
        batch_op.add_column(sa.Column('img_url', sa.VARCHAR(length=200), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('end_date', postgresql.TIMESTAMP(), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('url', sa.VARCHAR(length=200), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='unique')
        batch_op.create_unique_constraint('deal_url_key', ['url'])
        batch_op.drop_column('rating')
        batch_op.drop_column('image_url')
        batch_op.drop_column('offer_link')
        batch_op.drop_column('scheduled_time')
        batch_op.drop_column('scheduled_date')
        batch_op.drop_column('expiration_date')

    # ### end Alembic commands ###

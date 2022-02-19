from sqlalchemy import *


class User():
    email = Column(String)
    first_name = Column(String)
    last_name = Column(String)
    password = Column(String)

    def verify_password(self, password):
        return None

    def save(self, *args, **kwargs):
        return None

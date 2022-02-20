from app.db.session import SessionLocal
from fastapi.security import OAuth2PasswordBearer

reusable_oauth2 = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/access-token")


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

import os
import secrets

from pydantic import BaseSettings


class Config(BaseSettings):
    ENV: str = "development"
    APP_HOST: str = "0.0.0.0"
    APP_PORT: int = 9000
    DATABSE_URL: str = ""
    CORS_ALLOW_ORIGINS = "http://localhost:3000"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 5000
    SECRET_KEY: str = secrets.token_urlsafe(32)
    SQLALCHEMY_DATABASE_URI: str = "postgresql://postgres:password@db/stormhack"


class DevelopmentConfig(Config):
    DATABSE_URL: str = ""
    # DATABASE_URL: str = f"postgresql://{POSTGRES_USER}:{POSTGRES_PW}@{POSTGRES_HOST}/{POSTGRES_DB}"


class ProductionConfig(Config):
    DATABASE_URL: str = ""


def get_config():
    env = os.getenv("ENV", "development")
    config_type = {
        "development": DevelopmentConfig(),
        "production": ProductionConfig(),
    }

    return config_type[env]


config: Config = get_config()

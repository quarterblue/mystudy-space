import os

from pydantic import BaseSettings


class Config(BaseSettings):
    ENV: str = "development"
    APP_HOST: str = "0.0.0.0"
    APP_PORT: int = 9000
    POSTGRES_USER: str = ""
    POSTGRES_PW: str = ""
    POSTGRES_HOST = ""
    POSTGRES_DB = ""
    DATABSE_URL: str = ""
    # DATABASE_URL: str = f"postgresql://{POSTGRES_USER}:{POSTGRES_PW}@{POSTGRES_HOST}/{POSTGRES_DB}"


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

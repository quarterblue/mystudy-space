import os

from pydantic import BaseSettings


class Config(BaseSettings):
    ENV: str = "development"
    APP_HOST: str = "127.0.0.1"
    APP_PORT: int = 9000
    DB_URL: str = ""


class DevelopmentConfig(Config):
    DB_URL: str = ""


class ProductionConfig(Config):
    DB_URL: str = ""


def get_config():
    os.getenv("ENV", "development")
    config_type = {
        "development": DevelopmentConfig(),
        "production": ProductionConfig(),
    }

    return config_type[env]


config: Config = get_config()

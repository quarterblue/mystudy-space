import os

from pydantic import BaseSettings


class Config(BaseSettings):
    ENV: str = "development"
    APP_HOST: str = "127.0.0.1"
    APP_PORT: int = 9000
    POSTGRES_USER: str = ""
    POSTGRES_PW: str = ""
    POSTGRES_HOST = ""
    POSTGRES_DB = ""
    DATABASE_URL: str = f"postgresql://{self.POSTGRES_USER}:{self.POSTGRES_PW}@{self.POSTGRES_HOST}/{self.POSTGRES_DB}"


class DevelopmentConfig(Config):
    DATABASE_URL: str = f"postgresql://{self.POSTGRES_USER}:{self.POSTGRES_PW}@{self.POSTGRES_HOST}/{self.POSTGRES_DB}"


class ProductionConfig(Config):
    DATABASE_URL: str = ""


def get_config():
    os.getenv("ENV", "development")
    config_type = {
        "development": DevelopmentConfig(),
        "production": ProductionConfig(),
    }

    return config_type[env]


config: Config = get_config()

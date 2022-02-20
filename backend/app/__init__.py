from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.routes import router
from app.db.session import engine
from app.routes.v1 import sub_router as v1_router


def init_cors(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


def init_routers(app):
    app.include_router(router)
    app.include_router(v1_router, prefix="/api/v1", tags=["User"])


def create_app():
    app = FastAPI(
        title="MyStudy Space",
        description="Amazing app for mental health",
        version="1.0.0",
        docs_url="/docs",
    )

    init_routers(app=app)
    init_cors(app=app)
    return app


app = create_app()

models.Base.metadata.create_all(engine)

# from . import scripts

# @app.on_event("startup")
# def startup_event():
#     scripts.run_startup_scripts()

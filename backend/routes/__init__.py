import logging
from fastAPI import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="MyStudy Space API", docs_url="/")

app.add_middleware(
    CROSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

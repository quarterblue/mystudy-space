from fastapi import APIRouter

router = APIRouter()


@router.post("/auth")
def login():
    username = form_data.username
    password = form_data.password
    return {"result": true}

from fastapi import APIRouter

auth_router = APIRouter()


@auth_router.post("/auth/access-token")
def auth_access_token():
    username = form_data.username
    password = form_data.password
    return {"result": true}

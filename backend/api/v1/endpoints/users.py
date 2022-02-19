from fastapi import APIRouter, Body, Depends

router = APIRouter()


@router.get("/", response_model=List[UserSchema])
def get_all_users(user):
    return {"User": "john"}


@router.post("/", response_model=UserSchema)
def create_user(user_schema: UserCreate):
    return {"User": "user"}

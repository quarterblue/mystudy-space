import os
from fastapi import APIRouter, Body, Depends, HTTPException

user_router = APIRouter()


@user_router.post("/", response_model=schemas.User)
def create_user(*, db: Session = Depends(deps.get_db), user: schemas.UserCreate, current_user: models.User = ):
    """ Create a new user """
    user = db.query(User).filter(User.email == email).first()

    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists."
        )

    user_obj = User(
        email=,
        hashed_password=get_password_hash(),
        full_name=,
    )

    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)

    return user

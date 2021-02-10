import uvicorn
from fastapi import FastAPI
from Model import ProfileAnswers
from Questions import get_category_and_question_by_profile
from starlette.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    Allow: GET, HEAD, OPTIONS, PUT
)
@app.post('/predict_category')
def predict_user (user_profile_answers: ProfileAnswers):
    return get_category_and_question_by_profile(user_profile_answers)

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
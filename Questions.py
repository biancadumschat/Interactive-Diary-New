from sklearn.cluster import KMeans
from sklearn.preprocessing import Normalizer
import pandas as pd
import numpy as np
import random

# Define KMeans and Normalizer model, then combine them into pipeline
kmeans = KMeans(n_clusters=5)
normalizer = Normalizer()
from sklearn.pipeline import make_pipeline
pipeline = make_pipeline(normalizer, kmeans)

# Set a seed, so the random factor of sklearn won't change
np.random.seed(123)

# Assign spreadsheet to file
file = 'QnC_V3.xlsx'


# PIPELINE TO QUESTIONS' RATINGS DATA
# Deploy questions' ratings DataFrame from spreadsheet
questions_df = pd.read_excel(file, sheet_name='Test_data', nrows=85, usecols='A:B,H:N', index_col=0)
questions_category_1=questions_df['Physical_Health']
questions_array = questions_df[['Physical_Health', 'Feelings', 'Relationship', 'Self_Reflection',
                                'Self_Motivation', 'Personal_Growth', 'Open_topic']].to_numpy()

# Fit the questions to the pipeline
pipeline.fit(questions_array)
# Predict the questions' labels/targets
labels = pipeline.predict(questions_array)

# Organize the labels of questions in DataFrame
df = pd.DataFrame({'labels': labels, 'questions': questions_df['Questions']})
df_sorted = df.sort_values(by=['labels'])
all_questions=list(df_sorted.T.to_dict().values())

def get_random_question_of_category(category):
    possible_questions=list(filter(lambda q: q['labels'] == category, all_questions))
    return random.choice(possible_questions)

def get_category_and_question_by_profile(user_profile_answer):
    category = pipeline.predict(np.array([
        user_profile_answer.answers
    ]))
    question=get_random_question_of_category(category)
    return {
        'category': question['labels'],
        'question': question['questions']
    }
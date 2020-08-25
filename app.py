import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from sqlalchemy import func, create_engine
app = Flask(__name__)
engine = create_engine("sqlite:///db/project2.sqlite")

@app.route("/")
def home():
    # Render Home Page
    return "WELCOME!"

    

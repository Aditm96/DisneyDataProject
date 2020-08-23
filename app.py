#Import 
import pandas as pd
import os
os.getcwd()
import sqlalchemy
from sqlalchemy import create_engine
import pymysql
from flask import Flask, request, render_template, jsonify
#Credentials
host = 'http://disneydata.c6rvkyidwkym.us-east-2.rds.amazonaws.com/'
port = 3306
username = 'admin'
password = 'Disney2020'
database = 'disney'
pymysql.install_as_MySQLdb()
engine = create_engine(f"mysql://{username}:{password}@{host}:{port}/{database}")
#Create Flask Application
app = Flask(__name__)
# Set up your default route
@app.route('/')
def home():
    return 'WELCOME!'
@app.route('/api/data/')
def get_disney_data():
    # Establish DB connection
    conn = engine.connect()
    query = '''
        SELECT *
            
        FROM
            disney_stocks
        '''
    disney_data = pd.read_sql(query, con=conn)
    disney_json = disney_data.to_json(orient='records')
    #dictionary = {i: d for i, d in enumerate(student_json)}
    conn.close()
    return disney_json
if __name__ == "__main__":
    app.run(debug=True)

    

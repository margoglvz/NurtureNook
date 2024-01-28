from flask import Flask, jsonify
from ParksYelpAPI import getParks_byCity
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

@app.route("/<city>")
def get_API(city):
    return jsonify(getParks_byCity(city))


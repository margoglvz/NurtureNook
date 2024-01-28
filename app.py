from flask import Flask, jsonify
from ParksYelpAPI import getParks_byCity


app = Flask(__name__)

@app.route("/<city>")
def get_API(city):
    return jsonify(getParks_byCity(city))

if __name__ == '__main__':
    app.run()



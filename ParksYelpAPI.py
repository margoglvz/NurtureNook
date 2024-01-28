import requests
import json
import os

APIkey = os.getenv("YELP_API_KEY")


def getParks_byCity(city):
    print(city)
    url = f"https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20&location={city}&term=gardens near me"

    payload = {}
    headers = {
    'accept': 'application/json',
    'Authorization': f'Bearer {YELP_API_KEY}'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    
    return response.json()

# try:
#     city = input()
# except TypeError as e:
#     print("Please enter a city!")

try:
    print(getParks_byCity(city))
except:
    print("Sorry! Cannot find information for this city")
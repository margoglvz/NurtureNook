import requests

def getParks_byCity(term: str):
    #url = "https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20&location=irvine&term=gardens near me"

    url = f"https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=30&location={term}&term=gardensnearme"

    payload = {}
    headers = {
    'accept': 'application/json',
    'Authorization': 'Bearer 1muoimTp10TZ2yTNQlKmMmhWcf77PDxciOm1K3KkbCpjlP1otTxuYIhh2D7FIGYFnFP4ScYRcO9BwvKg1kbY7DfGR5Wi4-_7t8h2YJ1CrCP5IK6MNmL-5y5m1mS1ZXYx'
    }

    response = requests.request("GET", url, headers=headers, data=payload, location=term)

    return response.json()

try:
    city = input()
except TypeError as e:
    print("Please enter a city!")

try:
    print(getParks_byCity(city))
except:
    print("Sorry! Cannot find information for this city")
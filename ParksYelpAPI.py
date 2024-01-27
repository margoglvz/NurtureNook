import request

def getParks_byCity(term: str):
    url = 'https://api.yelp.com/v3/businesses/search' 

    querystring = {"location": city, "term": "gardens near me"}
    payload = ""
    headers = {
        "accept": 'application/json',
        "Authorization": 'Authorization: Bearer 1muoimTp10TZ2yTNQlKmMmhWcf77PDxciOm1K3KkbCpjlP1otTxuYIhh2D7FIGYFnFP4ScYRcO9BwvKg1kbY7DfGR5Wi4-_7t8h2YJ1CrCP5IK6MNmL-5y5m1mS1ZXYx'
    }

    response = request.request("GT", url, data=payload, headers=headers, params=querystring)
    return reponse.json()


try:
    city = input()
except TypeError as e:
    print("Please enter a city!")
getPark_byCity(city)
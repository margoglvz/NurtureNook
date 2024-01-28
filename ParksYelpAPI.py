import requests
import json



def getParks_byCity(city):
    print(city)
    url = f"https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20&location={city}&term=gardens near me"

    payload = {}
    headers = {
    'accept': 'application/json',
    'Authorization': 'Bearer xrkJROm1W6EOWNgDrLNNUT9eND0k_ir-Y-WOolxB9Z1hVN_iKGSbCuQt7hlo7idBVkz1OYe2Wg_fxf65shwwSFGkbmW1MPJCnrFXVi2wLAh7pc3H4Cxz1MQCmNS1ZXYx'
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
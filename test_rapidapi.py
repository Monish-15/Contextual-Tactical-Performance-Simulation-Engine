import requests
import json
import sys

try:
    url = "https://free-api-live-football-data.p.rapidapi.com/football-players-search"
    querystring = {"search":"messi"}
    headers = {
        "X-RapidAPI-Key": "beb4d2c970msh887635fe5a0bfbdp129dcejsnf9a310de42a7",
        "X-RapidAPI-Host": "free-api-live-football-data.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring, timeout=10)
    print(json.dumps(response.json(), indent=2))
except Exception as e:
    print(f"Error: {e}")

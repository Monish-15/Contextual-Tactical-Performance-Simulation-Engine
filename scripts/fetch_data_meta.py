from statsbombpy import sb
import pandas as pd
import os

def fetch_competitions():
    print("Fetching competitions...")
    comps = sb.competitions()
    comps.to_csv("data/competitions.csv", index=False)
    print("Competitions saved to data/competitions.csv")
    return comps

def filter_notable_competitions(comps):
    # Looking for La Liga (Pep's Barca), World Cup (Tactical shifts), etc.
    notable = comps[
        (comps['competition_name'] == 'La Liga') | 
        (comps['competition_name'] == 'Champions League')
    ]
    return notable

if __name__ == "__main__":
    if not os.path.exists("data"):
        os.makedirs("data")
    
    comps = fetch_competitions()
    notable = filter_notable_competitions(comps)
    print("\nNotable Competitions found:")
    print(notable[['competition_name', 'season_name', 'competition_id', 'season_id']])

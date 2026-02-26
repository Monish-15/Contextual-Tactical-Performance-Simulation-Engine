from statsbombpy import sb
import pandas as pd
import os

def fetch_player_season_events(player_id, competition_id, season_id):
    """
    Fetches all events for a specific player in a season.
    """
    print(f"Fetching matches for Comp: {competition_id}, Season: {season_id}...")
    matches = sb.matches(competition_id=competition_id, season_id=season_id)
    
    all_player_events = []
    
    # Just take 5 matches to demonstrate the engine without hitting limits/timeout
    subset_matches = matches.head(5)
    
    for match_id in subset_matches['match_id']:
        print(f"Processing match {match_id}...")
        events = sb.events(match_id=match_id)
        player_events = events[events['player_id'] == player_id]
        all_player_events.append(player_events)
        
    df = pd.concat(all_player_events)
    return df

if __name__ == "__main__":
    # Messi ID: 5503
    # La Liga: 11
    # 2012/2013: 24 (Vilanova season - similar to Pep)
    MESSI_ID = 5503
    
    # Let's get 2012/2013 data
    print("Fetching Messi 2012/2013 events (Subset)...")
    temp_df = fetch_player_season_events(MESSI_ID, 11, 24)
    
    if not os.path.exists("data/players"):
        os.makedirs("data/players")
        
    temp_df.to_csv("data/players/messi_2012_sub.csv", index=False)
    print("Saved messi_2012_sub.csv")

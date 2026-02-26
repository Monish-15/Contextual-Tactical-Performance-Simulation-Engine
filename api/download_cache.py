import os
import time
import pandas as pd
from statsbombpy import sb
import sys
import warnings
warnings.filterwarnings("ignore")

def build_cache():
    print("Building Local StatsBomb Cache (this takes ~1-2 minutes)...")
    os.makedirs('data', exist_ok=True)
    events_list = []
    
    # 1. World Cup 2022 (comp 43, season 106)
    try:
        wc_matches = sb.matches(competition_id=43, season_id=106)
        print(f"Downloading {len(wc_matches)} WC 2022 matches...")
        for mid in wc_matches['match_id'].tolist():
            try:
                events_list.append(sb.events(match_id=mid))
            except Exception: pass
    except Exception as e: print("WC Error:", e)

    # 2. Euro 2020 (comp 55, season 43)
    try:
        euro_matches = sb.matches(competition_id=55, season_id=43)
        print(f"Downloading {len(euro_matches)} Euro 2020 matches...")
        for mid in euro_matches['match_id'].head(30).tolist(): # just 30 to speed up
            try:
                events_list.append(sb.events(match_id=mid))
            except Exception: pass
    except Exception as e: print("Euro Error:", e)
    
    # 3. Barca 2011/12 (comp 11, season 22)
    try:
        barca_matches = sb.matches(competition_id=11, season_id=22)
        print(f"Downloading {len(barca_matches)} Barca 11/12 matches...")
        for mid in barca_matches['match_id'].head(15).tolist():
            try:
                events_list.append(sb.events(match_id=mid))
            except Exception: pass
    except Exception as e: print("Barca Error:", e)
    
    if events_list:
        df = pd.concat(events_list, ignore_index=True)
        # We need the team name to create system vectors, and player names
        cols = ['match_id', 'team', 'player', 'type', 'location', 'pass_end_location']
        valid_cols = [c for c in cols if c in df.columns]
        df = df[valid_cols]
        df.to_parquet('data/sb_cache.parquet', index=False)
        print(f"\nSUCCESS: Saved {len(df)} real events to data/sb_cache.parquet!")
    else:
        print("Failed to download any data.")

if __name__ == "__main__":
    build_cache()

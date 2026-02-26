import time
from statsbombpy import sb
import pandas as pd

start = time.time()
print("Fetching WC 2022 matches...")
try:
    matches = sb.matches(competition_id=43, season_id=106)
    match_ids = matches['match_id'].tolist()
    events_list = []
    print(f"Downloading {len(match_ids)} matches...")
    for idx, mid in enumerate(match_ids[:10]): # testing just 10 matches for speed
        try:
            df = sb.events(match_id=mid)
            events_list.append(df)
        except Exception as e:
            pass
    
    if events_list:
        all_events = pd.concat(events_list, ignore_index=True)
        print(f"Loaded {len(all_events)} events in {time.time() - start:.2f} seconds.")
except Exception as e:
    print("Error:", e)

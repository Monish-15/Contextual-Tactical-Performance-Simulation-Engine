import pandas as pd
from statsbombpy import sb

print("Fetching WC 2022 matches...")
matches = sb.matches(competition_id=43, season_id=106)
match_ids = matches['match_id'].tolist()
print(f"Found {len(match_ids)} matches.")

events_list = []
for mid in match_ids[:5]: # just 5 for quick test
    df = sb.events(match_id=mid)
    events_list.append(df)

all_events = pd.concat(events_list, ignore_index=True)
print(all_events.columns)
print("Unique players:", [p for p in all_events['player'].dropna().unique() if 'Messi' in p or 'Mbappé' in p])

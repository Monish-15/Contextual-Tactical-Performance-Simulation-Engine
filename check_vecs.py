import pandas as pd, numpy as np
from api.main import build_player_vector, build_system_vector, get_statsbomb_events
df = get_statsbomb_events()
pm,_,_ = build_player_vector(df, 'Lionel Messi')
sb,_ = build_system_vector(df, 'Barcelona')
print("P:", [round(float(x), 3) for x in pm])
print("S:", [round(float(x), 3) for x in sb])
print("D:", [round(float(x), 3) for x in np.abs(pm - sb)])
print("MAE:", round(float(np.mean(np.abs(pm - sb))), 3))

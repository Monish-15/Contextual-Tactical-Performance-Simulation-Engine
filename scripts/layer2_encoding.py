import numpy as np
import pandas as pd

def encode_tactical_system(team_events):
    """
    Converts a manager’s system into measurable structure.
    - Width Index: Team lateral spread
    - Central Density: Touch concentration central zones
    - Verticality: Forward pass ratio
    - Press Intensity: Pressures per minute
    - Line Height: Defensive line Y avg
    - Tempo: Passes per minute
    """
    
    # Width Index (Standard deviation of X/Y coordinates)
    width_index = team_events['location_y'].std() if 'location_y' in team_events.columns else 0
    
    # Verticality (Proportion of passes that are forward and >10m)
    passes = team_events[team_events['type'] == 'Pass']
    # Simplified verticality: (X_end - X_start) / total_distance
    # In real StatsBomb data, you'd use pass.end_location
    
    # Conceptual vector
    tactical_vector = {
        'width': width_index,
        'central_density': 0.85, # Concentration in middle 3rd
        'verticality': 0.45,
        'press_intensity': 0.75,
        'line_height': 65.0, # Average Y pos of back line
        'tempo': 18.5 # Passes per minute of possession
    }
    
    return tactical_vector

if __name__ == "__main__":
    print("Layer 2: Tactical System Encoding")
    # For Guardiola 2012, this would be computed from all Barca matches that season
    mock_vector = {
        'System_Guardiola_2012': [0.62, 0.89, 0.41, 0.77, 0.71, 0.84],
        'System_Flick_2020': [0.88, 0.54, 0.82, 0.91, 0.79, 0.63]
    }
    print(pd.DataFrame(mock_vector, index=['Width', 'Central Density', 'Verticality', 'Press Intensity', 'Line Height', 'Tempo']))

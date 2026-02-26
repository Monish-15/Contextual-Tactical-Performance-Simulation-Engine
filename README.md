# CTPSE - Contextual Tactical Performance Simulation Engine

This project aims to solve the **Counterfactual Modeling Problem** in football analytics: 
> "If Player X played under Manager Y within Tactical System Z, how would their role and performance change?"

## 🚀 Key Innovation
The engine separates **Intrinsic Player Traits** from **System-Imposed Behavioral Constraints**. Instead of predicting performance directly, it predicts **Structural Redistribution** (where and how a player moves) and then maps those shifts to event outputs.

## 📁 Structure
- `/scripts`: Data processing and layer-specific logic.
- `/models`: Trained regression and spatial redistribution models.
- `/app`: Interactive dashboard for simulating player-system fit.
- `/data`: Processed StatsBomb event data.

## 🧪 The Layers
1. **Player Intrinsic Profile**: Behavioral identity (e.g., Shot tendency per box touch).
2. **Tactical System Encoding**: Team structure as a numerical vector.
3. **Role Redistribution Model**: Predicts spatial shifts (e.g., wide -> central).
4. **Event Redistribution Model**: Predicts new event rates based on spatial profile.
5. **Outcome Projection**: Final performance metrics (Goals, xG, etc).

## 🛠 Setup
1. `pip install -r requirements.txt`
2. Run `python scripts/fetch_data_meta.py` to see available datasets.
3. Explore the notebooks for model training.

## 📊 Dashboard Focus
The dashboard will allow users to:
- Select a Player (e.g., Lionel Messi)
- Select a Tactical System (e.g., Flick 2020)
- View **Projected Heatmap Shift**
- View **Expected Metric Change** (e.g., +14% Shot Volume)
- Get a **Compatibility Score**.
## Screen Shots
<img width="828" height="1059" alt="image" src="https://github.com/user-attachments/assets/e86d7932-ee0b-44fc-84c8-65c3c8b6e459" />
<img width="1224" height="1041" alt="image" src="https://github.com/user-attachments/assets/86c52327-cd16-48ea-82af-f3b4f4689413" />


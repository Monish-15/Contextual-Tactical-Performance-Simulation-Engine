# Tactical Fit Engine

Tactical Fit Engine is a contextual football analytics system designed to simulate how a player would perform under a specific tactical system.

Instead of asking:
"How good is this player?"

It asks:
"How good will this player be for us?"

This project models the interaction between a player's intrinsic tendencies and a team's tactical structure using vector mathematics and spatial event data.

---

## ⚽ Problem Statement

Football analytics is traditionally retrospective. Most dashboards measure what already happened: goals, assists, xG, pass completion, etc.

However, real football decisions are predictive.

Scouting departments constantly face questions like:

- If we sign Player X, how will they perform under our manager?
- Will this winger thrive in a high-possession positional system?
- Will this striker struggle in a compact low block system?

Player output is system-dependent. Tactical Fit Engine aims to mathematically simulate this relationship.

---

## 🧠 Core Idea

The engine separates performance into two components:

1. **Player Intrinsic Vector (P)**  
2. **Tactical System Vector (S)**  

Performance is modeled as a function of the interaction between these two vectors.

Compatibility is calculated using cosine similarity:

Compatibility = cos(P, S)

The distance between vectors produces a friction score, which adjusts projected event rates and spatial occupation.

---

## 🏗 Architecture Overview

### Backend
- Python
- FastAPI
- Pandas
- NumPy
- Scikit-learn
- StatsBomb Open Data (event-level)

### Frontend
- React.js
- Recharts (Radar Charts)
- Custom CSS (glassmorphism style)
- Dynamic heatmap rendering

---

## 📊 Data Layer

### StatsBomb Open Data

The engine uses event-level data including:
- Shot location & xG
- Pass start/end coordinates
- Carries
- Dribbles
- Pressure events
- Possession sequences

All event data is stored in Parquet format for efficient querying.

---

## 🔢 Player Vector Construction

Each player is represented as a normalized vector built from:

- Central Touch Ratio
- Wide Touch Ratio
- Progressive Pass Rate
- Dribble Rate
- Shot Rate
- Pressure Actions per 90
- Positional Entropy (spatial variance)
- Average Defensive Line Height

This vector describes how a player naturally behaves independent of system.

---

## 🎯 Tactical System Vector Construction

Each tactical system is encoded using:

- Width Index
- Central Density
- Verticality Ratio
- Line Height
- Tempo
- Press Intensity

Example systems modeled:
- Barcelona 2011/12 Positional Play
- Liverpool 2018/19 Gegenpress
- Inter Milan 1960s Catenaccio

Each is normalized into mathematical constraints.

---

## ⚙ The Collision Engine

### Step 1: Compatibility Score

Cosine similarity between P and S produces a 0–100% compatibility score.

High score → natural fit  
Low score → structural friction  

---

### Step 2: Friction Multiplier

Friction = 1 − Compatibility

This friction adjusts:

- Dribble frequency
- Shot volume
- xG output
- Central occupation
- Press involvement

---

### Step 3: Spatial Redistribution

The engine simulates heatmap shifts by:

- Scaling positional mean
- Compressing or expanding spatial variance
- Adjusting width bias

This produces projected spatial occupation rather than static maps.

---

## 📈 Dashboard Features

- Compatibility Score (Instant systemic fit)
- Twin Radar Charts (Player vs Tactical Demands)
- Simulated Spatial Heatmap
- Positional Entropy Indicator
- Event Rate Deltas
- Financial Valuation Impact
- Player vs Player Comparison Mode

---

## 💰 Financial Impact Layer

Projected output changes are converted into a theoretical market value adjustment:

High compatibility → System Fit Premium  
Low compatibility → Expected Output Deduction  

This reflects real-world recruitment negotiation logic.

---

## 🎯 Target Audience

- Football clubs
- Scouting departments
- Performance analysts
- Data-driven football researchers
- Tactical analysts

---

## 🚀 Future Improvements

- Backtesting on historical manager switches
- Confidence intervals using bootstrapping
- Regression-based redistribution instead of weighted friction
- Expanded tracking-data integration
- Multi-season projection modeling

---
## 📷 Screenshots
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/81c1f33f-3371-4469-84fc-0d1d25877df6" />
<img width="828" height="1059" alt="image" src="https://github.com/user-attachments/assets/0dedda84-dd29-42cf-84ea-ef82e28c1dc0" />


## 📌 Disclaimer

Tactical Fit Engine is a simulation framework.

Football remains stochastic and multi-factorial. The engine does not claim deterministic prediction but provides a structured, quantitative framework for contextual performance analysis.

---

## 👤 Author

Built as a football analytics research and portfolio project focused on contextual modeling and predictive scouting frameworks.

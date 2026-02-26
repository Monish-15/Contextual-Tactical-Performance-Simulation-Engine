# CTPSE (Contextual Tactical Performance Simulation Engine) Implementation Plan

## 🎯 Overview
CTPSE is a counterfactual modeling engine designed to simulate football player performance under different tactical systems. It separates intrinsic player traits from system-imposed behavioral constraints to predict how roles and outputs redistribute.

## 🏗️ Architecture
The engine is built on 5 conceptual layers:
1. **Player Intrinsic Profile Layer**: Behavioral identity extraction.
2. **Tactical System Encoding Layer**: Vectorizing tactical structures.
3. **Role Redistribution Model**: Spatial behavior shift prediction.
4. **Event Redistribution Model**: Event rate prediction from spatial shifts.
5. **Outcome Projection Layer**: Final performance metrics.

## 🛠️ Tech Stack
- **Frontend**: Next.js 14+, Tailwind CSS (Glassmorphism design), Framer Motion, Recharts/D3.js for pass maps and heatmaps.
- **Backend/Modeling**: Python (Scikit-learn, XGBoost/LightGBM, Pandas, Numpy, StatsBomb Open Data).
- **Visualization**: Custom football pitch components for spatial data.

## 📅 Phases

### Phase 1: Data Infrastructure & Basic Profiling
- Setup StatsBomb Open Data ingestion scripts.
- Implement "Layer 1": Extract intrinsic player traits from historical event data.
- Create a baseline "Tactical Vector" for common systems (e.g., Guardiola 2012).

### Phase 2: Core Modeling (The Engine)
- Build the "Role Redistribution Model" (Spatial shifts).
- Build the "Event Redistribution Model" (Stat shifts).
- Implement the "Validation Strategy" (Backtesting on players who moved teams).

### Phase 3: Dashboard Development
- Design a premium, dark-themed UI.
- Interactive heatmap comparisons.
- Compatibility score visualization.

### Phase 4: Refinement & Explanation
- Add the Causal Inference layer (Interpreting *why* a player fits).
- Optimize for real-time simulation on the dashboard.

## 🚀 Getting Started
1. Initialize the project repository.
2. Set up a Python environment for data processing.
3. Fetch StatsBomb Open Data for a subset of seasons (e.g., La Liga 2010-2015).

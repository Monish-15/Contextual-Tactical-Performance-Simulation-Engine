---
description: How to run the CTPSE Simulation Engine
---

### 🟢 Prerequisites
Ensure you have Python 3.9+ and Node.js installed.

### 1. Environment Setup
Install Python dependencies for the data science engine:
```bash
pip install -r requirements.txt
```

### 2. Data Ingestion
Fetch the latest StatsBomb competition metadata to identify tactical benchmarks:
// turbo
```bash
python scripts/fetch_data_meta.py
```

### 3. Frontend Dashboard
Start the interactive simulation dashboard (using `;` for PowerShell):
// turbo
```powershell
cd app; npm run dev
```

### 4. Running Profiling (Example)
To run the conceptual player profiling layer:
```bash
python scripts/layer1_profiling.py
```

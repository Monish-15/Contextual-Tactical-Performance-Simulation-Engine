import React, { useState, useRef, useEffect } from 'react';
import { Activity, Layout, Target, Map, Zap, TrendingUp, Info, Search } from 'lucide-react';
import Heatmap from './Heatmap';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SYSTEM_DATA } from './SystemData';

const PLAYERS = [
  { name: 'Lionel Messi', role: 'RW / False 9', club: 'FC Barcelona', years: '2004–2021' },
  { name: 'Erling Haaland', role: 'Striker', club: 'Manchester City', years: '2022–Present' },
  { name: 'Kylian Mbappé', role: 'Forward', club: 'Paris SG', years: '2017–2024' },
  { name: 'Harry Kane', role: 'Striker', club: 'Tottenham', years: '2010–2023' },
  { name: 'Robert Lewandowski', role: 'Striker', club: 'Bayern Munich', years: '2014–2022' },
  { name: 'Victor Osimhen', role: 'Striker', club: 'Napoli', years: '2020–Present' },
  { name: 'Lautaro Martínez', role: 'Striker', club: 'Inter Milan', years: '2018–Present' },
  { name: 'Mohamed Salah', role: 'Right Winger', club: 'Liverpool FC', years: '2017–Present' },
  { name: 'Vinícius Júnior', role: 'Left Winger', club: 'Real Madrid', years: '2018–Present' },
  { name: 'Bukayo Saka', role: 'Right Winger', club: 'Arsenal', years: '2018–Present' },
  { name: 'Rafael Leão', role: 'Left Winger', club: 'AC Milan', years: '2019–Present' },
  { name: 'Khvicha Kvaratskhelia', role: 'Left Winger', club: 'Napoli', years: '2022–Present' },
  { name: 'Leroy Sané', role: 'Winger', club: 'Bayern Munich', years: '2020–Present' },
  { name: 'Phil Foden', role: 'Attacking Mid / Winger', club: 'Manchester City', years: '2017–Present' },
  { name: 'Rodrygo', role: 'Right Winger', club: 'Real Madrid', years: '2019–Present' },
  { name: 'Ousmane Dembélé', role: 'Winger', club: 'Paris SG', years: '2023–Present' },
  { name: 'Kevin De Bruyne', role: 'Attacking Mid', club: 'Manchester City', years: '2015–Present' },
  { name: 'Jude Bellingham', role: 'Attacking Mid', club: 'Real Madrid', years: '2023–Present' },
  { name: 'Martin Ødegaard', role: 'Attacking Mid', Arsenal: '2021–Present' },
  { name: 'Florian Wirtz', role: 'Attacking Mid', club: 'Bayer Leverkusen', years: '2020–Present' },
  { name: 'Bruno Fernandes', role: 'Attacking Mid', club: 'Manchester United', years: '2020–Present' },
  { name: 'Jamal Musiala', role: 'Attacking Mid', club: 'Bayern Munich', years: '2020–Present' },
  { name: 'James Maddison', role: 'Attacking Mid', club: 'Tottenham', years: '2023–Present' },
  { name: 'Rodri', role: 'Defensive Mid', club: 'Manchester City', years: '2019–Present' },
  { name: 'Declan Rice', role: 'Defensive Mid', club: 'Arsenal', years: '2023–Present' },
  { name: 'Aurelien Tchouameni', role: 'Defensive Mid', club: 'Real Madrid', years: '2022–Present' },
  { name: 'Frenkie de Jong', role: 'Central Mid', club: 'FC Barcelona', years: '2019–Present' },
  { name: 'Eduardo Camavinga', role: 'Central Mid', club: 'Real Madrid', years: '2021–Present' },
  { name: 'Federico Valverde', role: 'Central Mid', club: 'Real Madrid', years: '2018–Present' },
  { name: 'Joshua Kimmich', role: 'Defensive Mid', club: 'Bayern Munich', years: '2015–Present' },
  { name: 'Enzo Fernández', role: 'Central Mid', club: 'Chelsea', years: '2023–Present' },
  { name: 'Alexis Mac Allister', role: 'Central Mid', club: 'Liverpool FC', years: '2023–Present' },
  { name: 'Trent Alexander-Arnold', role: 'Right Back', club: 'Liverpool FC', years: '2016–Present' },
  { name: 'Alphonso Davies', role: 'Left Back', club: 'Bayern Munich', years: '2018–Present' },
  { name: 'Achraf Hakimi', role: 'Right Back', club: 'Paris SG', years: '2021–Present' },
  { name: 'Theo Hernández', role: 'Left Back', club: 'AC Milan', years: '2019–Present' },
  { name: 'Kyle Walker', role: 'Right Back', club: 'Manchester City', years: '2017–Present' },
  { name: 'Jeremie Frimpong', role: 'Right Wingback', club: 'Bayer Leverkusen', years: '2021–Present' },
  { name: 'Federico Dimarco', role: 'Left Wingback', club: 'Inter Milan', years: '2021–Present' },
  { name: 'Virgil van Dijk', role: 'Center Back', club: 'Liverpool FC', years: '2018–Present' },
  { name: 'Rúben Dias', role: 'Center Back', club: 'Manchester City', years: '2020–Present' },
  { name: 'William Saliba', role: 'Center Back', club: 'Arsenal', years: '2019–Present' },
  { name: 'Ronald Araújo', role: 'Center Back', club: 'FC Barcelona', years: '2019–Present' },
  { name: 'Alessandro Bastoni', role: 'Center Back', club: 'Inter Milan', years: '2017–Present' },
  { name: 'Antonio Rüdiger', role: 'Center Back', club: 'Real Madrid', years: '2022–Present' },
  { name: 'Kim Min-jae', role: 'Center Back', club: 'Bayern Munich', years: '2023–Present' },
  { name: 'Marquinhos', role: 'Center Back', club: 'Paris SG', years: '2013–Present' }
];

const StatCard = ({ label, value, trend, icon: Icon }) => (
  <div className="stat-card">
    <div className="stat-title flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{label}</span>
      <Icon size={16} />
    </div>
    <div className="stat-value">{value}</div>
    <div className={`stat-trend ${trend > 0 ? 'trend-pos' : 'trend-neg'}`}>
      {trend > 0 ? '+' : ''}{trend}%
    </div>
  </div>
);

const App = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(PLAYERS[0].name);
  const [playerSearchQuery, setPlayerSearchQuery] = useState('');
  const [isPlayerSearchOpen, setIsPlayerSearchOpen] = useState(false);
  const [dynamicPlayers, setDynamicPlayers] = useState(PLAYERS);
  const playerDropdownRef = useRef(null);

  // Comparison State
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [selectedPlayer2, setSelectedPlayer2] = useState(PLAYERS[1].name);
  const [playerSearchQuery2, setPlayerSearchQuery2] = useState('');
  const [isPlayerSearchOpen2, setIsPlayerSearchOpen2] = useState(false);
  const [dynamicPlayers2, setDynamicPlayers2] = useState(PLAYERS);
  const playerDropdownRef2 = useRef(null);

  const [selectedSystem, setSelectedSystem] = useState('4-3-3 Positional Play (FC Barcelona - 2011/12)');
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentData, setCurrentData] = useState(SYSTEM_DATA['4-3-3 Positional Play (FC Barcelona - 2011/12)']);
  const [currentData2, setCurrentData2] = useState(null);

  const pitchRef = useRef(null);
  const pitchRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (playerDropdownRef.current && !playerDropdownRef.current.contains(event.target)) {
        setIsPlayerSearchOpen(false);
      }
      if (playerDropdownRef2.current && !playerDropdownRef2.current.contains(event.target)) {
        setIsPlayerSearchOpen2(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (playerSearchQuery.length < 2) {
      setDynamicPlayers(PLAYERS.filter(p => playerSearchQuery === '' || p.name.toLowerCase().includes(playerSearchQuery.toLowerCase())));
      return;
    }
    const timeoutId = setTimeout(() => {
      fetch(`http://localhost:8002/search_players?q=${encodeURIComponent(playerSearchQuery)}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.length > 0) {
            setDynamicPlayers(data.map(p => ({
              name: p.name,
              role: 'Live API Profile',
              club: p.teamName || 'Unknown',
              years: 'Realtime Fetch'
            })));
          } else {
            setDynamicPlayers(PLAYERS.filter(p => p.name.toLowerCase().includes(playerSearchQuery.toLowerCase())));
          }
        })
        .catch(err => {
          console.error("API Search fallback", err);
          setDynamicPlayers(PLAYERS.filter(p => p.name.toLowerCase().includes(playerSearchQuery.toLowerCase())));
        });
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [playerSearchQuery]);

  useEffect(() => {
    if (playerSearchQuery2.length < 2) {
      setDynamicPlayers2(PLAYERS.filter(p => playerSearchQuery2 === '' || p.name.toLowerCase().includes(playerSearchQuery2.toLowerCase())));
      return;
    }
    const timeoutId = setTimeout(() => {
      fetch(`http://localhost:8002/search_players?q=${encodeURIComponent(playerSearchQuery2)}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.length > 0) {
            setDynamicPlayers2(data.map(p => ({
              name: p.name,
              role: 'Live API Profile',
              club: p.teamName || 'Unknown',
              years: 'Realtime Fetch'
            })));
          } else {
            setDynamicPlayers2(PLAYERS.filter(p => p.name.toLowerCase().includes(playerSearchQuery2.toLowerCase())));
          }
        })
        .catch(err => {
          console.error("API Search fallback p2", err);
          setDynamicPlayers2(PLAYERS.filter(p => p.name.toLowerCase().includes(playerSearchQuery2.toLowerCase())));
        });
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [playerSearchQuery2]);

  const filteredPlayers = dynamicPlayers;
  const filteredPlayers2 = dynamicPlayers2;

  const handleSimulate = async () => {
    setIsSimulating(true);
    try {
      // P1 SIMULATION
      const res1 = await fetch('http://localhost:8002/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player: selectedPlayer, system: selectedSystem })
      });
      if (res1.ok) {
        const data = await res1.json();
        const baseSystem = SYSTEM_DATA[selectedSystem];
        setCurrentData({
          ...baseSystem,
          compatibility: data.compatibility,
          valuation: data.valuation,
          entropy: data.entropy,
          radarData: data.radarData,
          stats: baseSystem.stats.map((s, i) => ({ ...s, value: data.stats[i]?.value || s.value, trend: data.stats[i]?.trend || s.trend })),
          clusters: data.clusters?.length > 0 ? data.clusters : baseSystem.clusters,
          explanation: data.explanation || baseSystem.explanation
        });
      } else { setCurrentData(SYSTEM_DATA[selectedSystem]); }

      // P2 SIMULATION
      if (isCompareMode) {
        const res2 = await fetch('http://localhost:8002/simulate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ player: selectedPlayer2, system: selectedSystem })
        });
        if (res2.ok) {
          const data2 = await res2.json();
          const baseSystem = SYSTEM_DATA[selectedSystem];
          setCurrentData2({
            ...baseSystem,
            compatibility: data2.compatibility,
            valuation: data2.valuation,
            entropy: data2.entropy,
            radarData: data2.radarData,
            stats: baseSystem.stats.map((s, i) => ({ ...s, value: data2.stats[i]?.value || s.value, trend: data2.stats[i]?.trend || s.trend })),
            clusters: data2.clusters?.length > 0 ? data2.clusters : baseSystem.clusters,
            explanation: data2.explanation || baseSystem.explanation
          });
        }
      }

    } catch (err) {
      console.error("Backend unreachable. Falling back to static data.", err);
      setCurrentData(SYSTEM_DATA[selectedSystem]);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <div>
          <h1 className="text-gradient" style={{ display: 'inline-block' }}>Tactical Dashboard</h1>
          <p>Player Performance Simulation & System Fit Analysis</p>
        </div>
      </header>

      <div className="grid-main">
        {/* Left Sidebar */}
        <div>
          <div className="panel" style={{ marginBottom: '24px' }}>
            <h2 className="panel-title">
              <Activity size={18} /> Configuration
            </h2>

            <div className="form-group relative" ref={playerDropdownRef}>
              <label className="form-label">Player</label>
              <div className="search-input-wrapper">
                <Search size={14} className="search-icon" />
                <input
                  type="text"
                  className="form-select search-input"
                  placeholder="Search player..."
                  value={playerSearchQuery}
                  onChange={(e) => {
                    setPlayerSearchQuery(e.target.value);
                    setIsPlayerSearchOpen(true);
                  }}
                  onFocus={() => {
                    setPlayerSearchQuery(''); // Clear on focus to show full list
                    setIsPlayerSearchOpen(true);
                  }}
                />
              </div>

              {isPlayerSearchOpen && (
                <div className="autocomplete-dropdown shadow-2xl">
                  {filteredPlayers.length > 0 ? (
                    filteredPlayers.slice(0, 6).map((player) => (
                      <div
                        key={player.name}
                        className={`autocomplete-item ${selectedPlayer === player.name ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedPlayer(player.name);
                          setPlayerSearchQuery(player.name);
                          setIsPlayerSearchOpen(false);
                        }}
                      >
                        <div className="player-name">{player.name}</div>
                        <div className="player-meta">{player.role} • {player.club || 'Club'} ({player.years})</div>
                      </div>
                    ))
                  ) : (
                    <div className="autocomplete-empty">No players matched</div>
                  )}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Target System</label>
              <select
                className="form-select"
                value={selectedSystem}
                onChange={(e) => setSelectedSystem(e.target.value)}
              >
                {Object.keys(SYSTEM_DATA).map(sys => (
                  <option key={sys} value={sys}>{sys}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px' }}>
              <button
                className={`btn-primary ${!isCompareMode ? 'active-tab' : 'inactive-tab'}`}
                style={{ flex: 1, padding: '8px', fontSize: '12px', background: !isCompareMode ? 'var(--gradient-main)' : '#1f2937', color: !isCompareMode ? '#000' : 'var(--text-main)' }}
                onClick={() => setIsCompareMode(false)}
              >
                Single Player
              </button>
              <button
                className={`btn-primary ${isCompareMode ? 'active-tab' : 'inactive-tab'}`}
                style={{ flex: 1, padding: '8px', fontSize: '12px', background: isCompareMode ? 'var(--gradient-main)' : '#1f2937', color: isCompareMode ? '#000' : 'var(--text-main)' }}
                onClick={() => setIsCompareMode(true)}
              >
                Compare Players
              </button>
            </div>

            {isCompareMode && (
              <div className="form-group relative mt-4 pt-4 border-t border-gray-800" ref={playerDropdownRef2} style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <label className="form-label" style={{ color: 'var(--accent-secondary)' }}>Player 2 (Compare)</label>
                <div className="search-input-wrapper">
                  <Search size={14} className="search-icon" />
                  <input
                    type="text"
                    className="form-select search-input"
                    placeholder="Search opponent..."
                    value={playerSearchQuery2}
                    onChange={(e) => {
                      setPlayerSearchQuery2(e.target.value);
                      setIsPlayerSearchOpen2(true);
                    }}
                    onFocus={() => {
                      setPlayerSearchQuery2('');
                      setIsPlayerSearchOpen2(true);
                    }}
                  />
                </div>

                {isPlayerSearchOpen2 && (
                  <div className="autocomplete-dropdown shadow-2xl">
                    {filteredPlayers2.length > 0 ? (
                      filteredPlayers2.slice(0, 6).map((player) => (
                        <div
                          key={player.name}
                          className={`autocomplete-item ${selectedPlayer2 === player.name ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedPlayer2(player.name);
                            setPlayerSearchQuery2(player.name);
                            setIsPlayerSearchOpen2(false);
                          }}
                        >
                          <div className="player-name">{player.name}</div>
                          <div className="player-meta">{player.role} • {player.club || 'Club'} ({player.years})</div>
                        </div>
                      ))
                    ) : (
                      <div className="autocomplete-empty">No players matched</div>
                    )}
                  </div>
                )}
              </div>
            )}

            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className="btn-primary"
              style={{ marginTop: '24px' }}
            >
              {isSimulating ? 'Simulating...' : 'Run Simulation'}
            </button>
          </div>

          <div className="panel" style={{ marginBottom: isCompareMode ? '24px' : '0' }}>
            <h2 className="panel-title">{isCompareMode ? selectedPlayer : 'System Fit Analysis'}</h2>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '48px', fontWeight: '700', color: 'var(--accent-color)', lineHeight: '1' }}>
                {currentData.compatibility}%
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '600' }}>
                Compatibility
              </span>
            </div>

            <div style={{ padding: '16px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                <span style={{ color: 'var(--text-dim)' }}>Projected Role</span>
                <span style={{ fontWeight: '500', color: 'var(--text-main)' }}>{currentData.role.projected}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--text-dim)' }}>Valuation Impact</span>
                <span style={{ fontWeight: '600', color: currentData.valuation.includes('+') ? 'var(--success)' : 'var(--danger)' }}>
                  {currentData.valuation}
                </span>
              </div>
            </div>

            <div style={{ height: '220px', width: '100%', marginTop: '8px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={currentData.radarData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Original" dataKey="original" stroke="#4b5563" fill="#374151" fillOpacity={0.5} />
                  <Radar name="Projected" dataKey="target" stroke="var(--accent-color)" fill="var(--accent-color)" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {isCompareMode && currentData2 && (
            <div className="panel" style={{ borderLeft: '4px solid var(--accent-secondary)' }}>
              <h2 className="panel-title" style={{ color: 'var(--accent-secondary)' }}>{selectedPlayer2}</h2>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '48px', fontWeight: '700', color: 'var(--accent-secondary)', lineHeight: '1' }}>
                  {currentData2.compatibility}%
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '600' }}>
                  Compatibility
                </span>
              </div>

              <div style={{ padding: '16px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-dim)' }}>Projected Role</span>
                  <span style={{ fontWeight: '500', color: 'var(--text-main)' }}>{currentData2.role.projected}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-dim)' }}>Valuation Impact</span>
                  <span style={{ fontWeight: '600', color: currentData2.valuation.includes('+') ? 'var(--success)' : 'var(--danger)' }}>
                    {currentData2.valuation}
                  </span>
                </div>
              </div>

              <div style={{ height: '220px', width: '100%', marginTop: '8px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={currentData2.radarData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="metric" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar name="Original P2" dataKey="original" stroke="#4b5563" fill="#374151" fillOpacity={0.5} />
                    <Radar name="Projected P2" dataKey="target" stroke="var(--accent-secondary)" fill="var(--accent-secondary)" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>

        {/* Main Workspace */}
        <div>
          <div className="panel">
            <h2 className="panel-title">
              <Map size={18} /> {isCompareMode ? `Spatial Probability Heatmaps` : `Spatial Probability Heatmap`}
            </h2>

            <div style={{ display: isCompareMode ? 'grid' : 'block', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Pitch 1 */}
              <div>
                {isCompareMode && <h3 style={{ fontSize: '13px', color: 'var(--accent-color)', marginBottom: '8px', textAlign: 'center' }}>{selectedPlayer}</h3>}
                <div ref={pitchRef} className="pitch-container">
                  {/* Pitch Markings */}
                  <div className="pitch-line" style={{ inset: 0, border: '2px solid white', margin: '16px' }}></div>
                  <div className="pitch-line" style={{ top: '16px', bottom: '16px', left: '50%', borderLeft: '2px solid white' }}></div>
                  <div className="pitch-line" style={{ top: '50%', left: '50%', width: '120px', height: '120px', borderRadius: '50%', border: '2px solid white', transform: 'translate(-50%, -50%)' }}></div>
                  <div className="pitch-line" style={{ top: '20%', bottom: '20%', left: '16px', width: '16%', border: '2px solid white', borderLeft: '0' }}></div>
                  <div className="pitch-line" style={{ top: '20%', bottom: '20%', right: '16px', width: '16%', border: '2px solid white', borderRight: '0' }}></div>

                  {!isSimulating && pitchRef.current && (
                    <Heatmap points={currentData.clusters} width={pitchRef.current.offsetWidth} height={pitchRef.current.offsetHeight} />
                  )}

                  {isSimulating && (
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(17, 24, 39, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                      <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>Calculating P1 Layout...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Pitch 2 (Only in compare mode) */}
              {isCompareMode && currentData2 && (
                <div>
                  <h3 style={{ fontSize: '13px', color: 'var(--accent-secondary)', marginBottom: '8px', textAlign: 'center' }}>{selectedPlayer2}</h3>
                  <div ref={pitchRef2} className="pitch-container" style={{ borderColor: 'var(--accent-secondary)' }}>
                    {/* Pitch Markings */}
                    <div className="pitch-line" style={{ inset: 0, border: '2px solid white', margin: '16px' }}></div>
                    <div className="pitch-line" style={{ top: '16px', bottom: '16px', left: '50%', borderLeft: '2px solid white' }}></div>
                    <div className="pitch-line" style={{ top: '50%', left: '50%', width: '120px', height: '120px', borderRadius: '50%', border: '2px solid white', transform: 'translate(-50%, -50%)' }}></div>
                    <div className="pitch-line" style={{ top: '20%', bottom: '20%', left: '16px', width: '16%', border: '2px solid white', borderLeft: '0' }}></div>
                    <div className="pitch-line" style={{ top: '20%', bottom: '20%', right: '16px', width: '16%', border: '2px solid white', borderRight: '0' }}></div>

                    {!isSimulating && pitchRef2.current && (
                      <Heatmap points={currentData2.clusters} width={pitchRef2.current.offsetWidth} height={pitchRef2.current.offsetHeight} />
                    )}

                    {isSimulating && (
                      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(17, 24, 39, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                        <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>Calculating P2 Layout...</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className={`stats-grid ${isCompareMode ? 'compare' : ''}`} style={{ marginBottom: '24px', display: 'grid', gridTemplateColumns: isCompareMode ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '16px' }}>
              {currentData.stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              {/* Positional Entropy */}
              <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px', backgroundColor: 'var(--surface-color)' }}>
                <h3 style={{ fontSize: '13px', textTransform: 'uppercase', fontWeight: '600', color: 'var(--text-dim)', marginBottom: '16px', letterSpacing: '0.05em' }}>
                  Positional Entropy
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
                  <span style={{ color: 'var(--text-dim)', fontSize: '13px' }}>Base Variance</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: '600', fontFamily: 'monospace' }}>{currentData.entropy.original}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-dim)', fontSize: '13px' }}>Projected Variance</span>
                  <span style={{ color: 'var(--accent-color)', fontWeight: '600', fontFamily: 'monospace' }}>{currentData.entropy.projected}</span>
                </div>
              </div>

              {/* Auto-Explanation Matrix */}
              <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px', backgroundColor: 'var(--surface-color)' }}>
                <h3 style={{ fontSize: '13px', textTransform: 'uppercase', fontWeight: '600', color: 'var(--text-dim)', marginBottom: '12px', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Zap size={14} className="text-accent-primary" /> Auto-Explanation Matrix
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: '1.6', opacity: 0.9 }}>
                  "{currentData.explanation}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import { Layout, Target, Zap, TrendingUp } from 'lucide-react';

const genericClusters = {
    highCentral: [
        { x: '65%', y: '50%', intensity: 'extreme' }, { x: '70%', y: '45%', intensity: 'extreme' },
        { x: '72%', y: '55%', intensity: 'high' }, { x: '60%', y: '40%', intensity: 'high' },
        { x: '62%', y: '60%', intensity: 'mid' }, { x: '55%', y: '50%', intensity: 'mid' },
        { x: '68%', y: '50%', intensity: 'high' }, { x: '75%', y: '48%', intensity: 'mid' }
    ],
    midfieldPress: [
        { x: '50%', y: '50%', intensity: 'extreme' }, { x: '55%', y: '35%', intensity: 'high' },
        { x: '55%', y: '65%', intensity: 'high' }, { x: '45%', y: '40%', intensity: 'mid' },
        { x: '45%', y: '60%', intensity: 'mid' }, { x: '65%', y: '50%', intensity: 'high' },
        { x: '60%', y: '30%', intensity: 'mid' }, { x: '60%', y: '70%', intensity: 'mid' }
    ],
    deepBlock: [
        { x: '25%', y: '50%', intensity: 'extreme' }, { x: '22%', y: '40%', intensity: 'high' },
        { x: '22%', y: '60%', intensity: 'high' }, { x: '30%', y: '35%', intensity: 'mid' },
        { x: '30%', y: '65%', intensity: 'mid' }, { x: '28%', y: '50%', intensity: 'high' },
        { x: '20%', y: '45%', intensity: 'high' }, { x: '20%', y: '55%', intensity: 'high' }
    ],
    wideOverload: [
        { x: '60%', y: '15%', intensity: 'extreme' }, { x: '65%', y: '20%', intensity: 'high' },
        { x: '50%', y: '15%', intensity: 'high' }, { x: '70%', y: '25%', intensity: 'mid' },
        { x: '60%', y: '85%', intensity: 'extreme' }, { x: '65%', y: '80%', intensity: 'high' },
        { x: '50%', y: '85%', intensity: 'high' }, { x: '70%', y: '75%', intensity: 'mid' }
    ],
    verticalFluid: [
        { x: '40%', y: '50%', intensity: 'mid' }, { x: '55%', y: '50%', intensity: 'high' },
        { x: '70%', y: '50%', intensity: 'extreme' }, { x: '80%', y: '45%', intensity: 'high' },
        { x: '80%', y: '55%', intensity: 'high' }, { x: '60%', y: '35%', intensity: 'mid' },
        { x: '60%', y: '65%', intensity: 'mid' }, { x: '85%', y: '50%', intensity: 'extreme' }
    ],
    totalRotations: [
        { x: '50%', y: '30%', intensity: 'high' }, { x: '50%', y: '70%', intensity: 'high' },
        { x: '70%', y: '40%', intensity: 'extreme' }, { x: '70%', y: '60%', intensity: 'extreme' },
        { x: '40%', y: '50%', intensity: 'mid' }, { x: '60%', y: '50%', intensity: 'high' },
        { x: '80%', y: '50%', intensity: 'mid' }, { x: '30%', y: '50%', intensity: 'mid' }
    ]
};

export const SYSTEM_DATA = {
    '4-3-3 Positional Play (FC Barcelona - 2011/12)': {
        compatibility: 94,
        shift: 'Wide → Central (Half-space focus)',
        role: { original: 'Forward', projected: 'False 9', probability: 81 },
        entropy: { original: 0.72, projected: 0.58 },
        confidence: 87,
        explanation: 'Central overload with short passing demands high short-pass index and spatial intelligence. Expected to increase central box occupation and shot volume.',
        valuation: '+ €18.5M (System fit premium)',
        radarData: [
            { metric: 'Width', target: 85, original: 60 },
            { metric: 'Cent. Density', target: 90, original: 55 },
            { metric: 'Press Intense', target: 70, original: 40 },
            { metric: 'Verticality', target: 45, original: 75 },
            { metric: 'Line Height', target: 85, original: 50 },
            { metric: 'Tempo', target: 60, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '+19%', trend: 24, icon: Layout },
            { label: 'Shot Volume', value: '+14%', trend: 12, icon: Target },
            { label: 'Dribble Freq', value: '-18%', trend: -15, icon: Zap },
            { label: 'xG per 90', value: '0.72 ± 0.09', trend: 8, icon: TrendingUp },
        ],
        clusters: genericClusters.highCentral,
        mainColor: 'accent-primary'
    },
    'High Press / Gegenpress (Liverpool FC - 2018/19)': {
        compatibility: 81,
        shift: 'Possession → Transition (Intensive Pressing)',
        role: { original: 'Winger', projected: 'Direct Forward', probability: 78 },
        entropy: { original: 0.72, projected: 0.68 },
        confidence: 82,
        explanation: 'Intense pressing immediately after loss leads to quick transitions. Traits support narrow buildup, but requires elite stamina metrics. Potential for regression in late game.',
        valuation: '+ €8.0M (Tactical alignment)',
        radarData: [
            { metric: 'Width', target: 70, original: 60 },
            { metric: 'Cent. Density', target: 50, original: 55 },
            { metric: 'Press Intense', target: 95, original: 40 },
            { metric: 'Verticality', target: 85, original: 75 },
            { metric: 'Line Height', target: 85, original: 50 },
            { metric: 'Tempo', target: 90, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '+8%', trend: 12, icon: Layout },
            { label: 'Shot Volume', value: '+22%', trend: 25, icon: Target },
            { label: 'Dribble Freq', value: '+5%', trend: 8, icon: Zap },
            { label: 'xG per 90', value: '0.85 ± 0.12', trend: 15, icon: TrendingUp },
        ],
        clusters: genericClusters.midfieldPress,
        mainColor: 'accent-secondary'
    },
    'Low Block / Counter-Attack (Atletico Madrid - 2015/16)': {
        compatibility: 65,
        shift: 'High Block → Deep Block (Transition Isolation)',
        role: { original: 'Forward', projected: 'Target / Outlet', probability: 72 },
        entropy: { original: 0.72, projected: 0.45 },
        confidence: 90,
        explanation: 'Deep defensive block requires compact unit discipline. Forward serves as the sole outlet for quick vertical counters against unset defenses.',
        valuation: '- €3.5M (Volume reduction)',
        radarData: [
            { metric: 'Width', target: 40, original: 60 },
            { metric: 'Cent. Density', target: 80, original: 55 },
            { metric: 'Press Intense', target: 90, original: 40 },
            { metric: 'Verticality', target: 85, original: 75 },
            { metric: 'Line Height', target: 20, original: 50 },
            { metric: 'Tempo', target: 60, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '-15%', trend: -12, icon: Layout },
            { label: 'Shot Volume', value: '-20%', trend: -18, icon: Target },
            { label: 'Dribble Freq', value: '+12%', trend: 15, icon: Zap },
            { label: 'xG per 90', value: '0.45 ± 0.10', trend: -20, icon: TrendingUp },
        ],
        clusters: genericClusters.deepBlock,
        mainColor: 'accent-primary'
    },
    'Tiki-Taka / Possession Control (Spain - 2010)': {
        compatibility: 91,
        shift: 'Direct → Patient Rotations',
        role: { original: 'Attacker', projected: 'Positional Node', probability: 85 },
        entropy: { original: 0.72, projected: 0.88 },
        confidence: 88,
        explanation: 'Extremely high possession %. Requires exceptional close control and horizontal rotational awareness. Sacrifices verticality for absolute security.',
        valuation: '+ €12.0M (Possession retention)',
        radarData: [
            { metric: 'Width', target: 80, original: 60 },
            { metric: 'Cent. Density', target: 95, original: 55 },
            { metric: 'Press Intense', target: 75, original: 40 },
            { metric: 'Verticality', target: 25, original: 75 },
            { metric: 'Line Height', target: 70, original: 50 },
            { metric: 'Tempo', target: 50, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '+25%', trend: 30, icon: Layout },
            { label: 'Shot Volume', value: '-5%', trend: -5, icon: Target },
            { label: 'Dribble Freq', value: '-22%', trend: -25, icon: Zap },
            { label: 'xG per 90', value: '0.55 ± 0.05', trend: 2, icon: TrendingUp },
        ],
        clusters: genericClusters.totalRotations,
        mainColor: 'accent-secondary'
    },
    'Vertical Transition / Direct Play (Bayern Munich - 2019/20)': {
        compatibility: 78,
        shift: 'Control → High-Tempo Vertical',
        role: { original: 'Forward', projected: 'Inside Forward (Vertical)', probability: 68 },
        entropy: { original: 0.72, projected: 0.70 },
        confidence: 83,
        explanation: 'Fast forward direct play implies rapid transitions. Player required to make diagonal runs prioritizing wide and forward penetration immediately upon recovery.',
        valuation: '+ €5.5M (Output density)',
        radarData: [
            { metric: 'Width', target: 75, original: 60 },
            { metric: 'Cent. Density', target: 60, original: 55 },
            { metric: 'Press Intense', target: 90, original: 40 },
            { metric: 'Verticality', target: 95, original: 75 },
            { metric: 'Line Height', target: 85, original: 50 },
            { metric: 'Tempo', target: 95, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '-8%', trend: -5, icon: Layout },
            { label: 'Shot Volume', value: '+28%', trend: 35, icon: Target },
            { label: 'Dribble Freq', value: '+15%', trend: 18, icon: Zap },
            { label: 'xG per 90', value: '0.90 ± 0.15', trend: 25, icon: TrendingUp },
        ],
        clusters: genericClusters.verticalFluid,
        mainColor: 'accent-primary'
    },
    'False 9 Attacking System (FC Barcelona - 2010/11)': {
        compatibility: 96,
        shift: 'Classic 9 → Dropping Pivot',
        role: { original: 'Forward', projected: 'Architect 9', probability: 92 },
        entropy: { original: 0.72, projected: 0.52 },
        confidence: 94,
        explanation: 'Central forward drops deep to create midfield superiority. Unlocks dribble-pull-pass combinations through elite vision and gravity.',
        valuation: '+ €25.0M (Role synthesis multiplier)',
        radarData: [
            { metric: 'Width', target: 85, original: 60 },
            { metric: 'Cent. Density', target: 90, original: 55 },
            { metric: 'Press Intense', target: 80, original: 40 },
            { metric: 'Verticality', target: 35, original: 75 },
            { metric: 'Line Height', target: 85, original: 50 },
            { metric: 'Tempo', target: 65, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '+35%', trend: 45, icon: Layout },
            { label: 'Shot Volume', value: '+10%', trend: 15, icon: Target },
            { label: 'Dribble Freq', value: '+5%', trend: 5, icon: Zap },
            { label: 'xG per 90', value: '0.82 ± 0.08', trend: 18, icon: TrendingUp },
        ],
        clusters: genericClusters.highCentral,
        mainColor: 'accent-secondary'
    },
    'Wing-Back Overload / 3-5-2 (Chelsea FC - 2016/17)': {
        compatibility: 60,
        shift: 'Wide Forward → Inside Channel',
        role: { original: 'Winger', projected: 'Half-Space Shadow Striker', probability: 55 },
        entropy: { original: 0.72, projected: 0.40 },
        confidence: 81,
        explanation: 'Back three system uses aggressive wing-backs for absolute width. Inside forwards are forced into narrow midfield overloads, competing for space.',
        valuation: '- €5.0M (Spatial constraint)',
        radarData: [
            { metric: 'Width', target: 95, original: 60 },
            { metric: 'Cent. Density', target: 70, original: 55 },
            { metric: 'Press Intense', target: 60, original: 40 },
            { metric: 'Verticality', target: 60, original: 75 },
            { metric: 'Line Height', target: 55, original: 50 },
            { metric: 'Tempo', target: 65, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '+10%', trend: 15, icon: Layout },
            { label: 'Shot Volume', value: '-12%', trend: -10, icon: Target },
            { label: 'Dribble Freq', value: '-25%', trend: -20, icon: Zap },
            { label: 'xG per 90', value: '0.50 ± 0.05', trend: -15, icon: TrendingUp },
        ],
        clusters: genericClusters.wideOverload,
        mainColor: 'accent-primary'
    },
    'Catenaccio / Defensive Block (Inter Milan - 1960s)': {
        compatibility: 45,
        shift: 'Proactive → Deep Reactive',
        role: { original: 'Forward', projected: 'Isolated Counter Outlet', probability: 40 },
        entropy: { original: 0.72, projected: 0.35 },
        confidence: 89,
        explanation: 'Heavy defensive sweeper system prioritizing extreme rigidity. Player is starved of possession and relied upon entirely for chaotic long-ball transitions.',
        valuation: '- €15.0M (Systemic isolation)',
        radarData: [
            { metric: 'Width', target: 30, original: 60 },
            { metric: 'Cent. Density', target: 90, original: 55 },
            { metric: 'Press Intense', target: 20, original: 40 },
            { metric: 'Verticality', target: 85, original: 75 },
            { metric: 'Line Height', target: 10, original: 50 },
            { metric: 'Tempo', target: 40, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '-30%', trend: -35, icon: Layout },
            { label: 'Shot Volume', value: '-40%', trend: -45, icon: Target },
            { label: 'Dribble Freq', value: '+30%', trend: 35, icon: Zap },
            { label: 'xG per 90', value: '0.25 ± 0.15', trend: -50, icon: TrendingUp },
        ],
        clusters: genericClusters.deepBlock,
        mainColor: 'accent-secondary'
    },
    'Total Football (Netherlands - 1974)': {
        compatibility: 88,
        shift: 'Fixed → Absolute Fluidity',
        role: { original: 'Forward', projected: 'Universal Attacker', probability: 82 },
        entropy: { original: 0.72, projected: 0.95 },
        confidence: 76,
        explanation: 'Positional interchangeability requires extreme off-ball intelligence. Roles dissolve into fluid horizontal and vertical spatial mapping.',
        valuation: '+ €14.5M (Tactical universality)',
        radarData: [
            { metric: 'Width', target: 80, original: 60 },
            { metric: 'Cent. Density', target: 60, original: 55 },
            { metric: 'Press Intense', target: 85, original: 40 },
            { metric: 'Verticality', target: 65, original: 75 },
            { metric: 'Line Height', target: 80, original: 50 },
            { metric: 'Tempo', target: 80, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '0%', trend: 0, icon: Layout },
            { label: 'Shot Volume', value: '+15%', trend: 20, icon: Target },
            { label: 'Dribble Freq', value: '+10%', trend: 15, icon: Zap },
            { label: 'xG per 90', value: '0.75 ± 0.12', trend: 10, icon: TrendingUp },
        ],
        clusters: genericClusters.totalRotations,
        mainColor: 'accent-primary'
    },
    'Structured Possession with Verticality (Manchester City - 2020/21)': {
        compatibility: 92,
        shift: 'Free Roam → Zonal Constraint',
        role: { original: 'Forward', projected: 'Pocket Operator', probability: 88 },
        entropy: { original: 0.72, projected: 0.62 },
        confidence: 90,
        explanation: 'High build-up control combined with calculated vertical triggers. Player shifts precisely between holding maximum width and collapsing into central overloads.',
        valuation: '+ €16.0M (Efficiency normalization)',
        radarData: [
            { metric: 'Width', target: 90, original: 60 },
            { metric: 'Cent. Density', target: 80, original: 55 },
            { metric: 'Press Intense', target: 85, original: 40 },
            { metric: 'Verticality', target: 50, original: 75 },
            { metric: 'Line Height', target: 80, original: 50 },
            { metric: 'Tempo', target: 75, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '+14%', trend: 18, icon: Layout },
            { label: 'Shot Volume', value: '+18%', trend: 22, icon: Target },
            { label: 'Dribble Freq', value: '-12%', trend: -10, icon: Zap },
            { label: 'xG per 90', value: '0.80 ± 0.08', trend: 14, icon: TrendingUp },
        ],
        clusters: genericClusters.highCentral,
        mainColor: 'accent-secondary'
    },
    'Double Pivot Midfield Control (Bayern Munich - 2014/15)': {
        compatibility: 85,
        shift: 'Chaotic → Structured Circulation',
        role: { original: 'Forward', projected: 'Between-Lines Receiver', probability: 75 },
        entropy: { original: 0.72, projected: 0.65 },
        confidence: 86,
        explanation: 'Two deep holding mids provide ultimate ball circulation security. Attacking players are freed to find structured pockets between opposition lines.',
        valuation: '+ €10.2M (Risk reduction)',
        radarData: [
            { metric: 'Width', target: 85, original: 60 },
            { metric: 'Cent. Density', target: 85, original: 55 },
            { metric: 'Press Intense', target: 80, original: 40 },
            { metric: 'Verticality', target: 45, original: 75 },
            { metric: 'Line Height', target: 75, original: 50 },
            { metric: 'Tempo', target: 65, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '+12%', trend: 15, icon: Layout },
            { label: 'Shot Volume', value: '+8%', trend: 10, icon: Target },
            { label: 'Dribble Freq', value: '-8%', trend: -5, icon: Zap },
            { label: 'xG per 90', value: '0.70 ± 0.06', trend: 6, icon: TrendingUp },
        ],
        clusters: genericClusters.midfieldPress,
        mainColor: 'accent-primary'
    },
    'Rapid Transition / Low Block Hybrid (Leicester City - 2015/16)': {
        compatibility: 70,
        shift: 'Possession → Lightning Counter',
        role: { original: 'Forward', projected: 'In-behind Sprinter', probability: 60 },
        entropy: { original: 0.72, projected: 0.48 },
        confidence: 84,
        explanation: 'Deep defense absorbs pressure to artificially create space behind opposition lines. Fast counters rely heavily on central runners anticipating long defensive clearances.',
        valuation: '- €2.0M (Possession stripping)',
        radarData: [
            { metric: 'Width', target: 50, original: 60 },
            { metric: 'Cent. Density', target: 70, original: 55 },
            { metric: 'Press Intense', target: 50, original: 40 },
            { metric: 'Verticality', target: 95, original: 75 },
            { metric: 'Line Height', target: 30, original: 50 },
            { metric: 'Tempo', target: 85, original: 80 },
        ],
        stats: [
            { label: 'Central Touch %', value: '-5%', trend: -8, icon: Layout },
            { label: 'Shot Volume', value: '+5%', trend: 12, icon: Target },
            { label: 'Dribble Freq', value: '+20%', trend: 25, icon: Zap },
            { label: 'xG per 90', value: '0.60 ± 0.18', trend: 5, icon: TrendingUp },
        ],
        clusters: genericClusters.verticalFluid,
        mainColor: 'accent-secondary'
    }
};

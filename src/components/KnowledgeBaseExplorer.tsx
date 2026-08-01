import React, { useState } from 'react';
import { Search, BookOpen, ShieldAlert, TrendingUp, Target, Sparkles, Filter, CheckCircle2, ChevronDown, ChevronRight, Database, ArrowRight } from 'lucide-react';
import { PillarId } from '../business-engine/assessment-engine/types';
import { getFlatKnowledgeBase, searchKnowledgeBase, getAllRulesForPillar } from '../business-engine/rule-database/lookup';
import { BusinessRuleEntry, ScoreBandKey } from '../business-engine/rule-database/types';
import { PILLAR_NAMES } from '../business-engine/business-intelligence/rules';

const ALL_PILLARS: { id: PillarId; name: string }[] = [
  { id: PillarId.LEADERSHIP, name: 'Leadership & Vision' },
  { id: PillarId.STRATEGY, name: 'Sales & Revenue' },
  { id: PillarId.SALES, name: 'Marketing & Customer Growth' },
  { id: PillarId.OPERATIONS, name: 'Operations & Process' },
  { id: PillarId.FINANCE, name: 'Finance & Business Performance' },
  { id: PillarId.HUMAN_RESOURCES, name: 'People & Leadership' },
  { id: PillarId.TECHNOLOGY, name: 'Technology & Business Innovation' },
];

const SCORE_BANDS: { key: ScoreBandKey | 'ALL'; label: string; color: string }[] = [
  { key: 'ALL', label: 'All Score Bands', color: 'bg-slate-100 text-slate-700' },
  { key: '85-100', label: '85–100 (Leader)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  { key: '70-84', label: '70–84 (Established)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
  { key: '50-69', label: '50–69 (Developing)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
  { key: '0-49', label: '0–49 (At Risk)', color: 'bg-rose-100 text-rose-800 border-rose-300' },
];

export const KnowledgeBaseExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<PillarId | 'ALL'>('ALL');
  const [selectedBand, setSelectedBand] = useState<ScoreBandKey | 'ALL'>('ALL');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const flatDatabase = getFlatKnowledgeBase();

  const filteredRules = flatDatabase.filter((entry) => {
    // Pillar match
    if (selectedPillar !== 'ALL' && entry.pillarId !== selectedPillar) {
      return false;
    }
    // Score band match
    if (selectedBand !== 'ALL' && entry.scoreBand !== selectedBand) {
      return false;
    }
    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchText = [
        entry.pillarName,
        entry.recommendationCode,
        entry.coreStrength,
        entry.competitiveAdvantage,
        entry.typicalBusinessSituation,
        entry.gaps.primaryGap,
        entry.gaps.missingSystems,
        entry.risk.riskCategory,
        entry.risk.mitigationStrategy,
        entry.opportunity.title,
        entry.recommendation.strategicRecommendation,
      ]
        .join(' ')
        .toLowerCase();

      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  const getBandBadgeClass = (band: ScoreBandKey) => {
    switch (band) {
      case '85-100':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case '70-84':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case '50-69':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case '0-49':
        return 'bg-rose-50 text-rose-700 border-rose-200';
    }
  };

  const getRiskBadgeClass = (level: string) => {
    if (level.includes('Critical')) return 'bg-rose-50 text-rose-700 border-rose-200';
    if (level.includes('High')) return 'bg-amber-50 text-amber-700 border-amber-200';
    if (level.includes('Medium')) return 'bg-blue-50 text-blue-700 border-blue-200';
    return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  };

  return (
    <div className="space-y-8 bg-slate-50/50 p-4 sm:p-6 lg:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold uppercase tracking-wider">
              <Database className="w-3.5 h-3.5 text-indigo-400" />
              KRG ONE Knowledge Base
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Business Rule Database
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Proprietary consulting rules spanning 7 Growth Pillars and 4 Score Bands (28 structured rule profiles). Powers deterministic diagnostic intelligence, risk evaluation, and strategic recommendations.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-5 py-4 rounded-xl border border-white/10 text-center min-w-[180px]">
            <div className="text-2xl font-black text-indigo-300">28 Rules</div>
            <div className="text-xs font-medium text-slate-300 uppercase tracking-wide">7 Pillars × 4 Score Bands</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rules by keyword, recommendation code (e.g. LDR-01), pillar, gap, or strategy..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
          />
        </div>

        {/* Pillar Filter Tabs */}
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
            Filter by Growth Pillar
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedPillar('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedPillar === 'ALL'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Pillars (7)
            </button>
            {ALL_PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedPillar === p.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Score Band Filter Buttons */}
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
            Filter by Score Band
          </label>
          <div className="flex flex-wrap gap-2">
            {SCORE_BANDS.map((b) => (
              <button
                key={b.key}
                onClick={() => setSelectedBand(b.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  selectedBand === b.key
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rules Result Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold">
        <span>
          Showing <strong className="text-slate-900">{filteredRules.length}</strong> of 28 knowledge base rules
        </span>
        {(selectedPillar !== 'ALL' || selectedBand !== 'ALL' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedPillar('ALL');
              setSelectedBand('ALL');
              setSearchQuery('');
            }}
            className="text-indigo-600 hover:underline font-bold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredRules.map((entry) => {
          const isExpanded = expandedCardId === entry.id;

          return (
            <div
              key={entry.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-all duration-200 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-5 sm:p-6 bg-slate-50/50 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-indigo-900 text-indigo-100 rounded-lg text-xs font-mono font-bold tracking-wide">
                    {entry.recommendationCode}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{entry.pillarName}</h3>
                    <div className="text-xs text-slate-500 font-medium">Score Range: {entry.scoreRange.min} – {entry.scoreRange.max} / 100</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${getBandBadgeClass(
                      entry.scoreBand
                    )}`}
                  >
                    Band: {entry.scoreBand} ({entry.maturityBand})
                  </span>
                  <button
                    onClick={() => setExpandedCardId(isExpanded ? null : entry.id)}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors"
                    title={isExpanded ? 'Collapse Rule' : 'Expand Full Details'}
                  >
                    {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Primary Content Summary */}
              <div className="p-5 sm:p-6 space-y-4 text-sm text-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100/80">
                    <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      Core Strength & Advantage
                    </div>
                    <div className="font-bold text-emerald-950 mb-1">{entry.coreStrength}</div>
                    <p className="text-xs text-emerald-900/80 leading-relaxed">{entry.competitiveAdvantage}</p>
                  </div>

                  <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100/80">
                    <div className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-indigo-600" />
                      Strategic Recommendation ({entry.recommendationCode})
                    </div>
                    <div className="font-bold text-indigo-950 mb-1">{entry.recommendation.strategicRecommendation}</div>
                    <div className="text-xs text-indigo-900/80">
                      <strong>Target KPI:</strong> {entry.recommendation.targetKPI}
                    </div>
                  </div>
                </div>

                {/* Typical Business Situation */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Typical Business Situation
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {entry.typicalBusinessSituation}
                  </p>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
                    {/* Gaps Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-amber-50/40 p-4 rounded-xl border border-amber-200/60">
                      <div>
                        <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                          Primary Diagnostic Gap
                        </div>
                        <p className="text-xs font-semibold text-amber-950">{entry.gaps.primaryGap}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                          Missing Systems
                        </div>
                        <p className="text-xs text-amber-900/90">{entry.gaps.missingSystems}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                          Organizational Gap
                        </div>
                        <p className="text-xs text-amber-900/90">{entry.gaps.organizationalGap}</p>
                      </div>
                    </div>

                    {/* Risk & Opportunity Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1">
                            <ShieldAlert className="w-4 h-4 text-rose-600" />
                            Risk Evaluation
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getRiskBadgeClass(entry.risk.riskLevel)}`}>
                            {entry.risk.riskLevel}
                          </span>
                        </div>
                        <div className="font-bold text-rose-950 text-xs mb-1">{entry.risk.riskCategory}</div>
                        <p className="text-xs text-rose-900/80 mb-2 leading-relaxed">{entry.risk.riskDescription}</p>
                        <div className="text-xs text-rose-900 font-medium bg-white/80 p-2.5 rounded-lg border border-rose-200/60">
                          <strong>Mitigation Strategy:</strong> {entry.risk.mitigationStrategy}
                        </div>
                      </div>

                      <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            Suggested Opportunity
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                            {entry.opportunity.opportunityType}
                          </span>
                        </div>
                        <div className="font-bold text-blue-950 text-xs mb-1">{entry.opportunity.title}</div>
                        <p className="text-xs text-blue-900/80 mb-2 leading-relaxed">{entry.opportunity.description}</p>
                        <div className="text-xs text-blue-900 font-medium bg-white/80 p-2.5 rounded-lg border border-blue-200/60">
                          <strong>Potential Impact:</strong> {entry.opportunity.potentialImpact}
                        </div>
                      </div>
                    </div>

                    {/* Recommendation Full Details */}
                    <div className="bg-indigo-950 text-white p-4 rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-xs text-indigo-300 font-mono font-bold">
                        <span>RECOMMENDATION DETAILS — {entry.recommendationCode}</span>
                        <span>Timeframe: {entry.recommendation.actionTimeframeDays} Days</span>
                      </div>
                      <p className="text-xs text-indigo-100 font-medium leading-relaxed">
                        {entry.recommendation.strategicRecommendation}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-indigo-900">
                        <div>
                          <span className="text-indigo-400 font-semibold block">Target KPI:</span>
                          <span className="text-white font-medium">{entry.recommendation.targetKPI}</span>
                        </div>
                        <div>
                          <span className="text-indigo-400 font-semibold block">Expected Outcome:</span>
                          <span className="text-white font-medium">{entry.recommendation.expectedOutcome}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

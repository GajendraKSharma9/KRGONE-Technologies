/**
 * Business Engine - 7 Core Operational Pillars
 */

import { PillarDefinition, PillarId } from './types';

export const PILLARS: Record<PillarId, PillarDefinition> = {
  [PillarId.LEADERSHIP]: {
    id: PillarId.LEADERSHIP,
    code: 'LDR',
    name: 'Leadership & Vision',
    description: 'Founder dependency, decision decentralization, strategic vision, and governance frameworks.',
    weight: 0.15, // 15%
    iconName: 'Crown',
  },
  [PillarId.STRATEGY]: {
    id: PillarId.STRATEGY,
    code: 'STR',
    name: 'Sales & Revenue',
    description: 'Competitive differentiation, revenue streams, sales strategy, and market goals.',
    weight: 0.15, // 15%
    iconName: 'Target',
  },
  [PillarId.SALES]: {
    id: PillarId.SALES,
    code: 'SLS',
    name: 'Marketing & Customer Growth',
    description: 'Lead generation predictability, conversion funnel efficiency, CRM usage, and brand growth.',
    weight: 0.15, // 15%
    iconName: 'TrendingUp',
  },
  [PillarId.OPERATIONS]: {
    id: PillarId.OPERATIONS,
    code: 'OPS',
    name: 'Operations & Process',
    description: 'SOP documentation, quality control consistency, capacity bottlenecks, and operational playbooks.',
    weight: 0.15, // 15%
    iconName: 'Settings',
  },
  [PillarId.FINANCE]: {
    id: PillarId.FINANCE,
    code: 'FIN',
    name: 'Finance & Business Performance',
    description: 'Gross & net profit tracking, working capital management, budgeting discipline, and margin leakage.',
    weight: 0.15, // 15%
    iconName: 'DollarSign',
  },
  [PillarId.HUMAN_RESOURCES]: {
    id: PillarId.HUMAN_RESOURCES,
    code: 'HR',
    name: 'People & Leadership',
    description: 'Talent retention, KPI accountability frameworks, performance management, and team alignment.',
    weight: 0.125, // 12.5%
    iconName: 'Users',
  },
  [PillarId.TECHNOLOGY]: {
    id: PillarId.TECHNOLOGY,
    code: 'TEC',
    name: 'Technology & Business Innovation',
    description: 'Software stack integration, data analytics, process automation, and digital asset security.',
    weight: 0.125, // 12.5%
    iconName: 'Cpu',
  },
};

export const PILLAR_LIST: PillarDefinition[] = Object.values(PILLARS);

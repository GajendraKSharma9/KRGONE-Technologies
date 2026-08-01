/**
 * Business Engine - Business Profile Interfaces
 */

import {
  Industry,
  BusinessCategory,
  BusinessModel,
  EmployeeRange,
  AnnualRevenueRange,
  PrimaryBusinessGoal,
  BiggestBusinessChallenge,
  PreferredLanguage,
} from './enums';

/**
 * System Identifiers
 */
export interface ProfileIdentifiers {
  assessmentId: string;
  clientId: string;
  reportId: string;
}

/**
 * Section 1 — Company Information
 */
export interface CompanyInformation {
  companyName: string;
  contactPerson: string;
  mobileNumber: string;
  email: string;
  city: string;
  state: string;
  preferredLanguage: PreferredLanguage;
}

/**
 * Section 2 — Business Profile Details
 */
export interface BusinessDetails {
  industry: Industry;
  businessCategory: BusinessCategory;
  businessModel: BusinessModel;
  yearEstablished: number | string;
  numberOfEmployees: EmployeeRange;
}

/**
 * Section 3 — Business Size
 */
export interface BusinessSize {
  annualRevenueRange: AnnualRevenueRange;
}

/**
 * Section 4 — Primary Business Goal Objective
 */
export interface PrimaryObjective {
  primaryGoal: PrimaryBusinessGoal;
}

/**
 * Section 5 — Biggest Business Challenge
 */
export interface BiggestChallenge {
  biggestChallenge: BiggestBusinessChallenge;
}

/**
 * Core Business Profile Data Object
 * Single source of truth for all business analysis.
 */
export interface BusinessProfile {
  identifiers: ProfileIdentifiers;
  company: CompanyInformation;
  business: BusinessDetails;
  size: BusinessSize;
  objective: PrimaryObjective;
  challenge: BiggestChallenge;
}

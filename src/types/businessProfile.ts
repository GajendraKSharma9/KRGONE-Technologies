/**
 * Business Profile Data Architecture (Version 1)
 * Single source of truth for Business Profile data schema.
 */

// ==========================================
// SECTION 1: ENUMS & CONSTANTS
// ==========================================

export enum BusinessModel {
  B2B = 'B2B',
  B2C = 'B2C',
  HYBRID = 'Hybrid',
}

export enum AnnualRevenueRange {
  UNDER_50L = 'Under ₹50 Lakhs',
  RUPEES_50L_TO_1CR = '₹50 Lakhs - ₹1 Crore',
  RUPEES_1CR_TO_5CR = '₹1 Crore - ₹5 Crores',
  RUPEES_5CR_TO_25CR = '₹5 Crores - ₹25 Crores',
  RUPEES_25CR_TO_100CR = '₹25 Crores - ₹100 Crores',
  ABOVE_100CR = 'Above ₹100 Crores',
}

export enum PrimaryBusinessGoal {
  INCREASE_REVENUE = 'Increase Revenue',
  INCREASE_PROFIT = 'Increase Profit',
  IMPROVE_SALES = 'Improve Sales',
  SCALE_BUSINESS = 'Scale Business',
  REDUCE_COSTS = 'Reduce Costs',
  DIGITAL_TRANSFORMATION = 'Digital Transformation',
  BUILD_BUSINESS_SYSTEMS = 'Build Business Systems',
  OTHER = 'Other',
}

export enum BiggestBusinessChallenge {
  SALES = 'Sales',
  MARKETING = 'Marketing',
  OPERATIONS = 'Operations',
  FINANCE = 'Finance',
  HR = 'HR',
  TECHNOLOGY = 'Technology',
  SCALING = 'Scaling',
  OTHER = 'Other',
}

export const ANNUAL_REVENUE_OPTIONS: AnnualRevenueRange[] = [
  AnnualRevenueRange.UNDER_50L,
  AnnualRevenueRange.RUPEES_50L_TO_1CR,
  AnnualRevenueRange.RUPEES_1CR_TO_5CR,
  AnnualRevenueRange.RUPEES_5CR_TO_25CR,
  AnnualRevenueRange.RUPEES_25CR_TO_100CR,
  AnnualRevenueRange.ABOVE_100CR,
];

export const BUSINESS_MODEL_OPTIONS: BusinessModel[] = [
  BusinessModel.B2B,
  BusinessModel.B2C,
  BusinessModel.HYBRID,
];

export const PRIMARY_GOAL_OPTIONS: PrimaryBusinessGoal[] = [
  PrimaryBusinessGoal.INCREASE_REVENUE,
  PrimaryBusinessGoal.INCREASE_PROFIT,
  PrimaryBusinessGoal.IMPROVE_SALES,
  PrimaryBusinessGoal.SCALE_BUSINESS,
  PrimaryBusinessGoal.REDUCE_COSTS,
  PrimaryBusinessGoal.DIGITAL_TRANSFORMATION,
  PrimaryBusinessGoal.BUILD_BUSINESS_SYSTEMS,
  PrimaryBusinessGoal.OTHER,
];

export const BIGGEST_CHALLENGE_OPTIONS: BiggestBusinessChallenge[] = [
  BiggestBusinessChallenge.SALES,
  BiggestBusinessChallenge.MARKETING,
  BiggestBusinessChallenge.OPERATIONS,
  BiggestBusinessChallenge.FINANCE,
  BiggestBusinessChallenge.HR,
  BiggestBusinessChallenge.TECHNOLOGY,
  BiggestBusinessChallenge.SCALING,
  BiggestBusinessChallenge.OTHER,
];

// ==========================================
// SECTION 2: TYPES & INTERFACES
// ==========================================

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
}

/**
 * Section 2 — Business Profile
 */
export interface BusinessProfileDetails {
  industry: string;
  businessCategory: string;
  businessModel: BusinessModel | string;
  yearEstablished: number | string;
  numberOfEmployees: number | string;
}

/**
 * Section 3 — Business Size
 */
export interface BusinessSize {
  annualRevenueRange: AnnualRevenueRange | string;
}

/**
 * Section 4 — Primary Business Goal
 */
export interface PrimaryGoalSelection {
  primaryGoal: PrimaryBusinessGoal | string;
}

/**
 * Section 5 — Biggest Business Challenge
 */
export interface BiggestChallengeSelection {
  biggestChallenge: BiggestBusinessChallenge | string;
}

/**
 * Unified Business Profile Schema
 * Single source of truth for all future business analysis.
 */
export interface BusinessProfileSchema {
  companyInfo: CompanyInformation;
  businessProfile: BusinessProfileDetails;
  businessSize: BusinessSize;
  primaryGoal: PrimaryGoalSelection;
  biggestChallenge: BiggestChallengeSelection;
  createdAt?: string;
  updatedAt?: string;
}

// ==========================================
// SECTION 3: DEFAULT OBJECTS
// ==========================================

export const defaultCompanyInformation: CompanyInformation = {
  companyName: '',
  contactPerson: '',
  mobileNumber: '',
  email: '',
  city: '',
  state: '',
};

export const defaultBusinessProfileDetails: BusinessProfileDetails = {
  industry: '',
  businessCategory: '',
  businessModel: BusinessModel.B2B,
  yearEstablished: '',
  numberOfEmployees: '',
};

export const defaultBusinessSize: BusinessSize = {
  annualRevenueRange: AnnualRevenueRange.RUPEES_1CR_TO_5CR,
};

export const defaultPrimaryGoalSelection: PrimaryGoalSelection = {
  primaryGoal: PrimaryBusinessGoal.SCALE_BUSINESS,
};

export const defaultBiggestChallengeSelection: BiggestChallengeSelection = {
  biggestChallenge: BiggestBusinessChallenge.SALES,
};

export const defaultBusinessProfileSchema: BusinessProfileSchema = {
  companyInfo: defaultCompanyInformation,
  businessProfile: defaultBusinessProfileDetails,
  businessSize: defaultBusinessSize,
  primaryGoal: defaultPrimaryGoalSelection,
  biggestChallenge: defaultBiggestChallengeSelection,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// ==========================================
// SECTION 4: VALIDATION SCHEMA & HELPERS
// ==========================================

export interface BusinessProfileValidationError {
  field: string;
  message: string;
}

export interface BusinessProfileValidationResult {
  isValid: boolean;
  errors: BusinessProfileValidationError[];
}

/**
 * Client-side validation function for BusinessProfileSchema
 */
export function validateBusinessProfile(
  profile: BusinessProfileSchema
): BusinessProfileValidationResult {
  const errors: BusinessProfileValidationError[] = [];

  // Section 1 Validation
  if (!profile.companyInfo.companyName?.trim()) {
    errors.push({ field: 'companyInfo.companyName', message: 'Company name is required.' });
  }
  if (!profile.companyInfo.contactPerson?.trim()) {
    errors.push({ field: 'companyInfo.contactPerson', message: 'Contact person is required.' });
  }
  if (!profile.companyInfo.mobileNumber?.trim()) {
    errors.push({ field: 'companyInfo.mobileNumber', message: 'Mobile number is required.' });
  } else if (!/^[0-9+\-\s()]{7,15}$/.test(profile.companyInfo.mobileNumber.trim())) {
    errors.push({ field: 'companyInfo.mobileNumber', message: 'Invalid mobile number format.' });
  }
  if (!profile.companyInfo.email?.trim()) {
    errors.push({ field: 'companyInfo.email', message: 'Email address is required.' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.companyInfo.email.trim())) {
    errors.push({ field: 'companyInfo.email', message: 'Invalid email address format.' });
  }
  if (!profile.companyInfo.city?.trim()) {
    errors.push({ field: 'companyInfo.city', message: 'City is required.' });
  }
  if (!profile.companyInfo.state?.trim()) {
    errors.push({ field: 'companyInfo.state', message: 'State is required.' });
  }

  // Section 2 Validation
  if (!profile.businessProfile.industry?.trim()) {
    errors.push({ field: 'businessProfile.industry', message: 'Industry is required.' });
  }
  if (!profile.businessProfile.businessCategory?.trim()) {
    errors.push({ field: 'businessProfile.businessCategory', message: 'Business category is required.' });
  }
  if (!profile.businessProfile.businessModel) {
    errors.push({ field: 'businessProfile.businessModel', message: 'Business model selection is required.' });
  }
  if (!profile.businessProfile.yearEstablished) {
    errors.push({ field: 'businessProfile.yearEstablished', message: 'Year established is required.' });
  }
  if (!profile.businessProfile.numberOfEmployees) {
    errors.push({ field: 'businessProfile.numberOfEmployees', message: 'Number of employees is required.' });
  }

  // Section 3 Validation
  if (!profile.businessSize.annualRevenueRange) {
    errors.push({ field: 'businessSize.annualRevenueRange', message: 'Annual revenue range is required.' });
  }

  // Section 4 Validation
  if (!profile.primaryGoal.primaryGoal) {
    errors.push({ field: 'primaryGoal.primaryGoal', message: 'Primary business goal is required.' });
  }

  // Section 5 Validation
  if (!profile.biggestChallenge.biggestChallenge) {
    errors.push({ field: 'biggestChallenge.biggestChallenge', message: 'Biggest business challenge is required.' });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

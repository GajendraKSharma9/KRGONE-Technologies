/**
 * Business Engine - Business Profile Validation Rules
 */

import { BusinessProfile } from './interfaces';
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

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Validates the BusinessProfile data structure
 */
export function validateBusinessProfile(profile: BusinessProfile): ValidationResult {
  const errors: ValidationError[] = [];
  const currentYear = new Date().getFullYear();

  // Company Information Validation
  if (!profile.company.companyName?.trim()) {
    errors.push({ field: 'company.companyName', message: 'Company Name is required.' });
  }

  if (!profile.company.contactPerson?.trim()) {
    errors.push({ field: 'company.contactPerson', message: 'Contact Person is required.' });
  }

  if (!profile.company.mobileNumber?.trim()) {
    errors.push({ field: 'company.mobileNumber', message: 'Mobile Number is required.' });
  } else if (!/^[0-9+\-\s()]{7,15}$/.test(profile.company.mobileNumber.trim())) {
    errors.push({ field: 'company.mobileNumber', message: 'Invalid Mobile Number format.' });
  }

  if (!profile.company.email?.trim()) {
    errors.push({ field: 'company.email', message: 'Email Address is required.' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.company.email.trim())) {
    errors.push({ field: 'company.email', message: 'Invalid Email Address format.' });
  }

  if (!profile.company.city?.trim()) {
    errors.push({ field: 'company.city', message: 'City is required.' });
  }

  if (!profile.company.state?.trim()) {
    errors.push({ field: 'company.state', message: 'State is required.' });
  }

  if (!Object.values(PreferredLanguage).includes(profile.company.preferredLanguage)) {
    errors.push({ field: 'company.preferredLanguage', message: 'Invalid Preferred Language selection.' });
  }

  // Business Details Validation
  if (!Object.values(Industry).includes(profile.business.industry)) {
    errors.push({ field: 'business.industry', message: 'Invalid Industry selection.' });
  }

  if (!Object.values(BusinessCategory).includes(profile.business.businessCategory)) {
    errors.push({ field: 'business.businessCategory', message: 'Invalid Business Category selection.' });
  }

  if (!Object.values(BusinessModel).includes(profile.business.businessModel)) {
    errors.push({ field: 'business.businessModel', message: 'Invalid Business Model selection.' });
  }

  const year = Number(profile.business.yearEstablished);
  if (isNaN(year) || year < 1900 || year > currentYear) {
    errors.push({
      field: 'business.yearEstablished',
      message: `Year Established must be a valid year between 1900 and ${currentYear}.`,
    });
  }

  if (!Object.values(EmployeeRange).includes(profile.business.numberOfEmployees)) {
    errors.push({ field: 'business.numberOfEmployees', message: 'Invalid Employee Count range selection.' });
  }

  // Business Size Validation
  if (!Object.values(AnnualRevenueRange).includes(profile.size.annualRevenueRange)) {
    errors.push({ field: 'size.annualRevenueRange', message: 'Invalid Annual Revenue Range selection.' });
  }

  // Objective Validation
  if (!Object.values(PrimaryBusinessGoal).includes(profile.objective.primaryGoal)) {
    errors.push({ field: 'objective.primaryGoal', message: 'Invalid Primary Goal selection.' });
  }

  // Challenge Validation
  if (!Object.values(BiggestBusinessChallenge).includes(profile.challenge.biggestChallenge)) {
    errors.push({ field: 'challenge.biggestChallenge', message: 'Invalid Biggest Challenge selection.' });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

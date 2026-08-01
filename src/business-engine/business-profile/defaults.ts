/**
 * Business Engine - Business Profile Default Objects
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

import {
  ProfileIdentifiers,
  CompanyInformation,
  BusinessDetails,
  BusinessSize,
  PrimaryObjective,
  BiggestChallenge,
  BusinessProfile,
} from './interfaces';

export const defaultProfileIdentifiers: ProfileIdentifiers = {
  assessmentId: '',
  clientId: '',
  reportId: '',
};

export const defaultCompanyInformation: CompanyInformation = {
  companyName: '',
  contactPerson: '',
  mobileNumber: '',
  email: '',
  city: '',
  state: '',
  preferredLanguage: PreferredLanguage.ENGLISH,
};

export const defaultBusinessDetails: BusinessDetails = {
  industry: Industry.IT_SOFTWARE,
  businessCategory: BusinessCategory.SERVICE_PROVIDER,
  businessModel: BusinessModel.B2B,
  yearEstablished: new Date().getFullYear(),
  numberOfEmployees: EmployeeRange.RANGE_11_25,
};

export const defaultBusinessSize: BusinessSize = {
  annualRevenueRange: AnnualRevenueRange.RUPEES_1CR_TO_5CR,
};

export const defaultPrimaryObjective: PrimaryObjective = {
  primaryGoal: PrimaryBusinessGoal.SCALE_BUSINESS,
};

export const defaultBiggestChallenge: BiggestChallenge = {
  biggestChallenge: BiggestBusinessChallenge.SALES,
};

export const defaultBusinessProfile: BusinessProfile = {
  identifiers: defaultProfileIdentifiers,
  company: defaultCompanyInformation,
  business: defaultBusinessDetails,
  size: defaultBusinessSize,
  objective: defaultPrimaryObjective,
  challenge: defaultBiggestChallenge,
};

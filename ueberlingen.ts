export type ueberlingen = {
  patID: {
    type: string,
    required: true,
  },
  firstTime: {
    type: string,
    required: true,
  },
  gender: {
    type: string,
    required: true,
  },
  title: {
    type: string,
    required: false,
  },
  lastName: {
    type: string,
    required: true,
    mandatory: true,
  },
  firstName: {
    type: string,
    required: true,
    mandatory: true,
  },
  email: {
    type: string,
    required: true,
  },
  birthDate: {
    type: string,
    required: true,
  },
  birthPlace: {
    type: string,
    required: true,
  },
  nationality: {
    type: string,
    required: true,
  },
  job: {
    type: string,
    required: false,
  },
  addressPLZ: {
    type: string,
    required: true,
  },
  addressResidency: {
    type: string,
    required: true,
  },
  addressStreet: {
    type: string,
    required: true,
  },
  addressCountry: {
    type: string,
    required: true,
  },
  contactPhone: {
    type: string,
    required: true,
  },
  contactOtherPhoneNumber: {
    type: string,
    required: false,
  },
  contactFax: {
    type: string,
    required: false,
  },
  emergencyContactName: {
    type: string,
    required: false,
  },
  emergencyContactPhone: {
    type: string,
    required: false,
  },
  languageGerman: {
    type: boolean,
    required: true,
  },
  languageEnglish: {
    type: boolean,
    required: true,
  },
  languageFrench: {
    type: boolean,
    required: true,
  },
  languageSpanish: {
    type: boolean,
    required: true,
  },
  languageOther: {
    type: boolean,
    required: true,
  },
  languageIsNotFluent: {
    type: boolean,
    required: true,
  },
  talk: {
    type: string,
    required: false,
  },
  talkDetail: {
    type: string,
    required: true,
  },
  mediaTV: {
    type: boolean,
    required: true,
  },
  therapyType: {
    type: string,
    required: true,
  },
  therapyPlanning: {
    type: string,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  expectedTimeOfArrival: {
    type: string,
    required: true,
  },
  travellingByCar: {
    type: boolean,
    required: false,
  },
  shuttleRequested: {
    type: string,
    required: false,
  },
  disabilityFood: {
    type: string,
    required: false,
  },
  disabilityFoodDetail: {
    type: string,
    required: true,
  },
  disabilityMedAllergy: {
    type: string,
    required: false,
  },
  disabilityMedAllergyDetail: {
    type: string,
    required: true,
  },
  disabilityLocomotion: {
    type: string,
    required: false,
  },
  disabilityLocomotionDetail: {
    type: string,
    required: true,
  },
  disabilityHelp: {
    type: string,
    required: true,
  },
  disabilityHelpDetail: {
    type: string,
    required: true,
  },
  reasonPrevention: {
    type: string,
    required: true,
  },
  reasonRegeneration: {
    type: string,
    required: true,
  },
  reasonWeight: {
    type: string,
    required: true,
  },
  reasonSmoke: {
    type: string,
    required: true,
  },
  reasonWeightAndLifestyle: {
    type: string,
    required: true,
  },
  reasonAcute: {
    type: string,
    required: true,
  },
  reasonAcuteDetail: {
    type: string,
    required: true,
  },
  reasonChronic: {
    type: string,
    required: true,
  },
  reasonChronicDetail: {
    type: string,
    required: true,
  },
  reasonLocomotive: {
    type: string,
    required: true,
  },
  reasonLocomotiveDetail: {
    type: string,
    required: true,
  },
  reasonDigestive: {
    type: string,
    required: true,
  },
  reasonDigestiveDetail: {
    type: string,
    required: true,
  },
  reasonOther: {
    type: string,
    required: true,
  },
  reasonNoSpecification: {
    type: string,
    required: true,
  },
  exclusionDiabetesType1: {
    type: string,
    required: true,
  },
  exclusionDiabetesType2: {
    type: string,
    required: true,
  },
  exclusionCancer: {
    type: string,
    required: true,
  },
  exclusionDrugs: {
    type: string,
    required: true,
  },
  exclusionEatingDis: {
    type: string,
    required: true,
  },
  exclusionSevereLiverAndKidneyDisfunction: {
    type: string,
    required: true,
  },
  noExclusion: {
    type: string,
    required: true,
  },
  weight: {
    type: number,
    required: true,
  },
  height: {
    type: number,
    required: true,
  },
  medicationGeneral: {
    type: string,
    required: true,
  },
  medications: [
  {
    name: string,
    dosage_morning: number,
    dosage_afternoon: number,
    dosage_evening: number,
    dosage_night: number,
    agent:
      "medicationBloodThinning"|
      "medicationDiabetes"|
      "medicationImmuneSuppressive"|
      "medicationOther",
  },
],
  miscellaneous: {
    type: string,
    required: true,
  },
  isCovidPositive: {
    type: boolean,
    required: true,
  },
  hasCovidSymptoms: {
    type: boolean,
    required: true,
  },
  referrer: {
    type: string,
    required: true,
  },
  referrerDetail: {
    type: string,
    required: true,
  },
  legalAGB: {
    type: string,
    required: true,
  },
  legalPrivacy: {
    type: string,
    required: true,
  },
  legalContinuity: {
    type: string,
    required: true,
  },
  legalNewsletter: {
    type: string,
    required: true,
  },
  chosenLanguage: {
    type: string,
    required: true,
  },
};

export type marbellaContract = {
  patID: {
    type: string,
    required: false,
    mandatory: false,
  },
  step: {
    type: string,
    required: true,
    mandatory: false,
  },

  gender: {
    type: string,
    required: true,
    mandatory: true,
  },
  title: {
    type: string,
    required: false,
    mandatory: false,
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
  birthDate: {
    type: string,
    required: true,
    mandatory: true,
  },
  birthPlace: {
    type: string,
    required: false,
    mandatory: false,
  },
  job: {
    type: string,
    required: false,
    mandatory: false,
  },

  nationality: {
    type: string,
    required: true,
    mandatory: true,
  },

  email: {
    type: string,
    required: true,
    mandatory: true,
  },

  contactPhone: {
    type: string,
    required: true,
    mandatory: true,
  },
  contactFax: {
    type: string,
    required: false,
    mandatory: false,
  },
  contactOtherPhoneNumber: {
    type: string,
    required: false,
    mandatory: false,
  },

  emergencyContactName: {
    type: string,
    required: false,
    mandatory: false,
  },
  emergencyContactPhone: {
    type: string,
    required: true,
    mandatory: true,
  },

  languageGerman: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  languageEnglish: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  languageFrench: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  languageSpanish: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  languageOther: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  languageIsNotFluent: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  languageOtherDetail: {
    type: string,
    required: true,
    mandatory: false,
  },

  therapyType: {
    type: "fastingProgram" | "nutrionProgramme",
    required: true,
    mandatory: true,
  },

  arrivalDate: {
    type: Date,
    required: true,
    mandatory: true,
  },
  departureDate: {
    type: Date,
    required: true,
    mandatory: true,
  },

  parkingSpot: {
    type: boolean,
    required: false,
    mandatory: false,
  },

  mediaTV: {
    type: boolean,
    required: false,
    mandatory: false,
  },

  therapyPlanning: {
    type: string,
    required: false,
    mandatory: false,
  },

  improve_general_health: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  prevent_disease_longevity: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  detoxification: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reduce_pain: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reduce_dependencies: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  treat_a_disease: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reduce_inflammation: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  medical_intervention: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  weight_management: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reset_eating_habits: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  improve_physical_fitness: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  emotional_balance: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  mental_clarity: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  improve_sleep: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  overcome_difficult_life: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  wish_for_a_child: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  hormonal_balance: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  exploring_biohacking: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  seeking_spiritual_retreat: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  managing_stress: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  metabolic_flexibility: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reasonOther: {
    type: string,
    required: false,
    mandatory: false,
  },

  exclusionDiabetesType1: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  exclusionDiabetesType2: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  exclusionCancer: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  diseasesCancerDiagnosis: {
    type: string,
    required: false,
    mandatory: false,
  },
  diseasesCancerDateDiscovery: {
    type: string,
    required: false,
    mandatory: false,
  },
  exclusionDrugs: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  exclusionEatingDis: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  exclusionSevereLiverAndKidneyDisfunction: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  noExclusion: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  diseasesOther: {
    type: string,
    required: false,
    mandatory: false,
  },

  medicalCare: {
    type: boolean,
    required: false,
    mandatory: false,
  },

  uploadFile: {
    type: string,
    required: false,
    mandatory: false,
  },

  weight: {
    type: number,
    required: true,
    mandatory: true,
  },
  height: {
    type: number,
    required: true,
    mandatory: true,
  },

  allergiesAny: {
    type: boolean,
    required: true,
    mandatory: false,
  },
  allergiesAnyDetail: {
    type: string,
    required: true,
    mandatory: false,
  },

  disabilityFood: {
    type: boolean,
    required: true,
    mandatory: false,
  },
  disabilityFoodDetail: {
    type: string,
    required: true,
    mandatory: false,
  },

  allergiesDietary: {
    type: boolean,
    required: true,
    mandatory: false,
  },
  allergiesDietaryDetail: {
    type: string,
    required: true,
    mandatory: false,
  },

  disabilityLocomotion: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  disabilityLocomotionDetail: {
    type: string,
    required: true,
    mandatory: false,
  },

  disabilityHelp: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  disabilityHelpDetail: {
    type: string,
    required: true,
    mandatory: false,
  },
  medicationGeneral: {
    type: boolean,
    required: true,
    mandatory: false,
  },
  medications: [
    {
      name: string,
      dosage: number,
    }
  ],

  otherMedication: {
    type: string,
    required: false,
    mandatory: false,
  },
  miscellaneous: {
    type: string,
    required: false,
    mandatory: false,
  },

  talk: {
    type: boolean | "maybe",
    required: false,
    mandatory: false,
  },
  talkDetail: {
    type: string,
    required: true,
    mandatory: false,
  },

  referrer: {
    type: string,
    required: true,
    mandatory: true,
  },
  referrerDetail: {
    type: string,
    required: true,
    mandatory: false,
  },
  roomPreferenceFlower: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  roomPreferenceNewspaper: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  roomPreferenceYogaMat: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  roomPreferencesOther: {
    type: string,
    required: false,
    mandatory: false,
  },

  acceptPaymentCondition: {
    type: boolean,
    required: true,
    mandatory: true,
  },
  acceptTermsAndConditions: {
    type: boolean,
    required: true,
    mandatory: true,
  },


  legalContinuity: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  legalNewsletter: {
    type: boolean,
    required: false,
    mandatory: false,
  },


  trenner: {
    required: false,
    mandatory: false,
  },
  addressPLZ: {
    type: string,
    required: true,
    mandatory: true,
  },
  addressResidency: {
    type: string,
    required: true,
    mandatory: true,
  },
  addressStreet: {
    type: string,
    required: true,
    mandatory: true,
  },
  addressCountry: {
    type: string,
    required: true,
    mandatory: true,
  },
  
  fyhMicrobiomeTest: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  fyhFullBloodPanelTest: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  fyhCortisolTest: {
    type: boolean,
    required: false,
    mandatory: false,
  },
}

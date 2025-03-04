export type marbellaContract = {
  patID: {
    type: string,
    required: false,
    mandatory: false,
  },
  //  TODO:
  step: {
    type: string,
    required: true,
    mandatory: false,
    // mandatory: true,
  },
  firstTime: {
    type: string,
    required: true,
    mandatory: true,
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

  // TODO: nicht benötigt...denke ich mal
  // oder sollte es vorausgefüllt sein?
  // email: {
  //   type: string,
  //   required: true,
  // mandatory: true,
  // },

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
  // TODO: sic? emercency Contact Name is not neccessary?
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
  
  // TODO: added
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

  goalsDigestiveSystem: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsChronicDiseases: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsLocomotor: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsRecoveringAcuteIllness: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsRecoveringAcuteIllnessDetail: {
    type: string,
    required: false,
    mandatory: false,
  },
  goalsPrevention: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsSupportingRegeneration: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsWeightReduction: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsStoppingSmoking: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsEmbarkingLifeStyleChange: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsSpiritualRetreat: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsCopingLoss: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsExploringBiohacking: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsEnhancingLongevity: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsManagingStress: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsMetabolicFlexibility: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsDeeperUnderstandingBody: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsPursuing: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsNoSpecification: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  goalsOther: {
    type: string,
    required: false,
    mandatory: false,
  },

  diseasesDiabetesMellitusType1: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  diseasesDiabetesMellitusType2: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  diseasesCancer: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  diseasesCancerDiagnosis: {
    type: string,
    required: false,
    mandatory: false,
  },
  // TODO: string or date?
  diseasesCancerDateDiscovery: {
    type: string,
    required: false,
    mandatory: false,
  },
  diseasesSevereAddiction: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  diseasesEatingDisorder: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  diseasesSevereLiverDisfunction: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  diseasesNoneOfTheAbove: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  diseasesOther: {
    type: boolean,
    required: false,
    mandatory: false,
  },

  // TODO: file
  medicalCare: {
    type: boolean,
    required: false,
    mandatory: false,
  },

  // TODO: file
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

  allergiesFood: {
    type: boolean,
    required: true,
    mandatory: false,
  },
  allergiesFoodDetail: {
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

  supportMobility: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  supportMobilityDetail: {
    type: string,
    required: true,
    mandatory: false,
  },

  supportSpecialCare: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  supportSpecialCareDetail: {
    type: string,
    required: true,
    mandatory: false,
  },

  medications: [
    {
      name: string,
      dosage_morning: number,
      dosage_afternoon: number,
      dosage_evening: number,
      dosage_night: number,
      agent:
        | "medicationBloodThinning"
        | "medicationDiabetes"
        | "medicationImmuneSuppressive"
        | "medicationOther",
    },
  ],

  medicationGeneral: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  
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

  // contribution
  // TODO: should also be maybe
  contribution: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  contributionDetail: {
    type: string,
    required: true,
    mandatory: false,
  },

  // referrer: {
  //   // type: string,
  //   type:
  //     | "doctor"
  //     | "other-patient"
  //     | "family"
  //     | "firend"
  //     | "media"
  //     | "other"
  //     | "no_specification",
  //   required: true,
  //   mandatory: true,
  // },
  referrerOtherDoctor: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  referrerDetail: {
    type: string,
    required: true,
    mandatory: false,
  },
  referrerOtherPatient: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  referrerFamily: {
    type: boolean,

    required: false,
    mandatory: false,
  },
  referrerFriend: {
    type: boolean,

    required: false,
    mandatory: false,
  },
  referrerMedia: {
    type: boolean,

    required: false,
    mandatory: false,
  },
  referrerOther: {
    type: boolean,

    required: false,
    mandatory: false,
  },
  referrerNo_specification: {
    type: boolean,

    required: false,
    mandatory: false,
  },
  // roomPreferences: {
  //   type: "flowers" | "newspaper" | "yoga_mat",
  //   required: false,
  // },
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

  // TODO:
  // extraTests: {
  //   type: boolean,
  //   required: true,
  // },

  individualTreatment: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  sendingNewsletter: {
    type: boolean,
    required: false,
    mandatory: false,
  },

  // TODO:
  // hier bin ich

  // TODO: from here hardcoded
  trenner: {
    required: false,
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
  // TODO: for your health:

  fyhMicrobiomeTest: {
    type: boolean,
    required: false,
  },
  fyhFullBloodPanelTest: {
    type: boolean,
    required: false,
  },
  fyhCortisolTest: {
    type: boolean,
    required: false,
  },
}

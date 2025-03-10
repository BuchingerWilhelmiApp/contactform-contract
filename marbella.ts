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

  reasonDigestive: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reasonChronic: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reasonLocomotive: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reasonAcute: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reasonAcuteDetail: {
    type: string,
    required: false,
    mandatory: false,
  },
  reasonPrevention: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reasonRegeneration: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reasonWeight: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reasonSmoke: {
    type: boolean,
    required: false,
    mandatory: false,
  },
  reasonWeightAndLifestyle: {
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
  // TODO: string or date?
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
      dosage_morning: number,
      dosage_afternoon: number,
      dosage_evening: number,
      dosage_night: number,
      agent:
        | "medicationBloodThinning"
        | "medicationDiabetes"
        | "medicationImmuneSuppressive"
        | "medicationOther",
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

  // contribution
  // TODO: should also be maybe
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

  // TODO:
  // hier bin ich

  // patID:{
  //   required: false
  // },
  trenner: {
    required: false,
  },
  addressPLZ: {
    type: string,
    required: true,
    mandatory: true,
    hardCode: true,
  },
  addressResidency: {
    type: string,
    required: true,
    mandatory: true,
    hardCode: true,
  },
  addressStreet: {
    type: string,
    required: true,
    mandatory: true,
    hardCode: true,
  },
  addressCountry: {
    type: string,
    required: true,
    mandatory: true,
    hardCode: true,
  },
  // TODO: for your health:

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
},

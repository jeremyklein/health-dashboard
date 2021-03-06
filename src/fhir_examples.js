export const patient = {
  resourceType: "Patient",
  name: [
    {
      text: "Cersi Lannister",
      prefix: ["Queen"],
      family: ["Lannister"],
      given: ["Cersi"],
      suffix: ["Baratheon"],
      resourceType: "HumanName"
    }
  ],
  active: true,
  birthDate: "1973-10-03",
  gender: "female",
  photo: [
    {
      url:
        "http://images6.fanpop.com/image/photos/37200000/cersei-baratheon-cersei-lannister-37237651-793-1058.png"
    }
  ],
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://hl7.org/fhir/v2/0203",
            code: "MR"
          }
        ]
      },
      value: "HS65256-6"
    }
  ],
  deceasedBoolean: true,
  multipleBirthBoolean: true,
  maritalStatus: {
    text: "widow"
  },
  telecom: [
    {
      use: "home"
    },
    {
      system: "phone",
      value: "(903) 555-6473",
      use: "work"
    },
    {
      system: "email",
      value: "cersi.lannister@redkeep.io",
      use: "home"
    }
  ],
  animal: {
    species: {
      text: "Human"
    }
  },
  communication: [
    {
      language: {
        text: "English"
      }
    }
  ],
  careProvider: [
    {
      display: "",
      reference: ""
    }
  ],
  managingOrganization: {
    reference: "",
    display: ""
  }
};

export const patients = [
  {
    resourceType: "Patient",
    name: [
      {
        text: "Cersi Lannister",
        prefix: [""],
        family: ["Lannister"],
        given: ["Cersi"],
        suffix: [""],
        resourceType: "HumanName"
      }
    ],
    active: true,
    birthDate: "1973-10-03",
    gender: "female",
    photo: [
      {
        url:
          "http://images6.fanpop.com/image/photos/37200000/cersei-baratheon-cersei-lannister-37237651-793-1058.png"
      }
    ],
    telecom: [
      {
        use: "home"
      },
      {
        system: "phone",
        value: "(903) 555-6473",
        use: "work"
      },
      {
        system: "email",
        value: "cersi.lannister@redkeep.io",
        use: "home"
      }
    ],
    identifier: [
      {
        use: "usual",
        type: {
          coding: [
            {
              system: "http://hl7.org/fhir/v2/0203",
              code: "MR"
            }
          ]
        },
        value: "HS65256-6"
      }
    ],
    deceasedBoolean: false,
    multipleBirthBoolean: false,
    maritalStatus: {
      text: "widow"
    },
    animal: {
      species: {
        text: "Human"
      }
    },
    communication: [
      {
        language: {
          text: "English"
        }
      }
    ],
    careProvider: [
      {
        display: "",
        reference: ""
      }
    ],
    managingOrganization: {
      reference: "",
      display: ""
    }
  },
  {
    resourceType: "Patient",
    name: [
      {
        text: "Jamie Lannister",
        prefix: [""],
        family: ["Lannister"],
        given: ["Jamie"],
        suffix: [""],
        resourceType: "HumanName"
      }
    ],
    active: true,
    birthDate: "1970-07-27",
    gender: "male",
    photo: [
      {
        url:
          "https://img.buzzfeed.com/buzzfeed-static/static/2019-05/8/14/campaign_images/buzzfeed-prod-web-06/lets-talk-about-jaime-lannisters-betrayal-on-game-2-20101-1557340321-6_dblbig.jpg"
      }
    ],
    telecom: [
      {
        use: "home"
      },
      {
        system: "phone",
        value: "(903) 555-6474",
        use: "work"
      },
      {
        system: "email",
        value: "jamie.lannister@casterlyrock.io",
        use: "home"
      }
    ],
    identifier: [
      {
        use: "usual",
        type: {
          coding: [
            {
              system: "http://hl7.org/fhir/v2/0203",
              code: "MR"
            }
          ]
        },
        value: "HS65256-7"
      }
    ],
    deceasedBoolean: false,
    multipleBirthBoolean: false,
    maritalStatus: {
      text: "single"
    },
    animal: {
      species: {
        text: "Human"
      }
    },
    communication: [
      {
        language: {
          text: "English"
        }
      }
    ],
    careProvider: [
      {
        display: "",
        reference: ""
      }
    ],
    managingOrganization: {
      reference: "",
      display: ""
    }
  }
];

export const observations = [
  {
    resourceType: "Observation",
    id: "f001",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 6323 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 9:30:10 AM --&gt; (ongoing)</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 6.3 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>3.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>6.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>"
    },
    identifier: [
      {
        use: "official",
        system: "http://www.bmc.nl/zorgportal/identifiers/observations",
        value: "6323"
      }
    ],
    status: "final",
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "15074-8",
          display: "Glucose [Moles/volume] in Blood"
        }
      ]
    },
    subject: {
      reference: "Patient/f001",
      display: "P. van de Heuvel"
    },
    effectivePeriod: {
      start: "2013-04-02T09:30:10+01:00"
    },
    issued: "2013-04-03T15:30:10+01:00",
    performer: [
      {
        reference: "Practitioner/f005",
        display: "A. Langeveld"
      }
    ],
    valueQuantity: {
      value: 6.3,
      unit: "mmol/l",
      system: "http://unitsofmeasure.org",
      code: "mmol/L"
    },
    interpretation: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "H",
            display: "High"
          }
        ]
      }
    ],
    referenceRange: [
      {
        low: {
          value: 3.1,
          unit: "mmol/l",
          system: "http://unitsofmeasure.org",
          code: "mmol/L"
        },
        high: {
          value: 6.2,
          unit: "mmol/l",
          system: "http://unitsofmeasure.org",
          code: "mmol/L"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "f004",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f004</p><p><b>identifier</b>: 6326 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Erythrocytes [#/volume] in Blood by Automated count <span>(Details : {LOINC code '789-8' = 'Erythrocytes [#/volume] in Blood by Automated count', given as 'Erythrocytes [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 4.12 10^12/L<span> (Details: UCUM code 10*12/L = '10*12/L')</span></p><p><b>interpretation</b>: Low <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'Low'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Text</b></td></tr><tr><td>*</td><td> 12-14 y Male: 4.4 - 5.2  x  10^12/L ; 12-14 y Female: 4.2 - 4.8  x  10^12/L ; 15-17 y Male: 4.6 - 5.4  x  10^12/L ; 15-17 y Female: 4.2 - 4.8  x  10^12/L ; 18-64 y Male: 4.6 - 5.4  x  10^12/L ; 18-64 y Female: 4.0 - 4.8  x  10^12/L ; 65-74 y Male: 4.3 - 5.3  x  10^12/L ; 65-74 y Female: 4.1 - 4.9  x  10^12/L       </td></tr></table></div>"
    },
    identifier: [
      {
        use: "official",
        system: "http://www.bmc.nl/zorgportal/identifiers/observations",
        value: "6326"
      }
    ],
    status: "final",
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "789-8",
          display: "Erythrocytes [#/volume] in Blood by Automated count"
        }
      ]
    },
    subject: {
      reference: "Patient/f001",
      display: "P. van de Heuvel"
    },
    effectivePeriod: {
      start: "2013-04-02T10:30:10+01:00",
      end: "2013-04-05T10:30:10+01:00"
    },
    issued: "2013-04-03T15:30:10+01:00",
    performer: [
      {
        reference: "Practitioner/f005",
        display: "A. Langeveld"
      }
    ],
    valueQuantity: {
      value: 4.12,
      unit: "10^12/L",
      system: "http://unitsofmeasure.org",
      code: "10*12/L"
    },
    interpretation: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "L",
            display: "Low"
          }
        ]
      }
    ],
    referenceRange: [
      {
        text:
          " 12-14 y Male: 4.4 - 5.2  x  10^12/L ; 12-14 y Female: 4.2 - 4.8  x  10^12/L ; 15-17 y Male: 4.6 - 5.4  x  10^12/L ; 15-17 y Female: 4.2 - 4.8  x  10^12/L ; 18-64 y Male: 4.6 - 5.4  x  10^12/L ; 18-64 y Female: 4.0 - 4.8  x  10^12/L ; 65-74 y Male: 4.3 - 5.3  x  10^12/L ; 65-74 y Female: 4.1 - 4.9  x  10^12/L       "
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "f005",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f005</p><p><b>identifier</b>: 6327 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Hemoglobin [Mass/volume] in Blood <span>(Details : {LOINC code '718-7' = 'Hemoglobin [Mass/volume] in Blood', given as 'Hemoglobin [Mass/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 05/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 05/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 7.2 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></p><p><b>interpretation</b>: Low <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'Low'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>7.5 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></td><td>10 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></td></tr></table></div>"
    },
    identifier: [
      {
        use: "official",
        system: "http://www.bmc.nl/zorgportal/identifiers/observations",
        value: "6327"
      }
    ],
    status: "final",
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "718-7",
          display: "Hemoglobin [Mass/volume] in Blood"
        }
      ]
    },
    subject: {
      reference: "Patient/f001",
      display: "P. van de Heuvel"
    },
    effectivePeriod: {
      start: "2013-04-05T10:30:10+01:00",
      end: "2013-04-05T10:30:10+01:00"
    },
    issued: "2013-04-05T15:30:10+01:00",
    performer: [
      {
        reference: "Practitioner/f005",
        display: "A. Langeveld"
      }
    ],
    valueQuantity: {
      value: 7.2,
      unit: "g/dl",
      system: "http://unitsofmeasure.org",
      code: "g/dL"
    },
    interpretation: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "L",
            display: "Low"
          }
        ]
      }
    ],
    referenceRange: [
      {
        low: {
          value: 7.5,
          unit: "g/dl",
          system: "http://unitsofmeasure.org",
          code: "g/dL"
        },
        high: {
          value: 10,
          unit: "g/dl",
          system: "http://unitsofmeasure.org",
          code: "g/dL"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "f002",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>identifier</b>: 6324 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Base excess in Blood by calculation <span>(Details : {LOINC code '11555-0' = 'Base excess in Blood by calculation', given as 'Base excess in Blood by calculation'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 12.6 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>7.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>11.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>"
    },
    identifier: [
      {
        use: "official",
        system: "http://www.bmc.nl/zorgportal/identifiers/observations",
        value: "6324"
      }
    ],
    status: "final",
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "11555-0",
          display: "Base excess in Blood by calculation"
        }
      ]
    },
    subject: {
      reference: "Patient/f001",
      display: "P. van de Heuvel"
    },
    effectivePeriod: {
      start: "2013-04-02T10:30:10+01:00",
      end: "2013-04-05T10:30:10+01:00"
    },
    issued: "2013-04-03T15:30:10+01:00",
    performer: [
      {
        reference: "Practitioner/f005",
        display: "A. Langeveld"
      }
    ],
    valueQuantity: {
      value: 12.6,
      unit: "mmol/l",
      system: "http://unitsofmeasure.org",
      code: "mmol/L"
    },
    interpretation: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "H",
            display: "High"
          }
        ]
      }
    ],
    referenceRange: [
      {
        low: {
          value: 7.1,
          unit: "mmol/l",
          system: "http://unitsofmeasure.org",
          code: "mmol/L"
        },
        high: {
          value: 11.2,
          unit: "mmol/l",
          system: "http://unitsofmeasure.org",
          code: "mmol/L"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "f003",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>identifier</b>: 6325 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Carbon dioxide in blood <span>(Details : {LOINC code '11557-6' = 'Carbon dioxide [Partial pressure] in Blood', given as 'Carbon dioxide in blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 6.2 kPa<span> (Details: UCUM code kPa = 'kPa')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>4.8 kPa<span> (Details: UCUM code kPa = 'kPa')</span></td><td>6.0 kPa<span> (Details: UCUM code kPa = 'kPa')</span></td></tr></table></div>"
    },
    identifier: [
      {
        use: "official",
        system: "http://www.bmc.nl/zorgportal/identifiers/observations",
        value: "6325"
      }
    ],
    status: "final",
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "11557-6",
          display: "Carbon dioxide in blood"
        }
      ]
    },
    subject: {
      reference: "Patient/f001",
      display: "P. van de Heuvel"
    },
    effectivePeriod: {
      start: "2013-04-02T10:30:10+01:00",
      end: "2013-04-05T10:30:10+01:00"
    },
    issued: "2013-04-03T15:30:10+01:00",
    performer: [
      {
        reference: "Practitioner/f005",
        display: "A. Langeveld"
      }
    ],
    valueQuantity: {
      value: 6.2,
      unit: "kPa",
      system: "http://unitsofmeasure.org",
      code: "kPa"
    },
    interpretation: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "H",
            display: "High"
          }
        ]
      }
    ],
    referenceRange: [
      {
        low: {
          value: 4.8,
          unit: "kPa",
          system: "http://unitsofmeasure.org",
          code: "kPa"
        },
        high: {
          value: 6.0,
          unit: "kPa",
          system: "http://unitsofmeasure.org",
          code: "kPa"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "f204",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f204</p><p><b>identifier</b>: 1304-03720-Creatinine</p><p><b>status</b>: final</p><p><b>code</b>: Creatinine(Serum) <span>(Details : {https://intranet.aumc.nl/labtestcodes code '20005' = '20005', given as 'Creatinine(Serum)'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 2:34:00 PM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>value</b>: 122 umol/L<span> (Details: SNOMED CT code 258814008 = 'umol/L')</span></p><p><b>interpretation</b>: Serum creatinine raised <span>(Details : {SNOMED CT code '166717003' = 'Serum creatinine raised', given as 'Serum creatinine raised'}; {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>64</td><td>104</td><td>Normal Range <span>(Details : {http://terminology.hl7.org/CodeSystem/referencerange-meaning code 'normal' = 'Normal Range', given as 'Normal Range'})</span></td></tr></table></div>"
    },
    identifier: [
      {
        system: "https://intranet.aumc.nl/labvalues",
        value: "1304-03720-Creatinine"
      }
    ],
    status: "final",
    code: {
      coding: [
        {
          system: "https://intranet.aumc.nl/labtestcodes",
          code: "20005",
          display: "Creatinine(Serum)"
        }
      ]
    },
    subject: {
      reference: "Patient/f201",
      display: "Roel"
    },
    issued: "2013-04-04T14:34:00+01:00",
    performer: [
      {
        reference: "Practitioner/f202",
        display: "Luigi Maas"
      }
    ],
    valueQuantity: {
      value: 122,
      unit: "umol/L",
      system: "http://snomed.info/sct",
      code: "258814008"
    },
    interpretation: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "166717003",
            display: "Serum creatinine raised"
          },
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "H"
          }
        ]
      }
    ],
    referenceRange: [
      {
        low: {
          value: 64
        },
        high: {
          value: 104
        },
        type: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ]
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "f205",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f205</p><p><b>identifier</b>: 1304-03720-eGFR</p><p><b>status</b>: final</p><p><b>code</b>: Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span>(Details : {LOINC code '33914-3' = 'Glomerular filtration rate/1.73 sq M.predicted by Creatinine-based formula (MDRD)', given as 'Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 2:34:00 PM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>interpretation</b>: interpretation of results should be assigned based upon the level of kindey function <span>(Details )</span></p><p><b>note</b>: GFR estimating equations developed by the Modification of Diet in Renal Disease (MDRD) Study Group and the Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI)....</p><p><b>method</b>: MDRD <span>(Details : {SNOMED CT code '702668005' = 'Modification of diet in renal disease formula', given as 'MDRD'})</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span>(Details : {LOINC code '48643-1' = 'Glomerular filtration rate/1.73 sq M predicted among blacks by Creatinine-based formula (MDRD)', given as 'Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD)'})</span></p><p><b>value</b>: &gt;60 mL/min/1.73m2<span> (Details: UCUM code mL/min/{1.73_m2} = 'mL/min/{1.73_m2}')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span>(Details : {LOINC code '48642-3' = 'Glomerular filtration rate/1.73 sq M predicted among non-blacks by Creatinine-based formula (MDRD)', given as 'Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)'})</span></p><p><b>value</b>: 60 mL/min/1.73m2<span> (Details: UCUM code mL/min/{1.73_m2} = 'mL/min/{1.73_m2}')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></div>"
    },
    identifier: [
      {
        system: "https://intranet.aumc.nl/labvalues",
        value: "1304-03720-eGFR"
      }
    ],
    status: "final",
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "33914-3",
          display:
            "Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)"
        }
      ]
    },
    subject: {
      reference: "Patient/f201",
      display: "Roel"
    },
    issued: "2013-04-04T14:34:00+01:00",
    performer: [
      {
        reference: "Practitioner/f202",
        display: "Luigi Maas"
      }
    ],
    interpretation: [
      {
        text:
          "interpretation of results should be assigned based upon the level of kindey function"
      }
    ],
    note: [
      {
        text:
          "GFR estimating equations developed by the Modification of Diet in Renal Disease (MDRD) Study Group and the Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI)...."
      }
    ],
    method: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "702668005",
          display: "MDRD"
        }
      ]
    },
    component: [
      {
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "48643-1",
              display:
                "Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD)"
            }
          ]
        },
        valueQuantity: {
          value: 60,
          comparator: ">",
          unit: "mL/min/1.73m2",
          system: "http://unitsofmeasure.org",
          code: "mL/min/{1.73_m2}"
        },
        referenceRange: [
          {
            low: {
              value: 60,
              unit: "mL/min/1.73m2",
              system: "http://unitsofmeasure.org",
              code: "mL/min/{1.73_m2}"
            },
            appliesTo: [
              {
                text: "non-black/african-american"
              }
            ],
            age: {
              low: {
                value: 18,
                unit: "yrs",
                system: "http://unitsofmeasure.org",
                code: "a"
              }
            }
          }
        ]
      },
      {
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "48642-3",
              display:
                "Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)"
            }
          ]
        },
        valueQuantity: {
          value: 60,
          unit: "mL/min/1.73m2",
          system: "http://unitsofmeasure.org",
          code: "mL/min/{1.73_m2}"
        },
        referenceRange: [
          {
            low: {
              value: 60,
              unit: "mL/min/1.73m2",
              system: "http://unitsofmeasure.org",
              code: "mL/min/{1.73_m2}"
            },
            age: {
              low: {
                value: 18,
                unit: "yrs",
                system: "http://unitsofmeasure.org",
                code: "a"
              }
            }
          }
        ]
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "f206",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f206</p><p><b>status</b>: final</p><p><b>code</b>: Blood culture <span>(Details : {http://acmelabs.org code '104177' = '104177', given as 'Blood culture'}; {LOINC code '600-7' = 'Bacteria identified in Blood by Culture', given as 'Bacteria identified in Blood by Culture'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 11/03/2013 10:28:00 AM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>value</b>: Staphylococcus aureus <span>(Details : {SNOMED CT code '3092008' = 'Staphylococcus aureus', given as 'Staphylococcus aureus'})</span></p><p><b>interpretation</b>: Positive <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'POS' = 'Positive)</span></p><p><b>method</b>: Blood culture for bacteria, including anaerobic screen <span>(Details : {SNOMED CT code '104177005' = 'Blood culture for bacteria, including anaerobic screen', given as 'Blood culture for bacteria, including anaerobic screen'})</span></p></div>"
    },
    status: "final",
    code: {
      coding: [
        {
          system: "http://acmelabs.org",
          code: "104177",
          display: "Blood culture"
        },
        {
          system: "http://loinc.org",
          code: "600-7",
          display: "Bacteria identified in Blood by Culture"
        }
      ]
    },
    subject: {
      reference: "Patient/f201",
      display: "Roel"
    },
    issued: "2013-03-11T10:28:00+01:00",
    performer: [
      {
        reference: "Practitioner/f202",
        display: "Luigi Maas"
      }
    ],
    valueCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "3092008",
          display: "Staphylococcus aureus"
        }
      ]
    },
    interpretation: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "POS"
          }
        ]
      }
    ],
    method: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "104177005",
          display: "Blood culture for bacteria, including anaerobic screen"
        }
      ]
    }
  },
  {
    resourceType: "Observation",
    id: "f202",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>status</b>: entered-in-error</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Temperature <span>(Details : {http://acme.lab code 'BT' = 'BT', given as 'Body temperature'}; {LOINC code '8310-5' = 'Body temperature', given as 'Body temperature'}; {LOINC code '8331-1' = 'Oral temperature', given as 'Oral temperature'}; {SNOMED CT code '56342008' = 'Temperature taking', given as 'Temperature taking'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 1:27:00 PM</p><p><b>performer</b>: <a>Practitioner/f201</a></p><p><b>value</b>: 39 degrees C<span> (Details: UCUM code Cel = 'Cel')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><p><b>bodySite</b>: Oral cavity <span>(Details : {SNOMED CT code '74262004' = 'Oral cavity', given as 'Oral cavity'})</span></p><p><b>method</b>: Oral temperature taking <span>(Details : {SNOMED CT code '89003005' = 'Oral temperature taking', given as 'Oral temperature taking'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>38.2 degrees C</td></tr></table></div>"
    },
    status: "entered-in-error",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "vital-signs",
            display: "Vital Signs"
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: "http://acme.lab",
          code: "BT",
          display: "Body temperature"
        },
        {
          system: "http://loinc.org",
          code: "8310-5",
          display: "Body temperature"
        },
        {
          system: "http://loinc.org",
          code: "8331-1",
          display: "Oral temperature"
        },
        {
          system: "http://snomed.info/sct",
          code: "56342008",
          display: "Temperature taking"
        }
      ],
      text: "Temperature"
    },
    subject: {
      reference: "Patient/f201",
      display: "Roel"
    },
    issued: "2013-04-04T13:27:00+01:00",
    performer: [
      {
        reference: "Practitioner/f201"
      }
    ],
    valueQuantity: {
      value: 39,
      unit: "degrees C",
      system: "http://unitsofmeasure.org",
      code: "Cel"
    },
    interpretation: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "H"
          }
        ]
      }
    ],
    bodySite: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "74262004",
          display: "Oral cavity"
        }
      ]
    },
    method: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "89003005",
          display: "Oral temperature taking"
        }
      ]
    },
    referenceRange: [
      {
        high: {
          value: 38.2,
          unit: "degrees C"
        }
      }
    ]
  }
];

export const observation = {
  resourceType: "Observation",
  id: "blood-pressure",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"]
  },
  text: {
    status: "generated",
    div:
      "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: blood-pressure</p><p><b>meta</b>: </p><p><b>identifier</b>: urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281</p><p><b>basedOn</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Blood pressure systolic &amp; diastolic <span>(Details : {LOINC code '85354-9' = 'Blood pressure panel with all children optional', given as 'Blood pressure panel with all children optional'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 17/09/2012</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>interpretation</b>: Below low normal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'low'})</span></p><p><b>bodySite</b>: Right arm <span>(Details : {SNOMED CT code '368209003' = 'Right upper arm', given as 'Right arm'})</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Systolic blood pressure <span>(Details : {LOINC code '8480-6' = 'Systolic blood pressure', given as 'Systolic blood pressure'}; {SNOMED CT code '271649006' = 'Systolic blood pressure', given as 'Systolic blood pressure'}; {http://acme.org/devices/clinical-codes code 'bp-s' = 'bp-s', given as 'Systolic Blood pressure'})</span></p><p><b>value</b>: 107 mmHg<span> (Details: UCUM code mm[Hg] = 'mmHg')</span></p><p><b>interpretation</b>: Normal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'N' = 'Normal', given as 'normal'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Diastolic blood pressure <span>(Details : {LOINC code '8462-4' = 'Diastolic blood pressure', given as 'Diastolic blood pressure'})</span></p><p><b>value</b>: 60 mmHg<span> (Details: UCUM code mm[Hg] = 'mmHg')</span></p><p><b>interpretation</b>: Below low normal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'low'})</span></p></blockquote></div>"
  },
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281"
    }
  ],
  basedOn: [
    {
      identifier: {
        system: "https://acme.org/identifiers",
        value: "1234"
      }
    }
  ],
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs"
        }
      ]
    }
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "85354-9",
        display: "Blood pressure panel with all children optional"
      }
    ],
    text: "Blood pressure systolic & diastolic"
  },
  subject: {
    reference: "Patient/example"
  },
  effectiveDateTime: "2012-09-17",
  performer: [
    {
      reference: "Practitioner/example"
    }
  ],
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "L",
          display: "low"
        }
      ],
      text: "Below low normal"
    }
  ],
  bodySite: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "368209003",
        display: "Right arm"
      }
    ]
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8480-6",
            display: "Systolic blood pressure"
          },
          {
            system: "http://snomed.info/sct",
            code: "271649006",
            display: "Systolic blood pressure"
          },
          {
            system: "http://acme.org/devices/clinical-codes",
            code: "bp-s",
            display: "Systolic Blood pressure"
          }
        ]
      },
      valueQuantity: {
        value: 107,
        unit: "mmHg",
        system: "http://unitsofmeasure.org",
        code: "mm[Hg]"
      },
      interpretation: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
              code: "N",
              display: "normal"
            }
          ],
          text: "Normal"
        }
      ]
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8462-4",
            display: "Diastolic blood pressure"
          }
        ]
      },
      valueQuantity: {
        value: 60,
        unit: "mmHg",
        system: "http://unitsofmeasure.org",
        code: "mm[Hg]"
      },
      interpretation: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
              code: "L",
              display: "low"
            }
          ],
          text: "Below low normal"
        }
      ]
    }
  ]
};

export const allergies = [
  {
    resourceType: "AllergyIntolerance",
    id: "medication",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medication</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical code 'active' = 'Active', given as 'Active'})</span></p><p><b>verificationStatus</b>: Unconfirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-verification code 'unconfirmed' = 'Unconfirmed', given as 'Unconfirmed'})</span></p><p><b>category</b>: medication</p><p><b>criticality</b>: high</p><p><b>code</b>: Penicillin G <span>(Details : {RxNorm code '7980' = 'Penicillin G', given as 'Penicillin G'})</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>recordedDate</b>: 01/03/2010</p><p><b>recorder</b>: <a>Practitioner/13</a></p><h3>Reactions</h3><table><tr><td>-</td><td><b>Manifestation</b></td></tr><tr><td>*</td><td>Hives <span>(Details : {SNOMED CT code '247472004' = 'Weal', given as 'Hives'})</span></td></tr></table></div>"
    },
    clinicalStatus: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          code: "active",
          display: "Active"
        }
      ]
    },
    verificationStatus: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          code: "unconfirmed",
          display: "Unconfirmed"
        }
      ]
    },
    category: ["medication"],
    criticality: "high",
    code: {
      coding: [
        {
          system: "http://www.nlm.nih.gov/research/umls/rxnorm",
          code: "7980",
          display: "Penicillin G"
        }
      ]
    },
    patient: {
      reference: "Patient/example"
    },
    recordedDate: "2010-03-01",
    recorder: {
      reference: "Practitioner/13"
    },
    reaction: [
      {
        manifestation: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "247472004",
                display: "Hives"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    resourceType: "AllergyIntolerance",
    id: "example",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 49476534</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical code 'active' = 'Active', given as 'Active'})</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-verification code 'confirmed' = 'Confirmed', given as 'Confirmed'})</span></p><p><b>type</b>: allergy</p><p><b>category</b>: food</p><p><b>criticality</b>: high</p><p><b>code</b>: Cashew nuts <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew nuts'})</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>onset</b>: 01/01/2004</p><p><b>recordedDate</b>: 09/10/2014 2:58:00 PM</p><p><b>recorder</b>: <a>Practitioner/example</a></p><p><b>asserter</b>: <a>Patient/example</a></p><p><b>lastOccurrence</b>: 01/06/2012</p><p><b>note</b>: The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract.</p><blockquote><p><b>reaction</b></p><p><b>substance</b>: cashew nut allergenic extract Injectable Product <span>(Details : {RxNorm code '1160593' = 'cashew nut allergenic extract Injectable Product', given as 'cashew nut allergenic extract Injectable Product'})</span></p><p><b>manifestation</b>: Anaphylactic reaction <span>(Details : {SNOMED CT code '39579001' = 'Anaphylaxis', given as 'Anaphylactic reaction'})</span></p><p><b>description</b>: Challenge Protocol. Severe reaction to subcutaneous cashew extract. Epinephrine administered</p><p><b>onset</b>: 12/06/2012</p><p><b>severity</b>: severe</p><p><b>exposureRoute</b>: Subcutaneous route <span>(Details : {SNOMED CT code '34206005' = 'Subcutaneous route', given as 'Subcutaneous route'})</span></p></blockquote><blockquote><p><b>reaction</b></p><p><b>manifestation</b>: Urticaria <span>(Details : {SNOMED CT code '64305001' = 'Urticaria', given as 'Urticaria'})</span></p><p><b>onset</b>: 01/01/2004</p><p><b>severity</b>: moderate</p><p><b>note</b>: The patient reports that the onset of urticaria was within 15 minutes of eating cashews.</p></blockquote></div>"
    },
    identifier: [
      {
        system: "http://acme.com/ids/patients/risks",
        value: "49476534"
      }
    ],
    clinicalStatus: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          code: "active",
          display: "Active"
        }
      ]
    },
    verificationStatus: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          code: "confirmed",
          display: "Confirmed"
        }
      ]
    },
    type: "allergy",
    category: ["food"],
    criticality: "high",
    code: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "227493005",
          display: "Cashew nuts"
        }
      ]
    },
    patient: {
      reference: "Patient/example"
    },
    onsetDateTime: "2004",
    recordedDate: "2014-10-09T14:58:00+11:00",
    recorder: {
      reference: "Practitioner/example"
    },
    asserter: {
      reference: "Patient/example"
    },
    lastOccurrence: "2012-06",
    note: [
      {
        text:
          "The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract."
      }
    ],
    reaction: [
      {
        substance: {
          coding: [
            {
              system: "http://www.nlm.nih.gov/research/umls/rxnorm",
              code: "1160593",
              display: "cashew nut allergenic extract Injectable Product"
            }
          ]
        },
        manifestation: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "39579001",
                display: "Anaphylactic reaction"
              }
            ]
          }
        ],
        description:
          "Challenge Protocol. Severe reaction to subcutaneous cashew extract. Epinephrine administered",
        onset: "2012-06-12",
        severity: "severe",
        exposureRoute: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "34206005",
              display: "Subcutaneous route"
            }
          ]
        }
      },
      {
        manifestation: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "64305001",
                display: "Urticaria"
              }
            ]
          }
        ],
        onset: "2004",
        severity: "moderate",
        note: [
          {
            text:
              "The patient reports that the onset of urticaria was within 15 minutes of eating cashews."
          }
        ]
      }
    ]
  },
  {
    resourceType: "AllergyIntolerance",
    id: "fishallergy",
    text: {
      status: "additional",
      div:
        '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>allergy is to fresh fish. Tolerates canned fish</p>\n      <p>recordedDate:2015-08-06T00:00:00-06:00</p>\n      <p>substance:Fish - dietary (substance)</p>\n    </div>'
    },
    identifier: [
      {
        system: "http://acme.com/ids/patients/risks",
        value: "49476535"
      }
    ],
    clinicalStatus: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          code: "active",
          display: "Active"
        }
      ]
    },
    verificationStatus: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          code: "confirmed",
          display: "Confirmed"
        }
      ]
    },
    category: ["food"],
    code: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "227037002",
          display: "Fish - dietary (substance)"
        }
      ],
      text: "Allergic to fresh fish. Tolerates canned fish"
    },
    patient: {
      reference: "Patient/example"
    },
    recordedDate: "2015-08-06T15:37:31-06:00",
    recorder: {
      reference: "Practitioner/example"
    }
  }
];

export const medications = [
  {
    resourceType: "Medication",
    id: "med0314",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0314</p><p><b>code</b>: Alprazolam 0.25mg Oral Tablet <span>(Details : {RxNorm code '308047' = 'ALPRAZolam 0.25 MG Oral Tablet', given as 'Alprazolam 0.25mg Oral Tablet'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Alprazolam (substance) <span>(Details : {SNOMED CT code '386983007' = 'Alprazolam', given as 'Alprazolam (substance)'})</span></td><td>0.25 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tablet<span> (Details: SNOMED CT code 385055001 = 'Tablet')</span></td></tr></table></div>"
    },
    code: {
      coding: [
        {
          system: "http://www.nlm.nih.gov/research/umls/rxnorm",
          code: "308047",
          display: "Alprazolam 0.25mg Oral Tablet"
        }
      ]
    },
    form: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "385055001",
          display: "Tablet dose form (qualifier value)"
        }
      ]
    },
    ingredient: [
      {
        itemCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "386983007",
              display: "Alprazolam (substance)"
            }
          ]
        },
        strength: {
          numerator: {
            value: 0.25,
            system: "http://unitsofmeasure.org",
            code: "mg"
          },
          denominator: {
            value: 1,
            unit: "Tablet",
            system: "http://snomed.info/sct",
            code: "385055001"
          }
        }
      }
    ]
  },
  {
    resourceType: "Medication",
    id: "med0310",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0310</p><p><b>contained</b>: </p><p><b>code</b>: Oral Form Oxycodone (product) <span>(Details : {SNOMED CT code '430127000' = 'Oral form oxycodone', given as 'Oral Form Oxycodone (product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Oxycodone (substance) <span>(Details : {SNOMED CT code '55452001' = 'Oxycodone', given as 'Oxycodone (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>"
    },
    contained: [
      {
        resourceType: "Substance",
        id: "sub03",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "55452001",
              display: "Oxycodone (substance)"
            }
          ]
        }
      }
    ],
    code: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "430127000",
          display: "Oral Form Oxycodone (product)"
        }
      ]
    },
    form: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "385055001",
          display: "Tablet dose form (qualifier value)"
        }
      ]
    },
    ingredient: [
      {
        itemReference: {
          reference: "#sub03"
        },
        strength: {
          numerator: {
            value: 5,
            system: "http://unitsofmeasure.org",
            code: "mg"
          },
          denominator: {
            value: 1,
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB"
          }
        }
      }
    ]
  },
  {
    resourceType: "Medication",
    id: "med0311",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0311</p><p><b>contained</b>: </p><p><b>code</b>: Prednisone 5mg tablet (Product) <span>(Details : {SNOMED CT code '373994007' = 'Prednisone 5mg tablet', given as 'Prednisone 5mg tablet (Product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Prednisone (substance) <span>(Details : {SNOMED CT code '116602009' = 'Prednisone', given as 'Prednisone (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>"
    },
    contained: [
      {
        resourceType: "Substance",
        id: "sub03",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "116602009",
              display: "Prednisone (substance)"
            }
          ]
        }
      }
    ],
    code: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "373994007",
          display: "Prednisone 5mg tablet (Product)"
        }
      ]
    },
    form: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "385055001",
          display: "Tablet dose form (qualifier value)"
        }
      ]
    },
    ingredient: [
      {
        itemReference: {
          reference: "#sub03"
        },
        strength: {
          numerator: {
            value: 5,
            system: "http://unitsofmeasure.org",
            code: "mg"
          },
          denominator: {
            value: 1,
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "TAB"
          }
        }
      }
    ]
  },
  {
    resourceType: "Medication",
    id: "med0315",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0315</p><p><b>code</b>: Mometasone Furoate 0.05mg/Actuat <span>(Details : {RxNorm code '358793' = 'mometasone furoate 0.05 MG/ACTUAT', given as 'Mometasone Furoate 0.05mg/Actuat'})</span></p><p><b>form</b>: Nasal Spray <span>(Details : {SNOMED CT code '385157007' = 'Nasal spray', given as 'Nasal Spray'})</span></p></div>"
    },
    code: {
      coding: [
        {
          system: "http://www.nlm.nih.gov/research/umls/rxnorm",
          code: "358793",
          display: "Mometasone Furoate 0.05mg/Actuat"
        }
      ]
    },
    form: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "385157007",
          display: "Nasal Spray"
        }
      ]
    }
  },
  {
    resourceType: "Medication",
    id: "med0313",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0313</p><p><b>code</b>: Lorazepam 2mg/ml injection solution 1ml vial (product) <span>(Details : {SNOMED CT code '400621001' = 'Lorazepam 2mg/mL injection solution 1mL vial', given as 'Lorazepam 2mg/ml injection solution 1ml vial (product)'})</span></p><p><b>form</b>: Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>amount</b>: 1 ml<span> (Details: UCUM code ml = 'ml')</span>/1 vial<span> (Details: http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type code vial = 'Vial')</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Lorazepam (substance) <span>(Details : {SNOMED CT code '387106007' = 'Lorazepam', given as 'Lorazepam (substance)'})</span></td><td>2 mg<span> (Details: UCUM code mg = 'mg')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table></div>"
    },
    code: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "400621001",
          display: "Lorazepam 2mg/ml injection solution 1ml vial (product)"
        }
      ]
    },
    form: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "385219001",
          display: "Injection solution (qualifier value)"
        }
      ]
    },
    amount: {
      numerator: {
        value: 1,
        unit: "ml",
        system: "http://unitsofmeasure.org",
        code: "ml"
      },
      denominator: {
        value: 1,
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "vial"
      }
    },
    ingredient: [
      {
        itemCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "387106007",
              display: "Lorazepam (substance)"
            }
          ]
        },
        strength: {
          numerator: {
            value: 2,
            system: "http://unitsofmeasure.org",
            code: "mg"
          },
          denominator: {
            value: 1,
            system: "http://unitsofmeasure.org",
            code: "mL"
          }
        }
      }
    ]
  },
  {
    resourceType: "Medication",
    id: "med0312",
    text: {
      status: "generated",
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0312</p><p><b>contained</b>: </p><p><b>code</b>: Nystatin 100,000 units/ml oral suspension (product) <span>(Details : {SNOMED CT code '324689003' = 'Nystatin 100,000units/mL oral suspension', given as 'Nystatin 100,000 units/ml oral suspension (product)'})</span></p><p><b>form</b>: Oral suspension (qualifier value) <span>(Details : {SNOMED CT code '387048002' = 'Nystatin', given as 'Oral suspension (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub02; Nystatin (substance) <span>(Details : {SNOMED CT code '387048002' = 'Nystatin', given as 'Nystatin (substance)'})</span></td><td>100000 [IU]<span> (Details: UCUM code [IU] = 'IU')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table></div>"
    },
    contained: [
      {
        resourceType: "Substance",
        id: "sub02",
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "387048002",
              display: "Nystatin (substance)"
            }
          ]
        }
      }
    ],
    code: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "324689003",
          display: "Nystatin 100,000 units/ml oral suspension (product)"
        }
      ]
    },
    form: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "387048002",
          display: "Oral suspension (qualifier value)"
        }
      ]
    },
    ingredient: [
      {
        itemReference: {
          reference: "#sub02"
        },
        strength: {
          numerator: {
            value: 100000,
            system: "http://unitsofmeasure.org",
            code: "[IU]"
          },
          denominator: {
            value: 1,
            system: "http://unitsofmeasure.org",
            code: "mL"
          }
        }
      }
    ]
  }
];

export const json = {
  organisations: [
    {
      sid: 1,
      name: "Organisation 1",
      type: "Input",
    },
    {
      sid: 2,
      name: "Organisation 2",
      type: "Input",
    },
  ],
  questions: [
    {
      type: "Questions",
      sid: 493,
      value: "Please answer the first question",
      answers: [
        {
          sid: 15130,
          value: "Answer 1",
        },
        {
          sid: 15129,
          value: "Answer 2",
        },
      ],
    },
    {
      type: "Questions",
      sid: 494,
      value: "Please answer the second question",
      answers: [
        {
          sid: 15134,
          value: "Answer 2-1",
        },
        {
          sid: 15125,
          value: "Answer 2-2",
        },
      ],
    },
  ],
  formulas: [
    {
      sid: 568,
      name: "First formula",
      type: "Formulas",
      inputs: [
        {
          sid: 299,
          label: "Field 1",
          _type: "Float",
        },
      ],
      answers: [15130, 15134],
    },
    {
      sid: 569,
      name: "Second formula",
      type: "Formulas",
      inputs: [
        {
          sid: 299,
          label: "Field 1",
          _type: "Date",
        },
      ],
      answers: [15130, 15125],
    },
    {
      sid: 570,
      name: "Third formula",
      type: "Formulas",
      inputs: [
        {
          sid: 299,
          label: "Field 1",
          _type: "String",
        },
        {
          sid: 299,
          label: "Field 1",
          _type: "Integer",
        },
      ],
      answers: [15129],
    },
  ],
}

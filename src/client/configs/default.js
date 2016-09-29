const config = {
  steps: {
    firstStep: {
      fields: [
        {
          name: 'firstName',
          component: 'FormInput',
        },
        {
          name: 'lastName',
          component: 'FormInput',
        }
      ],
    },
    secondStep: {
      fields: [
        {
          name: 'amount',
          component: 'FormSelect',
        }
      ]
    }
  }
};

export default config;

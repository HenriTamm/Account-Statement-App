const accounts = {
  "1-investments-eur": {
    basicDetails: {
      id: "1-investment-eur",
      created: "2021-06-03T19:51:43.863698Z",
      last_accessed: "2021-06-03T19:52:16.256821Z",
      iban: "EE667700771001804574",
      aspsp_identifier: "LHV_LHVBEE22",
      status: "READY"
    },
    accountDetails: {
      account: {
        resourceId: "50f7558f-82d6-46da-b8c7-1211c80497f0",
        iban: "EE667700771001804574",
        currency: "XXX",
        name: "Investment account",
        product: "Multi currency account",
        cashAccountType: "CACC"
      }
    },
    balances: {
      balances: [
        {
          balanceAmount: { amount: "1965.20", currency: "EUR" },
          balanceType: "interimAvailable"
        },
        {
          balanceAmount: { amount: "1969.08", currency: "EUR" },
          balanceType: "interimBooked"
        }
      ]
    }
  },
  "2-current-eur": {
    basicDetails: {
      id: "2-current-eur",
      created: "2021-06-03T19:51:43.863698Z",
      last_accessed: "2021-06-03T19:52:16.256821Z",
      iban: "EE197700771001971173",
      aspsp_identifier: "LHV_LHVBEE22",
      status: "READY"
    },
    accountDetails: {
      account: {
        resourceId: "50f7558f-82d6-46da-b8c7-1211c80497f0",
        iban: "EE197700771001971173",
        currency: "XXX",
        name: "current account",
        product: "Multi currency account",
        cashAccountType: "CACC"
      }
    },
    balances: {
      balances: [
        {
          balanceAmount: {
            amount: "149.50",
            currency: "EUR"
          },
          balanceType: "interimAvailable"
        },
        {
          balanceAmount: {
            amount: "170.20",
            currency: "EUR"
          },
          balanceType: "interimBooked"
        }
      ]
    }
  },
  "3-savings-eur": {
    basicDetails: {
      id: "3-savings-eur",
      created: "2021-06-03T19:51:43.863698Z",
      last_accessed: "2021-06-03T19:52:16.256821Z",
      iban: "EE667700771001804384",
      aspsp_identifier: "LHV_LHVBEE22",
      status: "READY"
    },
    accountDetails: {
      account: {
        resourceId: "50f7558f-82d6-46da-b8c7-1211c80497f0",
        iban: "EE667700771001804384",
        currency: "XXX",
        name: "savings account",
        product: "Multi currency account",
        cashAccountType: "CACC"
      }
    },
    balances: {
      balances: [
        {
          balanceAmount: { amount: "200.20", currency: "EUR" },
          balanceType: "interimAvailable"
        },
        {
          balanceAmount: { amount: "200.20", currency: "EUR" },
          balanceType: "interimBooked"
        }
      ]
    }
  },
  "4-company-eur" : {
    basicDetails: {
      id: "4-company-eur",
      created: "2021-06-14T12:15:30.969365Z",
      last_accessed: "2021-06-14T12:15:59.690737Z",
      iban: "EE387700771003256750",
      aspsp_identifier: "LHV_LHVBEE22",
      status: "READY"
    },
    accountDetails: {
      account: {
        resourceId: "fbabff5a-5322-4626-b7bf-e4cf79d85988",
        iban: "EE387700771003256740",
        currency: "XXX",
        name: "myCompany OÜ",
        product: "Multi currency account",
        cashAccountType: "CACC"
      }
    },
    balances: {
      balances: [
        {
          balanceAmount: { amount: "1533.19", currency: "EUR" },
          balanceType: "interimAvailable"
        },
        {
          balanceAmount: { amount: "1536.99", currency: "EUR" },
          balanceType: "interimBooked"
        }
      ]
    }
  }
};

const fetchAccounts = () => {
  return Promise.resolve(accounts);
};

export { fetchAccounts };

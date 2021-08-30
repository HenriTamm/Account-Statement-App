const transactions = {
  "1-investments-eur": {
    transactions: {
      booked: [
        // Exchange from EUR to GBP
        {
          bookingDate: "2021-04-16",
          currencyExchange: {
            exchangeRate: "5.77",
            instructedAmount: { amount: "17.34", currency: "EUR" },
            sourceCurrency: "EUR",
            targetCurrency: "GBP",
            unitCurrency: "EUR"
          },
          proprietaryBankTransactionCode: "EXCHANGE",
          remittanceInformationUnstructuredArray: ["Exchanged from EUR"],
          transactionAmount: { amount: "17.34", currency: "GBP" },
          transactionId: "60798d7a-d50b-a136-b3d0-522955757a2c",
          valueDate: "2021-04-16"
        },
        // Receive money from another Revolut user
        {
          bookingDate: "2021-05-17",
          proprietaryBankTransactionCode: "TRANSFER",
          remittanceInformationUnstructuredArray: ["From John Johnson"],
          transactionAmount: { amount: "6.00", currency: "GBP" },
          transactionId: "60a1b22a-39f5-a3a8-90b9-b6c6ff44a47f",
          valueDate: "2021-05-17"
        }
      ]
    }
  },
  "2-current-eur": {
    transactions: {
      booked: [
        // Exchange from EUR to GBP
        {
          bookingDate: "2021-04-16",
          currencyExchange: {
            exchangeRate: "0.17",
            instructedAmount: { amount: "17.34", currency: "GBP" },
            sourceCurrency: "EUR",
            targetCurrency: "GBP",
            unitCurrency: "EUR"
          },
          debtorAccount: { iban: "EUR123456789" },
          debtorName: "Current account EUR",
          proprietaryBankTransactionCode: "EXCHANGE",
          remittanceInformationUnstructuredArray: ["Exchanged to GBP"],
          transactionAmount: { amount: "-100", currency: "EUR" },
          transactionId: "60798d7a-d50b-a136-b3d0-522955757a2c",
          valueDate: "2021-04-16"
        },
        // Payment to merchant
        {
          bookingDate: "2021-06-07",
          debtorAccount: { bban: "RO123456789" },
          debtorName: "Current account EUR",
          proprietaryBankTransactionCode: "CARD_PAYMENT",
          remittanceInformationUnstructuredArray: ["Prisma"],
          transactionAmount: { amount: "-6.98", currency: "EUR" },
          transactionId: "60be7284-c890-afcb-8b23-6e4dacc824e2",
          valueDate: "2021-06-08"
        },
        // Transfer from Vault
        {
          bookingDate: "2021-06-24",
          proprietaryBankTransactionCode: "TRANSFER",
          remittanceInformationUnstructuredArray: ["From EUR Vault EUR"],
          transactionAmount: { amount: "2100.00", currency: "EUR" },
          transactionId: "60d47dc0-9cc2-a2f4-bf45-b09efe2e1b55",
          valueDate: "2021-06-24"
        }
      ]
    }
  },
  "3-savings-eur": {
    transactions: {
      booked: [
        // From main account to Vault
        {
          bookingDate: "2021-05-13",
          proprietaryBankTransactionCode: "TRANSFER",
          remittanceInformationUnstructuredArray: ["From EUR"],
          transactionAmount: { amount: "20.00", currency: "EUR" },
          transactionId: "609d08e4-4f43-a6c9-b1b8-7b2a8a10d422",
          valueDate: "2021-05-13"
        },
        // To main account from Vault
        {
          bookingDate: "2021-05-13",
          proprietaryBankTransactionCode: "TRANSFER",
          remittanceInformationUnstructuredArray: ["To EUR"],
          transactionAmount: { amount: "-20.00", currency: "EUR" },
          transactionId: "609d08e4-4f43-a6c9-b1b8-7b2a8a10d422",
          valueDate: "2021-05-13"
        }
      ]
    }
  }
};

const fetchTransactions = () => {
  return Promise.resolve(transactions);
};

export { fetchTransactions };

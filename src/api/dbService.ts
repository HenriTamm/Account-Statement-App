import axios from "axios";

export const getAccounts = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get("http://localhost:5001/accounts-list")
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((e: any) => {
          reject("Error in axios!");
          console.log(e);
        });
    } catch (error) {
      reject("SYSTEM_ERROR");
    }
  });
};

export const getTransactions = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get("http://localhost:5001/transactions-list")
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((e: any) => {
          reject("Error in axios!");
          console.log(e);
        });
    } catch (error) {
      reject("SYSTEM_ERROR");
    }
  });
};

export const postTransaction = (transaction: object) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post("http://localhost:5001/transactions-list", transaction)
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((e: any) => {
          reject("Error in axios!");
          console.log(e);
        });
    } catch (error) {
      reject("SYSTEM_ERROR");
    }
  });
};


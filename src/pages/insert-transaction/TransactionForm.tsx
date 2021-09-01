import { useState } from "react";
import { postTransaction } from "../../api/dbService";
import "./TransactionForm.css";

export const TransactionForm = () => {
  const [receiverAccount, setReceiverAccount] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleReceiverAccountInputChange(event: React.FormEvent<HTMLInputElement>) {
    setReceiverAccount(event.currentTarget.value);
  }

  function handleAmountInputChange(event: React.FormEvent<HTMLInputElement>) {
    setAmount(event.currentTarget.value);
  }

  function handleDescInputChange(event: React.FormEvent<HTMLInputElement>) {
    setDescription(event.currentTarget.value);
  }

  // BUG: can only POST one time, because id is hardcoded
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = {
      id: "4-company-eur",
      transactions: {
        booked: [
          {
            remittanceInformationUnstructuredArray: [description],
            transactionAmount: {
              amount: amount,
              currency: "EUR",
            },
            valueDate: new Date().toISOString().slice(0, 10),
            transactionId: receiverAccount + "-" + Math.floor(Math.random() * 100),
          },
        ],
      },
    };
    postTransaction(target)
      .then(() => {
        setReceiverAccount("");
        setAmount("");
        setDescription("");
      })
      .catch((error) => console.error("Error posting data: ", error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="transaction-form">
        <ul>
          <li>
            <label htmlFor="account"> Account:</label>
            <select name="account" id="account" disabled={true} required>
              <option value="1">myCompany OÜ • EE387700771003256740</option>
            </select>
          </li>
          <li>
            <label htmlFor="receiver">Receiver IBAN:</label>
            <input
              type="text"
              id="receiver"
              name="receiverAccount"
              value={receiverAccount}
              onChange={handleReceiverAccountInputChange}
              pattern="^[A-Z]{2}(?:[ ]?[0-9]){18,20}$"
              maxLength={20}
              required
            />
          </li>
          <li>
            <label htmlFor="amount"> Amount:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleAmountInputChange}
              pattern="[1-9][0-9]*"
              required
            />
            EUR
          </li>
          <li>
            <label htmlFor="desc">Description:</label>
            <input type="text" id="desc" value={description} onChange={handleDescInputChange} maxLength={26} required />
          </li>
          <li className="button">
            <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
    </div>
  );
};

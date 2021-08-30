import { Transaction } from "../../models/transaction-list/Transaction";

export const TransactionRow = ({transaction}: {transaction: Transaction}) => {
  return (
    <tr>
      <td>{transaction.valueDate}</td>
      <td>{transaction.remittanceInformationUnstructuredArray.join(' ')}</td>
      <td>{transaction.transactionAmount.amount} {transaction.transactionAmount.currency}</td>
    </tr>
  );
};

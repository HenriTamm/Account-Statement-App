import { AccountData } from "../../models/account-list/AccountData";
import { TransactionData } from "../../models/transaction-list/TransactionsData";
import { TransactionRow } from "./TransactionRow";

interface TransactionTableProps {
  transactions: TransactionData[];
  account: AccountData | undefined;
  filterText: string;
}

export const TransactionTable = ({
  transactions,
  account,
  filterText,
}: TransactionTableProps) => {
  const rows: JSX.Element[] = [];

  transactions.forEach((transactionData) => {
    if (transactionData.id === account?.id) {
      transactionData.transactions.booked.forEach((transaction) => {
          if(transaction.remittanceInformationUnstructuredArray.join(' ').toLowerCase().indexOf(filterText) !== -1) {
            rows.push(
                <TransactionRow
                  key={transaction.transactionId}
                  transaction={transaction}
                />
              );
          }
      });
    }
  });

  return (
    <div>
      <h1>
        {account?.accountDetails.account.name} •{" "}
        {account?.accountDetails.account.iban}
      </h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

import { AccountData } from "../../models/account-list/AccountData";
import { AccountRow } from "./AccountRow";

interface AccountTableProps {
  accounts: AccountData[];
  setSelectedAccount: (account: AccountData) => void;
  selectedAccount: AccountData;
}

export const AccountTable = ({ accounts, setSelectedAccount, selectedAccount } : AccountTableProps) => {
  const rows: JSX.Element[] = [];

  accounts.forEach((account) => {
    rows.push(
      <AccountRow key={account.key} account={account} 
      setSelectedAccount={(account: AccountData) => setSelectedAccount(account)}
      checked={account === selectedAccount}/>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Account Name</th>
          <th>IBAN</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

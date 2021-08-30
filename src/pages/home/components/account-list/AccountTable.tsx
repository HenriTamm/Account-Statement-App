import { AccountData } from "../../models/account-list/AccountData";
import { AccountRow } from "./AccountRow";

interface AccountTableProps {
  accounts: AccountData[];
  setSelectedAccount: (account: AccountData) => void;
}

export const AccountTable = ({ accounts, setSelectedAccount } : AccountTableProps) => {
  const rows: JSX.Element[] = [];

  accounts.forEach((account) => {
    rows.push(
      <AccountRow key={account.key} account={account} 
      setSelectedAccount={(account: AccountData) => setSelectedAccount(account)}/>
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

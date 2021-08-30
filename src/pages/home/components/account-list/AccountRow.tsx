import { AccountData } from "../../models/account-list/AccountData";

interface AccountRowProps {
  account: AccountData;
  setSelectedAccount: (account: AccountData) => void;
}

export const AccountRow = ({ account, setSelectedAccount } : AccountRowProps) => {

  const name = account.accountDetails.account.name;
  const iban = account.accountDetails.account.iban;
  return (
    <tr>
      <th><label><input type="radio" id={iban} name="account" onClick={() => setSelectedAccount(account)}></input>{name}</label></th>
      <th><label htmlFor={iban}>{iban}</label></th>
    </tr>
  );
};

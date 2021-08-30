import { AccountData } from "../../models/account-list/AccountData";

interface AccountRowProps {
  account: AccountData;
  setSelectedAccount: (account: AccountData) => void;
  checked: boolean;
}

export const AccountRow = ({ account, setSelectedAccount, checked } : AccountRowProps) => {

  const name = account.accountDetails.account.name;
  const iban = account.accountDetails.account.iban;
  return (
    <tr>
      <th><label><input type="radio" id={iban} name="account" onChange={() => setSelectedAccount(account)} checked={checked}></input>{name}</label></th>
      <th><label htmlFor={iban}>{iban}</label></th>
    </tr>
  );
};

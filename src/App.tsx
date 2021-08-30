import "./styles.css";
import { useEffect, useState } from "react";
import { SearchBar } from "./pages/home/components/search/SearchBar";
import { fetchAccountsCopy } from "./api/accounts_copy";
import { AccountTable } from "./pages/home/components/account-list/AccountTable";
import { AccountData } from "./pages/home/models/account-list/AccountData";
import { TransactionData } from "./pages/home/models/transaction-list/TransactionsData";
import { fetchTransactionsCopy } from "./api/transactions_copy";
import { TransactionTable } from "./pages/home/components/transaction-list/TransactionTable";

// Tasks:
// 1. display the data in a way that allows a user to see transactions associated to an account
// 2. build basic search through transactions
// 3. edit or add a new transaction

// App
// - AccountTable
// -- AccountRow
// - SearchBar
// - TransactionTable
// -- TransactionRow
export default function App() {
  const [accounts, setAccounts] = useState<AccountData[]>([]);
  const [account, setSelectedAccount] = useState<AccountData>(accounts[0]);
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetchAccountsCopy()
      .then((data) => {
        setAccounts(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    fetchTransactionsCopy()
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="App">
      <h1>Account statement</h1>
      <div>
        <br></br>
        <br></br>
        <AccountTable
          accounts={accounts}
          setSelectedAccount={(account: AccountData) =>
            setSelectedAccount(account)
          }
        />
        <br></br>
        <br></br>
        <SearchBar filterText={filterText} handleFilterTextChange={(filterText: string) => setFilterText(filterText)}/>
        <TransactionTable transactions={transactions} account={account} filterText={filterText.toLowerCase()}/>
      </div>
    </div>
  );
}

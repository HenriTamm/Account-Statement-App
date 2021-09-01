import { useEffect, useState } from "react";
import { SearchBar } from "./components/search/SearchBar";
import { AccountTable } from "./components/account-list/AccountTable";
import { AccountData } from "./models/account-list/AccountData";
import { TransactionData } from "./models/transaction-list/TransactionsData";
import { TransactionTable } from "./components/transaction-list/TransactionTable";
import { Link } from "react-router-dom";
import { getAccounts, getTransactions } from "../../api/dbService";
import "./HomePage.css";

// - AccountTable
// -- AccountRow
// - SearchBar
// - TransactionTable
// -- TransactionRow
export const HomePage = () => {
  const [accounts, setAccounts] = useState<AccountData[]>([]);
  const [account, setSelectedAccount] = useState<AccountData>(accounts[0]);
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    getAccounts()
      .then((data) => {
        setAccounts(data as AccountData[]);
        setSelectedAccount((data as AccountData[])[0]);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    getTransactions()
      .then((data) => {
        setTransactions(data as TransactionData[]);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="App">
      <Link to="/insert-transaction" >Insert transaction</Link>
      <h1 className="title">Account statement</h1>
      <div>
        <AccountTable
          accounts={accounts}
          setSelectedAccount={(account: AccountData) => setSelectedAccount(account)}
          selectedAccount={account}
        />
        <br></br>
        <br></br>
        <SearchBar filterText={filterText} handleFilterTextChange={(filterText: string) => setFilterText(filterText)} />
        <TransactionTable transactions={transactions} account={account} filterText={filterText.toLowerCase()} />
      </div>
    </div>
  );
};

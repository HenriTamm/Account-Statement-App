import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { AddAccount } from "./pages/insert-transaction/InsertTransactions";
import "./styles.css";

// Tasks:
// 1. display the data in a way that allows a user to see transactions associated to an account
// 2. build basic search through transactions
// 3. edit or add a new transaction

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route path="/insert-transaction" component={AddAccount} />
    </BrowserRouter>
  );
}

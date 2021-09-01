import { Link } from "react-router-dom";
import { TransactionForm } from "./TransactionForm";

export const AddAccount = () => {

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Insert transaction: </h1>
      <TransactionForm />
    </div>
  );
};

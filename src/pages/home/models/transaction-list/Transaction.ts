import { TransactionAmount } from "./TransactionAmount";

export interface Transaction {
    bookingDate: string;
    proprietaryBankTransactionCode: string;
    remittanceInformationUnstructuredArray: string[];
    transactionAmount: TransactionAmount;
    transactionId: string;
    valueDate: string;
}
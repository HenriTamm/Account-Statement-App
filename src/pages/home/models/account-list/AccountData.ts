import { BasicDetails } from "./BasicDetails";
import { AccountDetails } from "./AccountDetails";
import { Balances } from "./Balances";

export interface AccountData {
    key: string,
    basicDetails: BasicDetails;
    accountDetails: AccountDetails;
    balances: Balances;
}
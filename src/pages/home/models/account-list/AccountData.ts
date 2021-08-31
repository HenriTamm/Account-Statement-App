import { BasicDetails } from "./BasicDetails";
import { AccountDetails } from "./AccountDetails";
import { Balances } from "./Balances";

export interface AccountData {
    id: string,
    basicDetails: BasicDetails;
    accountDetails: AccountDetails;
    balances: Balances;
}
import { BankStatus } from "../misc/status";

export interface CardRegistrationResponse {
    status: BankStatus;
    code: string;
    message: string;
    card_id: string;
    bank_transaction: string;
    operation_code: string;
    rrn: string;
    card_mask: string;
    bank_response: string;
}

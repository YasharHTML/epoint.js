import { BankStatus } from "../misc/status";

export interface CallbackResponse {
    order_id: string;
    status: BankStatus;
    code: string;
    message: string;
    transaction: string;
    bank_transaction: string;
    operation_code: string;
    rrn: string;
    card_name: string;
    card_mask: string;
    amount: number;
    bank_response: string;
}

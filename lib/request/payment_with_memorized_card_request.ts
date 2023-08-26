import { Currency } from "../misc/currency";
import { Language } from "../misc/language";

export interface PaymentWithMemorizedCardRequest {
    language: Language;
    card_uid: string;
    order_id: string;
    amount: number;
    currency: Currency;
    description?: string;
}
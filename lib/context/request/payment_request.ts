import { Currency } from "../misc/currency";
import { Language } from "../misc/language";

export interface PaymentRequest {
    amount: number;
    currency: Currency;
    language: Language;
    order_id: string;
    description?: string;
    success_redirect_url?: string;
    error_redirect_url?: string;
    other_attr?: any[];
}

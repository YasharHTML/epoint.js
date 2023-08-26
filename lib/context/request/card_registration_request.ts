import { Language } from "../../misc/language";

export interface CardRegistrationRequest {
    language: Language;
    refund?: 0 | 1;
    description?: string;
    success_redirect_url?: string;
    error_redirect_url?: string;
}
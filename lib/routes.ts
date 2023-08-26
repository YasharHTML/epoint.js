import * as dotenv from "dotenv";

dotenv.config();

export const baseUrl = process.env.BASE_URL;

export enum Routes {
    payment = "/request",
    getStatus = "/get-status",
    cardRegistration = "/card-registration",
    paymentWithMemorizedCard = "/execute-pay",
    memorizeCardAndPay = "/card-registration-with-pay",
    refund = "/refund-request",
    cancel = "/reverse",
    splitPayment = "/split-request",
    splitPaymentWithMemorizedCard = "/split-execute-pay",
    memorizeCardThenSplitPayment = "/split-card-registration-with-pay",
}

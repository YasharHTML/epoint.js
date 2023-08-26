import { Status } from "../../misc/status";

export interface PaymentResponse {
    status: Status;
    transaction: string;
    redirect_url: string;
}
import { CardRegistrationRequest } from "../context/request/card_registration_request";
import { PaymentRequest } from "../context/request/payment_request";
import { CardRegistrationResponse } from "../context/response/card_registration_response";
import { PaymentResponse } from "../context/response/payment_response";

export type RouteType = "/request" | "/card-registration";

export type RouteTypeToRequestType = {
    "/request": PaymentRequest;
    "/card-registration": CardRegistrationRequest;
};

export type RouteTypeToResponseType = {
    "/request": PaymentResponse;
    "/card-registration": CardRegistrationResponse;
};

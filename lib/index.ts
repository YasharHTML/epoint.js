import { CredentialGenerator } from "./create_request_body";

console.log(CredentialGenerator.createRequestBody({
    amount: 0.01,
    currency: "AZN",
    language: "az",
    order_id: "1236",
    public_key: "i000000001",
}));

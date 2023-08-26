import crypto from "crypto";
import * as dotenv from "dotenv";

dotenv.config();

export namespace CredentialGenerator {
    const PRIVATE_KEY = process.env.PRIVATE_KEY;
    const PUBLIC_KEY = process.env.PUBLIC_KEY;

    function ToBase64(payload: string) {
        return btoa(payload);
    }

    function sha1(payload: string) {
        return crypto.createHash("sha1").update(payload).digest("base64");
    }

    function jsonStringGenerator(payload: any) {
        return ToBase64(JSON.stringify(payload));
    }

    function signatureGenerator(sgnString: string) {
        return sha1(PRIVATE_KEY + sgnString + PRIVATE_KEY);
    }

    export function createRequestBody(payload: any) {
        const data = jsonStringGenerator({
            public_key: PUBLIC_KEY,
            ...payload,
        });
        const signature = signatureGenerator(data);
        return { data, signature };
    }
}

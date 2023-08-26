import axios from "axios";
import { CredentialGenerator } from "../create_request_body";
import {
    RouteType,
    RouteTypeToRequestType,
    RouteTypeToResponseType,
} from "../types/route";
import { execute as IExecute } from "./index.d";
import { baseUrl } from "../routes";

const commonHandler = async <T extends RouteType>(
    route: T,
    body: RouteTypeToRequestType[T]
): Promise<RouteTypeToResponseType[T]> => {
    const payload = CredentialGenerator.createRequestBody(body);
    return axios.post(baseUrl + route, payload).then(({ data }) => data);
};

export const execute: typeof IExecute = (route, body) => {
    return commonHandler(route, body);
};

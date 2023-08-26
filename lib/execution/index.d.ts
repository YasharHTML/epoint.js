import {
    RouteType,
    RouteTypeToRequestType,
    RouteTypeToResponseType,
} from "../types/route";

declare function execute<T extends RouteType>(
    route: T,
    body: RouteTypeToRequestType[T]
): Promise<RouteTypeToResponseType[T]>;

import { HTTPRequestLogger } from "./HTTPRequestLogger";
import { HTTPResponseLogger } from "./TTPResponseLogger";

type Middleware = typeof HTTPRequestLogger | typeof HTTPResponseLogger;

const middlewares = <Middleware[]>[HTTPRequestLogger, HTTPResponseLogger];

export { middlewares };
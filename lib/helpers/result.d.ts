import { AttemptResult } from "../models/attemptResult";
declare type DnfMultiResult = {
    isDnf: true;
};
declare type DnsMultiResult = {
    isDns: true;
};
declare type ValidMultiResult = {
    attempted: number;
    solved: number;
    centiseconds?: number;
};
declare type DecodedMultiResult = DnfMultiResult | DnsMultiResult | ValidMultiResult;
export declare function isDnf(result: AttemptResult): boolean;
export declare function isDns(result: AttemptResult): boolean;
export declare function isMultiResult(result: AttemptResult): boolean;
export declare function decodeMultiResult(result: AttemptResult): DecodedMultiResult;
export declare function encodeMultiResult(result: DecodedMultiResult): string;
export declare function isMultiResultDnf(result: DecodedMultiResult): boolean;
export declare function formatMultiResult(result: DecodedMultiResult): string;
export {};

import { EventId } from "../models";
export interface ParsedActivityCode {
    eventId: EventId;
    roundNumber: number | null;
    groupNumber: number | null;
    attemptNumber: number | null;
}
export declare function parseActivityCode(activityCode: string): ParsedActivityCode;
export declare function activityCodeToName(activityCode: string): string;

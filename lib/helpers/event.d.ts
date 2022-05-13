import { EventId } from "../models";
export declare function getEventName(eventId: EventId): string;
export declare function getEventResultType(eventId: EventId): 'time' | 'number' | 'multi';

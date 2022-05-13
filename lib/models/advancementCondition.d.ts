import { AttemptResult } from "./attemptResult";
interface RankingAdvancement {
    type: 'ranking';
    level: number;
}
interface PercentAdvancement {
    type: 'percent';
    level: number;
}
interface ResultAdvancement {
    type: 'attemptResult';
    level: AttemptResult;
}
export declare type AdvancementCondition = RankingAdvancement | PercentAdvancement | ResultAdvancement;
export {};

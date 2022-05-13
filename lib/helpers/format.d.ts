import { RoundFormat, RankingType } from "../models";
export declare function getFormatName(format: RoundFormat): string;
export declare function getFormatRanking(format: RoundFormat): RankingType[];
export declare function getFormatExpectedSolves(format: RoundFormat): number;
export declare function getFormatTrimBest(format: RoundFormat): number;
export declare function getFormatTrimWorst(format: RoundFormat): number;

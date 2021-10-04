export interface PlayerStats {
    _id: string;
    name: string;
    playerID: string;
    birthPlace: string;
    dob: string;
    description: string;
    battingStyle: string;
    bowlingStyle: string;
    headShotImage: string;
    actionShotImage: string;
    role: string;
    fullName: string;
    battingStats?: (BattingStatsEntity)[] | null;
    bowlingStats?: (BowlingStatsEntity)[] | null;
    fieldingStats?: (FieldingStatsEntity)[] | null;
}
export interface BattingStatsEntity {
    notOuts: string;
    runs: string;
    ballsFaced: string;
    hundreds?: null;
    fifties?: null;
    fours?: null;
    sixes?: null;
    average: string;
    recForm?: (RecFormEntity | null)[] | null;
    color: string;
    strikeRate: string;
    innings: string;
    hundredsfifties: string;
    foursix: string;
    format: string;
    matches: string;
}
export interface RecFormEntity {
    a: number;
    b: number;
}
export interface BowlingStatsEntity {
    format: string;
    matches: string;
    overs: string;
    wickets: string;
    ballsBowled: string;
    average: string;
    recForm?: (RecFormEntity1 | null)[] | null;
    color: string;
    strikeRate: string;
    economyRate: string;
    fiveWicketHauls?: null;
    innings: string;
    bestBowling: string;
    fivetenWicketHauls: string;
}
export interface RecFormEntity1 {
    a: number;
    b: number;
}
export interface FieldingStatsEntity {
    format: string;
    catches: string;
    stupms: string;
    runOuts: string;
}

export interface PlayerStatsResponse {
    getPlayersProfileV2: PlayerStats,
    price: string
}
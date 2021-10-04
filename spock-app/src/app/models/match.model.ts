export interface MatchData {
    _id: string;
    matchName: string;
    isPoints: boolean;
    isStatistics: boolean;
    homeTeamShortName: string;
    awayTeamShortName: string;
    matchResult: string;
    venue: string;
    matchNumber: string;
    matchdate?: null;
    matchID: string;
    matchStatus: string;
    startDate: string;
    matchType: string;
    statusMessage: string;
    playing11Status: boolean;
    probable11Status: boolean;
    playerOfTheMatch: string;
    playerID: string;
    firstInningsTeamID: string;
    secondInningsTeamID: string;
    thirdInningsTeamID: string;
    fourthInningsTeamID: string;
    currentinningsNo: string;
    currentInningteamID: string;
    currentInningsTeamName: string;
    seriesName: string;
    seriesID: string;
    toss?: null;
    matchScore?: (MatchScoreEntity)[] | null;
  }
  export interface MatchScoreEntity {
    teamShortName: string;
    teamID: string;
    teamFullName: string;
    teamScore?: (null)[] | null;
  }
  
export interface ResultsEntity {
    id: number;
    date: string;
    team1Name: string;
    team1Score: number;
    team2Name: string;
    team2Score: number;
    matchLink?: string;
    competition?: string;
    day?: string;
}

export interface News {
    by: string;
    id: number;
    score: number;
    time: number;
    title: string;
    url: string;
    dead?: boolean;
    kids: number[];
}

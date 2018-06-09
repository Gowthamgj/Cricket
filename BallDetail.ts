export interface BallDetail{
    runsScored: number,
        isOut: boolean,
        dismissalType?: string,
        dismissalInfo?:dismiss,
        batsmanName: string,
        bowlerName: string
}
interface dismiss{
    fielderName: string,
    hasBatsmanCrossed: boolean,
}
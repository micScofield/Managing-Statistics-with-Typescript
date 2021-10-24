import { MatchData } from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): String
}

export interface OutputTarget {
    print(report: String): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(): void {}
}
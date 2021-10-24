import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): String
}

export interface OutputTarget {
    print(report: String): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const analysis: String = this.analyzer.run(matches)
        this.outputTarget.print(analysis)
    }
}
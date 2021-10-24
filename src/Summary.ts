import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): String
}

export interface OutputTarget {
    print(report: String): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    static winsAnalysisWithHtmlReport(teamName: String, matches: MatchData[]): void {
        const analysis = new WinsAnalysis(teamName).run(matches)
        new HtmlReport().print(analysis)
    }

    static winsAnalysisWithConsoleReport(teamName: String, matches: MatchData[]): void {
        const analysis = new WinsAnalysis(teamName).run(matches)
        new ConsoleReport().print(analysis)
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const analysis = this.analyzer.run(matches)
        this.outputTarget.print(analysis)
    }
}
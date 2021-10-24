import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

// Step 1:
// create an object that satisfies the data reader interface
const csvFileReader = new CsvFileReader("football.csv");

// Step 2:
// create an instance of match reader and pass in something satisfying data reader interface
const matchReader = new MatchReader(csvFileReader);

// Step 3:
// call load method so that we can get access to matches data of football.csv i.e. matchReader.matches will have the data
matchReader.load();

// Step 4:

// Approach 1 --> 
// create an instance of analyzer and call run method passing the data we fetched from previous step
const analyzer = new WinsAnalysis("Man United");
const analysis = analyzer.run(matchReader.matches);

// generate / print a console report using the "analysis" we got from previous step
const consoleReport = new ConsoleReport();
consoleReport.print(analysis);

// Approach 2 -->
// we can condense above two steps into one by making a method inside Summary class which does the analysis for us and prints a report

const summary = new Summary(analyzer, consoleReport)
summary.buildAndPrintReport(matchReader.matches)

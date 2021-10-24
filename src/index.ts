import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

// create an object that satisfies the data reader interface
const csvFileReader = new CsvFileReader("football.csv");

// create an instance of match reader and pass in something satisfying data reader interface
const matchReader = new MatchReader(csvFileReader);

// call load method so that we can get access to matches data of football.csv i.e. matchReader.matches will have the data
matchReader.load();

// create an instance of analyzer and call run method passing the data we fetched from previous step
const analyzer = new WinsAnalysis("Man United");
const analysis = analyzer.run(matchReader.matches);

// generate / print a console report using the "analysis" we got from previous step
const consoleReport = new ConsoleReport();
consoleReport.print(analysis);

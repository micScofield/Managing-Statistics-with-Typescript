import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// create an object that satisfies the data reader interface
const csvFileReader = new CsvFileReader('football.csv')

// create an instance of match reader and pass in something satisfying data reader interface
const matchReader = new MatchReader(csvFileReader);

// call load method so that we can get access to matches data of football.csv
matchReader.load()



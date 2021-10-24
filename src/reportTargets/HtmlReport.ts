import { writeFileSync } from "fs";
import { v4 as uuidv4 } from 'uuid';
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: String): void {
    const html = `
        <div>
            <h1>Analysis Output using HTML Report Class</h1>
            <h4>${report}</h4>
        </div>
    `

    writeFileSync(`report-${uuidv4()}.html`, html)
  }
}

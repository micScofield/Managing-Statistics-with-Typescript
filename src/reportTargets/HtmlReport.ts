import { writeFileSync } from "fs";
import path from "path";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: String): void {
    const html = `
        <div>
            <h1>Analysis Output using HTML Report Class</h1>
            <h4>${report}</h4>
        </div>
    `

    writeFileSync('report.html', html)
  }
}

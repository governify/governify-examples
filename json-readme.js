var fs = require("fs");

//Configurations (Modify these)
const projectName = "Bluejay";
const projectDescription = "Metrics and guarantees for the project Bluejay.";
const folder = "./bluejay/"
const inputFilename = "metricsLibrary.json";
const outputFilename = "README.md";
const outputJsonIndentSize = 2;

// Read file
const json = JSON.parse(fs.readFileSync(folder + inputFilename, 'utf-8'));

// File header
var readme = "# " + projectName + " metrics and guarantees\n\n";
readme += projectDescription + "\n\n";

// Metrics
readme += "## Metrics\n\n";


for (const metric of json.metrics){
    readme += "### " + metric.name;
    readme += "\n" + metric.description + "\n";
    readme += "``` json\n" + JSON.stringify(metric.dsl, undefined, outputJsonIndentSize) + "\n```";
    readme += "\n\n"
}

// Guarantees
readme += "## Guarantees\n\n";

for (const guarantee of json.guarantees){
    readme += "### " + guarantee.id;
    readme += "\n" + guarantee.description + "\n";
    readme += "``` json\n" + JSON.stringify(guarantee, undefined, outputJsonIndentSize) + "\n```";
    readme += "\n\n"
}

fs.writeFileSync(folder + outputFilename, readme);

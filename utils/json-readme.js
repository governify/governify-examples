var fs = require("fs");

//Configurations (Modify these)
const projectName = "Bluejay";
const projectDescription = "Metrics and guarantees for the project Bluejay.";
const folder = "../bluejay/"
const inputFilename = "metricsGuarantees.json";
const outputFilename = "README.md";
const outputJsonIndentSize = 2;

// Read file
const json = JSON.parse(fs.readFileSync(folder + inputFilename, 'utf-8'));

// File header
var readme = "# " + projectName + " metrics and guarantees\n\n";
readme += projectDescription + "\n\n";

// Index
readme += "## Index\n\n";

// Metrics
readme += "  * **[Metrics](#metrics)**\n";
let metricsString = "";

for (const metric of json.metrics){
    //Add metric to index
    readme += "    * [" + metric.name + "](#" + metric.name.toLowerCase() + ")\n";
    // Add metric to metrics String
    metricsString += "### " + metric.name;
    metricsString += "\n" + metric.description + "\n";
    metricsString += "``` json\n" + JSON.stringify(metric.dsl, undefined, outputJsonIndentSize) + "\n```";
    metricsString += "\n\n"
}

// Guarantees
readme += "  * **[Guarantees](#guarantees)**\n";
let guaranteesString = "";

for (const guarantee of json.guarantees){
    //Add guarantee to index
    readme += "    * [" + guarantee.id + "](#" + guarantee.id.toLowerCase() + ")\n";
    // Add guarantee to metrics String
    guaranteesString += "### " + guarantee.id;
    guaranteesString += "\n" + guarantee.description + "\n";
    guaranteesString += "``` json\n" + JSON.stringify(guarantee, undefined, outputJsonIndentSize) + "\n```";
    guaranteesString += "\n\n"
}


//Combine parts of the readme
readme += "## Metrics\n\n";
readme += metricsString;
readme += "## Guarantees\n\n";
readme += guaranteesString;

fs.writeFileSync(folder + outputFilename, readme);

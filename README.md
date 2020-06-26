# Governify Metrics

This repository contains all the metrics and guarantees created for all governify ecosystems.

## Format

### README.md files

They should follow the next structure:

1. A title with one # for H1 style
2. A brief description of the project
3. The title Metrics with two ## for H2
4. For each metric:
    * The name of the metric headed by three # for H3
    * A description of the metric
    * The DSL contained inside a json code block (Three \` for starting the block + "json" word for specifiying the format + dsl + three \` for closing the block)
5. The title Guarantees with two ## for H2
6. For each Guarantee:
    * The name of the guarantee headed by three # for H3
    * A description of the guarantee
    * The DSL contained inside a json code block (Three ` for starting the block + "json" word for specifiying the format + dsl + three ` for closing the block)

You can always look at other existing README.md files if whats explained here is not clear enought.

## Utils

There are two tools provided for transforming the README.md files into JSON files and viceversa in case it is needed. They have a configuration part at the beggining and they transform this files into the other if the format is the specified earlier in this file.
# Metrics and guarantees

Click on the link to access the different examples for the system:

  * [Event Collector](https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector/README.md)
  * [GH Collector](https://github.com/isa-group/governify-examples/blob/master/metrics/gh-collector/README.md)
  * [PT Collector](https://github.com/isa-group/governify-examples/blob/master/metrics/pt-collector/README.md)

# Format
## README.md files

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
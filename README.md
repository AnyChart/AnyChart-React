[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](http://www.anychart.com)

React plugin for AnyChart
=========

Intuitive and easy to use [React](https://facebook.github.io/react/) plugin that allows you to create and work with [AnyChart charts](http://anychart.com).

## Table of Contents

* [Download and Install](#download-and-install)
* [Quick Start](#quick-start)
* [Build](#build)
* [Examples Overview](#examples-overview)
* [Usage](#usage)
* [Contacts](#contacts)
* [Links](#links)
* [License](#license)

## Download and install

#### Package managers

You can install AnyChart-React using **npm**, **bower** or **yarn**:

* `npm install anychart-react`
* `bower install anychart-react`
* `yarn add anychart-react`

#### Direct download

All binaries are located in [dist](https://github.com/AnyChart/AnyChart-React/tree/master/dist) folder.

## Quick Start
Here is a basic sample that shows how to add a chart:

index.html:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Anychart React plugin demo</title>
</head>

<body>
<!-- Mount node for application -->
<div id="root"></div>
<script src="app.min.js"></script>
</body>
</html>
```
Where app.min.js is compiled and bundled script of your application.

app.js:

```
import React from 'react'
import ReactDOM from 'react-dom'
import AnyChart from 'anychart-react.min.js'

ReactDOM.render(
  <AnyChart
    type="pie"
    data={[1, 2, 3, 4]}
    title="Simple pie chart"
  />, document.getElementById('root'));
```

## Build
First of all run `npm install` to install dependencies.

To compile plugin source code and examples we use gulp.

Note that plugin developed using ES6 syntax. There is `import` and `require` statements in it, so you will need a javascript bundler (such as browserify or webpack) if you want to include it in your app.

There are several gulp tasks:

`gulp` will just compile dev and prod(minified) versions of plugin.

`gulp examples` will compile all examples and put them into `examples/` folder by example name.

`gulp <example_name>` will compile source of specified example.

So fill free to modify examples, build it and see the results.

## Examples Overview
See these examples to learn how things work:

* **[chart_with_json](https://github.com/anychart/anychart-react/blob/master/examples/chart_with_json)**: Chart with complex json settings.
* **[charts_with_controls](https://github.com/anychart/anychart-react/blob/master/examples/chart_with_json)**: Simple demo with 2 charts. Allows to change title and enable/disable legend.
* **[choropleth_map](https://github.com/anychart/anychart-react/blob/master/examples/chart_with_json)**: Choropleth map demo.
* **[data_streaming](https://github.com/anychart/anychart-react/blob/master/examples/chart_with_json)**: Simple data-streaming demo.
* **[simple_dashboard](https://github.com/anychart/anychart-react/blob/master/examples/chart_with_json)**: Simple dashboard demo.
* **[stock](https://github.com/anychart/anychart-react/blob/master/examples/chart_with_json)**: Stock chart demo.
* **[tabs](https://github.com/anychart/anychart-react/blob/master/examples/chart_with_json)**: Demo demonstrates how you can use AnyChart with [React Tabs](https://github.com/reactjs/react-tabs) component. Also demonstrates how to control legend through component state.

Source code of examples is located in [`examples/src`](https://github.com/anychart/anychart-react/blob/master/examples/src).

## Usage
Property | Code sample | Description
--- | --- | ---
instance | `<AnyChart instance={myChart}` | Allows to use [preconfigured instance](https://github.com/anychart/anychart-react/blob/master/examples/src/simple_dashboard.js)
id | `<AnyChart id="chart-container" />` | Describes id of container.
type* | `<AnyChart type="line" />` | Describes type of chart
data | `<AnyChart type="column" data={[3, 1, 2]} />` | Describes data
width/height | `<AnyChart width={800} height={600} />` | Descripes width/height of charts [stage](http://docs.anychart.com/latest/Graphics/Basics)
\* - property required if you do not use an instance.

If you do not use an instance - then properties of component are similar to our [JavaScript API](https://api.anychart.com). And in most cases are equivalent to method call on chart.

For example:

```
<AnyChart type="column" data={[3, 1, 2]} title="My Chart Title" legend="true"/>
```
equivalent to

```
var chart = anychart.column([3,1,2]);
chart.title("My Chart Title");
chart.legend(true);
```

#### Multiple entities (axis, lineMarkers, grids)
To configure entity by index you should use an array as value: first item in array - index of entity, second - config.

```
<AnyChart yAxis={[1, {enabled: true}]} />
```

Such as show in [chart_with_json](https://github.com/anychart/anychart-react/blob/master/examples/src/chart_with_json.js) example.

## Contacts

* Web: [www.anychart.com](http://www.anychart.com)
* Email: [contact@anychart.com](mailto:contact@anychart.com)
* Twitter: [anychart](https://twitter.com/anychart)
* Facebook: [AnyCharts](https://www.facebook.com/AnyCharts)
* LinkedIn: [anychart](https://www.linkedin.com/company/anychart)

## Links

* [AnyChart Website](http://www.anychart.com)
* [Download AnyChart](http://www.anychart.com/download/)
* [AnyChart Licensing](http://www.anychart.com/buy/)
* [AnyChart Support](http://www.anychart.com/support/)
* [Report Issues](http://github.com/AnyChart/anychart/issues)
* [AnyChart Playground](http://playground.anychart.com)
* [AnyChart Documentation](http://docs.anychart.com)
* [AnyChart API Reference](http://api.anychart.com)
* [AnyChart Sample Solutions](http://www.anychart.com/solutions/)
* [AnyChart Integrations](http://www.anychart.com/integrations/)

## License

[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/ruby-sinatra-mysql-template/blob/master/LICENSE).

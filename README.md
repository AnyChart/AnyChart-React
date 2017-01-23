[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](http://www.anychart.com)

React plugin for AnyChart
=========

A React Component for AnyChart.

## Table of Contents

* [Download and Install](#download-and-install)
* [Quick Start](#quick-start)
* [Build](#build)
* [Examples Overview](#examples-overview)
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

## Contacts

* Web: [www.anychart.com](www.anychart.com)
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

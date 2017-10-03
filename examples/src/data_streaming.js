import React from 'react'
import ReactDOM from 'react-dom'
import AnyChart from '../../dist/anychart-react.min.js'
import anychart from 'anychart'

let count = 50;
let rawData = [];
for (let i = 0; i < count; i++) {
  rawData.push([i, Math.random() * 10])
}
let dataSet = anychart.data.set(rawData);

ReactDOM.render(
  <AnyChart
    id="lineChart"
    width={800}
    height={600}
    type="line"
    data={dataSet}
    title="Streaming demo"
  />, document.getElementById('root'));

let counter = count;
setInterval(function() {
  dataSet.remove(0);
  dataSet.append([counter++, Math.random() * 10])
}, 500);

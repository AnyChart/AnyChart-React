import React from 'react'
import ReactDOM from 'react-dom'
import AnyChart from '../../dist/anychart-react.min.js'
import anychart from 'anychart'

let stage = anychart.graphics.create();
let chart1 = anychart.line([1, 2, 3]);
chart1.bounds(0, 0, '100%', '50%');
let chart2 = anychart.column();
chart2.column([3, 2, 1]);
chart2.line([3, 5, 6]);
chart2.bounds(0, '50%', '100%', '50%');

ReactDOM.render(
  <AnyChart
    instance={stage}
    width={800}
    height={600}
    charts={[chart1, chart2]}
  />, document.getElementById('root'));

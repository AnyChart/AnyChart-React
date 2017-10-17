import React from 'react'
import ReactDOM from 'react-dom'
import AnyChart from '../../dist/anychart-react.min.js'
import anychart from 'anychart'

const data = anychart.data.set([
  ['p1', 5, 4],
  ['p2', 6, 2],
  ['p3', 3, 7],
  ['p4', 1, 5]
]);

// Also you can set data as array or object
// As array
/*const data = [
  ['p1', 5, 4],
  ['p2', 6, 2],
  ['p3', 3, 7],
  ['p4', 1, 5]
];*/


// As object
/*
const data = [
  {x: 'p1', value1: 5, value2: 4},
  {x: 'p2', value1: 6, value2: 2},
  {x: 'p3', value1: 3, value2: 7},
  {x: 'p4', value1: 1, value2: 5}
];
*/

// Render chart with settings
ReactDOM.render(<AnyChart type="column" title="Multicolumn chart" width={800} height={600} legend={true} />, document.getElementById('root'));
// Re-render with multicolumn data. No need to set type secondly, because it just updates data
ReactDOM.render(<AnyChart data={data}/>, document.getElementById('root'));
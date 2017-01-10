import React from 'react'
import ReactDOM from 'react-dom'
import AnyChart from '../../src/anychart-react.jsx'

const complexSettings = {
  width: 800,
  height: 600,
  type: 'column',
  data: "P1,5\nP2,3\nP3,6\nP4,4",
  title: 'Column chart',
  yAxis: [1, {
    orientation: 'right',
    enabled: true
  }],
  legend: {
    background: 'lightgreen 0.4',
    padding: 0
  },
  lineMarker: {
    value: 4.5
  }
};

ReactDOM.render(
  <AnyChart
    {...complexSettings}
  />, document.getElementById('root'));
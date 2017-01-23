import React from 'react'
import ReactDOM from 'react-dom'
import AnyChart from '../../dist/anychart-react.min.js'


ReactDOM.render(
  <AnyChart
    id="pieChart"
    width={800}
    height={600}
    type="pie"
    data={[1, 2, 3, 4]}
    title="Simple pie chart"
  />, document.getElementById('pie'));

ReactDOM.render(
  <AnyChart
    id="columnChart"
    width={800}
    height={600}
    type="column"
    data={"P1,5\nP2,3\nP3,6\nP4,4"}
    title="Simple column chart"
  />, document.getElementById('column'));

document.getElementById('titleChange').addEventListener('change', function(e) {
  ReactDOM.render(
  <AnyChart
    title={e.target.value}
  />, document.getElementById('pie'));
});

document.getElementById('legendChange').addEventListener('change', function(e) {
  ReactDOM.render(
  <AnyChart
    legend={e.target.checked}
  />, document.getElementById('column'));
});

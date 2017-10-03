import React from 'react'
import ReactDOM from 'react-dom'
import AnyChart from '../../dist/anychart-react.min.js'
import anychart from 'anychart'

let data = anychart.data.set([
  {'id': 'AU.WA', 'value': 300},
  {'id': 'AU.JB', 'value': 230},
  {'id': 'AU.NS', 'value': 240},
  {'id': 'AU.VI', 'value': 275},
  {'id': 'AU.NT', 'value': 130},
  {'id': 'AU.TS', 'value': 190},
  {'id': 'AU.CT', 'value': 100},
  {'id': 'AU.SA', 'value': 305},
  {'id': 'AU.QL', 'value': 190}
]);

// please do not forget to include the map to your html file (<head> section)
// <script src="path/to/node_modules/anychart/dist/geodata/countries/australia/australia.js"></script>

ReactDOM.render(
  <AnyChart
    width={800}
    height={600}
    type="choropleth"
    data={data}
    title="Map example"
    geoData="anychart.maps.australia"
  />, document.getElementById('root'));
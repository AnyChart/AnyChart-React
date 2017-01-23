import React from 'react'
import ReactDOM from 'react-dom'
import AnyChart from '../../dist/anychart-react.min.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      legend: false
    };
    this.handleLegendChange = this.handleLegendChange.bind(this);
  }

  handleLegendChange(e) {
    this.setState({
      legend: e.target.checked
    });
  }

  render() {
    return (
      <Tabs>

        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
          <Tab>Tab3</Tab>
        </TabList>

        <TabPanel>
          <AnyChart width={800} height={600} title="Tab1 chart" type="pie" data={[5, 3, 3, 5]}/>
        </TabPanel>

        <TabPanel>
          <label>Legend: <input id="legendChange" type="checkbox" onChange={this.handleLegendChange} /></label>
          <AnyChart legend={this.state.legend} width={800} height={600} title="Tab2 chart" type="column" data={"P1,5\nP2,3\nP3,6\nP4,4"}/>
        </TabPanel>

        <TabPanel>
          <AnyChart width={800} height={600} title="Tab3 chart" type="line" data={"P1,5\nP2,3\nP3,6\nP4,4"}/>
        </TabPanel>

      </Tabs>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

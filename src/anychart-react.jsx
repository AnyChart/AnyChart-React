import React from 'react';
require('anychart');

class AnyChart extends React.Component {
  constructor(props) {
    super(props);
    this.instance = null;
    this.isStage = false;
    this.disposeInstance = false;
    this.multipleEntities = ['xAxis', 'yAxis', 'lineMarker', 'rangeMarker', 'textMarker'];
  }

  removeInstance() {
    if (this.instance) {
      if (this.disposeInstance)
        this.instance.dispose();
      else {
        if (this.isStage)
          this.instance.remove();
        else
          this.instance.container().getStage().remove();
      }
    }
  }

  isArray(value) {
    return ((typeof value == 'object') && (value instanceof Array))
  }

  applyProps(props) {
    for (let key of Object.keys(props)) {
      let value = props[key];
      if ((key == 'width' || key == 'height') && !this.isStage)
        this.instance.container().getStage()[key](value);

      if (this.instance[key]) {
        if (~this.multipleEntities.indexOf(key)) {
          if (!this.isArray(value))
            value = [value];
          this.instance[key](...value)
        } else
          this.instance[key](value)
      }
    }
  }

  createInstance(props) {
    if (props.instance) {
      this.removeInstance();
      this.instance = props.instance;
      this.isStage = ((typeof this.instance.draw) !== 'function');
      delete props.instance;
      this.disposeInstance = false;
    } else if (props.type) {
      this.removeInstance();
      this.disposeInstance = true;
      this.instance = anychart[props.type](props.data);
      this.isStage = false;
      delete props.type;
      delete props.data;
    }
    if (this.instance)
      this.instance.container(props.id || 'ac-chart-container');
    delete props.id;
  }

  drawInstance(props) {
    if (!this.instance) return;
    if (this.isStage) {
      this.instance.suspend();
      let charts = props.charts;
      delete props.charts;
      this.applyProps(props);
      for (let chart of charts) {
        chart.container(this.instance).draw();
      }
      this.instance.resume();
    } else {
      this.applyProps(props);
      this.instance.draw();
    }
  }

  createAndDraw(prevProps) {
    var props = Object.assign(prevProps, this.props);
    this.createInstance(props);
    this.drawInstance(props);
  }

  render() {
    return (
      <div id={this.props.id || 'ac-chart-container'}></div>
    )
  }

  componentDidMount() {
    this.createAndDraw({});
  }

  componentDidUpdate(prevProps, prevState) {
    var props = Object.assign({}, prevProps);
    delete props.type;
    delete props.instance;
    this.createAndDraw(props)
  }

  componentWillUnmount() {
    this.removeInstance();
  }
}

export default AnyChart

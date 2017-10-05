import React from 'react';
import 'anychart';

/**
 * AnyChart React plugin.
 */
class AnyChart extends React.Component {
  constructor(props) {
    super(props);
    /**
     * Instance (stage or chart).
     * @type {Object}
     */
    this.instance = null;

    /**
     * Whether instance is stage.
     * @type {boolean}
     */
    this.isStage = false;

    /**
     * Should we dispose instance or not.
     * @type {boolean}
     */
    this.disposeInstance = false;

    /**
     * Properties of AnyChart which expected as array of [entity_index, json].
     * E.g. <AnyChart yAxis={[1, {orientation: 'right'}]} />
     * @type {Array.<string>}
     */
    this.multipleEntities = ['xAxis', 'yAxis', 'lineMarker', 'rangeMarker', 'textMarker', 'grid', 'minorGrid'];

    /**
     * Container for chart/stage.
     * @type {string}
     */
    this.containerId = props.id || 'ac-chart-container';
  }

  /**
   * Remove instance (dispose it if necessary).
   */
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

  /**
   * Checker for array.
   * @param {*} value Value to check.
   * @return {boolean}
   */
  isArray(value) {
    return ((typeof value == 'object') && (value instanceof Array))
  }

  /**
   * Applies props.
   * @param {Object} props Properties.
   */
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

  /**
   * Create instance to render chart or use instance property.
   * @param {Object} props Properties.
   */
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
      this.instance.container(this.containerId);
    delete props.id;
  }

  /**
   * Draws chart.
   * @param {Object} props Properties.
   */
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

  /**
   * Method that
   * @param {Object} prevProps
   */
  createAndDraw(prevProps) {
    var props = Object.assign(prevProps, this.props);
    this.createInstance(props);
    this.drawInstance(props);
  }

  /**
   * Render container for future chart drawing.
   */
  render() {
    return (
      <div id={this.containerId}></div>
    )
  }

  /**
   * Component has rendered.
   */
  componentDidMount() {
    this.createAndDraw({});
  }

  componentWillUpdate(nextProps, nextState) {
    this.containerId = nextProps.id || this.containerId;
  }

  /**
   * Component has re-rendered.
   * @param {Object} prevProps Previous properties.
   * @param {Object} prevState Previous state.
   */
  componentDidUpdate(prevProps, prevState) {
    var props = Object.assign({}, prevProps);
    delete props.type;
    delete props.instance;
    this.createAndDraw(props)
  }

  /**
   * Unmount react component.
   */
  componentWillUnmount() {
    this.removeInstance();
  }
}

/**
 * Default export.
 */
export default AnyChart

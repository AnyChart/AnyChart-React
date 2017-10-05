'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('anychart');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * AnyChart React plugin.
 */
var AnyChart = function (_React$Component) {
  _inherits(AnyChart, _React$Component);

  function AnyChart(props) {
    _classCallCheck(this, AnyChart);

    /**
     * Instance (stage or chart).
     * @type {Object}
     */
    var _this = _possibleConstructorReturn(this, (AnyChart.__proto__ || Object.getPrototypeOf(AnyChart)).call(this, props));

    _this.instance = null;

    /**
     * Whether instance is stage.
     * @type {boolean}
     */
    _this.isStage = false;

    /**
     * Should we dispose instance or not.
     * @type {boolean}
     */
    _this.disposeInstance = false;

    /**
     * Properties of AnyChart which expected as array of [entity_index, json].
     * E.g. <AnyChart yAxis={[1, {orientation: 'right'}]} />
     * @type {Array.<string>}
     */
    _this.multipleEntities = ['xAxis', 'yAxis', 'lineMarker', 'rangeMarker', 'textMarker', 'grid', 'minorGrid'];

    /**
     * Container for chart/stage.
     * @type {string}
     */
    _this.containerId = props.id || 'ac-chart-container';
    return _this;
  }

  /**
   * Remove instance (dispose it if necessary).
   */


  _createClass(AnyChart, [{
    key: 'removeInstance',
    value: function removeInstance() {
      if (this.instance) {
        if (this.disposeInstance) this.instance.dispose();else {
          if (this.isStage) this.instance.remove();else this.instance.container().getStage().remove();
        }
      }
    }

    /**
     * Checker for array.
     * @param {*} value Value to check.
     * @return {boolean}
     */

  }, {
    key: 'isArray',
    value: function isArray(value) {
      return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value instanceof Array;
    }

    /**
     * Applies props.
     * @param {Object} props Properties.
     */

  }, {
    key: 'applyProps',
    value: function applyProps(props) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var value = props[key];
          if ((key == 'width' || key == 'height') && !this.isStage) this.instance.container().getStage()[key](value);

          if (this.instance[key]) {
            if (~this.multipleEntities.indexOf(key)) {
              var _instance;

              if (!this.isArray(value)) value = [value];
              (_instance = this.instance)[key].apply(_instance, _toConsumableArray(value));
            } else this.instance[key](value);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Create instance to render chart or use instance property.
     * @param {Object} props Properties.
     */

  }, {
    key: 'createInstance',
    value: function createInstance(props) {
      if (props.instance) {
        this.removeInstance();
        this.instance = props.instance;
        this.isStage = typeof this.instance.draw !== 'function';
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
      if (this.instance) this.instance.container(this.containerId);
      delete props.id;
    }

    /**
     * Draws chart.
     * @param {Object} props Properties.
     */

  }, {
    key: 'drawInstance',
    value: function drawInstance(props) {
      if (!this.instance) return;
      if (this.isStage) {
        this.instance.suspend();
        var charts = props.charts;
        delete props.charts;
        this.applyProps(props);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = charts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var chart = _step2.value;

            chart.container(this.instance).draw();
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
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

  }, {
    key: 'createAndDraw',
    value: function createAndDraw(prevProps) {
      var props = Object.assign(prevProps, this.props);
      this.createInstance(props);
      this.drawInstance(props);
    }

    /**
     * Render container for future chart drawing.
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: this.containerId });
    }

    /**
     * Component has rendered.
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createAndDraw({});
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this.containerId = nextProps.id || this.containerId;
    }

    /**
     * Component has re-rendered.
     * @param {Object} prevProps Previous properties.
     * @param {Object} prevState Previous state.
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var props = Object.assign({}, prevProps);
      delete props.type;
      delete props.instance;
      this.createAndDraw(props);
    }

    /**
     * Unmount react component.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeInstance();
    }
  }]);

  return AnyChart;
}(_react2.default.Component);

/**
 * Default export.
 */


exports.default = AnyChart;
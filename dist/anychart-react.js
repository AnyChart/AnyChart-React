"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("anychart");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * AnyChart React plugin.
 */
var AnyChart = function AnyChart(props) {
  var ref = (0, _react.useRef)({
    isStage: false,
    instance: null
  });
  var multipleEntities = ['xAxis', 'yAxis', 'lineMarker', 'rangeMarker', 'textMarker', 'grid', 'minorGrid'];
  (0, _react.useEffect)(function () {
    return createAndDraw(props);
  });
  /**
   * Create instance to render chart or use instance property.
   * @param {Object} props Properties.
   * @returns {}
   */

  var createInstance = (0, _react.useCallback)(function (props) {
    var id = props.id,
        instance = props.instance,
        type = props.type,
        data = props.data;

    if (instance) {
      ref.current.instance = instance;
      ref.current.isStage = typeof instance.draw != 'function';
    } else if (type) {
      ref.current.instance = anychart[type](data);
      ref.current.isStage = false;
    }

    ref.current.instance.container(id);
    ref.current.prevProps = props;
    /**
     * Remove instance (dispose it if necessary).
     */

    return function () {
      if (ref.current.instance) {
        // dispose if instance was passed in
        if (instance) return instance.dispose(); // if staged, remove the stage

        if (ref.current.isStage) return ref.current.instance.remove(); // get the stage and remove it

        ref.current.instance.container().getStage().remove();
      }
    };
  });
  /**
   * Method that
   * @param {Object} prevProps
   */

  var createAndDraw = (0, _react.useCallback)(function (newProps) {
    var prevProps = ref.current.prevProps;

    var props = _objectSpread(_objectSpread({}, prevProps), newProps);

    var destroy = createInstance(props);
    drawInstance(props);
    return destroy;
  });
  /**
   * Applies props.
   * @param {Object} props Properties.
   */

  var applyProps = (0, _react.useCallback)(function (props) {
    var _ref$current = ref.current,
        instance = _ref$current.instance,
        isStage = _ref$current.isStage;

    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (['width', 'height'].includes(key) && !isStage) instance.container().getStage()[key](value);

      if (key in instance && typeof instance[key] == 'function') {
        if (multipleEntities.includes(key)) {
          instance[key].apply(instance, _toConsumableArray(Array.isArray(value) ? value : [value]));
        } else instance[key](value);
      }
    }
  });
  /**
   * Draws chart.
   * @param {Object} props Properties.
   */

  var drawInstance = (0, _react.useCallback)(function (props) {
    var _ref$current2 = ref.current,
        instance = _ref$current2.instance,
        isStage = _ref$current2.isStage;
    var _props$charts = props.charts,
        charts = _props$charts === void 0 ? [] : _props$charts;
    if (!instance) return;

    if (isStage) {
      instance.suspend();
      applyProps(props);

      var _iterator = _createForOfIteratorHelper(charts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var chart = _step.value;
          chart.container(instance).draw();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      instance.resume();
    } else {
      applyProps(props);
      instance.draw();
    }
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: props.id
  });
};

AnyChart.defaultProps = {
  id: 'ac-chart-container'
};
var _default = AnyChart;
exports["default"] = _default;
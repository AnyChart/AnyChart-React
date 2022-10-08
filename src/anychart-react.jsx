import React, { useEffect, useRef, useCallback } from 'react';
import 'anychart';

/**
 * AnyChart React plugin.
 */
const AnyChart = (props) => {
  const ref = useRef({
    isStage: false,
    instance: null,
  });

  const multipleEntities = [
    'xAxis',
    'yAxis',
    'lineMarker',
    'rangeMarker',
    'textMarker',
    'grid',
    'minorGrid',
  ];

  useEffect(() => {
    return createAndDraw(props);
  });

  /**
   * Create instance to render chart or use instance property.
   * @param {Object} props Properties.
   * @returns {}
   */
  const createInstance = useCallback((props) => {
    const { id, instance, type, data } = props;
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
    return () => {
      if (ref.current.instance) {
        // dispose if instance was passed in
        if (instance) return instance.dispose();

        // if staged, remove the stage
        if (ref.current.isStage) return ref.current.instance.remove();

        // get the stage and remove it
        ref.current.instance.container().getStage().remove();
      }
    };
  });

  /**
   * Method that
   * @param {Object} prevProps
   */
  const createAndDraw = useCallback((newProps) => {
    const { prevProps } = ref.current;
    const props = { ...prevProps, ...newProps };

    const destroy = createInstance(props);
    drawInstance(props);

    return destroy;
  });

  /**
   * Applies props.
   * @param {Object} props Properties.
   */
  const applyProps = useCallback((props) => {
    const { instance, isStage } = ref.current;
    for (const [key, value] of Object.entries(props)) {
      if (['width', 'height'].includes(key) && !isStage)
        instance.container().getStage()[key](value);

      if (key in instance && typeof instance[key] == 'function') {
        if (multipleEntities.find(key)) {
          instance[key](...(Array.isArray(value) ? value : [value]));
        } else instance[key](value);
      }
    }
  });

  /**
   * Draws chart.
   * @param {Object} props Properties.
   */
  const drawInstance = useCallback((props) => {
    const { instance, isStage } = ref.current;
    const { charts = [] } = props;
    if (!instance) return;

    if (isStage) {
      instance.suspend();
      applyProps(props);

      for (const chart of charts) {
        chart.container(instance).draw();
      }

      instance.resume();
    } else {
      applyProps(props);
      instance.draw();
    }
  });

  return <div id={props.id}></div>;
};

AnyChart.defaultProps = {
  id: 'ac-chart-container',
};

export default AnyChart;

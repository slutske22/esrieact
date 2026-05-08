import { useUpdateEffect } from "./useUpdateEffect";
import { usePrevious } from "./usePrevious";
import { getObjectDiff } from ".";

interface EsriClassable {
  constructor: Function;
}

/**
 * Callback invoked after a prop diff has been written to the ESRI instance.
 * Useful for stateful props (e.g. FeatureLayer's `url`/`layerId`) where setting
 * the property alone isn't enough — the layer needs an additional kick like
 * `.refresh()` to actually re-bind to the new source.
 *
 * Receives the list of property keys that changed (and were written to the
 * instance) and the instance itself. Fires only when at least one prop changed.
 */
export type PropsChangedCallback<T> = (
  changedProps: string[],
  instance: T,
) => void;

/**
 * Generic hook to update an existing ESRI class object instance with new properties
 * @param instance The ESRI item instance to update
 * @param properties The properties passed to the esri instance
 * @param onChanged Optional callback fired after a non-empty diff is written to the
 *   instance. Use this to trigger any imperative follow-up (e.g. `.refresh()`) that
 *   ESRI doesn't perform automatically when the relevant properties are mutated.
 */
export const useEsriPropertyUpdates = <T extends EsriClassable, P>(
  instance: T | undefined,
  properties: P,
  onChanged?: PropsChangedCallback<T>,
) => {
  const prevProperties = usePrevious(properties);

  /**
   * Imperatively set properties on ESRI instance if properties change, based on the setter
   * technique described here: https://developers.arcgis.com/javascript/latest/programming-patterns/#setters
   */
  useUpdateEffect(() => {
    if (prevProperties) {
      const updatedProperties = getObjectDiff(properties!, prevProperties);

      if (updatedProperties.length) {
        updatedProperties.forEach((property) => {
          // @ts-expect-error Need to properly type this
          instance[property] = properties[property];
        });

        if (instance) onChanged?.(updatedProperties, instance);
      }
    }
    // Do not use JSON.stringify(properties): Esri accessors do not round-trip in JSON.
    // getObjectDiff uses propertyValuesEqual (not lodash isEqual for class instances):
    // two Renderer clones often looked "equal" to isEqual, so renderer never applied.
  }, [instance, properties]);
};

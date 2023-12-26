import { useUpdateEffect } from "usehooks-ts";
import { usePrevious } from "./usePrevious";
import { getObjectDiff } from ".";

interface EsriClassable {
  constructor: Function;
}

/**
 * Generic hook to update an existing ESRI class object instance with new properties
 * @param item The ESRI item instance to update
 * @param properties The properties passed to the esri instance
 */
export const useEsriPropertyUpdates = <T extends EsriClassable, P>(
  item: T,
  properties: P,
) => {
  const prevProperties = usePrevious(properties);

  /**
   * Imperatively set properties on ESRI instance if properties change
   */
  useUpdateEffect(() => {
    if (prevProperties) {
      const updatedProperties = getObjectDiff(properties!, prevProperties);

      if (updatedProperties.length) {
        updatedProperties.forEach((property) => {
          // @ts-expect-error Need to properly type this
          item[property] = properties[property];
        });
      }
    }
  }, [properties]);
};

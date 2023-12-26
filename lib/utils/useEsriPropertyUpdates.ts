import { useUpdateEffect } from "usehooks-ts";
import { usePrevious } from "./usePrevious";
import { getObjectDiff } from ".";

interface EsriClassable {
  constructor: Function;
}

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

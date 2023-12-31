import { useEffect, useRef } from "react";

export type EventHandlerMap = Record<string, Function>;

/**
 * Utility hook to attach event handlers to an esri [Accessor](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html)
 * instance, and refresh those event handlers if they are updated
 *
 * @param instance The esri item instance to attach events to
 * @param events The events to attach, in the form of an event handler function map
 */
export function useEvents<I extends __esri.Accessor, E extends EventHandlerMap>(
  instance: I,
  events?: E,
) {
  const handlers = useRef<IHandle[]>([]);

  /**
   * Attach event listeners on mount, if there are any
   */
  useEffect(() => {
    if (instance && events) {
      handlers.current.forEach((handler) => handler.remove());
      handlers.current = Object.keys(events).map((eventName) => {
        // @ts-expect-error Need typescript mapped types here, but will work even if TS is picky
        return instance.on(eventName, events[eventName]);
      });
    }
    // Remove listeners and flush listener ref on unmount
    return () => {
      handlers.current.forEach((handler) => handler.remove());
      handlers.current = [];
    };
  }, [instance, events]);
}

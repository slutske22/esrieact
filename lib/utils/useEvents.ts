import { useEffect, useRef } from "react";

/**
 * Event handler that takes in modifier parameter
 */
export type WithMofidiers<T extends Function = Function> = {
  modifiers: string[];
  handler: T;
};

/**
 * View event callback that may or may not take optional modifiers
 */
export type HandlerWithOptionalModifiers<T extends Function = Function> =
  | T
  | WithMofidiers<T>;

export type EventHandlerMap = Record<
  string,
  Function | HandlerWithOptionalModifiers
>;

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
        const eventHanler = events[eventName];

        if (eventHanler) {
          if ((eventHanler as WithMofidiers).modifiers) {
            const { modifiers, handler } = eventHanler as WithMofidiers;
            // @ts-expect-error allow events to be handled
            return instance.on(eventName, modifiers, handler);
          } else {
            // @ts-expect-error allow events to be handled
            return instance.on(eventName, eventHanler);
          }
        }
      });
    }
    // Remove listeners and flush listener ref on unmount
    return () => {
      handlers.current.forEach((handler) => handler.remove());
      handlers.current = [];
    };
  }, [instance, events]);
}

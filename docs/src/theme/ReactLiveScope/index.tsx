import React from "react";
import * as constants from "./constants";

// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  ...React,

  // constants
  ...constants,
};

// Only import esrieact on the client side
if (typeof window !== "undefined") {
  import("../../../../packages/esrieact/dist").then((Esrireact) => {
    Object.assign(ReactLiveScope as any, Esrireact);
  });
}

export default ReactLiveScope;

import React from "react";
import * as Esrireact from "../../../../packages/esrieact/dist";
import * as constants from "./constants";

// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  ...React,

  // Enable all esrieact imports in interactive code examples in mdx
  ...Esrireact,

  // constants
  ...constants,
};

export default ReactLiveScope;

import React, { Fragment } from "react";
import { useAtom } from "jotai";
import { HAWAII_LAYERS, LayerConfig } from "./layers";
import { visibleLayersAtom } from "./state";

/**
 * The lefthand layer menu of the application
 */
export const Menu: React.FC = () => {
  const [visibleLayers, setVisibleLayers] = useAtom(visibleLayersAtom);

  const renderMenuItem = (layer: LayerConfig, depth = 0) => (
    <div
      className="menu-item"
      key={layer.id}
      style={{ paddingLeft: `${depth * 20}px` }}
    >
      <div className="item-row">
        <input
          type="checkbox"
          name={layer.id}
          checked={visibleLayers.includes(layer.id)}
          onClick={() => {
            if (visibleLayers.includes(layer.id)) {
              setVisibleLayers((prev) => prev.filter((l) => l !== layer.id));
            } else {
              setVisibleLayers((prev) => [...prev, layer.id]);
            }
          }}
        />
        <span>{layer.description}</span>
      </div>
      <div className="custom-control-wrapper">
        {layer.CustomControls && <layer.CustomControls />}
      </div>
    </div>
  );

  return (
    <div className="main-menu">
      <div className="menu-title">
        <a
          href="https://slutske22.github.io/esrieact/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/esrieact-logo-3.png" alt="ESRIEACT Logo" />
        </a>
        <h3>ESRIEACT Example App</h3>
      </div>
      {HAWAII_LAYERS.map((layer) => {
        return (
          <Fragment key={layer.id}>
            {renderMenuItem(layer)}
            {layer.sublayers?.map((sublayer) => renderMenuItem(sublayer, 1))}
          </Fragment>
        );
      })}
    </div>
  );
};

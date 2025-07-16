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
  );

  return (
    <div className="main-menu">
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

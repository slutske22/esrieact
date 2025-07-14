import React from "react";
import { useAtom } from "jotai";
import { HAWAII_LAYERS } from "./layers";
import { visibleLayersAtom } from "./state";

/**
 * The lefthand layer menu of the application
 */
export const Menu: React.FC = () => {
  const [visibleLayers, setVisibleLayers] = useAtom(visibleLayersAtom);

  return (
    <div className="main-menu">
      {HAWAII_LAYERS.map((layer) => {
        return (
          <div className="menu-item" key={layer.id}>
            <input
              type="checkbox"
              checked={visibleLayers.includes(layer.id)}
              onClick={() => {
                if (visibleLayers.includes(layer.id)) {
                  setVisibleLayers((prev) =>
                    prev.filter((l) => l !== layer.id),
                  );
                } else {
                  setVisibleLayers((prev) => [...prev, layer.id]);
                }
              }}
            />
            <span>{layer.description}</span>
          </div>
        );
      })}
    </div>
  );
};

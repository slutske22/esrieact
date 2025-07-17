import React from "react";
import { atom, useAtom } from "jotai";
import { benthicZones } from "./layers";

export const censusFilterValueAtom = atom<number | undefined>(undefined);
export const benthicZoneValueAtom = atom<string | undefined>(undefined);

/**
 * Little control for census filter
 */
export const CensusLayerFilter: React.FC = () => {
  const [value, setValue] = useAtom(censusFilterValueAtom);

  return (
    <div>
      <label>Population &gt;</label>
      <input
        value={value}
        onChange={(e) =>
          setValue(e.target.value ? Number(e.target.value) : undefined)
        }
      />
    </div>
  );
};

/**
 * Little control for census filter
 */
export const BenthicLayerFilter: React.FC = () => {
  const [value, setValue] = useAtom(benthicZoneValueAtom);

  return (
    <div>
      <label>Zone: </label>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value={undefined}>All</option>
        {benthicZones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
    </div>
  );
};

import React from "react";
import { atom, useAtom } from "jotai";

export const censusFilterValueAtom = atom<number | undefined>(undefined);

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

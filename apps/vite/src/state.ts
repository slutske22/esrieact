import { atom } from "jotai";
import { HAWAII_LAYERS } from "./layers";

export const clickedLocationAtom = atom<object | null>(null);
export const clickedGraphicsAtom = atom<__esri.Graphic[]>([]);
export const maxStorageAtom = atom<number>(10000);
export const rendererImageAtom = atom<string | undefined>(undefined);
export const visibleLayersAtom = atom<string[]>([
  // ...HAWAII_LAYERS.map((l) => l.id),
  // ...(HAWAII_LAYERS.filter((l) => l.sublayers)
  //   .map((l) => l.sublayers)
  //   .flat()
  //   .map((sl) => sl?.id)
  //   .filter(Boolean) as string[]),
  "benthic-habitat",
]);

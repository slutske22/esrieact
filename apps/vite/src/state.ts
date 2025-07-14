import { atom } from "jotai";

export const clickedLocationAtom = atom<object | null>(null);
export const clickedGraphicsAtom = atom<__esri.Graphic[]>([]);
export const maxStorageAtom = atom<number>(10000);
export const rendererImageAtom = atom<string | undefined>(undefined);

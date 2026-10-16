import manifest from "./images.json";

export type ImageName = keyof typeof manifest;
export type ImageData = { src: string; width: number; height: number };

export function img(name: ImageName): ImageData {
  return manifest[name];
}

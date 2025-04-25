declare module "dom-to-image-more" {
  export interface Options {
    width?: number
    height?: number
    bgcolor?: string
    style?: Record<string, string>
    quality?: number
    scale?: number
    imagePlaceholder?: string
  }

  export function toSvg(node: HTMLElement, options?: Options): Promise<string>
  export function toPng(node: HTMLElement, options?: Options): Promise<string>
  export function toJpeg(node: HTMLElement, options?: Options): Promise<string>
  export function toBlob(node: HTMLElement, options?: Options): Promise<Blob>
  export function toPixelData(node: HTMLElement, options?: Options): Promise<Uint8ClampedArray>
}

export interface PathOptions {
  dir?: string;
  root?: string;
  base?: string;
  name?: string;
  ext?: string;
}

export function normalize(path: string): string;
export function basename(path: string, ext: string): string;
export function dirname(path: string): string;
export function extname(path: string): string;
export function format(options: PathOptions): string;
export function isAbsolute(path: string): boolean;
export function parse(path: string): PathOptions;
export function resolve(): string;
export function relative(from: string, to: string): string;
export function join(paths: [string]): string;

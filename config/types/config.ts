export type Mode = "development" | "production";

interface Paths {
  src: string;
  entry: string;
  output: string;
  html: string;
}

export interface BuildOptions {
  paths: Paths;
  isDev: boolean;
  port: number;
  mode: Mode
}

export interface BuildEnv {
  mode: Mode;
  port: number
}
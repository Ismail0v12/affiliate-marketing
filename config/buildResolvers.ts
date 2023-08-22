import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    preferAbsolute: true,
    extensions: ['.tsx', '.ts', '.js'],
    alias: {},
    mainFiles: ['index'],
    modules: [options.paths.src, "node_modules"]
  }
}
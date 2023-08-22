import {BuildOptions} from "./types/config";
import {WebpackConfiguration} from "webpack-cli";
import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";


export const buildConfig = (options: BuildOptions): WebpackConfiguration => ({
  entry: options.paths.entry,
  output: {
    path: options.paths.output,
    clean: true,
    filename: '[name].[contenthash:4].js'
  },
  mode: options.mode,
  devServer: buildDevServer(options),
  plugins: buildPlugins(options),
  module: {
    rules: buildLoaders(options)
  },
  resolve: buildResolvers(options)
})
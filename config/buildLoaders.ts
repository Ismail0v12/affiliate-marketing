import type {RuleSetRule} from "webpack"
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const {isDev} = options;
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          },
        }
      },
      "sass-loader",
    ],
  }
  return [tsLoader, scssLoader]
}
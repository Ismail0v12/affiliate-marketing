import path from "path";
import {Configuration as WebpackConfiguration} from "webpack"
import {BuildEnv, BuildOptions} from "./config/types/config";
import {buildConfig} from "./config/buildConfig";


export default (env: BuildEnv): WebpackConfiguration => {
  const mode = env.mode || "development"
  const isDev = env.mode === "development"
  const port = env.port || 3000;
  const options: BuildOptions = {
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, 'build'),
      src: path.resolve(__dirname, "src"),
      html: path.resolve(__dirname, "public", 'index.html')
    },
    mode,
    isDev,
    port
  }

  return buildConfig(options);
};

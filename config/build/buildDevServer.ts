import { BuildOptions } from './types/config';

import type { Configuration as BuildDevServerConfig } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): BuildDevServerConfig {
  return { port: options.port, open: true, historyApiFallback: true };
}

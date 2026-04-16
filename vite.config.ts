import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import Sonda from 'sonda/vite';
import { defineConfig } from 'vite';
import { analyzer, unstableRolldownAdapter } from 'vite-bundle-analyzer';

export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    unstableRolldownAdapter(analyzer()),
    Sonda()
  ],
  resolve: {
    alias: [{
      find: '@',
      replacement: '/src'
    }]
  }
});

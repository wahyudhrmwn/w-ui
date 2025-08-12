import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  splitting: true,
  external: ["react", "react-dom"],
  // Bundle clsx karena ini adalah dependency langsung
  noExternal: ["clsx"],
  // Untuk CSS jika menggunakan Tailwind bundle
  injectStyle: false,
  // Tree shaking friendly
  treeshake: true,
  minify: false, // Set ke true untuk production
  target: "es2021",
});

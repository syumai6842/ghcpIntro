import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://syumai6842.github.io",
  base: "/ghcpIntro",
  integrations: [tailwind()],
});

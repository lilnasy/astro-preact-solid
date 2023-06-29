import { defineConfig } from 'astro/config'

import solidJs from "@astrojs/solid-js"
import preact from "@astrojs/preact"

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), preact()]
})

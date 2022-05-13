import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'Pinia 연습해보기',
    meta: [
      { name: 'viewport', content: 'initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' },
    ],
  },
  components: [
    { path: '@/components/atoms', prefix: 'Atom' },
    { path: '@/components/molecules', prefix: 'Molecule' },
    { path: '@/components/organisms', prefix: 'Organism' },
    { path: '@/components/templates', prefix: 'Template' },
  ],
  srcDir: './src',
  modules: [
    '@pinia/nuxt',
  ],
});

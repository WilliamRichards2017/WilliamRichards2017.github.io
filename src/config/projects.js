export default [
  {
    id: 'blotify',
    title: 'Blotify - Cytokine Dot Blot Analyzer',
    // component: () => import('./../components/ExternalLink.vue'),
    externalUrl: 'https://blotify.dev',
    featured: true,
    description: 'Automated cytokine dot blot analysis tool that detects grid lines and calculates integrated densities, eliminating tedious manual work.',
    preview: new URL('./../assets/blotify.webp', import.meta.url).href,
    highlights: ['Next.js', 'Vercel', 'Image Signal Processing', 'React'],
  },

  {
    id: 'tetris-ai',
    title: 'AI-Powered Tetris Evolution',
    component: () => import('./../components/Games/tetris.vue'),
    featured: false,
    description: 'Modern Tetris with evolutionary AI that learns through generations. Includes live training mode to observe population optimization in real-time.',
    preview: new URL('./../assets/tetris.webp', import.meta.url).href,
    highlights: ['AWS', 'Cloudfront', 'Lambda', 'DynamoDB', 'Svelte'],
  },
]

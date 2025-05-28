import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unified-ai-protocol-babaswanandas-projects.vercel.app'
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/team',
    '/partners',
    '/press',
    '/investors',
    '/contact',
    '/io',
    '/ai-agents',
    '/alpha-router',
    '/ion',
    '/agent-os',
    '/claim',
    '/pricing',
    '/ai-tokens-ito',
    '/friends-family',
    '/documentation',
    '/documentation/platform-overview',
    '/documentation/account-setup',
    '/documentation/io-dashboard',
    '/documentation/first-agent',
    '/documentation/agent-management',
    '/documentation/api-reference',
    '/faq',
    '/newsletter',
    '/support',
    '/community',
    '/examples',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/documentation') ? 0.8 : 0.7,
  }))
}

import { MetadataRoute } from 'next'

// Use environment variable for production domain
// Set NEXT_PUBLIC_SITE_URL in your deployment environment
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://securesist.com'

/**
 * Generate clean, standards-compliant robots.txt
 * 
 * Output:
 * User-agent: *
 * Allow: /
 * 
 * Sitemap: https://securesist.com/sitemap.xml
 * 
 * Note: Cloudflare may add Content-Signal directives automatically.
 * To disable this, configure it in Cloudflare Dashboard settings.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}


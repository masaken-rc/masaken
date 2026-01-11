export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://masaken-rc.com.sa';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

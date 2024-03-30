import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            disallow: '/admin',
        },
        sitemap: 'http://localhost:3000/sitemap.xmlsitemap.xml ',
    }
}
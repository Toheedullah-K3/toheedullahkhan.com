import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog'
import { getPublishedProjectCaseStudies } from '@/lib/project' 

const baseUrl = 'https://toheedullahkhan.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // ── Fetch dynamic content 
  const blogs = await getAllBlogPosts()
  const projects = await getPublishedProjectCaseStudies()

  // ── Static routes (matched to your actual /app structure) 
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      // lastModified: new Date('2025-01-15'), 
    },
    {
      url: `${baseUrl}/projects`,
    },
    {
      url: `${baseUrl}/blog`,
    },
    {
      url: `${baseUrl}/work-experience`,
    },
    {
      url: `${baseUrl}/journey`,
    },
    {
      url: `${baseUrl}/gears`,
    },
    {
      url: `${baseUrl}/setup`,
    },
    {
      url: `${baseUrl}/resume`,
    },
    {
      url: `${baseUrl}/links`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ]

  // ── Dynamic: /projects/[slug] 
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
  }))

  // ── Dynamic: /blog/[slug] 
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
  }))

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ]
}
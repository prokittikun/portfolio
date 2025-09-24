import { MetadataRoute } from 'next'
import { getContents, ContentFolder } from '@/data/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blog posts
  const blogPosts = await getContents(ContentFolder.BLOG)
  
  // Get all projects
  const projects = await getContents(ContentFolder.PROJECT)

  // Base URL - update this to match your domain
  const baseUrl = 'https://kittikun.dev'

  // Static pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Add blog posts
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Add projects
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: new Date(project.metadata.publishedAt || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes, ...projectRoutes]
}

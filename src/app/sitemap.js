import { supabase } from '@/lib/supabaseClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://masaken-rc.com.sa';

export default async function sitemap() {
  // Fetch all projects
  const { data: projects } = await supabase
    .from('projects')
    .select('id, updated_at');

  // Generate URLs for each project
  const projectUrls = projects?.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(project.updated_at),
    changeFrequency: 'weekly',
    priority: 0.8,
  })) || [];

  // Return the complete sitemap
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...projectUrls,
  ];
}

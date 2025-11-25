import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'y5scr6e4',
  dataset: 'production',
  apiVersion: '2025-11-18',
  useCdn: true,
})

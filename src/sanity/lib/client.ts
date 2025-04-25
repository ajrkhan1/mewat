import { createClient } from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: 'k94um126',
  dataset: 'production',
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = ImageUrlBuilder(client)
export function urlFor(source: any){
  return builder.image(source);
}

import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '6wervni7',
  dataset: 'production',
  useCdn: true,
})
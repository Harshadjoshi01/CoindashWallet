import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'px3hi0pm',
  dataset: 'production',
  apiVersion: '2022-07-26', // use current UTC date - see "specifying API version"!
  token:
    'skGrgEXFHVHxI4mWwkXGXzokMGz9ZGFsCeLmpkFxr4SN4dM63tv5JgnQfWGegiNxrUFd7JZl6DOdDUDUaA2CxNTtrJRNtIP2UNqMJvGJn2VmQZ5XjWe8q7RUgIWT5V6TmgxwdJ4QvGd4r607zDV9C4FWTFJXLtrFdVmgIyGRtgD4OQmGGwEi', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})
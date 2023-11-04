import {englify} from '../utils'

export default {
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'cover',
      type: 'reference',
      title: 'Cover',
      to: [{type: 'photo'}],
    },
    {
      name: 'pressNote',
      type: 'text',
      title: 'Press Note',
    },
    {
      name: 'active',
      type: 'boolean',
      title: 'Active',
    },
    {
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input: string) => englify(input.toLowerCase().replace(/\s+/g, '-')).slice(0, 96),
      },
    },
    {
      name: 'photos',
      type: 'array',
      title: 'Photos',
      of: [{type: 'reference', to: [{type: 'photo'}]}],
    },
    {
      name: 'songs',
      type: 'array',
      title: 'Songs',
      of: [{type: 'reference', to: [{type: 'song'}]}],
    },
  ],
}

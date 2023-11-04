export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    {
      name: 'photo',
      type: 'image',
      title: 'Photo',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'reference',
      to: [{type: 'externalLink'}],
    },
  ],
}

export default {
  name: 'song',
  title: 'Song',
  type: 'document',
  fields: [
    {
      name: 'composer',
      type: 'string',
      title: 'Composer',
    },
    {
      name: 'lyricsAuthor',
      type: 'string',
      title: 'Lyrics Author',
    },
    {
      name: 'lyrics',
      type: 'text',
      title: 'Lyrics',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'audio',
      type: 'file',
      title: 'Audio',
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [{type: 'reference', to: [{type: 'externalLink'}]}],
    },
  ],
}

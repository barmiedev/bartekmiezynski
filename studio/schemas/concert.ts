export default {
  name: 'concert',
  title: 'Concert',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'tickets',
      title: 'Tickets',
      type: 'url',
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
    },
    {
      name: 'otherArtists',
      title: 'Other Artists',
      type: 'array',
      of: [{type: 'string'}],
    }
  ],
};

export default {
  name: 'externalLink',
  title: 'External Link',
  type: 'document',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'service',
      type: 'string',
      title: 'Service',
      options: {
        list: [
          {title: 'Apple Music', value: 'appleMusic'},
          {title: 'Bandcamp', value: 'bandcamp'},
          {title: 'Deezer', value: 'deezer'},
          {title: 'Dropbox', value: 'dropbox'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'Google Drive', value: 'googleDrive'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Spotify', value: 'spotify'},
          {title: 'SoundCloud', value: 'soundCloud'},
          {title: 'Tidal', value: 'tidal'},
          {title: 'TikTok', value: 'tiktok'},
          {title: 'WeTransfer', value: 'weTransfer'},
          {title: 'YouTube', value: 'youtube'},
        ],
      },
    },
  ],
}

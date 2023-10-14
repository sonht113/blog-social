const EmbedProvider = [
  {
    name: 'dailymotion',
    url: /^dailymotion\.com\/video\/(\w+)/,
    html: (match: string[]) => {
      const id = match[1];

      return (
        '<div style="position: relative; padding-bottom: 100%; height: 0; ">' +
        `<iframe src="https://www.dailymotion.com/embed/video/${id}" ` +
        'style="min-height: 247px; width: 100%" ' +
        'frameborder="0" width="480" height="270" allowfullscreen allow="autoplay">' +
        '</iframe>' +
        '</div>'
      );
    },
  },

  {
    name: 'spotify',
    url: [
      /^open\.spotify\.com\/(artist\/\w+)/,
      /^open\.spotify\.com\/(album\/\w+)/,
      /^open\.spotify\.com\/(track\/\w+)/,
    ],
    html: (match: string[]) => {
      const id = match[1];

      return (
        '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">' +
        `<iframe src="https://open.spotify.com/embed/${id}" ` +
        'style="min-height: 247px; width: 100%" ' +
        'frameborder="0" allowtransparency="true" allow="encrypted-media">' +
        '</iframe>' +
        '</div>'
      );
    },
  },

  {
    name: 'youtube',
    url: [
      /^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,
      /^(?:m\.)?youtube\.com\/v\/([\w-]+)/,
      /^youtube\.com\/embed\/([\w-]+)/,
      /^youtu\.be\/([\w-]+)/,
    ],
    html: (match: string[]) => {
      const id = match[1];

      return `
              <div>
              <iframe src="https://www.youtube.com/embed/${id}"
                  style="min-height: 247px; width: 100%"
                  frameborder="10"
                  allow="autoplay; encrypted-media"
                  allowfullscreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen"
                  msallowfullscreen="msallowfullscreen"
                  oallowfullscreen="oallowfullscreen"
                  webkitallowfullscreen="webkitallowfullscreen">
                </iframe>
              </div>
          `;
    },
  },

  {
    name: 'vimeo',
    url: [
      /^vimeo\.com\/(\d+)/,
      /^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,
      /^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,
      /^vimeo\.com\/channels\/[^/]+\/(\d+)/,
      /^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,
      /^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,
      /^player\.vimeo\.com\/video\/(\d+)/,
    ],
    html: (match: string[]) => {
      const id = match[1];

      return (
        '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
        `<iframe src="https://player.vimeo.com/video/${id}" ` +
        'style="min-height: 247px; width: 100%" ' +
        'frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>' +
        '</iframe>' +
        '</div>'
      );
    },
  },

  {
    name: 'instagram',
    url: /^instagram\.com\/p\/(\w+)/,
  },
  {
    name: 'twitter',
    url: /^twitter\.com/,
  },
  {
    name: 'googleMaps',
    url: /^google\.com\/maps/,
  },
  {
    name: 'flickr',
    url: /^flickr\.com/,
  },
  {
    name: 'facebook',
    url: /^facebook\.com/,
  },
];

export default EmbedProvider;

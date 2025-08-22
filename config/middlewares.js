module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'storage.googleapis.com', // For Strapi Cloud storage
            '*.strapiapp.com', // For Strapi Cloud domains
            'https:', // Allow all HTTPS images as fallback
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'storage.googleapis.com',
            '*.strapiapp.com',
            'https:',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

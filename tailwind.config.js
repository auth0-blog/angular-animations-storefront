module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: [
        '**/*.html',
        '**/*.ts',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        'body': ['Dosis', 'Open Sans'],
      },
      extend: {
        gridTemplateColumns: {
          'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
        },
        gridAutoRows: {
          '3': '3rem',
          '5': '5rem'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});

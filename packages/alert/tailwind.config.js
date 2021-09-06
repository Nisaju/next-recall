module.exports = {
  mode: 'jit',
  purge: ['src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  presets: [require('./tailwind.preset')],
};

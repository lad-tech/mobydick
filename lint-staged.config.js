module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'jest --bail --findRelatedTests'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'jest --bail --findRelatedTests --passWithNoTests',
  ],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};

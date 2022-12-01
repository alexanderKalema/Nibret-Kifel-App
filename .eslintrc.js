module.exports = {
  root: true,
  plugins:['react','jsx-ally','import'],
  extends: 'airbnb',
  rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
  parser: 'babel-parser',
};

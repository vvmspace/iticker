const config = require('./config');

const { tickers, interval } = config;

tickers
    .split(',')
    .forEach(ticker => setInterval(() => console.log(ticker, 'pooling goes here'), interval));
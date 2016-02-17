'use strict';

var cheerio = require('cheerio');
var request = require('request');

const TPB_URL = 'https://thepiratebay.se/top/201';

function topMovies(callback) {
  request(TPB_URL, (err, res, body) => {
    var movies = [];

    if (err) {
      callback(err);
    }

    if (res.statusCode === 200) {
      var $ = cheerio.load(body);
      var movies = [];

      $('#content .detName a').each(function(i, elem) {
        movies.push($(this).text());
      });

      callback(null, movies);
    }
  });
}

module.exports = topMovies;
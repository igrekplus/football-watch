const client = require('cheerio-httpcli');

const services = {
    fetch: function (req, res, next) {
        client.fetch('http://rei19.hatenablog.com/archive/2013', {}, function (err, $, res) {
            // 記事のタイトルを取得
            return "aaaa";
            // $('.entry-title-link').each(function () {
            //     console.log($(this).text());
            //     // return ($(this).text()[0])
            // });
        })  
    }
}
module.exports = services;
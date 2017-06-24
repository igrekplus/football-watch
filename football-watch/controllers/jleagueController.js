const client = require('cheerio-httpcli');
const scrapingService = require('../services/scraping')
module.exports = {
    allMatch: function (req, res, next) {
        console.log('[INFO] allMatch');
        return res.render('index', scrapingService.fetch(req,res,next));
    },
    scraping : function(req, res, next) {
        client.fetch('http://rei19.hatenablog.com/archive/2013', {}, function (err, $, res) {
            // 記事のタイトルを取得
            return "aaaa";
            // $('.ens-titlk').each(function () {
            //     console.log($(this).text());
            //     // return ($(this).text()[0])
            // });
        })  
    }
};

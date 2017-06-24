const jleagueController = require('../controllers/jleagueController');

module.exports = (app) => {

    app.get('/jleague',
        jleagueController.allMatch
    );
}
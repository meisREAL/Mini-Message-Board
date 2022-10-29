var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Kenobi',
    added: new Date()
  },
  {
    text: 'General Kenobi!',
    user: 'General',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini MessageBoard' });
});
router.post('/new', function (req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.user;

  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router;

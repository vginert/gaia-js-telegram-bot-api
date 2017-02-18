var Gaia = require('gaia-js'),
var TelegramBot = require('gaia-js-telegram-bot-api');

var token = 'your telegram bot api token';

telegramBot = new TelegramBot(Gaia, {
	"token": token
});

telegramBot.start();
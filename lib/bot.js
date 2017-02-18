var TelegramBot = require('node-telegram-bot-api');
var commands = require('./commands');

var bot;

var BOT = module.exports = function BOT(gaia, opts) {
	this.mcp = gaia.MCP;

	opts = opts || {};
	this.token = opts.token || "";
};

BOT.prototype.start = function() {
	this.bot = new TelegramBot(this.token, { polling: true });
	commands(this.bot, this.mcp);
};
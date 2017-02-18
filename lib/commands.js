module.exports = function(bot, mcp) {

	// Matches "/status" 
	bot.onText(/\/status/, function (msg, match) {
	  var chatId = msg.chat.id;
	  var message = 'Gaia status: ';
	  message += mcp.started ? 'running' : 'stoped';
	  bot.sendMessage(chatId, message);
	});

	// Matches "/stop" 
	bot.onText(/\/stop/, function (msg, match) {
	  var chatId = msg.chat.id;

	  if(!mcp.started) {
	    bot.sendMessage(chatId, 'Gaia is alredy stoped...');
	    return;
      }

	  mcp.halt();
	  bot.sendMessage(chatId, 'Gaia stoped');
	});

	// Matches "/start" 
	bot.onText(/\/start/, function (msg, match) {
	  var chatId = msg.chat.id;

	  if(mcp.started) {
	    bot.sendMessage(chatId, 'Gaia is alredy started...');
	    return;
      }

	  mcp.start();
	  bot.sendMessage(chatId, 'Gaia started');
	});

    // Matches "/device" 
	bot.onText(/\/device/, function (msg, match) {
		var chatId = msg.chat.id;

		if(!mcp.started) {
			bot.sendMessage(chatId, 'Sorry Gaia is stoped... \n /start it first for device access');
			return;
		}

		var message = '';
		// Search in all devices
		for (var i = 0; i < mcp.devices.length; i++) {
			message += '-- ' + mcp.devices[i].name + ' --' + '\n \n';
			var attributes = mcp.devices[i].getAttributes();
			for (var key in attributes){
			    message += key + ': ' + attributes[key] + '\n';
			}
		}

	    bot.sendMessage(chatId, message);
	});

	// Matches "/controller" 
	bot.onText(/\/controller/, function (msg, match) {
		var chatId = msg.chat.id;

		if(!mcp.started) {
			bot.sendMessage(chatId, 'Sorry Gaia is stoped... \n /start it first for controller access');
			return;
		}

		var message = '';
		// Search in all controllers
		for (var i = 0; i < mcp.controllers.length; i++) {
			message += '-- ' + mcp.controllers[i].name + ' --' + '\n \n';
			var attributes = mcp.controllers[i].getAttributes();
			for (var key in attributes){
			    message += key + ': ' + attributes[key] + '\n';
			}
		}

	    bot.sendMessage(chatId, message);
	});

    // Matches "/help" 
	bot.onText(/\/help/, function (msg, match) {
	  var chatId = msg.chat.id;
	  var message = '';

	  //Status
	  message += '/status - Get the Gaia current status. \n';

	  //Start
	  message += '/start - Starts Gaia. \n';

	  //Stop
	  message += '/stop - Stops Gaia. \n';

	  //Device
	  message += '/device - Get a lis of the current devices and attributes. \n';

	  //Controller
	  message += '/controller - Get a lis of the current controllers and attributes. \n';

	  bot.sendMessage(chatId, message);
	});
};
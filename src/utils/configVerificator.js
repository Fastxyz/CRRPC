const { auth, settings } = require('../../config.js')

module.exports = {
	init: () => {
		function containsNumber(string) {
			return /\d/.test(string);
		};

		if (!auth.discord.clientID) {
			console.error('[HANDLER] No client ID provided. Please provide a client ID.');

			process.exit();
		};

		if (auth.discord.clientID && !containsNumber(auth.discord.clientID)) {
			console.error('[HANDLER] The client ID provided is not valid. Please provide a valid client ID.');

			process.exit();
		};

		if (auth.discord.clientID !== '844279952387866674') {
			console.error('[HANDLER] The client ID provided is not the CRRPC one. Please provide the CRRPC client ID by going to the config file and changing the clientID value to 844279952387866674');

			process.exit();
		};

		if (!auth.clashroyale.token || auth.clashroyale.token === 'YOUR API KEY') {
			console.error('[HANDLER] No Clash Royale API key provided. Please provide a Clash Royale API key.');

			process.exit();
		};

		if (!settings.user.playerTag || settings.user.playerTag === 'YOUR PLAYER TAG') {
			console.error('[HANDLER] No Clash Royale Player tag provided. Please provide a Clash Royale Player tag.');

			process.exit();
		};
	}
};
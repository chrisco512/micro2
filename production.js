'use strict';

// Production specific configuration
// ==================================
module.exports = {
	servicebus: {
		uri: process.env.SERVICEBUS_URI
	},
	port: process.env.PORT || 8080
};

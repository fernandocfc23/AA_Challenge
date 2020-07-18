var webdriverio = require('webdriverio')
var options = { desiredCapabilities: {browserName: 'Chrome'}}
var cliente = webdriverio.remote(options);

cliente
	.init()
	.url('http://www.shino.de/parkcalc/')
	.submitForm('Calculator')
	.end();
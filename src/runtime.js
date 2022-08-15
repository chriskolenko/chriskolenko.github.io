const Handlebars = require('handlebars/runtime');
const Swag = require('swag');

Swag.registerHelpers(Handlebars);
module.exports = Handlebars;
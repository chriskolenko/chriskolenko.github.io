const resume = require('../resume.json');
const template = require(`./index.hbs`);

module.exports = function() {
  const html = template({
    resume,
  });

  return html;
};
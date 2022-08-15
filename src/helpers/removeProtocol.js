module.exports = function (object) {
  return object.replace(/.*?:\/\//g, '');
};
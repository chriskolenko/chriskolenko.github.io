module.exports = function () {
  let res = '';

  for (let arg in arguments) {
    if (typeof arguments[arg] !== 'object') {
      res += arguments[arg];
    }
  }

  return res;
};
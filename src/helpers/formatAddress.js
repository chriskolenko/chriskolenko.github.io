const addressFormat = require('address-format');

module.exports = function (address, city, region, postalCode, countryCode) {
  let addressList = addressFormat({
    address: address,
    city: city,
    subdivision: region,
    postalCode: postalCode,
    countryCode: countryCode
  });


  return addressList.join('<br/>');
};
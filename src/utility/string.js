export default {
  // https://stackoverflow.com/questions/36637146/javascript-encode-string-to-hex
  toHex: function (tmp) {
    var str = "";
    for (var i = 0; i < tmp.length; i++) {
      str += tmp[i].charCodeAt(0).toString(16);
    }
    return str;
  },
  // https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
  capitalize: function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
};

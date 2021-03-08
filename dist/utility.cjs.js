'use strict';

var math = {
  // http://www.ietf.org/rfc/rfc4122.txt
  guid: function guid(length, radix) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
        ""
      ),
      uuid = [],
      i;
    radix = radix || chars.length;

    if (length) {
      for (i = 0; i < length; i++) {
        uuid[i] = chars[0 | (Math.random() * radix)];
      }
    } else {
      var r;

      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";

      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16);
          uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join("").toLowerCase();
  },
};

var string = {
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

var func = {
  // https://davidwalsh.name/javascript-debounce-function
  debounce: function (func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },
};

const network = {
  // http://ccoenraets.github.io/es6-tutorial-data/promisify/
  // http://stackoverflow.com/questions/28921127/how-to-wait-for-a-javascript-promise-to-resolve-before-resuming-function
  // https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest
  request: function (obj) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(obj.method || "GET", obj.url);
      if (obj.headers) {
        Object.keys(obj.headers).forEach(function (key) {
          xhr.setRequestHeader(key, obj.headers[key]);
        });
      }
      xhr.onload = function () {
        // console.log(xhr.getAllResponseHeaders());

        // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        resolve({
          code: xhr.status,
          message: xhr.response || xhr.responseText,
        });

        // if (xhr.status >= 200 && xhr.status < 300) {
        //     resolve(xhr.response);
        // } else {
        //     reject(xhr.statusText);
        // }
      };

      xhr.onerror = function () {
        reject(xhr.statusText);
      };
      xhr.send(obj.body);
    });
  },
  info: {
    data: null,
    load: function () {
      network
        .request({
          // url:
          //   "http://api.ipstack.com/check?access_key=4e033eb864b6a92fa9027da214a67ccc&format=1"
          // url: "https://freegeoip.net/json/"
          url: "https://ipapi.co/json/",
        })
        .then(function (data) {
          if (data.code === 200) {
            network.info.data = JSON.parse(data.message);
            // console.log(network.info.data)
          }
        })
        .catch(function (error) {
          network.info.data = {};
        });
    },
  },
};

var http = {
  response: (payload, type = "json") => {
    if (type === "json") {
      return {
        statusCode: 200,
        body: JSON.stringify({
          payload,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    } else {
      return {
        statusCode: 200,
        body: payload,
        isBase64Encoded: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-disposition": `attachment; filename=${new Date().toISOString()}.${
            type === "img" ? "jpg" : "pdf"
          }`,
          "Content-Type": type === "img" ? "image/jpg" : "application/pdf",
        },
      };
    }
  },
  size: (base64String) => {
    let padding, inBytes, base64StringLength;
    if (base64String.endsWith("==")) padding = 2;
    else if (base64String.endsWith("=")) padding = 1;
    else padding = 0;

    base64StringLength = base64String.length;
    inBytes = (base64StringLength / 4) * 3 - padding;
    const kbytes = inBytes / 1000;
    return kbytes;
  },
};

var index = { math, string, func, network, http };

module.exports = index;

export default {
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
      utility.net
        .request({
          // url:
          //   "http://api.ipstack.com/check?access_key=4e033eb864b6a92fa9027da214a67ccc&format=1"
          // url: "https://freegeoip.net/json/"
          url: "https://ipapi.co/json/",
        })
        .then(function (data) {
          if (data.code === 200) {
            utility.net.info.data = JSON.parse(data.message);
            // console.log(utility.net.info.data)
          }
        })
        .catch(function (error) {
          utility.net.info.data = {};
        });
    },
  },
};

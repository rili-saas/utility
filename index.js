const utility = {
    i18n: {
        // https://github.com/yahoo/react-intl/wiki/Upgrade-Guide
        flattenMessages: function (nestedMessages, prefix) {
            return Object.keys(nestedMessages).reduce(function (messages, key) {
                var value = nestedMessages[key];
                var prefixedKey = prefix ? (prefix + '.' + key) : key;

                if (typeof value === 'string') {
                    messages[prefixedKey] = value;
                } else {
                    Object.assign(messages, utility.i18n.flattenMessages(value, prefixedKey));
                }

                return messages;
            }, {});
        }
    },
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
    // para evitar o Method OPTIONS estou enviando o post como text/plain
    // xmlhttp.setRequestHeader("content-type", "application/json");
    // http://ccoenraets.github.io/es6-tutorial-data/promisify/
    net: {
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
                        message: xhr.response || xhr.responseText
                    });

                    // if (xhr.status >= 200 && xhr.status < 300) {
                    //     resolve(xhr.response);
                    // } else {
                    //     reject(xhr.statusText);
                    // }
                };

                xhr.onerror = function () {
                    reject(xhr.statusText)
                };
                xhr.send(obj.body);
            });
        },
        info: {
            data: null,
            load: function () {
                utility.net.request({
                    url: "https://freegeoip.net/json/"
                }).then(function (data) {
                    if (data.code === 200) {
                        utility.net.info.data = JSON.parse(data.message);
                        // console.log(utility.net.info.data)
                    }
                });

            }
        }
    },
    navigator: {
        url: {
            // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?answertab=active#tab-top
            getByName: function (name, url) {
                if (!url) url = window.location.href;
                // name = name.replace(/[\[\]]/g, "\\$&");
                name = name.replace(/[\\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }

        },
        cookie: {
            /*\
            |*|
            |*|  :: cookies.js ::
            |*|
            |*|  A complete cookies reader/writer framework with full unicode support.
            |*|
            |*|  Revision #3 - July 13th, 2017
            |*|
            |*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
            |*|  https://developer.mozilla.org/User:fusionchess
            |*|  https://github.com/madmurphy/cookies.js
            |*|
            |*|  This framework is released under the GNU Public License, version 3 or later.
            |*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
            |*|
            |*|  Syntaxes:
            |*|
            |*|  * docCookies.add(name, value[, end[, path[, domain[, secure]]]])
            |*|  * docCookies.get(name)
            |*|  * docCookies.remove(name[, path[, domain]])
            |*|  * docCookies.has(name)
            |*|  * docCookies.keys()
            |*|
            \*/
            get: function (sKey) {
                if (!sKey) {
                    return null;
                }
                // return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\\]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
            },
            add: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                // if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) {
                    return false;
                }
                var sExpires = "";
                if (vEnd) {
                    switch (vEnd.constructor) {
                        case Number:
                            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                            /*
                            Note: Despite officially defined in RFC 6265, the use of `max-age` is not compatible with any
                            version of Internet Explorer, Edge and some mobile browsers. Therefore passing a number to
                            the end parameter might not work as expected. A possible solution might be to convert the the
                            relative time to an absolute time. For instance, replacing the previous line with:
                            */
                            /*
                            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(vEnd * 1e3 + Date.now())).toUTCString();
                            */
                            break;
                        case String:
                            sExpires = "; expires=" + vEnd;
                            break;
                        case Date:
                            sExpires = "; expires=" + vEnd.toUTCString();
                            break;
                        default:
                            break;
                    }
                }
                document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                return true;
            },
            remove: function (sKey, sPath, sDomain) {
                if (!this.has(sKey)) {
                    return false;
                }
                document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
                return true;
            },
            has: function (sKey) {
                // if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) {
                    return false;
                }
                // return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
                return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\\]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
            },
            keys: function () {
                // var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
                var aKeys = document.cookie.replace(/((?:^|\s*;)[^\]+)(?=;|$)|^\s*|\s*(?:^;]*)?(?:\1|$)/g, "").split(/\s*(?:^;]*)?;\s*/);
                for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
                    aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
                }
                return aKeys;
            }
        }
    },
    validation: (function () {

        function maxLength(max, value) {
            return value && value.length > max ? 'b591d5f.0450d1b.2641950.d' : undefined;
        }

        function minLength(min, value) {
            return value && value.length < min ? 'b591d5f.0450d1b.6592623.d' : undefined;
        }

        return {
            required: function (value) {
                return (value ? undefined : 'b591d5f.0450d1b.1279171.d');
            },
            lengthMax15: function (value) {
                return maxLength(15, value);
            },
            lengthMin6: function (value) {
                return minLength(6, value)
            },
            userName: function (value) {
                return (value && !/^[A-Za-z0-9\-]+$/i.test(value) ? 'b591d5f.0450d1b.2b0c3da.d' : undefined);
            },
            email: function (value) {
                return (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'b591d5f.0450d1b.c3bf881.d' : undefined);
            },
            phoneNumber: function (value) {
                return (value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'b591d5f.0450d1b.c1544c7.d' : undefined)
            }
        }
    })()
}

export default utility;
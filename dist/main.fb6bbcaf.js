// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/logo.svg":[function(require,module,exports) {
module.exports = "/logo.b37d81ec.svg";
},{}],"assets/tablet/image-hero.png":[function(require,module,exports) {
module.exports = "/image-hero.f3fc1724.png";
},{}],"assets/desktop/image-hero-left.png":[function(require,module,exports) {
module.exports = "/image-hero-left.84ac6edc.png";
},{}],"assets/desktop/image-hero-right.png":[function(require,module,exports) {
module.exports = "/image-hero-right.86e0eda1.png";
},{}],"js/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logo = _interopRequireDefault(require("../assets/logo.svg"));

var _imageHero = _interopRequireDefault(require("../assets/tablet/image-hero.png"));

var _imageHeroLeft = _interopRequireDefault(require("../assets/desktop/image-hero-left.png"));

var _imageHeroRight = _interopRequireDefault(require("../assets/desktop/image-hero-right.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headerContainer = function headerContainer(content) {
  var header = document.createElement('header');
  header.innerHTML = "\n      <nav>\n      <div id=\"logo\">\n        <img src=\"".concat(_logo.default, "\" alt=\"logo\">\n      </div>\n      <section id=\"header-container\">\n        <div id=\"header-images\">\n          <img src=\"").concat(_imageHero.default, "\" alt=\"image-hero\">\n        </div>\n        <div id=\"image-hero-left\">\n          <img src=\"").concat(_imageHeroLeft.default, "\" alt=\"image-hero-left\">\n        </div>\n        <div id=\"header-text\">\n          <h2>Group Chat for Everyone</h2>\n          <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>\n          <div class=\"cta-container\">\n            <button>Download <span>&nbsp; v1.3</span></button>\n            <button>What is it?</button>\n          </div>\n        </div>\n        <div id=\"image-hero-right\">\n        <img src=\"").concat(_imageHeroRight.default, "\" alt=\"image-hero-right\">\n        </div>\n      </section>\n      <div id=\"section-marker-1\">\n        <div class=\"line\">\n          <hr>\n        </div>\n        <div class=\"circle\">01</div>\n      </div>\n    </nav>\n    ");
  content.appendChild(header);
};

var _default = headerContainer;
exports.default = _default;
},{"../assets/logo.svg":"assets/logo.svg","../assets/tablet/image-hero.png":"assets/tablet/image-hero.png","../assets/desktop/image-hero-left.png":"assets/desktop/image-hero-left.png","../assets/desktop/image-hero-right.png":"assets/desktop/image-hero-right.png"}],"assets/desktop/image-woman-in-videocall.jpg":[function(require,module,exports) {
module.exports = "/image-woman-in-videocall.c4d6a481.jpg";
},{}],"assets/desktop/image-women-videochatting.jpg":[function(require,module,exports) {
module.exports = "/image-women-videochatting.53ac3a34.jpg";
},{}],"assets/desktop/image-men-in-meeting.jpg":[function(require,module,exports) {
module.exports = "/image-men-in-meeting.9834f219.jpg";
},{}],"assets/desktop/image-man-texting.jpg":[function(require,module,exports) {
module.exports = "/image-man-texting.538a6108.jpg";
},{}],"js/body.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _imageWomanInVideocall = _interopRequireDefault(require("../assets/desktop/image-woman-in-videocall.jpg"));

var _imageWomenVideochatting = _interopRequireDefault(require("../assets/desktop/image-women-videochatting.jpg"));

var _imageMenInMeeting = _interopRequireDefault(require("../assets/desktop/image-men-in-meeting.jpg"));

var _imageManTexting = _interopRequireDefault(require("../assets/desktop/image-man-texting.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainContainer = function mainContainer(content) {
  var main = document.createElement('main');
  main.innerHTML = "\n  <div class=\"flex-container\">\n  <div class=\"card\">\n    <div>\n      <img src=\"".concat(_imageWomanInVideocall.default, "\" alt=\"image-woman-in-videocall\">\n    </div>\n    <div>\n      <img src=\"").concat(_imageWomenVideochatting.default, "\" alt=\"image-women-videochatting\">\n    </div>\n  </div>\n  <div class=\"card\">\n    <div>\n      <img src=\"").concat(_imageMenInMeeting.default, "\" alt=\"image-men-in-meeting\">\n    </div>\n    <div>\n      <img src=\"").concat(_imageManTexting.default, "\" alt=\"image-man-texting\">\n    </div>\n  </div>\n</div>\n<div id=\"image-text\">\n  <p>Built for modern use</p>\n  <p>Smarter meetings, all in one place</p>\n  <p>Send messages, share files, show your screen, and record your meetings \u2014 all in one workspace. Control who can\n    join with invite-only team access, data encryption, and data export.</p>\n</div>\n<div id=\"section-marker-2\">\n  <div class=\"line\">\n    <hr>\n  </div>\n  <div class=\"circle\">02</div>\n</div>\n    ");
  content.appendChild(main);
};

var _default = mainContainer;
exports.default = _default;
},{"../assets/desktop/image-woman-in-videocall.jpg":"assets/desktop/image-woman-in-videocall.jpg","../assets/desktop/image-women-videochatting.jpg":"assets/desktop/image-women-videochatting.jpg","../assets/desktop/image-men-in-meeting.jpg":"assets/desktop/image-men-in-meeting.jpg","../assets/desktop/image-man-texting.jpg":"assets/desktop/image-man-texting.jpg"}],"js/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var footerContainer = function footerContainer(content) {
  var footer = document.createElement('footer');
  footer.innerHTML = "\n  <div id=\"footer-container\">\n    <div id=\"footer-text\">\n      <p>Experience more together</p>\n      <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>\n      <button>Download<span>&nbsp;v1.3</span></button>\n    </div>\n  </div>\n  ";
  content.appendChild(footer);
};

var _default = footerContainer;
exports.default = _default;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _header = _interopRequireDefault(require("./header"));

var _body = _interopRequireDefault(require("./body"));

var _footer = _interopRequireDefault(require("./footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = document.getElementById("root");
(0, _header.default)(content);
(0, _body.default)(content);
(0, _footer.default)(content);
},{"./header":"js/header.js","./body":"js/body.js","./footer":"js/footer.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63283" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Maps a twitch language to a flag
var mapToFlag = exports.mapToFlag = function mapToFlag(language) {
  switch (language) {
    case "en":
      return "us";
    case "pt-br":
      return "br";
    case "ko":
      return "kr";
    case "zh-tw":
      return "tw";
    case "en-gb":
      return "gb";
    case "zh":
      return "cn";
    case "ja":
      return "jp";
    case "da":
      return "dk";
    default:
      return language;
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = "FETCH_USERS";
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/users");

            case 2:
              res = _context.sent;

              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get("/current_user");

            case 2:
              res = _context2.sent;

              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = "FETCH_ADMINS";
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get('/admins');

            case 2:
              res = _context3.sent;

              dispatch({
                type: FETCH_ADMINS,
                payload: res
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-timeago");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_SELECTED_STREAMER = exports.SET_SELECTED_STREAMER = "SET_SELECTED_STREAMER";
var SET_SELECTED_GAME = exports.SET_SELECTED_GAME = "SET_SELECTED_GAME";
var SET_AUTOMATIC_CHECKBOX = exports.SET_AUTOMATIC_CHECKBOX = "SET_AUTOMATIC_CHECKBOX";
var SET_TIME_FILTER = exports.SET_TIME_FILTER = "SET_TIME_FILTER";

var setSelectedGame = exports.setSelectedGame = function setSelectedGame(game) {
  return {
    type: SET_SELECTED_GAME,
    payload: game
  };
};

var setSelectedStreamer = exports.setSelectedStreamer = function setSelectedStreamer(streamer) {
  return {
    type: SET_SELECTED_STREAMER,
    payload: streamer
  };
};

var setAutomaticCheckbox = exports.setAutomaticCheckbox = function setAutomaticCheckbox(value) {
  return {
    type: SET_AUTOMATIC_CHECKBOX,
    payload: value
  };
};

var setTimeFilter = exports.setTimeFilter = function setTimeFilter(time) {
  return {
    type: SET_TIME_FILTER,
    payload: time
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMoreActivity = exports.getActivity = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(42);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = { items: [], fetching: false };

var activity = function activity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _index.REQUEST_ACTIVITY:
      return _extends({}, state, {
        fetching: true
      });
    case _index.FETCH_ACTIVITY:
      return _extends({}, state, {
        items: action.payload,
        fetching: false
      });
    case _index.APPEND_ACTIVITY:
      return _extends({}, state, {
        items: [].concat(_toConsumableArray(state.items), _toConsumableArray(action.payload)),
        fetching: false
      });
    default:
      return state;
  }
};

var getActivity = exports.getActivity = function getActivity(pageIndex) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/activity/latest?page=" + pageIndex);

            case 2:
              res = _context.sent;

              dispatch((0, _index.fetchActivity)(res.data.clips));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchMoreActivity = exports.fetchMoreActivity = function fetchMoreActivity(pageIndex) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch((0, _index.requestActivity)());
              _context2.next = 3;
              return api.get("/activity/latest?page=" + pageIndex);

            case 3:
              res = _context2.sent;

              dispatch((0, _index.appendActivity)(res.data.clips));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.default = activity;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMoreArchive = exports.fetchMoreArchiveByStreamer = exports.getArchiveByStreamerId = exports.getArchive = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(51);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = { items: [], fetching: false };

var archives = function archives() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_ARCHIVE:
      return _extends({}, state, {
        items: action.payload
      });
    case _index.REQUEST_ARCHIVE:
      return _extends({}, state, {
        fetching: true
      });
    case _index.APPEND_ARCHIVE:
      return _extends({}, state, {
        items: [].concat(_toConsumableArray(state.items), _toConsumableArray(action.payload)),
        fetching: false
      });
    default:
      return state;
  }
};

var getArchive = exports.getArchive = function getArchive(archiveId, pageIndex) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/archives/" + archiveId + "?page=" + pageIndex);

            case 2:
              res = _context.sent;

              dispatch((0, _index.fetchArchive)(res.data.archives));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};

var getArchiveByStreamerId = exports.getArchiveByStreamerId = function getArchiveByStreamerId(streamerId, pageIndex) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get("/archives/streamer/" + streamerId + "?page=" + pageIndex);

            case 2:
              res = _context2.sent;

              dispatch((0, _index.fetchArchive)(res.data.archives));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var fetchMoreArchiveByStreamer = exports.fetchMoreArchiveByStreamer = function fetchMoreArchiveByStreamer(streamerId, pageIndex) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch((0, _index.requestArchive)());
              _context3.next = 3;
              return api.get("/archives/streamer/" + streamerId + "?page=" + pageIndex);

            case 3:
              res = _context3.sent;

              dispatch((0, _index.appendArchive)(res.data.archives));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x8, _x9, _x10) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var fetchMoreArchive = exports.fetchMoreArchive = function fetchMoreArchive(archiveId, pageIndex) {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch((0, _index.requestArchive)());
              _context4.next = 3;
              return api.get("/archives/" + archiveId + "?page=" + pageIndex);

            case 3:
              res = _context4.sent;

              dispatch((0, _index.appendArchive)(res.data.archives));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x11, _x12, _x13) {
      return _ref4.apply(this, arguments);
    };
  }();
};

exports.default = archives;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMoreClipsByGame = exports.getClipsByGame = exports.fetchMoreClipsByArchive = exports.getClipsByArchive = exports.fetchMoreClips = exports.getClips = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(52);

var _ui = __webpack_require__(7);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = { items: [], fetching: false };

var clips = function clips() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_CLIPS:
      return _extends({}, state, {
        items: action.payload
      });
    case _index.REQUEST_CLIPS:
      return _extends({}, state, {
        fetching: true
      });
    case _index.APPEND_CLIPS:
      return _extends({}, state, {
        items: [].concat(_toConsumableArray(state.items), _toConsumableArray(action.payload)),
        fetching: false
      });
    default:
      return state;
  }
};

var getClips = exports.getClips = function getClips(userId, pageIndex, game, title, automatic, time) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/clips/" + userId + "?page=" + pageIndex + (time ? "&time=" + time : "&time=week") + (game ? "&game=" + game : "") + (title ? "&title=" + title : "") + "&automatic=1");

            case 2:
              res = _context.sent;

              dispatch((0, _ui.setSelectedStreamer)(res.data.streamer));
              dispatch((0, _index.fetchClips)(res.data.clips));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchMoreClips = exports.fetchMoreClips = function fetchMoreClips(userId, pageIndex, game, title, automatic, time) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch((0, _index.requestClips)());
              _context2.next = 3;
              return api.get("/clips/" + userId + "?page=" + pageIndex + (time ? "&time=" + time : "&time=week") + (game ? "&game=" + game : "") + (title ? "&title=" + title : "") + "&automatic=1");

            case 3:
              res = _context2.sent;

              dispatch((0, _ui.setSelectedStreamer)(res.data.streamer));
              dispatch((0, _index.appendClips)(res.data.clips));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var getClipsByArchive = exports.getClipsByArchive = function getClipsByArchive(archiveId, pageIndex) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get("/clips/archive/" + archiveId + "?page=" + pageIndex);

            case 2:
              res = _context3.sent;

              dispatch((0, _index.fetchClips)(res.data.clips));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x8, _x9, _x10) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var fetchMoreClipsByArchive = exports.fetchMoreClipsByArchive = function fetchMoreClipsByArchive(archiveId, pageIndex) {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch((0, _index.requestClips)());
              _context4.next = 3;
              return api.get("/clips/archive/" + archiveId + "?page=" + pageIndex);

            case 3:
              res = _context4.sent;

              dispatch((0, _index.appendClips)(res.data.clips));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x11, _x12, _x13) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var getClipsByGame = exports.getClipsByGame = function getClipsByGame(gameId, pageIndex, streamer, title, automatic) {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return api.get("/clips/game/" + gameId + "?page=" + pageIndex + (streamer ? "&streamer=" + streamer : "") + (title ? "&title=" + title : "") + "&automatic=1");

            case 2:
              res = _context5.sent;


              dispatch((0, _ui.setSelectedGame)(res.data.game));
              dispatch((0, _index.fetchClips)(res.data.clips));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x14, _x15, _x16) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var fetchMoreClipsByGame = exports.fetchMoreClipsByGame = function fetchMoreClipsByGame(gameId, pageIndex, streamer, title, automatic) {
  return function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch((0, _index.requestClips)());
              _context6.next = 3;
              return api.get("/clips/game/" + gameId + "?page=" + pageIndex + (streamer ? "&streamer=" + streamer : "") + (title ? "&title=" + title : "") + "&automatic=1");

            case 3:
              res = _context6.sent;

              dispatch((0, _index.appendClips)(res.data.clips));

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x17, _x18, _x19) {
      return _ref6.apply(this, arguments);
    };
  }();
};

exports.default = clips;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VideoPlayer(_ref) {
  var active = _ref.active,
      url = _ref.url;

  return _react2.default.createElement(
    _semanticUiReact.Segment,
    null,
    _react2.default.createElement(
      _semanticUiReact.Label,
      { attached: "top", size: "big", className: "colored-label" },
      "Video Player"
    ),
    _react2.default.createElement(_semanticUiReact.Embed, { active: true, icon: "play", placeholder: "", url: url })
  );
}

exports.default = VideoPlayer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _UsersListPage = __webpack_require__(28);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _App = __webpack_require__(29);

var _App2 = _interopRequireDefault(_App);

var _NotFoundPage = __webpack_require__(31);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsListPage = __webpack_require__(32);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

var _StreamersPage = __webpack_require__(39);

var _StreamersPage2 = _interopRequireDefault(_StreamersPage);

var _StreamerDetailPage = __webpack_require__(45);

var _StreamerDetailPage2 = _interopRequireDefault(_StreamerDetailPage);

var _SessionPage = __webpack_require__(53);

var _SessionPage2 = _interopRequireDefault(_SessionPage);

var _GamesPage = __webpack_require__(62);

var _GamesPage2 = _interopRequireDefault(_GamesPage);

var _GamesDetailPage = __webpack_require__(66);

var _GamesDetailPage2 = _interopRequireDefault(_GamesDetailPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _StreamersPage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _GamesPage2.default, {
    path: "/games"
  }), _extends({}, _GamesDetailPage2.default, {
    path: "/game/:id"
  }), _extends({}, _StreamerDetailPage2.default, {
    path: "/streamer/:id"
  }), _extends({}, _SessionPage2.default, {
    path: "/session/:id"
  }), _extends({
    path: "/users"
  }, _UsersListPage2.default), _extends({
    path: "/admins"
  }, _AdminsListPage2.default), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyObject");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/invariant");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMoreStreamers = exports.getStreamers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(20);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = { items: [], fetching: false };

var streamers = function streamers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _index.REQUEST_STREAMERS:
      return _extends({}, state, {
        fetching: true
      });
    case _index.FETCH_STREAMERS:
      return _extends({}, state, {
        items: action.payload,
        fetching: false
      });
    case _index.APPEND_STREAMERS:
      return _extends({}, state, {
        items: [].concat(_toConsumableArray(state.items), _toConsumableArray(action.payload)),
        fetching: false
      });
    default:
      return state;
  }
};

var getStreamers = exports.getStreamers = function getStreamers(pageIndex, streamerFilter) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/streamers?page=" + pageIndex + (streamerFilter ? "&q=" + streamerFilter : ""));

            case 2:
              res = _context.sent;

              // Error handling maybe?
              dispatch((0, _index.fetchStreamers)(res.data.streamers));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchMoreStreamers = exports.fetchMoreStreamers = function fetchMoreStreamers(pageIndex, streamerFilter) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch((0, _index.requestStreamers)());
              _context2.next = 3;
              return api.get("/streamers?page=" + pageIndex + (streamerFilter ? "&q=" + streamerFilter : ""));

            case 3:
              res = _context2.sent;

              dispatch((0, _index.appendStreamers)(res.data.streamers));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.default = streamers;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_STREAMERS = exports.FETCH_STREAMERS = "FETCH_STREAMERS";
var APPEND_STREAMERS = exports.APPEND_STREAMERS = "APPEND_STREAMERS";
var REQUEST_STREAMERS = exports.REQUEST_STREAMERS = "REQUEST_STREAMERS";

var fetchStreamers = exports.fetchStreamers = function fetchStreamers(streamers) {
  return {
    type: FETCH_STREAMERS,
    payload: streamers
  };
};

var requestStreamers = exports.requestStreamers = function requestStreamers() {
  return {
    type: REQUEST_STREAMERS
  };
};

var appendStreamers = exports.appendStreamers = function appendStreamers(streamers) {
  return {
    type: APPEND_STREAMERS,
    payload: streamers
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

var _languageUtils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StreamerVideoArchive = function (_Component) {
  _inherits(StreamerVideoArchive, _Component);

  function StreamerVideoArchive() {
    _classCallCheck(this, StreamerVideoArchive);

    return _possibleConstructorReturn(this, (StreamerVideoArchive.__proto__ || Object.getPrototypeOf(StreamerVideoArchive)).apply(this, arguments));
  }

  _createClass(StreamerVideoArchive, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          archive = _props.archive,
          creatorName = _props.creatorName,
          automatic = _props.automatic;

      return _react2.default.createElement(
        _semanticUiReact.Segment.Group,
        null,
        automatic ? _react2.default.createElement(
          _semanticUiReact.Message,
          { attached: "top", info: true },
          _react2.default.createElement(_semanticUiReact.Icon, { name: "help" }),
          "Did we miss the action?\xA0 Jump to the source and replay this epic moment."
        ) : _react2.default.createElement(
          _semanticUiReact.Message,
          { attached: "top", info: true },
          "This clip was created by ",
          _react2.default.createElement(
            "b",
            null,
            creatorName
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          null,
          _react2.default.createElement(
            _semanticUiReact.Label,
            { attached: "top", size: "big", className: "colored-label" },
            _react2.default.createElement(_semanticUiReact.Icon, { name: "linkify" }),
            "Linked Archive"
          ),
          _react2.default.createElement(
            _semanticUiReact.Item.Group,
            null,
            _react2.default.createElement(
              _semanticUiReact.Item,
              null,
              _react2.default.createElement(_semanticUiReact.Item.Image, {
                size: "tiny",
                src: archive.thumbnailURL ? archive.thumbnailURL.replace("%{width}", "200").replace("%{height}", "200") : "https://cdn.logojoy.com/wp-content/uploads/2018/07/30093609/twitch9-768x591.png"
              }),
              _react2.default.createElement(
                _semanticUiReact.Item.Content,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Item.Header,
                  { as: "a" },
                  archive.title
                ),
                _react2.default.createElement(
                  _semanticUiReact.Item.Meta,
                  null,
                  archive.description
                ),
                _react2.default.createElement(
                  _semanticUiReact.Item.Extra,
                  null,
                  _react2.default.createElement(_semanticUiReact.Icon, { name: "eye" }),
                  archive.viewCount,
                  " views"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Item.Extra,
                  null,
                  _react2.default.createElement(_semanticUiReact.Flag, { name: (0, _languageUtils.mapToFlag)(archive.language) }),
                  archive.language
                ),
                _react2.default.createElement(
                  _semanticUiReact.Item.Extra,
                  null,
                  "Duration : ",
                  archive.duration
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Segment,
          null,
          _react2.default.createElement(
            _semanticUiReact.Button,
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              {
                to: {
                  pathname: "/session/" + archive.archiveId
                }
              },
              "Jump To Source"
            )
          )
        )
      );
    }
  }]);

  return StreamerVideoArchive;
}(_react.Component);

exports.default = StreamerVideoArchive;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMoreGames = exports.getGames = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _games = __webpack_require__(23);

var _index = __webpack_require__(23);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = { items: [], fetching: false };

var games = function games() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _games.FETCH_GAMES:
      {
        return _extends({}, state, {
          items: action.payload
        });
      }
    case _games.REQUEST_GAMES:
      return _extends({}, state, {
        fetching: true
      });
    case _index.APPEND_GAMES:
      return _extends({}, state, {
        items: [].concat(_toConsumableArray(state.items), _toConsumableArray(action.payload)),
        fetching: false
      });
    default:
      return state;
  }
};

var getGames = exports.getGames = function getGames(pageIndex, gameFilter) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/games?page=" + pageIndex + (gameFilter ? "&q=" + gameFilter : ""));

            case 2:
              res = _context.sent;

              // Error handling maybe?
              dispatch((0, _games.fetchGames)(res.data.games));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchMoreGames = exports.fetchMoreGames = function fetchMoreGames(pageIndex, gameFilter) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch((0, _games.requestGames)());
              _context2.next = 3;
              return api.get("/games?page=" + pageIndex + (gameFilter ? "&q=" + gameFilter : ""));

            case 3:
              res = _context2.sent;

              dispatch((0, _games.appendGames)(res.data.games));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.default = games;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var REQUEST_GAMES = exports.REQUEST_GAMES = "REQUEST_GAMES";
var FETCH_GAMES = exports.FETCH_GAMES = "FETCH_GAMES";
var APPEND_GAMES = exports.APPEND_GAMES = "APPEND_GAMES";

var requestGames = exports.requestGames = function requestGames() {
  return {
    type: REQUEST_GAMES
  };
};

var fetchGames = exports.fetchGames = function fetchGames(games) {
  return {
    type: FETCH_GAMES,
    payload: games
  };
};

var appendGames = exports.appendGames = function appendGames(games) {
  return {
    type: APPEND_GAMES,
    payload: games
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

var _express = __webpack_require__(27);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(11);

var _routes = __webpack_require__(13);

var _routes2 = _interopRequireDefault(_routes);

var _expressHttpProxy = __webpack_require__(70);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _renderer = __webpack_require__(71);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(74);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // This is the boilerplate for the renderer server part of our app.


app.use("/api", (0, _expressHttpProxy2.default)("http://localhost:3001", {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers["x-forwarded-host"] = "localhost:3000";
    return opts;
  }
}));
app.use(_express2.default.static("public"));

app.get("/streamer/:id", function (req, res) {
  renderContent(req, res);
});

app.get("/session/:id", function (req, res) {
  renderContent(req, res);
});

app.get("/game/:id", function (req, res) {
  renderContent(req, res);
});

app.get("*", function (req, res) {
  renderContent(req, res);
});

function renderContent(req, res) {
  var store = (0, _createStore2.default)(req);
  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store, { id: req.params.id || null }) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
}

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(5);

var _reactHelmet = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users
  };
};

var loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchUsers)());
};

var UsersList = function (_Component) {
  _inherits(UsersList, _Component);

  function UsersList() {
    _classCallCheck(this, UsersList);

    return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
  }

  _createClass(UsersList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: "renderUsers",
    value: function renderUsers() {
      return this.props.users.map(function (user) {
        return _react2.default.createElement(
          "li",
          { key: user.id },
          user.name
        );
      });
    }
  }, {
    key: "head",
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          "title",
          null,
          this.props.users.length + " Users Loaded"
        ),
        _react2.default.createElement("meta", { property: "og:title", content: "Users App" })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        this.head(),
        _react2.default.createElement(
          "div",
          null,
          "Here's a big list of users:",
          _react2.default.createElement(
            "ul",
            null,
            this.renderUsers()
          )
        )
      );
    }
  }]);

  return UsersList;
}(_react.Component);

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList),
  loadData: loadData
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(11);

var _index = __webpack_require__(5);

var _TopMenu = __webpack_require__(30);

var _TopMenu2 = _interopRequireDefault(_TopMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var route = this.props.route;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_TopMenu2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = {
  component: App,
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _index.fetchCurrentUser)());
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopMenu = function (_Component) {
  _inherits(TopMenu, _Component);

  function TopMenu(props) {
    _classCallCheck(this, TopMenu);

    var _this = _possibleConstructorReturn(this, (TopMenu.__proto__ || Object.getPrototypeOf(TopMenu)).call(this, props));

    _this.handleItemClick = function (e, _ref) {
      var name = _ref.name;

      _this.setState({ activeItem: name });
    };

    _this.state = {
      activeItem: {}
    };
    return _this;
  }

  _createClass(TopMenu, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;

      return _react2.default.createElement(
        _semanticUiReact.Menu,
        { stackable: true, borderless: true },
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          { className: "brand" },
          "Stream Highlights"
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          {
            as: _reactRouterDom.Link,
            name: "streamers",
            to: "/",
            onClick: this.handleItemClick,
            active: activeItem === "streamers"
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: "users" }),
          "Streamers"
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          {
            as: _reactRouterDom.Link,
            name: "games",
            to: "/games",
            onClick: this.handleItemClick,
            active: activeItem === "games"
          },
          _react2.default.createElement(_semanticUiReact.Icon, { name: "gamepad" }),
          "Games"
        )
      );
    }
  }]);

  return TopMenu;
}(_react.Component);

exports.default = TopMenu;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    "h1",
    null,
    "Oops, route not found"
  );
};

exports.default = { component: NotFoundPage };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(5);

var _requireAuth = __webpack_require__(33);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_React$Component) {
  _inherits(AdminsListPage, _React$Component);

  function AdminsListPage() {
    _classCallCheck(this, AdminsListPage);

    return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
  }

  _createClass(AdminsListPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchAdmins();
    }
  }, {
    key: "renderAdmins",
    value: function renderAdmins() {
      return this.props.admins.map(function (admin) {
        return _react2.default.createElement(
          "li",
          { key: admin.id },
          admin.name
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h3",
          null,
          "Protected List Of Admins"
        ),
        _react2.default.createElement(
          "ul",
          null,
          this.renderAdmins()
        )
      );
    }
  }]);

  return AdminsListPage;
}(_react2.default.Component);

function mapStateToProps(_ref) {
  var admins = _ref.admins;

  return { admins: admins };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchAdmins)());
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _React = __webpack_require__(34);

var _React2 = _interopRequireDefault(_React);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: "render",
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _React2.default.createElement(_reactRouterDom.Redirect, { to: "/" });
          case null:
            return _React2.default.createElement(
              "div",
              null,
              "Loading..."
            );
          default:
            return _React2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_React.Component);

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(35);
} else {
  module.exports = __webpack_require__(36);
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 React v16.0.0
 react.production.min.js

 Copyright (c) 2013-present, Facebook, Inc.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var f=__webpack_require__(15),p=__webpack_require__(16);__webpack_require__(17);var r=__webpack_require__(18);
function t(a){for(var b=arguments.length-1,d="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,e=0;e<b;e++)d+="\x26args[]\x3d"+encodeURIComponent(arguments[e+1]);b=Error(d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
var u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function v(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}v.prototype.isReactComponent={};v.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?t("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};v.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function w(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}function x(){}x.prototype=v.prototype;var y=w.prototype=new x;y.constructor=w;f(y,v.prototype);y.isPureReactComponent=!0;function z(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}var A=z.prototype=new x;A.constructor=z;f(A,v.prototype);A.unstable_isAsyncReactComponent=!0;A.render=function(){return this.props.children};
var B={Component:v,PureComponent:w,AsyncComponent:z},C={current:null},D=Object.prototype.hasOwnProperty,E="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,F={key:!0,ref:!0,__self:!0,__source:!0};function G(a,b,d,e,c,g,k){return{$$typeof:E,type:a,key:b,ref:d,props:k,_owner:g}}
G.createElement=function(a,b,d){var e,c={},g=null,k=null,m=null,q=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),m=void 0===b.__self?null:b.__self,q=void 0===b.__source?null:b.__source,b)D.call(b,e)&&!F.hasOwnProperty(e)&&(c[e]=b[e]);var l=arguments.length-2;if(1===l)c.children=d;else if(1<l){for(var h=Array(l),n=0;n<l;n++)h[n]=arguments[n+2];c.children=h}if(a&&a.defaultProps)for(e in l=a.defaultProps,l)void 0===c[e]&&(c[e]=l[e]);return G(a,g,k,m,q,C.current,c)};
G.createFactory=function(a){var b=G.createElement.bind(null,a);b.type=a;return b};G.cloneAndReplaceKey=function(a,b){return G(a.type,b,a.ref,a._self,a._source,a._owner,a.props)};
G.cloneElement=function(a,b,d){var e=f({},a.props),c=a.key,g=a.ref,k=a._self,m=a._source,q=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,q=C.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(h in b)D.call(b,h)&&!F.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==l?l[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=d;else if(1<h){l=Array(h);for(var n=0;n<h;n++)l[n]=arguments[n+2];e.children=l}return G(a.type,c,g,k,m,q,e)};
G.isValidElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===E};var H="function"===typeof Symbol&&Symbol.iterator,I="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var J=/\/+/g,K=[];
function L(a,b,d,e){if(K.length){var c=K.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=e;c.count=0;return c}return{result:a,keyPrefix:b,func:d,context:e,count:0}}function M(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>K.length&&K.push(a)}
function N(a,b,d,e){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;if(null===a||"string"===c||"number"===c||"object"===c&&a.$$typeof===I)return d(e,a,""===b?"."+O(a,0):b),1;var g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){c=a[k];var m=b+O(c,k);g+=N(c,m,d,e)}else if(m=H&&a[H]||a["@@iterator"],"function"===typeof m)for(a=m.call(a),k=0;!(c=a.next()).done;)c=c.value,m=b+O(c,k++),g+=N(c,m,d,e);else"object"===c&&(d=""+a,t("31","[object Object]"===d?"object with keys {"+
Object.keys(a).join(", ")+"}":d,""));return g}function O(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function P(a,b){a.func.call(a.context,b,a.count++)}function Q(a,b,d){var e=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,e,d,r.thatReturnsArgument):null!=a&&(G.isValidElement(a)&&(a=G.cloneAndReplaceKey(a,c+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(J,"$\x26/")+"/")+d)),e.push(a))}
function R(a,b,d,e,c){var g="";null!=d&&(g=(""+d).replace(J,"$\x26/")+"/");b=L(b,g,e,c);null==a||N(a,"",Q,b);M(b)}var S={forEach:function(a,b,d){if(null==a)return a;b=L(null,null,b,d);null==a||N(a,"",P,b);M(b)},map:function(a,b,d){if(null==a)return a;var e=[];R(a,e,null,b,d);return e},count:function(a){return null==a?0:N(a,"",r.thatReturnsNull,null)},toArray:function(a){var b=[];R(a,b,null,r.thatReturnsArgument);return b}};
module.exports={Children:{map:S.map,forEach:S.forEach,count:S.count,toArray:S.toArray,only:function(a){G.isValidElement(a)?void 0:t("143");return a}},Component:B.Component,PureComponent:B.PureComponent,unstable_AsyncComponent:B.AsyncComponent,createElement:G.createElement,cloneElement:G.cloneElement,isValidElement:G.isValidElement,createFactory:G.createFactory,version:"16.0.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:f}};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.0.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
(function() {

'use strict';

var objectAssign$1 = __webpack_require__(15);
var require$$0 = __webpack_require__(37);
var emptyObject = __webpack_require__(16);
var invariant = __webpack_require__(17);
var emptyFunction = __webpack_require__(18);
var checkPropTypes = __webpack_require__(38);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule reactProdInvariant
 * 
 */

{
  var warning = require$$0;
}

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule lowPriorityWarning
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning_1 = lowPriorityWarning;

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(ReactComponent.prototype, methodName, {
      get: function () {
        lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
var pureComponentPrototype = ReactPureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
objectAssign$1(pureComponentPrototype, ReactComponent.prototype);
pureComponentPrototype.isPureReactComponent = true;

function ReactAsyncComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

var asyncComponentPrototype = ReactAsyncComponent.prototype = new ComponentDummy();
asyncComponentPrototype.constructor = ReactAsyncComponent;
// Avoid an extra prototype jump for these methods.
objectAssign$1(asyncComponentPrototype, ReactComponent.prototype);
asyncComponentPrototype.unstable_isAsyncReactComponent = true;
asyncComponentPrototype.render = function () {
  return this.props.children;
};

var ReactBaseClasses = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent,
  AsyncComponent: ReactAsyncComponent
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactCurrentOwner
 * 
 */

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactCurrentOwner_1 = ReactCurrentOwner;

var hasOwnProperty = Object.prototype.hasOwnProperty;

{
  var warning$2 = require$$0;
}

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE$1 = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning$2(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning$2(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE$1,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/react-api.html#createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE$1) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/react-api.html#createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/react-api.html#cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = objectAssign$1({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner_1.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE$1;
};

var ReactElement_1 = ReactElement;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactDebugCurrentFrame
 * 
 */

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var ReactDebugCurrentFrame_1 = ReactDebugCurrentFrame;

{
  var warning$1 = require$$0;

  var _require = ReactDebugCurrentFrame_1,
      getStackAddendum = _require.getStackAddendum;
}

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = ITERATOR_SYMBOL && children[ITERATOR_SYMBOL] || children[FAUX_ITERATOR_SYMBOL];
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning$1(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getStackAddendum());
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement_1.isValidElement(mappedChild)) {
      mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  count: countChildren,
  toArray: toArray
};

var ReactChildren_1 = ReactChildren;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactVersion
 */

var ReactVersion = '16.0.0';

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement_1.isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

var onlyChild_1 = onlyChild;

/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @providesModule describeComponentFrame
 */

var describeComponentFrame$1 = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule getComponentName
 * 
 */

function getComponentName$1(instanceOrFiber) {
  if (typeof instanceOrFiber.getName === 'function') {
    // Stack reconciler
    var instance = instanceOrFiber;
    return instance.getName();
  }
  if (typeof instanceOrFiber.tag === 'number') {
    // Fiber reconciler
    var fiber = instanceOrFiber;
    var type = fiber.type;

    if (typeof type === 'string') {
      return type;
    }
    if (typeof type === 'function') {
      return type.displayName || type.name;
    }
  }
  return null;
}

var getComponentName_1 = getComponentName$1;

{
  var checkPropTypes$1 = checkPropTypes;
  var lowPriorityWarning$1 = lowPriorityWarning_1;
  var ReactDebugCurrentFrame$1 = ReactDebugCurrentFrame_1;
  var warning$3 = require$$0;
  var describeComponentFrame = describeComponentFrame$1;
  var getComponentName = getComponentName_1;

  var currentlyValidatingElement = null;

  var getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  var getStackAddendum$1 = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame$1.getStackAddendum() || '';
    return stack;
  };
}

var ITERATOR_SYMBOL$1 = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL$1 = '@@iterator'; // Before Symbol spec.

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner_1.current) {
    var name = getComponentName(ReactCurrentOwner_1.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning$3(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum$1());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement_1.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement_1.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = ITERATOR_SYMBOL$1 && node[ITERATOR_SYMBOL$1] || node[FAUX_ITERATOR_SYMBOL$1];
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement_1.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;

  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes$1(propTypes, element.props, 'prop', name, getStackAddendum$1);
    currentlyValidatingElement = null;
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning$3(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

var ReactElementValidator$1 = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      var info = '';
      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(props);
      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      info += ReactDebugCurrentFrame$1.getStackAddendum() || '';

      warning$3(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
    }

    var element = ReactElement_1.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator$1.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    {
      Object.defineProperty(validatedFactory, 'type', {
        enumerable: false,
        get: function () {
          lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
          Object.defineProperty(this, 'type', {
            value: type
          });
          return type;
        }
      });
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement_1.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};

var ReactElementValidator_1 = ReactElementValidator$1;

{
  var warning$4 = require$$0;
}

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(Object.prototype.hasOwnProperty)
  // Strip regex characters so we can use it for regex
  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  // Remove hasOwnProperty from the template to make it generic
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function getDisplayName$1(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName = void 0;

  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  warning$4(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
  return describeComponentFrame$1(name || '', element && element._source, ownerName || '');
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? invariant(false, 'Item must have been set') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
      !nextChild.isMounted ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? invariant(false, 'Item must have been set') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function () {
    var info = '';
    var currentOwner = ReactCurrentOwner_1.current;
    if (currentOwner) {
      !(typeof currentOwner.tag !== 'number') ? invariant(false, 'Fiber owners should not show up in Stack stack traces.') : void 0;
      if (typeof currentOwner._debugID === 'number') {
        info += ReactComponentTreeHook.getStackAddendumByID(currentOwner._debugID);
      }
    }
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName$1(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs
};

var ReactComponentTreeHook_1 = ReactComponentTreeHook;

var createElement = ReactElement_1.createElement;
var createFactory = ReactElement_1.createFactory;
var cloneElement = ReactElement_1.cloneElement;

{
  var ReactElementValidator = ReactElementValidator_1;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var React = {
  Children: {
    map: ReactChildren_1.map,
    forEach: ReactChildren_1.forEach,
    count: ReactChildren_1.count,
    toArray: ReactChildren_1.toArray,
    only: onlyChild_1
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,
  unstable_AsyncComponent: ReactBaseClasses.AsyncComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement_1.isValidElement,

  createFactory: createFactory,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner_1,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: objectAssign$1
  }
};

{
  objectAssign$1(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactComponentTreeHook: ReactComponentTreeHook_1,
    ReactDebugCurrentFrame: ReactDebugCurrentFrame_1
  });
}

var ReactEntry = React;

module.exports = ReactEntry;

})();
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/warning");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("prop-types/checkPropTypes");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _streamers = __webpack_require__(19);

var _StreamersItem = __webpack_require__(40);

var _StreamersItem2 = _interopRequireDefault(_StreamersItem);

var _StreamerGridFilter = __webpack_require__(41);

var _StreamerGridFilter2 = _interopRequireDefault(_StreamerGridFilter);

var _index = __webpack_require__(20);

var _activity = __webpack_require__(8);

var _ActivityFeed = __webpack_require__(43);

var _ActivityFeed2 = _interopRequireDefault(_ActivityFeed);

var _StreamersPageHelmet = __webpack_require__(82);

var _StreamersPageHelmet2 = _interopRequireDefault(_StreamersPageHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StreamersPage = function (_Component) {
  _inherits(StreamersPage, _Component);

  function StreamersPage(props) {
    _classCallCheck(this, StreamersPage);

    var _this = _possibleConstructorReturn(this, (StreamersPage.__proto__ || Object.getPrototypeOf(StreamersPage)).call(this, props));

    _this.handleScroll = function () {
      if (_this.scroller) {
        if (_this.scroller.scrollHeight - _this.scroller.scrollTop === _this.scroller.clientHeight) {
          _this.setState(function (prevState) {
            return { pageIndex: prevState.pageIndex + 1 };
          });
          var _fetchMoreStreamers = _this.props.fetchMoreStreamers;

          _fetchMoreStreamers(_this.state.pageIndex, _this.state.searchValue);
        }
      }
    };

    _this.searchValueChanged = function (value) {
      _this.setState({
        pageIndex: 1,
        searchValue: value
      });
      var _this$props = _this.props,
          getStreamers = _this$props.getStreamers,
          requestStreamers = _this$props.requestStreamers;

      requestStreamers();
      getStreamers(0, value);
    };

    _this.state = {
      pageIndex: 1,
      searchValue: ""
    };
    return _this;
  }

  _createClass(StreamersPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var getStreamers = this.props.getStreamers;
      // Client side rendering of the streamers

      getStreamers(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var streamers = this.props.streamers;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_StreamersPageHelmet2.default, null),
        _react2.default.createElement(
          _semanticUiReact.Grid,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 10 },
            _react2.default.createElement(
              _semanticUiReact.Segment,
              { className: "streamer-segment", loading: streamers.fetching },
              _react2.default.createElement(
                _semanticUiReact.Label,
                { attached: "top", size: "big", className: "colored-label" },
                _react2.default.createElement(_semanticUiReact.Icon, { name: "user" }),
                "Streamers"
              ),
              _react2.default.createElement(
                "div",
                { className: "segment-grid-filter" },
                _react2.default.createElement(_StreamerGridFilter2.default, {
                  searchValueChanged: this.searchValueChanged
                }),
                _react2.default.createElement(
                  _semanticUiReact.Divider,
                  { horizontal: true },
                  "Results"
                ),
                _react2.default.createElement(
                  "div",
                  {
                    ref: function ref(scroller) {
                      _this2.scroller = scroller;
                    },
                    onScroll: this.handleScroll,
                    style: {
                      height: "75vh",
                      overflowY: "auto",
                      overflowX: "hidden",
                      paddingRight: "10px"
                    }
                  },
                  _react2.default.createElement(
                    _semanticUiReact.Grid,
                    {
                      stackable: true,
                      columns: 4,
                      className: "streamer-grid animated fadeIn"
                    },
                    _react2.default.createElement(
                      _semanticUiReact.Grid.Row,
                      null,
                      streamers.items && streamers.items.map(function (streamer, index) {
                        return streamer && _react2.default.createElement(
                          _semanticUiReact.Grid.Column,
                          { width: 4, key: index },
                          _react2.default.createElement(_StreamersItem2.default, {
                            key: index,
                            streamer: streamer,
                            numberOfClips: streamer.numberOfClips,
                            numberOfArchives: streamer.numberOfArchives
                          })
                        );
                      })
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 6 },
            _react2.default.createElement(_ActivityFeed2.default, null)
          )
        )
      );
    }
  }]);

  return StreamersPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var streamers = _ref.streamers;

  return { streamers: streamers };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { getStreamers: _streamers.getStreamers, fetchMoreStreamers: _streamers.fetchMoreStreamers, requestStreamers: _index.requestStreamers })(StreamersPage),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;

    return dispatch((0, _streamers.getStreamers)(0)).then(function () {
      return dispatch((0, _activity.getActivity)(0));
    });
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StreamersItem = function StreamersItem(_ref) {
  var streamer = _ref.streamer,
      numberOfClips = _ref.numberOfClips,
      numberOfArchives = _ref.numberOfArchives;

  return _react2.default.createElement(
    _semanticUiReact.Segment.Group,
    { className: "streamer-item" },
    _react2.default.createElement(
      _semanticUiReact.Segment,
      null,
      _react2.default.createElement(
        _semanticUiReact.Label,
        { attached: "top", className: "inverted-color-label" },
        streamer.monitored && _react2.default.createElement(_semanticUiReact.Icon, { name: "circle thin", color: "red" }),
        streamer.displayName
      ),
      _react2.default.createElement(
        _semanticUiReact.Item.Group,
        null,
        _react2.default.createElement(
          _semanticUiReact.Item,
          null,
          _react2.default.createElement(_semanticUiReact.Item.Image, { size: "tiny", src: streamer.profileImageURL, circular: true }),
          _react2.default.createElement(
            _semanticUiReact.Item.Content,
            null,
            _react2.default.createElement(
              _semanticUiReact.Item.Extra,
              null,
              _react2.default.createElement(_semanticUiReact.Icon, { name: "video" }),
              " ",
              numberOfClips ? numberOfClips : "0",
              " ",
              "clips"
            ),
            _react2.default.createElement(
              _semanticUiReact.Item.Extra,
              null,
              _react2.default.createElement(_semanticUiReact.Icon, { name: "film" }),
              " ",
              numberOfArchives ? numberOfArchives : "0",
              " ",
              "archives"
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { textAlign: "center" },
      _react2.default.createElement(
        _semanticUiReact.Button,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: { pathname: "/streamer/" + streamer.streamerId } },
          "Visit"
        )
      )
    )
  );
};

exports.default = StreamersItem;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StreamerGridFilter = function (_Component) {
  _inherits(StreamerGridFilter, _Component);

  function StreamerGridFilter(props) {
    _classCallCheck(this, StreamerGridFilter);

    var _this = _possibleConstructorReturn(this, (StreamerGridFilter.__proto__ || Object.getPrototypeOf(StreamerGridFilter)).call(this, props));

    _this.timeout = 0;
    return _this;
  }

  _createClass(StreamerGridFilter, [{
    key: "onSearchChange",
    value: function onSearchChange(value) {
      var _this2 = this;

      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this2.props.searchValueChanged(value);
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _semanticUiReact.Menu,
        { fluid: true, borderless: true, size: "large" },
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          { header: true },
          _react2.default.createElement(_semanticUiReact.Icon, { name: "filter" }),
          "Filters"
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          null,
          _react2.default.createElement(_semanticUiReact.Input, {
            className: "icon",
            icon: "user",
            iconPosition: "left",
            placeholder: "Search A Streamer...",
            size: "small",
            onChange: function onChange(e, _ref) {
              var value = _ref.value;
              return _this3.onSearchChange(value);
            }
          })
        )
      );
    }
  }]);

  return StreamerGridFilter;
}(_react.Component);

exports.default = StreamerGridFilter;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_ACTIVITY = exports.FETCH_ACTIVITY = "FETCH_ACTIVITY";
var APPEND_ACTIVITY = exports.APPEND_ACTIVITY = "APPEND_ACTIVITY";
var REQUEST_ACTIVITY = exports.REQUEST_ACTIVITY = "REQUEST_ACTIVITY";

var fetchActivity = exports.fetchActivity = function fetchActivity(activity) {
  return {
    type: FETCH_ACTIVITY,
    payload: activity
  };
};

var requestActivity = exports.requestActivity = function requestActivity() {
  return {
    type: REQUEST_ACTIVITY
  };
};

var appendActivity = exports.appendActivity = function appendActivity(activity) {
  return {
    type: APPEND_ACTIVITY,
    payload: activity
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _reactTimeago = __webpack_require__(6);

var _reactTimeago2 = _interopRequireDefault(_reactTimeago);

var _languageUtils = __webpack_require__(4);

var _index = __webpack_require__(8);

var _ActivityModal = __webpack_require__(44);

var _ActivityModal2 = _interopRequireDefault(_ActivityModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var image = "https://image.flaticon.com/icons/svg/843/843273.svg";

var ActivityFeed = function (_Component) {
  _inherits(ActivityFeed, _Component);

  function ActivityFeed(props) {
    _classCallCheck(this, ActivityFeed);

    var _this = _possibleConstructorReturn(this, (ActivityFeed.__proto__ || Object.getPrototypeOf(ActivityFeed)).call(this, props));

    _this.handleScroll = function () {
      if (_this.scroller) {
        if (_this.scroller.scrollHeight - _this.scroller.scrollTop === _this.scroller.clientHeight) {
          _this.setState(function (prevState) {
            return { pageIndex: prevState.pageIndex + 1 };
          });
          var _fetchMoreActivity = _this.props.fetchMoreActivity;

          _fetchMoreActivity(_this.state.pageIndex);
        }
      }
    };

    _this.closeModal = function () {
      _this.setState({
        modalOpen: false
      });
    };

    _this.state = {
      pageIndex: 1,
      modalOpen: false,
      url: "",
      streamerId: 0
    };
    return _this;
  }

  _createClass(ActivityFeed, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var getActivity = this.props.getActivity;

      getActivity(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activity = this.props.activity;

      return _react2.default.createElement(
        _semanticUiReact.Segment,
        { loading: activity.fetching, className: "activity-segment" },
        _react2.default.createElement(
          _semanticUiReact.Label,
          { attached: "top", size: "big", className: "colored-label" },
          _react2.default.createElement(_semanticUiReact.Icon, { loading: true, name: "certificate" }),
          "Activity Feed"
        ),
        _react2.default.createElement(
          _semanticUiReact.Message,
          { warning: true },
          "Those clips are generated automatically by ",
          _react2.default.createElement(
            "b",
            null,
            "AutoClipper (\u03B2)"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            ref: function ref(scroller) {
              _this2.scroller = scroller;
            },
            onScroll: this.handleScroll,
            style: {
              height: "85vh",
              overflowY: "auto"
            },
            className: "activity-feed"
          },
          _react2.default.createElement(
            _semanticUiReact.Feed,
            { style: { marginTop: "20px", padding: "10px" } },
            activity && activity.items && activity.items.map(function (clip) {
              return _react2.default.createElement(
                _semanticUiReact.Feed.Event,
                {
                  key: clip.clipId,
                  onClick: function onClick() {
                    return _this2.setState({
                      modalOpen: true,
                      url: clip.embedClipURL,
                      streamerId: clip.channelId.streamerId
                    });
                  }
                },
                _react2.default.createElement(_semanticUiReact.Feed.Label, { image: image }),
                _react2.default.createElement(
                  _semanticUiReact.Feed.Content,
                  null,
                  _react2.default.createElement(_semanticUiReact.Feed.Date, { content: _react2.default.createElement(_reactTimeago2.default, { date: clip.created_at }) }),
                  _react2.default.createElement(_semanticUiReact.Feed.Summary, {
                    content: "AutoClipper created a new clip for " + clip.channelId.displayName
                  }),
                  _react2.default.createElement(_semanticUiReact.Feed.Extra, { images: [clip.thumbnailURL] }),
                  _react2.default.createElement(
                    _semanticUiReact.Feed.Extra,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Label,
                      null,
                      _react2.default.createElement(_semanticUiReact.Flag, { name: (0, _languageUtils.mapToFlag)(clip.language) }),
                      clip.language
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Label,
                      null,
                      _react2.default.createElement(_semanticUiReact.Rating, {
                        icon: "star",
                        defaultRating: clip.score,
                        maxRating: 5,
                        disabled: true
                      })
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Feed.Meta,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Feed.Like,
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: "gamepad" }),
                      clip.gameId[0] && clip.gameId[0].name
                    )
                  )
                )
              );
            })
          ),
          _react2.default.createElement(_ActivityModal2.default, {
            modalOpen: this.state.modalOpen,
            url: this.state.url,
            close: this.closeModal,
            streamerId: this.state.streamerId
          })
        )
      );
    }
  }]);

  return ActivityFeed;
}(_react.Component);

function mapStateToProps(_ref) {
  var activity = _ref.activity;

  return { activity: activity };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getActivity: _index.getActivity, fetchMoreActivity: _index.fetchMoreActivity })(ActivityFeed);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _VideoPlayer = __webpack_require__(12);

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivityModal = function (_Component) {
  _inherits(ActivityModal, _Component);

  function ActivityModal() {
    _classCallCheck(this, ActivityModal);

    return _possibleConstructorReturn(this, (ActivityModal.__proto__ || Object.getPrototypeOf(ActivityModal)).apply(this, arguments));
  }

  _createClass(ActivityModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _semanticUiReact.Modal,
        {
          dimmer: "blurring",
          closeOnEscape: true,
          closeOnDimmerClick: true,
          open: this.props.modalOpen,
          size: "small"
        },
        _react2.default.createElement(
          _semanticUiReact.Modal.Content,
          null,
          _react2.default.createElement(_VideoPlayer2.default, { url: this.props.url })
        ),
        _react2.default.createElement(
          _semanticUiReact.Modal.Actions,
          null,
          _react2.default.createElement(
            _semanticUiReact.Button,
            {
              className: "inverted-button",
              onClick: function onClick() {
                return _this2.props.history.push("/streamer/" + _this2.props.streamerId);
              }
            },
            "Go to Streamer Page"
          ),
          _react2.default.createElement(
            _semanticUiReact.Button,
            { color: "grey", onClick: this.props.close },
            "Close"
          )
        )
      );
    }
  }]);

  return ActivityModal;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(ActivityModal);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(7);

var _StreamerPageHeader = __webpack_require__(46);

var _StreamerPageHeader2 = _interopRequireDefault(_StreamerPageHeader);

var _StreamerClipTable = __webpack_require__(47);

var _StreamerClipTable2 = _interopRequireDefault(_StreamerClipTable);

var _StreamerArchiveTable = __webpack_require__(50);

var _StreamerArchiveTable2 = _interopRequireDefault(_StreamerArchiveTable);

var _index2 = __webpack_require__(10);

var _VideoPlayer = __webpack_require__(12);

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

var _StreamerVideoArchive = __webpack_require__(21);

var _StreamerVideoArchive2 = _interopRequireDefault(_StreamerVideoArchive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StreamerDetailPage = function (_Component) {
  _inherits(StreamerDetailPage, _Component);

  function StreamerDetailPage(props) {
    _classCallCheck(this, StreamerDetailPage);

    var _this = _possibleConstructorReturn(this, (StreamerDetailPage.__proto__ || Object.getPrototypeOf(StreamerDetailPage)).call(this, props));

    _this.setClip = function (clip) {
      _this.setState({
        active: true,
        url: clip.embedClipURL,
        activeClip: clip,
        modalOpen: true
      });
    };

    _this.handleScroll = function () {
      _this.setState(function (prevState) {
        return {
          clipPageIndex: prevState.clipPageIndex + 1
        };
      });
      var _this$props = _this.props,
          fetchMoreClips = _this$props.fetchMoreClips,
          match = _this$props.match,
          ui = _this$props.ui;

      fetchMoreClips(match.params.id, _this.state.clipPageIndex, _this.state.gameSearchValue, _this.state.titleSearchValue, ui.automaticCheckbox, ui.time);
    };

    _this.gameSearchValueChanged = function (value) {
      _this.setState({
        clipPageIndex: 1,
        gameSearchValue: value
      });
      var _this$props2 = _this.props,
          match = _this$props2.match,
          getClips = _this$props2.getClips,
          ui = _this$props2.ui;

      getClips(match.params.id, 0, value, _this.state.titleSearchValue, ui.automaticCheckbox, ui.time);
    };

    _this.titleSearchValueChanged = function (value) {
      _this.setState({
        clipPageIndex: 1,
        titleSearchValue: value
      });
      var _this$props3 = _this.props,
          match = _this$props3.match,
          getClips = _this$props3.getClips,
          ui = _this$props3.ui;

      getClips(match.params.id, 0, _this.state.gameSearchValue, value, ui.automaticCheckbox, ui.time);
    };

    _this.checkBoxChanged = function () {
      var _this$props4 = _this.props,
          match = _this$props4.match,
          getClips = _this$props4.getClips,
          ui = _this$props4.ui;

      getClips(match.params.id, 0, _this.state.gameSearchValue, _this.state.titleSearchValue, !ui.automaticCheckbox, ui.time);
    };

    _this.timeChanged = function (timeValue) {
      var _this$props5 = _this.props,
          match = _this$props5.match,
          getClips = _this$props5.getClips,
          ui = _this$props5.ui;

      getClips(match.params.id, 0, _this.state.gameSearchValue, _this.state.titleSearchValue, ui.automaticCheckbox, timeValue);
    };

    _this.close = function () {
      _this.setState({ modalOpen: false });
    };

    _this.handleTabChange = function (e, _ref) {
      var activeIndex = _ref.activeIndex;
      return _this.setState({ activeIndex: activeIndex });
    };

    _this.state = {
      active: false,
      url: "",
      clipPageIndex: 1,
      gameSearchValue: "",
      titleSearchValue: "",
      activeIndex: 0,
      modalOpen: false
    };
    return _this;
  }

  _createClass(StreamerDetailPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          getClips = _props.getClips,
          match = _props.match,
          fetchMoreClips = _props.fetchMoreClips,
          setAutomaticCheckbox = _props.setAutomaticCheckbox,
          setTimeFilter = _props.setTimeFilter;

      setAutomaticCheckbox(false);
      setTimeFilter("week");
      getClips(match.params.id, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          clips = _props2.clips,
          match = _props2.match;
      var activeIndex = this.state.activeIndex;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _semanticUiReact.Grid,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 16 },
            _react2.default.createElement(_StreamerPageHeader2.default, {
              numberOfClips: clips.items && clips.items.length
            }),
            _react2.default.createElement(_semanticUiReact.Tab, {
              activeIndex: activeIndex,
              onTabChange: this.handleTabChange,
              panes: [{
                menuItem: {
                  key: "clips",
                  icon: "rocket",
                  content: "Clips"
                },
                render: function render() {
                  return _react2.default.createElement(
                    "div",
                    null,
                    clips && clips.items && _react2.default.createElement(_StreamerClipTable2.default, {
                      fetching: clips.fetching,
                      clips: clips.items,
                      setClip: _this2.setClip,
                      handleScroll: _this2.handleScroll,
                      gameSearchValueChanged: _this2.gameSearchValueChanged,
                      titleSearchValueChanged: _this2.titleSearchValueChanged,
                      checkBoxChanged: _this2.checkBoxChanged,
                      timeChanged: _this2.timeChanged
                    })
                  );
                }
              }, {
                menuItem: {
                  key: "archives",
                  icon: "film",
                  content: "Archives"
                },
                render: function render() {
                  return _react2.default.createElement(_StreamerArchiveTable2.default, {
                    streamerId: match.params.id
                  });
                }
              }]
            })
          ),
          _react2.default.createElement(
            _semanticUiReact.Modal,
            {
              dimmer: "blurring",
              closeOnEscape: true,
              closeOnDimmerClick: true,
              open: this.state.modalOpen,
              size: "small"
            },
            _react2.default.createElement(
              _semanticUiReact.Modal.Content,
              null,
              _react2.default.createElement(_VideoPlayer2.default, {
                active: this.state.active,
                url: this.state.url
              }),
              this.state.activeClip && this.state.activeClip.archive && this.state.activeClip.archive[0] ? _react2.default.createElement(_StreamerVideoArchive2.default, {
                archive: this.state.activeClip.archive[0],
                creatorName: this.state.activeClip.creatorName,
                automatic: this.state.activeClip.automatic
              }) : _react2.default.createElement(
                _semanticUiReact.Message,
                { warning: true, icon: true },
                _react2.default.createElement(_semanticUiReact.Icon, { name: "file video outline" }),
                _react2.default.createElement(
                  _semanticUiReact.Message.Content,
                  null,
                  _react2.default.createElement(
                    _semanticUiReact.Message.Header,
                    null,
                    "No Archive Yet"
                  ),
                  "The archive will be available soon."
                )
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Modal.Actions,
              null,
              _react2.default.createElement(
                _semanticUiReact.Button,
                { color: "grey", onClick: this.close },
                "Close"
              )
            )
          )
        )
      );
    }
  }]);

  return StreamerDetailPage;
}(_react.Component);

function mapStateToProps(_ref2) {
  var clips = _ref2.clips,
      ui = _ref2.ui;

  return { clips: clips, ui: ui };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { setAutomaticCheckbox: _index.setAutomaticCheckbox, setTimeFilter: _index.setTimeFilter, fetchMoreClips: _index2.fetchMoreClips, getClips: _index2.getClips })(StreamerDetailPage),
  loadData: function loadData(_ref3, _ref4) {
    var dispatch = _ref3.dispatch;
    var id = _ref4.id;

    return dispatch((0, _index2.getClips)(id, 0));
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _StreamerDetailPageHelmet = __webpack_require__(83);

var _StreamerDetailPageHelmet2 = _interopRequireDefault(_StreamerDetailPageHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    streamer: state.ui.selectedStreamer
  };
};

var StreamerPageHeader = function StreamerPageHeader(_ref) {
  var streamer = _ref.streamer,
      numberOfClips = _ref.numberOfClips;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_StreamerDetailPageHelmet2.default, { streamer: streamer.displayName }),
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { className: "bordered-segment" },
      streamer && _react2.default.createElement(
        _semanticUiReact.Item.Group,
        null,
        _react2.default.createElement(
          _semanticUiReact.Item,
          null,
          _react2.default.createElement(_semanticUiReact.Item.Image, { size: "tiny", src: streamer.profileImageURL }),
          _react2.default.createElement(
            _semanticUiReact.Item.Content,
            null,
            _react2.default.createElement(
              _semanticUiReact.Item.Header,
              null,
              streamer.displayName
            ),
            _react2.default.createElement(
              _semanticUiReact.Item.Meta,
              null,
              streamer.description ? streamer.description : "Apparently, this streamer prefers to keep an air of mystery about them"
            ),
            _react2.default.createElement(
              _semanticUiReact.Item.Meta,
              null,
              streamer.monitored ? _react2.default.createElement(
                _semanticUiReact.Label,
                null,
                _react2.default.createElement(_semanticUiReact.Icon, {
                  name: "circle thin",
                  color: "red",
                  style: { marginRight: "10px" }
                }),
                "Live"
              ) : _react2.default.createElement(
                _semanticUiReact.Label,
                null,
                _react2.default.createElement(_semanticUiReact.Icon, {
                  name: "circle thin",
                  color: "grey",
                  style: { marginRight: "10px" }
                }),
                "Disconnected"
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Item.Meta,
              null,
              _react2.default.createElement(
                _semanticUiReact.Label,
                null,
                _react2.default.createElement(_semanticUiReact.Icon, {
                  name: "twitch",
                  color: "violet",
                  style: { marginRight: "10px" }
                }),
                streamer.broadcasterType
              )
            )
          )
        )
      )
    )
  );
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(StreamerPageHeader);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactTimeago = __webpack_require__(6);

var _reactTimeago2 = _interopRequireDefault(_reactTimeago);

var _languageUtils = __webpack_require__(4);

var _NoResultsSegment = __webpack_require__(48);

var _NoResultsSegment2 = _interopRequireDefault(_NoResultsSegment);

var _StreamerClipFilter = __webpack_require__(49);

var _StreamerClipFilter2 = _interopRequireDefault(_StreamerClipFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StreamerClipTable = function (_Component) {
  _inherits(StreamerClipTable, _Component);

  function StreamerClipTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StreamerClipTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StreamerClipTable.__proto__ || Object.getPrototypeOf(StreamerClipTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleScroll = function () {
      if (_this.scroller) {
        if (_this.scroller.scrollHeight - _this.scroller.scrollTop === _this.scroller.clientHeight) {
          _this.props.handleScroll();
        }
      }
    }, _this.mapToScore = function (score) {
      if (score < 2) {
        return _react2.default.createElement(
          _semanticUiReact.Label,
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning", color: "green" }),
          "Moderately Epic"
        );
      } else if (score > 2 && score < 4) {
        return _react2.default.createElement(
          _semanticUiReact.Label,
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning", color: "yellow" }),
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning", color: "yellow" }),
          "Very Epic"
        );
      } else {
        return _react2.default.createElement(
          _semanticUiReact.Label,
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning", color: "red" }),
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning", color: "red" }),
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning", color: "red" }),
          "OMG!"
        );
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StreamerClipTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          clips = _props.clips,
          setClip = _props.setClip,
          fetching = _props.fetching,
          checkBoxChanged = _props.checkBoxChanged;

      return _react2.default.createElement(
        _semanticUiReact.Segment,
        { loading: fetching },
        _react2.default.createElement(
          _semanticUiReact.Label,
          { attached: "top", size: "big", className: "colored-label" },
          "Clips"
        ),
        _react2.default.createElement(_StreamerClipFilter2.default, {
          gameSearchValueChanged: this.props.gameSearchValueChanged,
          titleSearchValueChanged: this.props.titleSearchValueChanged,
          checkBoxChanged: this.props.checkBoxChanged,
          timeChanged: this.props.timeChanged
        }),
        _react2.default.createElement(
          _semanticUiReact.Divider,
          { horizontal: true },
          "Results (",
          clips && clips.length,
          ")"
        ),
        _react2.default.createElement(
          "div",
          {
            style: {
              height: "50vh",
              overflowY: "auto"
            },
            ref: function ref(scroller) {
              _this2.scroller = scroller;
            },
            onScroll: this.handleScroll
          },
          clips && clips.length > 0 ? _react2.default.createElement(
            _semanticUiReact.Table,
            { celled: true, padded: true, fixed: true },
            _react2.default.createElement(
              _semanticUiReact.Table.Header,
              null,
              _react2.default.createElement(
                _semanticUiReact.Table.Row,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  { style: { width: "300px" } },
                  "Stream Title"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Game"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Language"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Score"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Views"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Created At"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Action"
                )
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Table.Body,
              null,
              clips && clips.map(function (clip) {
                return _react2.default.createElement(
                  _semanticUiReact.Table.Row,
                  { key: clip.clipId },
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    clip.title,
                    " ",
                    _react2.default.createElement("br", null),
                    " by ",
                    _react2.default.createElement(
                      "b",
                      null,
                      clip.creatorName
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Header,
                      { as: "h4", image: true },
                      _react2.default.createElement(_semanticUiReact.Image, {
                        src: clip.game && clip.game.boxArtURL && clip.game.boxArtURL.replace("{width}", "300").replace("{height}", "300"),
                        rounded: true,
                        size: "big"
                      }),
                      _react2.default.createElement(
                        _semanticUiReact.Header.Content,
                        null,
                        _react2.default.createElement(
                          _semanticUiReact.Header.Subheader,
                          null,
                          clip.game && clip.game.name
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(_semanticUiReact.Flag, { name: (0, _languageUtils.mapToFlag)(clip.language) }),
                    clip.language
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Label,
                      { className: "clip-rating" },
                      _react2.default.createElement(_semanticUiReact.Rating, {
                        icon: "star",
                        defaultRating: clip.score,
                        maxRating: 5,
                        disabled: true
                      }),
                      " "
                    ),
                    " ",
                    _react2.default.createElement("br", null),
                    _this2.mapToScore(clip.score)
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Label,
                      { size: "small" },
                      _react2.default.createElement(_semanticUiReact.Icon, { name: "eye" }),
                      clip.viewCount
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(_reactTimeago2.default, { date: clip.created_at })
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Button,
                      {
                        size: "small",
                        icon: true,
                        labelPosition: "left",
                        onClick: function onClick() {
                          setClip(clip);
                        }
                      },
                      _react2.default.createElement(_semanticUiReact.Icon, { name: "play" }),
                      "Play"
                    )
                  )
                );
              })
            )
          ) : _react2.default.createElement(_NoResultsSegment2.default, null)
        )
      );
    }
  }]);

  return StreamerClipTable;
}(_react.Component);

exports.default = StreamerClipTable;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoResultsSegment = function (_Component) {
  _inherits(NoResultsSegment, _Component);

  function NoResultsSegment() {
    _classCallCheck(this, NoResultsSegment);

    return _possibleConstructorReturn(this, (NoResultsSegment.__proto__ || Object.getPrototypeOf(NoResultsSegment)).apply(this, arguments));
  }

  _createClass(NoResultsSegment, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _semanticUiReact.Segment,
        null,
        _react2.default.createElement(
          _semanticUiReact.Item.Group,
          null,
          _react2.default.createElement(
            _semanticUiReact.Item,
            null,
            _react2.default.createElement(_semanticUiReact.Item.Image, {
              src: "https://image.flaticon.com/icons/svg/843/843273.svg",
              size: "tiny"
            }),
            _react2.default.createElement(
              _semanticUiReact.Item.Content,
              null,
              _react2.default.createElement(
                _semanticUiReact.Item.Header,
                null,
                "Oops! No results were found for this streamer."
              ),
              _react2.default.createElement(
                _semanticUiReact.Item.Meta,
                null,
                "Better luck checking automatic clips"
              )
            )
          )
        )
      );
    }
  }]);

  return NoResultsSegment;
}(_react.Component);

exports.default = NoResultsSegment;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setAutomaticCheckbox: function setAutomaticCheckbox(value) {
      return dispatch((0, _index.setAutomaticCheckbox)(value));
    },
    setTimeFilter: function setTimeFilter(timeValue) {
      return dispatch((0, _index.setTimeFilter)(timeValue));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    ui: state.ui
  };
};

var timeOptions = [{
  key: "today",
  text: "today",
  value: "day",
  content: "Today"
}, {
  key: "this week",
  text: "this week",
  value: "week",
  content: "This Week"
}, {
  key: "this month",
  text: "this month",
  value: "month",
  content: "This Month"
}, {
  key: "this year",
  text: "this year",
  value: "year",
  content: "This Year"
}];

var StreamerClipFilter = function (_Component) {
  _inherits(StreamerClipFilter, _Component);

  function StreamerClipFilter(props) {
    _classCallCheck(this, StreamerClipFilter);

    var _this = _possibleConstructorReturn(this, (StreamerClipFilter.__proto__ || Object.getPrototypeOf(StreamerClipFilter)).call(this, props));

    _this.onCheckBoxChanged = function () {
      var _this$props = _this.props,
          setAutomaticCheckbox = _this$props.setAutomaticCheckbox,
          ui = _this$props.ui;

      if (ui.automaticCheckbox) {
        setAutomaticCheckbox(false);
      } else {
        setAutomaticCheckbox(true);
      }
      _this.props.checkBoxChanged();
    };

    _this.onTimeChanged = function (value) {
      var setTimeFilter = _this.props.setTimeFilter;

      setTimeFilter(value);
      _this.props.timeChanged(value);
    };

    _this.onGameSearchChanged = function (value) {
      if (_this.timeout) clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.props.gameSearchValueChanged(value);
      }, 1000);
    };

    _this.onTitleSearchChanged = function (value) {
      if (_this.timeout) clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.props.titleSearchValueChanged(value);
      }, 1000);
    };

    _this.timeout = 0;
    return _this;
  }

  _createClass(StreamerClipFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var ui = this.props.ui;

      return _react2.default.createElement(
        _semanticUiReact.Menu,
        { fluid: true, borderless: true, size: "large" },
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          { header: true, active: true },
          _react2.default.createElement(_semanticUiReact.Icon, { name: "filter" }),
          "Filters"
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          null,
          _react2.default.createElement(_semanticUiReact.Input, {
            className: "icon",
            icon: "film",
            iconPosition: "left",
            placeholder: "Search A Clip",
            size: "medium",
            style: { marginRight: "10px" },
            onChange: function onChange(e, _ref) {
              var value = _ref.value;
              return _this2.onTitleSearchChanged(value);
            }
          }),
          _react2.default.createElement(_semanticUiReact.Input, {
            className: "icon",
            icon: "gamepad",
            iconPosition: "left",
            placeholder: "Search A Game",
            size: "medium",
            onChange: function onChange(e, _ref2) {
              var value = _ref2.value;
              return _this2.onGameSearchChanged(value);
            }
          })
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          null,
          _react2.default.createElement(
            _semanticUiReact.Header,
            { as: "h4" },
            _react2.default.createElement(_semanticUiReact.Icon, { name: "eye" }),
            _react2.default.createElement(
              _semanticUiReact.Header.Content,
              null,
              "Most viewed",
              " ",
              _react2.default.createElement(_semanticUiReact.Dropdown, {
                inline: true,
                header: "Adjust time span",
                options: timeOptions,
                defaultValue: ui.time,
                onChange: function onChange(e, _ref3) {
                  var value = _ref3.value;
                  return _this2.onTimeChanged(value);
                }
              })
            )
          )
        )
      );
    }
  }]);

  return StreamerClipFilter;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StreamerClipFilter);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

var _reactTimeago = __webpack_require__(6);

var _reactTimeago2 = _interopRequireDefault(_reactTimeago);

var _reactRedux = __webpack_require__(2);

var _archives = __webpack_require__(9);

var _index = __webpack_require__(9);

var _languageUtils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getArchiveByStreamerId: function getArchiveByStreamerId(streamerId, pageIndex) {
      return dispatch((0, _archives.getArchiveByStreamerId)(streamerId, pageIndex));
    },
    fetchMoreArchiveByStreamer: function fetchMoreArchiveByStreamer(streamerId, pageIndex) {
      return dispatch((0, _index.fetchMoreArchiveByStreamer)(streamerId, pageIndex));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    archives: state.archives
  };
};

var StreamerArchiveTable = function (_Component) {
  _inherits(StreamerArchiveTable, _Component);

  function StreamerArchiveTable(props) {
    _classCallCheck(this, StreamerArchiveTable);

    var _this = _possibleConstructorReturn(this, (StreamerArchiveTable.__proto__ || Object.getPrototypeOf(StreamerArchiveTable)).call(this, props));

    _this.handleScroll = function () {
      if (_this.scroller) {
        if (_this.scroller.scrollHeight - _this.scroller.scrollTop === _this.scroller.clientHeight) {
          _this.setState(function (prevState) {
            return {
              pageIndex: prevState.pageIndex + 1
            };
          });
          var _this$props = _this.props,
              fetchMoreArchiveByStreamer = _this$props.fetchMoreArchiveByStreamer,
              streamerId = _this$props.streamerId;

          fetchMoreArchiveByStreamer(streamerId, _this.state.pageIndex);
        }
      }
    };

    _this.state = {
      pageIndex: 1
    };
    return _this;
  }

  _createClass(StreamerArchiveTable, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          getArchiveByStreamerId = _props.getArchiveByStreamerId,
          streamerId = _props.streamerId;

      getArchiveByStreamerId(streamerId, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var archives = this.props.archives;

      return _react2.default.createElement(
        _semanticUiReact.Segment,
        { loading: archives.fetching },
        _react2.default.createElement(
          _semanticUiReact.Label,
          { attached: "top", size: "big", className: "colored-label" },
          "Archives"
        ),
        _react2.default.createElement(
          _semanticUiReact.Divider,
          { horizontal: true },
          "Results"
        ),
        _react2.default.createElement(
          "div",
          {
            style: {
              height: "55vh",
              overflowY: "auto"
            },
            ref: function ref(scroller) {
              _this2.scroller = scroller;
            },
            onScroll: this.handleScroll
          },
          _react2.default.createElement(
            _semanticUiReact.Table,
            { celled: true, padded: true },
            _react2.default.createElement(
              _semanticUiReact.Table.Header,
              null,
              _react2.default.createElement(
                _semanticUiReact.Table.Row,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  { style: { width: "300px" } },
                  "Archive Title"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "View Count"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Language"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Published"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Number Of Clips"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Action"
                )
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Table.Body,
              null,
              archives.items && archives.items.map(function (archive) {
                return _react2.default.createElement(
                  _semanticUiReact.Table.Row,
                  { key: archive.archiveId },
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    archive.title
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(_semanticUiReact.Icon, { name: "eye" }),
                    archive.viewCount
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(_semanticUiReact.Flag, { name: (0, _languageUtils.mapToFlag)(archive.language) }),
                    archive.language
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(_reactTimeago2.default, { date: archive.publishedAt })
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(_semanticUiReact.Icon, { name: "film" }),
                    archive.numberOfClips
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Button,
                      null,
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                          to: {
                            pathname: "/session/" + archive.archiveId
                          }
                        },
                        "Jump To Source"
                      )
                    )
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return StreamerArchiveTable;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StreamerArchiveTable);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var REQUEST_ARCHIVE = exports.REQUEST_ARCHIVE = "REQUEST_ARCHIVE";
var FETCH_ARCHIVE = exports.FETCH_ARCHIVE = "FETCH_ARCHIVE";
var APPEND_ARCHIVE = exports.APPEND_ARCHIVE = "APPEND_ARCHIVE";

var requestArchive = exports.requestArchive = function requestArchive() {
  return {
    type: REQUEST_ARCHIVE
  };
};

var fetchArchive = exports.fetchArchive = function fetchArchive(archive) {
  return {
    type: FETCH_ARCHIVE,
    payload: archive
  };
};

var appendArchive = exports.appendArchive = function appendArchive(archive) {
  return {
    type: APPEND_ARCHIVE,
    payload: archive
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var REQUEST_CLIPS = exports.REQUEST_CLIPS = "REQUEST_CLIPS";
var FETCH_CLIPS = exports.FETCH_CLIPS = "FETCH_CLIPS";
var APPEND_CLIPS = exports.APPEND_CLIPS = "APPEND_CLIPS";

var requestClips = exports.requestClips = function requestClips() {
  return {
    type: REQUEST_CLIPS
  };
};

var fetchClips = exports.fetchClips = function fetchClips(clips) {
  return {
    type: FETCH_CLIPS,
    payload: clips
  };
};

var appendClips = exports.appendClips = function appendClips(clips) {
  return {
    type: APPEND_CLIPS,
    payload: clips
  };
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _semanticUiReact = __webpack_require__(1);

var _index = __webpack_require__(9);

var _SessionPageHeader = __webpack_require__(54);

var _SessionPageHeader2 = _interopRequireDefault(_SessionPageHeader);

var _SessionAvailabilityMessage = __webpack_require__(55);

var _SessionAvailabilityMessage2 = _interopRequireDefault(_SessionAvailabilityMessage);

var _SessionPlayer = __webpack_require__(58);

var _SessionPlayer2 = _interopRequireDefault(_SessionPlayer);

var _SessionMessage = __webpack_require__(60);

var _SessionMessage2 = _interopRequireDefault(_SessionMessage);

var _SessionClipTable = __webpack_require__(61);

var _SessionClipTable2 = _interopRequireDefault(_SessionClipTable);

var _clips = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SessionPage = function (_Component) {
  _inherits(SessionPage, _Component);

  function SessionPage(props) {
    _classCallCheck(this, SessionPage);

    var _this = _possibleConstructorReturn(this, (SessionPage.__proto__ || Object.getPrototypeOf(SessionPage)).call(this, props));

    _this.handleScroll = function () {
      _this.setState(function (prevState) {
        return {
          clipPageIndex: prevState.clipPageIndex + 1
        };
      });
      var _this$props = _this.props,
          fetchMoreClipsByArchive = _this$props.fetchMoreClipsByArchive,
          match = _this$props.match;

      fetchMoreClipsByArchive(match.params.id, _this.state.clipPageIndex);
    };

    _this.seekTo = function (time) {
      _this.setState({
        time: time
      });
    };

    _this.state = {
      clipPageIndex: 1,
      time: 1000
    };
    return _this;
  }

  _createClass(SessionPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          getArchive = _props.getArchive,
          match = _props.match;

      getArchive(match.params.id, 0);
      (0, _clips.getClipsByArchive)(match.params.id, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _semanticUiReact.Grid,
        null,
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { width: 16 },
          _react2.default.createElement(_SessionPageHeader2.default, null)
        ),
        _react2.default.createElement(
          _semanticUiReact.Grid.Row,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 7 },
            _react2.default.createElement(_SessionAvailabilityMessage2.default, null),
            _react2.default.createElement(
              _semanticUiReact.Segment,
              null,
              _react2.default.createElement(
                _semanticUiReact.Label,
                { attached: "top", className: "colored-label", size: "big" },
                "Session Player"
              ),
              _react2.default.createElement(_SessionPlayer2.default, { time: this.state.time })
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 9 },
            _react2.default.createElement(_SessionMessage2.default, null),
            _react2.default.createElement(_SessionClipTable2.default, {
              seekTo: this.seekTo,
              handleScroll: this.handleScroll
            })
          )
        )
      );
    }
  }]);

  return SessionPage;
}(_react.Component);

exports.default = {
  component: (0, _reactRedux.connect)(null, { getArchive: _index.getArchive, fetchMoreClipsByArchive: _clips.fetchMoreClipsByArchive })(SessionPage),
  loadData: function loadData(_ref, _ref2) {
    var dispatch = _ref.dispatch;
    var id = _ref2.id;

    return dispatch((0, _index.getArchive)(id, 0)).then(function () {
      return dispatch((0, _clips.getClipsByArchive)(id, 0));
    });
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _semanticUiReact = __webpack_require__(1);

var _languageUtils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    archives: state.archives,
    clips: state.clips
  };
};

var SessionPageHeader = function (_Component) {
  _inherits(SessionPageHeader, _Component);

  function SessionPageHeader() {
    _classCallCheck(this, SessionPageHeader);

    return _possibleConstructorReturn(this, (SessionPageHeader.__proto__ || Object.getPrototypeOf(SessionPageHeader)).apply(this, arguments));
  }

  _createClass(SessionPageHeader, [{
    key: "render",
    value: function render() {
      var archives = this.props.archives;

      return _react2.default.createElement(
        _semanticUiReact.Segment,
        { className: "bordered-segment" },
        archives && archives.items[0] && archives.items[0].archive && _react2.default.createElement(
          _semanticUiReact.Item.Group,
          null,
          _react2.default.createElement(
            _semanticUiReact.Item,
            null,
            _react2.default.createElement(_semanticUiReact.Item.Image, {
              size: "tiny",
              src: archives.items[0].archive.thumbnailURL ? archives.items[0].archive.thumbnailURL.replace("%{width}", "600").replace("%{height}", "600") : "https://cdn.logojoy.com/wp-content/uploads/2018/07/30093609/twitch9-768x591.png"
            }),
            _react2.default.createElement(
              _semanticUiReact.Item.Content,
              null,
              _react2.default.createElement(
                _semanticUiReact.Item.Header,
                null,
                archives.items[0].archive.title
              ),
              _react2.default.createElement(
                _semanticUiReact.Item.Meta,
                null,
                "Duration : ",
                archives.items[0].archive.duration
              ),
              _react2.default.createElement(
                _semanticUiReact.Item.Meta,
                null,
                "Language :",
                " ",
                _react2.default.createElement(_semanticUiReact.Flag, { name: (0, _languageUtils.mapToFlag)(archives.items[0].archive.language) })
              ),
              _react2.default.createElement(
                _semanticUiReact.Item.Meta,
                null,
                "Views : ",
                archives.items[0].archive.viewCount
              ),
              _react2.default.createElement(
                _semanticUiReact.Item.Meta,
                null,
                "Direct Link :",
                " ",
                _react2.default.createElement(
                  "a",
                  {
                    href: archives.items[0].archive.url,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  archives.items[0].archive.url
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SessionPageHeader;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SessionPageHeader);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _format = __webpack_require__(56);

var _format2 = _interopRequireDefault(_format);

var _add_days = __webpack_require__(57);

var _add_days2 = _interopRequireDefault(_add_days);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    archives: state.archives,
    clips: state.clips
  };
};

var SessionAvailabilityMessage = function (_Component) {
  _inherits(SessionAvailabilityMessage, _Component);

  function SessionAvailabilityMessage() {
    _classCallCheck(this, SessionAvailabilityMessage);

    return _possibleConstructorReturn(this, (SessionAvailabilityMessage.__proto__ || Object.getPrototypeOf(SessionAvailabilityMessage)).apply(this, arguments));
  }

  _createClass(SessionAvailabilityMessage, [{
    key: "render",
    value: function render() {
      var archives = this.props.archives;

      return _react2.default.createElement(
        _semanticUiReact.Message,
        { icon: true, warning: true },
        _react2.default.createElement(_semanticUiReact.Icon, { name: "inbox" }),
        archives && archives.items[0] && archives.items[0].archive && _react2.default.createElement(
          _semanticUiReact.Message.Content,
          null,
          _react2.default.createElement(
            _semanticUiReact.Message.Header,
            null,
            "Archive Availability"
          ),
          "This archive was published on",
          " ",
          (0, _format2.default)(archives.items[0].archive.createdAt, "MM/DD/YYYY"),
          ". As Twitch keeps archives for 60 days, it will be available until",
          " ",
          _react2.default.createElement(
            "b",
            null,
            (0, _format2.default)((0, _add_days2.default)(archives.items[0].archive.createdAt, 60), "MM/DD/YYYY")
          )
        )
      );
    }
  }]);

  return SessionAvailabilityMessage;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SessionAvailabilityMessage);

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("date-fns/add_days");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPlayer = __webpack_require__(59);

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _reactRedux = __webpack_require__(2);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    archives: state.archives
  };
};

var SessionPlayer = function (_React$Component) {
  _inherits(SessionPlayer, _React$Component);

  function SessionPlayer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SessionPlayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SessionPlayer.__proto__ || Object.getPrototypeOf(SessionPlayer)).call.apply(_ref, [this].concat(args))), _this), _this.ref = function (player) {
      if (player) {
        player.player.player.playerID = "react-player";
      }
      _this.player = player;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SessionPlayer, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      var archives = this.props.archives;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", { id: "react-player", style: { width: "100%", height: "50vh" } }),
        _react2.default.createElement(
          "div",
          { style: { display: "none" } },
          archives && archives.items && archives.items[0] && archives.items[0].archive && _react2.default.createElement(_reactPlayer2.default, {
            ref: this.ref,
            url: archives.items[0].archive.url,
            playing: true
          })
        )
      );
    }
  }]);

  return SessionPlayer;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SessionPlayer);

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SessionMessage = function (_Component) {
  _inherits(SessionMessage, _Component);

  function SessionMessage() {
    _classCallCheck(this, SessionMessage);

    return _possibleConstructorReturn(this, (SessionMessage.__proto__ || Object.getPrototypeOf(SessionMessage)).apply(this, arguments));
  }

  _createClass(SessionMessage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _semanticUiReact.Message,
        { icon: true, info: true },
        _react2.default.createElement(_semanticUiReact.Icon, { name: "question" }),
        _react2.default.createElement(
          _semanticUiReact.Message.Content,
          null,
          _react2.default.createElement(
            _semanticUiReact.Message.Header,
            null,
            "Did You Know?"
          ),
          "For ",
          _react2.default.createElement(
            "b",
            null,
            "Automatic Clips"
          ),
          ", you can jump directly into the action by clicking on 'Go' ",
          _react2.default.createElement("br", null),
          "This option is available for user clips, but we can not ensure that those clips were captured live."
        )
      );
    }
  }]);

  return SessionMessage;
}(_react.Component);

exports.default = SessionMessage;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactTimeago = __webpack_require__(6);

var _reactTimeago2 = _interopRequireDefault(_reactTimeago);

var _reactRedux = __webpack_require__(2);

var _languageUtils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    archives: state.archives,
    clips: state.clips
  };
};

var SessionClipTable = function (_Component) {
  _inherits(SessionClipTable, _Component);

  function SessionClipTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SessionClipTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SessionClipTable.__proto__ || Object.getPrototypeOf(SessionClipTable)).call.apply(_ref, [this].concat(args))), _this), _this.jumpToSource = function (clip, archive) {
      var timeDifference = (new Date(clip.created_at).getTime() - new Date(archive.publishedAt).getTime()) / 1000;
      var seekTo = _this.props.seekTo;

      seekTo(timeDifference - 40);
    }, _this.handleScroll = function () {
      if (_this.scroller) {
        if (_this.scroller.scrollHeight - _this.scroller.scrollTop === _this.scroller.clientHeight) {
          _this.props.handleScroll();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SessionClipTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          archives = _props.archives,
          clips = _props.clips;


      return _react2.default.createElement(
        _semanticUiReact.Segment,
        null,
        _react2.default.createElement(
          _semanticUiReact.Label,
          { attached: "top", className: "colored-label", size: "big" },
          "Clips"
        ),
        _react2.default.createElement(
          "div",
          {
            style: {
              height: "55vh",
              overflowY: "auto"
            },
            ref: function ref(scroller) {
              _this2.scroller = scroller;
            },
            onScroll: this.handleScroll
          },
          _react2.default.createElement(
            _semanticUiReact.Table,
            { celled: true, padded: true },
            _react2.default.createElement(
              _semanticUiReact.Table.Header,
              null,
              _react2.default.createElement(
                _semanticUiReact.Table.Row,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  { style: { width: "300px" } },
                  "Stream Title"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Game"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Language"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Score"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Created At"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Action"
                )
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Table.Body,
              null,
              clips.items && clips.items.map(function (clip) {
                return _react2.default.createElement(
                  _semanticUiReact.Table.Row,
                  { key: clip.clipId },
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    {
                      className: clip.automatic ? "clip-automatic" : ""
                    },
                    clip.title,
                    " ",
                    _react2.default.createElement("br", null),
                    " by ",
                    _react2.default.createElement(
                      "b",
                      null,
                      clip.creatorName
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Header,
                      { as: "h4", image: true },
                      _react2.default.createElement(_semanticUiReact.Image, {
                        src: clip.game && clip.game.boxArtURL.replace("{width}", "300").replace("{height}", "300"),
                        rounded: true,
                        size: "big"
                      }),
                      _react2.default.createElement(
                        _semanticUiReact.Header.Content,
                        null,
                        _react2.default.createElement(
                          _semanticUiReact.Header.Subheader,
                          null,
                          clip.game && clip.game.name
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(_semanticUiReact.Flag, { name: (0, _languageUtils.mapToFlag)(clip.language) }),
                    clip.language
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Label,
                      null,
                      _react2.default.createElement(_semanticUiReact.Rating, {
                        icon: "star",
                        defaultRating: clip.score,
                        maxRating: 5,
                        disabled: true
                      }),
                      " "
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(_reactTimeago2.default, { date: clip.created_at })
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Button,
                      {
                        icon: true,
                        labelPosition: "left",
                        onClick: function onClick() {
                          _this2.jumpToSource(clip, archives.items[0].archive);
                        }
                      },
                      _react2.default.createElement(_semanticUiReact.Icon, { name: "play" }),
                      "Go"
                    )
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return SessionClipTable;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SessionClipTable);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _GameItem = __webpack_require__(63);

var _GameItem2 = _interopRequireDefault(_GameItem);

var _index = __webpack_require__(22);

var _GameGridFilter = __webpack_require__(64);

var _GameGridFilter2 = _interopRequireDefault(_GameGridFilter);

var _GameActivityFeed = __webpack_require__(65);

var _GameActivityFeed2 = _interopRequireDefault(_GameActivityFeed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamesPage = function (_Component) {
  _inherits(GamesPage, _Component);

  function GamesPage(props) {
    _classCallCheck(this, GamesPage);

    var _this = _possibleConstructorReturn(this, (GamesPage.__proto__ || Object.getPrototypeOf(GamesPage)).call(this, props));

    _this.handleScroll = function () {
      if (_this.scroller) {
        if (_this.scroller.scrollHeight - _this.scroller.scrollTop === _this.scroller.clientHeight) {
          _this.setState(function (prevState) {
            return { pageIndex: prevState.pageIndex + 1 };
          });
          var _fetchMoreGames = _this.props.fetchMoreGames;

          _fetchMoreGames(_this.state.pageIndex, _this.state.searchValue);
        }
      }
    };

    _this.searchValueChanged = function (value) {
      _this.setState({
        pageIndex: 1,
        searchValue: value
      });
      var getGames = _this.props.getGames;

      getGames(0, value);
    };

    _this.state = {
      pageIndex: 1,
      searchValue: ""
    };
    return _this;
  }

  _createClass(GamesPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var getGames = this.props.getGames;

      getGames(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var games = this.props.games;

      return _react2.default.createElement(
        _semanticUiReact.Grid,
        null,
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { width: 10 },
          _react2.default.createElement(
            _semanticUiReact.Segment,
            { className: "streamer-segment", loading: games.fetching },
            _react2.default.createElement(
              _semanticUiReact.Label,
              { attached: "top", size: "big", className: "colored-label" },
              _react2.default.createElement(_semanticUiReact.Icon, { name: "user" }),
              "Games"
            ),
            _react2.default.createElement(
              "div",
              { className: "segment-grid-filter" },
              _react2.default.createElement(_GameGridFilter2.default, { searchValueChanged: this.searchValueChanged }),
              _react2.default.createElement(
                _semanticUiReact.Divider,
                { horizontal: true },
                "Results"
              ),
              _react2.default.createElement(
                "div",
                {
                  ref: function ref(scroller) {
                    _this2.scroller = scroller;
                  },
                  onScroll: this.handleScroll,
                  style: {
                    height: "75vh",
                    overflowY: "auto",
                    overflowX: "hidden",
                    paddingRight: "10px"
                  }
                },
                _react2.default.createElement(
                  _semanticUiReact.Grid,
                  {
                    stackable: true,
                    columns: 4,
                    className: "streamer-grid animated fadeIn"
                  },
                  _react2.default.createElement(
                    _semanticUiReact.Grid.Row,
                    null,
                    games.items && games.items.map(function (game, index) {
                      return game && _react2.default.createElement(
                        _semanticUiReact.Grid.Column,
                        { width: 4, key: index },
                        _react2.default.createElement(_GameItem2.default, {
                          key: index,
                          game: game,
                          numberOfClips: game.numberOfClips
                        })
                      );
                    })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Grid.Column,
          { width: 6 },
          _react2.default.createElement(_GameActivityFeed2.default, null)
        )
      );
    }
  }]);

  return GamesPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var games = _ref.games;

  return { games: games };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { getGames: _index.getGames, fetchMoreGames: _index.fetchMoreGames })(GamesPage),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;

    return dispatch((0, _index.getGames)(0));
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameItem = function GameItem(_ref) {
  var game = _ref.game,
      numberOfClips = _ref.numberOfClips;

  return _react2.default.createElement(
    _semanticUiReact.Segment.Group,
    { className: "streamer-item" },
    _react2.default.createElement(
      _semanticUiReact.Segment,
      null,
      _react2.default.createElement(
        _semanticUiReact.Label,
        { attached: "top", className: "inverted-color-label" },
        game.name
      ),
      _react2.default.createElement(
        _semanticUiReact.Item.Group,
        null,
        _react2.default.createElement(
          _semanticUiReact.Item,
          null,
          _react2.default.createElement(_semanticUiReact.Item.Image, {
            size: "tiny",
            src: game.boxArtURL.replace("{width}", "285").replace("{height}", "380")
          }),
          _react2.default.createElement(
            _semanticUiReact.Item.Content,
            null,
            _react2.default.createElement(
              _semanticUiReact.Item.Extra,
              null,
              _react2.default.createElement(_semanticUiReact.Icon, { name: "video" }),
              " ",
              numberOfClips,
              " clips"
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Segment,
      { textAlign: "center" },
      _react2.default.createElement(
        _semanticUiReact.Button,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: { pathname: "/game/" + game.gameId } },
          "Visit"
        )
      )
    )
  );
};

exports.default = GameItem;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameGridFilter = function (_Component) {
  _inherits(GameGridFilter, _Component);

  function GameGridFilter(props) {
    _classCallCheck(this, GameGridFilter);

    var _this = _possibleConstructorReturn(this, (GameGridFilter.__proto__ || Object.getPrototypeOf(GameGridFilter)).call(this, props));

    _this.onSearchChange = function (value) {
      if (_this.timeout) clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.props.searchValueChanged(value);
      }, 1000);
    };

    _this.timeout = 0;
    return _this;
  }

  _createClass(GameGridFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _semanticUiReact.Menu,
        { fluid: true, borderless: true, size: "large" },
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          { header: true },
          _react2.default.createElement(_semanticUiReact.Icon, { name: "filter" }),
          "Filters"
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          null,
          _react2.default.createElement(_semanticUiReact.Input, {
            className: "icon",
            icon: "gamepad",
            iconPosition: "left",
            placeholder: "Search A Game",
            size: "small",
            onChange: function onChange(e, _ref) {
              var value = _ref.value;
              return _this2.onSearchChange(value);
            }
          })
        )
      );
    }
  }]);

  return GameGridFilter;
}(_react.Component);

exports.default = GameGridFilter;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _reactTimeago = __webpack_require__(6);

var _reactTimeago2 = _interopRequireDefault(_reactTimeago);

var _languageUtils = __webpack_require__(4);

var _index = __webpack_require__(8);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var image = "https://image.flaticon.com/icons/svg/843/843273.svg";

var GameActivityFeed = function (_Component) {
  _inherits(GameActivityFeed, _Component);

  function GameActivityFeed(props) {
    _classCallCheck(this, GameActivityFeed);

    var _this = _possibleConstructorReturn(this, (GameActivityFeed.__proto__ || Object.getPrototypeOf(GameActivityFeed)).call(this, props));

    _this.handleScroll = function () {
      if (_this.scroller) {
        if (_this.scroller.scrollHeight - _this.scroller.scrollTop === _this.scroller.clientHeight) {
          _this.setState(function (prevState) {
            return { pageIndex: prevState.pageIndex + 1 };
          });
          var _fetchMoreActivity = _this.props.fetchMoreActivity;

          _fetchMoreActivity(_this.state.pageIndex);
        }
      }
    };

    _this.state = {
      pageIndex: 1
    };
    return _this;
  }

  _createClass(GameActivityFeed, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var getActivity = this.props.getActivity;

      getActivity(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activity = this.props.activity;

      return _react2.default.createElement(
        _semanticUiReact.Segment,
        { loading: activity.fetching, className: "activity-segment" },
        _react2.default.createElement(
          _semanticUiReact.Label,
          { attached: "top", size: "big", className: "colored-label" },
          _react2.default.createElement(_semanticUiReact.Icon, { loading: true, name: "certificate" }),
          "Activity Feed"
        ),
        _react2.default.createElement(
          _semanticUiReact.Message,
          { warning: true },
          "Those clips are generated automatically by ",
          _react2.default.createElement(
            "b",
            null,
            "AutoClipper (\u03B2)"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            ref: function ref(scroller) {
              _this2.scroller = scroller;
            },
            onScroll: this.handleScroll,
            style: {
              height: "85vh",
              overflowY: "auto"
            },
            className: "activity-feed"
          },
          _react2.default.createElement(
            _semanticUiReact.Feed,
            { style: { marginTop: "20px", padding: "10px" } },
            activity && activity.items && activity.items.map(function (clip) {
              return _react2.default.createElement(
                _semanticUiReact.Feed.Event,
                {
                  onClick: function onClick() {
                    return _this2.props.history.push("/streamer/" + clip.channelId.streamerId);
                  }
                },
                _react2.default.createElement(_semanticUiReact.Feed.Label, { image: image }),
                _react2.default.createElement(
                  _semanticUiReact.Feed.Content,
                  null,
                  _react2.default.createElement(_semanticUiReact.Feed.Date, { content: _react2.default.createElement(_reactTimeago2.default, { date: clip.created_at }) }),
                  _react2.default.createElement(_semanticUiReact.Feed.Summary, {
                    content: "AutoClipper created a new clip for " + (clip.gameId[0] ? clip.gameId[0].name : "Unknown")
                  }),
                  clip.gameId[0] && _react2.default.createElement(_semanticUiReact.Feed.Extra, {
                    images: [clip.gameId[0].boxArtURL.replace("{width}", "285").replace("{height}", "380")]
                  }),
                  _react2.default.createElement(
                    _semanticUiReact.Feed.Extra,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Label,
                      null,
                      _react2.default.createElement(_semanticUiReact.Flag, { name: (0, _languageUtils.mapToFlag)(clip.language) }),
                      clip.language
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Label,
                      null,
                      _react2.default.createElement(_semanticUiReact.Rating, {
                        icon: "star",
                        defaultRating: clip.score,
                        maxRating: 5,
                        disabled: true
                      })
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Feed.Meta,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Feed.Like,
                      null,
                      _react2.default.createElement(_semanticUiReact.Icon, { name: "user" }),
                      clip.channelId && clip.channelId.displayName
                    )
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return GameActivityFeed;
}(_react.Component);

function mapStateToProps(_ref) {
  var activity = _ref.activity;

  return { activity: activity };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { getActivity: _index.getActivity, fetchMoreActivity: _index.fetchMoreActivity })(GameActivityFeed));

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _clips = __webpack_require__(10);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _GamePageHeader = __webpack_require__(67);

var _GamePageHeader2 = _interopRequireDefault(_GamePageHeader);

var _GameClipTable = __webpack_require__(68);

var _GameClipTable2 = _interopRequireDefault(_GameClipTable);

var _StreamerVideoArchive = __webpack_require__(21);

var _StreamerVideoArchive2 = _interopRequireDefault(_StreamerVideoArchive);

var _VideoPlayer = __webpack_require__(12);

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamesDetailPage = function (_Component) {
  _inherits(GamesDetailPage, _Component);

  function GamesDetailPage(props) {
    _classCallCheck(this, GamesDetailPage);

    var _this = _possibleConstructorReturn(this, (GamesDetailPage.__proto__ || Object.getPrototypeOf(GamesDetailPage)).call(this, props));

    _this.setClip = function (clip) {
      _this.setState({
        active: true,
        url: clip.embedClipURL,
        activeClip: clip,
        modalOpen: true
      });
    };

    _this.handleScroll = function () {
      _this.setState(function (prevState) {
        return {
          clipPageIndex: prevState.clipPageIndex + 1
        };
      });
      var _this$props = _this.props,
          fetchMoreClipsByGame = _this$props.fetchMoreClipsByGame,
          match = _this$props.match,
          ui = _this$props.ui;

      fetchMoreClipsByGame(match.params.id, _this.state.clipPageIndex, _this.state.streamerSearchValue, _this.state.titleSearchValue, ui.automaticCheckbox);
    };

    _this.streamerSearchValueChanged = function (value) {
      _this.setState({
        clipPageIndex: 1,
        streamerSearchValue: value
      });
      var _this$props2 = _this.props,
          match = _this$props2.match,
          getClipsByGame = _this$props2.getClipsByGame,
          ui = _this$props2.ui;

      getClipsByGame(match.params.id, 0, value, _this.state.titleSearchValue, ui.automaticCheckbox);
    };

    _this.titleSearchValueChanged = function (value) {
      _this.setState({
        clipPageIndex: 1,
        titleSearchValue: value
      });
      var _this$props3 = _this.props,
          match = _this$props3.match,
          getClipsByGame = _this$props3.getClipsByGame,
          ui = _this$props3.ui;

      getClipsByGame(match.params.id, 0, _this.state.streamerSearchValue, value, ui.automaticCheckbox);
    };

    _this.checkBoxChanged = function () {
      var _this$props4 = _this.props,
          match = _this$props4.match,
          getClipsByGame = _this$props4.getClipsByGame,
          ui = _this$props4.ui;

      getClipsByGame(match.params.id, 0, _this.state.streamerSearchValue, _this.state.titleSearchValue, !ui.automaticCheckbox);
    };

    _this.close = function () {
      return _this.setState({ modalOpen: false });
    };

    _this.handleTabChange = function (e, _ref) {
      var activeIndex = _ref.activeIndex;
      return _this.setState({ activeIndex: activeIndex });
    };

    _this.state = {
      active: false,
      url: "",
      clipPageIndex: 1,
      streamerSearchValue: "",
      titleSearchValue: "",
      activeIndex: 0,
      modalOpen: false
    };
    return _this;
  }

  _createClass(GamesDetailPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          getClipsByGame = _props.getClipsByGame;

      getClipsByGame(match.params.id, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var clips = this.props.clips;
      var activeIndex = this.state.activeIndex;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _semanticUiReact.Grid,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 4 },
            _react2.default.createElement(_GamePageHeader2.default, { numberOfClips: clips.items && clips.items.length })
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Grid,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 16 },
            _react2.default.createElement(_semanticUiReact.Tab, {
              activeIndex: activeIndex,
              onTabChange: this.handleTabChange,
              panes: [{
                menuItem: {
                  key: "clips",
                  icon: "rocket",
                  content: "Clips"
                },
                render: function render() {
                  return _react2.default.createElement(
                    "div",
                    null,
                    clips && clips.items && _react2.default.createElement(_GameClipTable2.default, {
                      fetching: clips.fetching,
                      clips: clips.items,
                      setClip: _this2.setClip,
                      handleScroll: _this2.handleScroll,
                      streamerSearchValueChanged: _this2.streamerSearchValueChanged,
                      titleSearchValueChanged: _this2.titleSearchValueChanged,
                      checkBoxChanged: _this2.checkBoxChanged
                    })
                  );
                }
              }]
            })
          ),
          _react2.default.createElement(
            _semanticUiReact.Modal,
            {
              dimmer: "blurring",
              closeOnEscape: true,
              closeOnDimmerClick: true,
              open: this.state.modalOpen,
              size: "small"
            },
            _react2.default.createElement(
              _semanticUiReact.Modal.Content,
              null,
              _react2.default.createElement(_VideoPlayer2.default, { active: this.state.active, url: this.state.url }),
              this.state.activeClip && this.state.activeClip.archive && this.state.activeClip.archive[0] && _react2.default.createElement(_StreamerVideoArchive2.default, {
                archive: this.state.activeClip.archive[0],
                creatorName: this.state.activeClip.creatorName,
                automatic: this.state.activeClip.automatic
              })
            ),
            _react2.default.createElement(
              _semanticUiReact.Modal.Actions,
              null,
              _react2.default.createElement(
                _semanticUiReact.Button,
                { color: "grey", onClick: this.close },
                "Close"
              )
            )
          )
        )
      );
    }
  }]);

  return GamesDetailPage;
}(_react.Component);

function mapStateToProps(_ref2) {
  var clips = _ref2.clips,
      ui = _ref2.ui;

  return { clips: clips, ui: ui };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { getClipsByGame: _clips.getClipsByGame, fetchMoreClipsByGame: _clips.fetchMoreClipsByGame })(GamesDetailPage),
  loadData: function loadData(_ref3, _ref4) {
    var dispatch = _ref3.dispatch;
    var id = _ref4.id;

    return dispatch((0, _clips.getClipsByGame)(id, 0));
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    game: state.ui.selectedGame
  };
};

var GamePageHeader = function GamePageHeader(_ref) {
  var game = _ref.game,
      numberOfClips = _ref.numberOfClips;

  return _react2.default.createElement(
    _semanticUiReact.Segment,
    { className: "bordered-segment" },
    game && _react2.default.createElement(
      _semanticUiReact.Item.Group,
      null,
      _react2.default.createElement(
        _semanticUiReact.Item,
        null,
        _react2.default.createElement(_semanticUiReact.Item.Image, {
          size: "tiny",
          src: game.boxArtURL.replace("{width}", "285").replace("{height}", "380")
        }),
        _react2.default.createElement(
          _semanticUiReact.Item.Content,
          null,
          _react2.default.createElement(
            _semanticUiReact.Item.Header,
            null,
            game.name
          ),
          _react2.default.createElement(
            _semanticUiReact.Item.Meta,
            null,
            numberOfClips,
            " clips"
          )
        )
      )
    )
  );
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(GamePageHeader);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactTimeago = __webpack_require__(6);

var _reactTimeago2 = _interopRequireDefault(_reactTimeago);

var _languageUtils = __webpack_require__(4);

var _GameClipFilter = __webpack_require__(69);

var _GameClipFilter2 = _interopRequireDefault(_GameClipFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameClipTable = function (_Component) {
  _inherits(GameClipTable, _Component);

  function GameClipTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GameClipTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GameClipTable.__proto__ || Object.getPrototypeOf(GameClipTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleScroll = function () {
      if (_this.scroller) {
        if (_this.scroller.scrollHeight - _this.scroller.scrollTop === _this.scroller.clientHeight) {
          _this.props.handleScroll();
        }
      }
    }, _this.mapToScore = function (score) {
      if (score < 2) {
        return _react2.default.createElement(
          _semanticUiReact.Label,
          { inverted: true },
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning green" }),
          "Moderately Epic"
        );
      } else if (score > 2 && score < 4) {
        return _react2.default.createElement(
          _semanticUiReact.Label,
          { inverted: true },
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning yellow" }),
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning yellow" }),
          "Very Epic"
        );
      } else {
        return _react2.default.createElement(
          _semanticUiReact.Label,
          { inverted: true },
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning red" }),
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning red" }),
          _react2.default.createElement(_semanticUiReact.Icon, { name: "lightning red" }),
          "OMG!"
        );
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GameClipTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          clips = _props.clips,
          setClip = _props.setClip,
          fetching = _props.fetching,
          checkBoxChanged = _props.checkBoxChanged;

      return _react2.default.createElement(
        _semanticUiReact.Segment,
        { loading: fetching },
        _react2.default.createElement(
          _semanticUiReact.Label,
          { attached: "top", size: "big", className: "colored-label" },
          "Clips"
        ),
        _react2.default.createElement(_GameClipFilter2.default, {
          streamerSearchValueChanged: this.props.streamerSearchValueChanged,
          titleSearchValueChanged: this.props.titleSearchValueChanged,
          checkBoxChanged: this.props.checkBoxChanged
        }),
        _react2.default.createElement(
          _semanticUiReact.Divider,
          { horizontal: true },
          "Results (",
          clips && clips.length,
          ")"
        ),
        _react2.default.createElement(
          "div",
          {
            style: {
              height: "50vh",
              overflowY: "auto"
            },
            ref: function ref(scroller) {
              _this2.scroller = scroller;
            },
            onScroll: this.handleScroll
          },
          _react2.default.createElement(
            _semanticUiReact.Table,
            { celled: true, padded: true, fixed: true, size: "small" },
            _react2.default.createElement(
              _semanticUiReact.Table.Header,
              null,
              _react2.default.createElement(
                _semanticUiReact.Table.Row,
                null,
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  { style: { width: "300px" } },
                  "Stream Title"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Streamer"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Language"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Score"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Views"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Created At"
                ),
                _react2.default.createElement(
                  _semanticUiReact.Table.HeaderCell,
                  null,
                  "Action"
                )
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Table.Body,
              null,
              clips && clips.map(function (clip) {
                return _react2.default.createElement(
                  _semanticUiReact.Table.Row,
                  null,
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    clip.title,
                    " ",
                    _react2.default.createElement("br", null),
                    " by ",
                    _react2.default.createElement(
                      "b",
                      null,
                      clip.creatorName
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Header,
                      { as: "h4", image: true },
                      _react2.default.createElement(_semanticUiReact.Image, {
                        src: clip.streamer && clip.streamer.profileImageURL.replace("{width}", "300").replace("{height}", "300"),
                        rounded: true,
                        size: "big"
                      }),
                      _react2.default.createElement(
                        _semanticUiReact.Header.Content,
                        null,
                        _react2.default.createElement(
                          _semanticUiReact.Header.Subheader,
                          null,
                          clip.streamer && clip.streamer.displayName
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(_semanticUiReact.Flag, { name: (0, _languageUtils.mapToFlag)(clip.language) }),
                    clip.language
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Label,
                      { className: "clip-rating" },
                      _react2.default.createElement(_semanticUiReact.Rating, {
                        icon: "star",
                        defaultRating: clip.score,
                        maxRating: 5,
                        disabled: true
                      }),
                      " "
                    ),
                    " ",
                    _react2.default.createElement("br", null),
                    _this2.mapToScore(clip.score)
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Label,
                      { size: "small" },
                      _react2.default.createElement(_semanticUiReact.Icon, { name: "eye" }),
                      clip.viewCount
                    )
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(_reactTimeago2.default, { date: clip.created_at })
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Button,
                      {
                        size: "small",
                        icon: true,
                        labelPosition: "left",
                        onClick: function onClick() {
                          setClip(clip);
                        }
                      },
                      _react2.default.createElement(_semanticUiReact.Icon, { name: "play" }),
                      "Play"
                    )
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return GameClipTable;
}(_react.Component);

exports.default = GameClipTable;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setAutomaticCheckbox: function setAutomaticCheckbox(value) {
      return dispatch((0, _index.setAutomaticCheckbox)(value));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    ui: state.ui
  };
};

var GameClipFilter = function (_Component) {
  _inherits(GameClipFilter, _Component);

  function GameClipFilter(props) {
    _classCallCheck(this, GameClipFilter);

    var _this = _possibleConstructorReturn(this, (GameClipFilter.__proto__ || Object.getPrototypeOf(GameClipFilter)).call(this, props));

    _this.onCheckBoxChanged = function () {
      var _this$props = _this.props,
          setAutomaticCheckbox = _this$props.setAutomaticCheckbox,
          ui = _this$props.ui;

      if (ui.automaticCheckbox) {
        setAutomaticCheckbox(false);
      } else {
        setAutomaticCheckbox(true);
      }
      _this.props.checkBoxChanged();
    };

    _this.onStreamerSearchChanged = function (value) {
      if (_this.timeout) clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.props.streamerSearchValueChanged(value);
      }, 1000);
    };

    _this.onTitleSearchChanged = function (value) {
      if (_this.timeout) clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.props.titleSearchValueChanged(value);
      }, 1000);
    };

    _this.timeout = 0;
    return _this;
  }

  _createClass(GameClipFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var ui = this.props.ui;

      return _react2.default.createElement(
        _semanticUiReact.Menu,
        { fluid: true, borderless: true, size: "large" },
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          { header: true, active: true },
          _react2.default.createElement(_semanticUiReact.Icon, { name: "filter" }),
          "Filters"
        ),
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          null,
          _react2.default.createElement(_semanticUiReact.Input, {
            className: "icon",
            icon: "film",
            iconPosition: "left",
            placeholder: "Search A Clip",
            size: "medium",
            style: { marginRight: "10px" },
            onChange: function onChange(e, _ref) {
              var value = _ref.value;
              return _this2.onTitleSearchChanged(value);
            }
          }),
          _react2.default.createElement(_semanticUiReact.Input, {
            className: "icon",
            icon: "user",
            iconPosition: "left",
            placeholder: "Search A Streamer",
            size: "medium",
            onChange: function onChange(e, _ref2) {
              var value = _ref2.value;
              return _this2.onStreamerSearchChanged(value);
            }
          })
        )
      );
    }
  }]);

  return GameClipFilter;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GameClipFilter);

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(72);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(11);

var _routes = __webpack_require__(13);

var _routes2 = _interopRequireDefault(_routes);

var _serializeJavascript = __webpack_require__(73);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return "\n    <html>\n        <head>\n          " + helmet.title.toString() + "\n          " + helmet.meta.toString() + "\n          <link rel=\"stylesheet\" href=\"//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css\">\n          <link rel=\"stylesheet\" href=\"/assets/style.css\">\n        </head>\n        <body>\n            <div id=\"root\">" + content + "</div>\n            <script>window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "</script>\n            <script src=\"/bundle.js\"></script>\n        </body>\n    </html>\n  ";
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(24);

var _reduxThunk = __webpack_require__(75);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(76);

var _index2 = _interopRequireDefault(_index);

var _axios = __webpack_require__(81);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: "http://localhost:3001",
    headers: { cookie: req.get("cookie") || "" }
  });
  var store = (0, _redux.createStore)(_index2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
  return store;
};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(24);

var _usersReducer = __webpack_require__(77);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(78);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(79);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

var _index = __webpack_require__(19);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(8);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(10);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(80);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(9);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(22);

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default,
  auth: _authReducer2.default,
  admins: _adminsReducer2.default,
  streamers: _index2.default,
  activity: _index4.default,
  clips: _index6.default,
  ui: _index8.default,
  archives: _index10.default,
  games: _index12.default
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

var _index = __webpack_require__(5);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAutomaticCheckboxValue = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(7);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var initialState = { automaticCheckbox: false, time: "week" };

var ui = function ui() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _index.SET_SELECTED_STREAMER:
      return _extends({}, state, {
        selectedStreamer: action.payload
      });
    case _index.SET_SELECTED_GAME:
      return _extends({}, state, {
        selectedGame: action.payload
      });
    case _index.SET_AUTOMATIC_CHECKBOX:
      return _extends({}, state, {
        automaticCheckbox: action.payload
      });
    case _index.SET_TIME_FILTER:
      return _extends({}, state, {
        time: action.payload
      });
    default:
      return state;
  }
};

var setAutomaticCheckboxValue = exports.setAutomaticCheckboxValue = function setAutomaticCheckboxValue(value) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch((0, _index.setAutomaticCheckbox)(value));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.default = ui;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StreamersPageHelmet = function (_Component) {
    _inherits(StreamersPageHelmet, _Component);

    function StreamersPageHelmet() {
        _classCallCheck(this, StreamersPageHelmet);

        return _possibleConstructorReturn(this, (StreamersPageHelmet.__proto__ || Object.getPrototypeOf(StreamersPageHelmet)).apply(this, arguments));
    }

    _createClass(StreamersPageHelmet, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    "title",
                    null,
                    "Stream Highlights - Streamers Clips & Highlights"
                ),
                _react2.default.createElement("meta", { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" }),
                _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
                _react2.default.createElement("meta", { name: "keywords", content: "twitch, clips, highlights, league of legends, lol, fortnite, videos" }),
                _react2.default.createElement("meta", { property: "og:title", content: "stream highlights" }),
                _react2.default.createElement("meta", { property: "description", content: "Streams Highlights gathers the best clips and highlights from Twitch. We provide unique clips for League of Legends, Fortnite, Counter-Strike and many more." })
            );
        }
    }]);

    return StreamersPageHelmet;
}(_react.Component);

exports.default = StreamersPageHelmet;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StreamerDetailPageHelmet = function (_Component) {
    _inherits(StreamerDetailPageHelmet, _Component);

    function StreamerDetailPageHelmet() {
        _classCallCheck(this, StreamerDetailPageHelmet);

        return _possibleConstructorReturn(this, (StreamerDetailPageHelmet.__proto__ || Object.getPrototypeOf(StreamerDetailPageHelmet)).apply(this, arguments));
    }

    _createClass(StreamerDetailPageHelmet, [{
        key: "render",
        value: function render() {
            var streamer = this.props.streamer;

            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    "title",
                    null,
                    "Stream Highlights - Best Clips for " + streamer
                ),
                _react2.default.createElement("meta", { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" }),
                _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
                _react2.default.createElement("meta", { name: "keywords", content: "twitch, clips, highlights, league of legends, lol, fortnite, videos, " + streamer + " " }),
                _react2.default.createElement("meta", { property: "og:title", content: "stream highlights" }),
                _react2.default.createElement("meta", { property: "description", content: "Streams Highlights gathers the best clips and highlights from Twitch. Find the best clips and highlights for " + streamer + " now!" })
            );
        }
    }]);

    return StreamerDetailPageHelmet;
}(_react.Component);

exports.default = StreamerDetailPageHelmet;

/***/ })
/******/ ]);
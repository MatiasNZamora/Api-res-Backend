"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config.js"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Rutas

var app = (0, _express["default"])();

// Settings 
app.set('port', _config["default"].port);

// middleware
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_products["default"]);
var _default = app;
exports["default"] = _default;
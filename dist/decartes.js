(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("decartes", [], factory);
	else if(typeof exports === 'object')
		exports["decartes"] = factory();
	else
		root["decartes"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decartes.ts":
/*!*************************!*\
  !*** ./src/decartes.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Circle = exports.Rectangle = exports.Polygon = exports.Polyline = exports.LineSegment = exports.DrawObject = exports.ShapeMaterial = exports.LineMaterial = exports.CircleGeometry = exports.RectangleGeometry = exports.PolygonGeometry = exports.PolylineGeometry = exports.LineSegmentGeometry = exports.Scene = exports.Camera = exports.Color = exports.Vector = void 0;
var Vector_1 = __importDefault(__webpack_require__(/*! ./lib/Vector */ "./src/lib/Vector.ts"));
exports.Vector = Vector_1["default"];
var Color_1 = __importDefault(__webpack_require__(/*! ./lib/Color */ "./src/lib/Color.ts"));
exports.Color = Color_1["default"];
var Camera_1 = __importDefault(__webpack_require__(/*! ./lib/Camera */ "./src/lib/Camera.ts"));
exports.Camera = Camera_1["default"];
var Scene_1 = __importDefault(__webpack_require__(/*! ./lib/Scene */ "./src/lib/Scene.ts"));
exports.Scene = Scene_1["default"];
var Geometries_1 = __webpack_require__(/*! ./lib/Geometries */ "./src/lib/Geometries.ts");
Object.defineProperty(exports, "LineSegmentGeometry", ({
  enumerable: true,
  get: function get() {
    return Geometries_1.LineSegmentGeometry;
  }
}));
Object.defineProperty(exports, "PolylineGeometry", ({
  enumerable: true,
  get: function get() {
    return Geometries_1.PolylineGeometry;
  }
}));
Object.defineProperty(exports, "PolygonGeometry", ({
  enumerable: true,
  get: function get() {
    return Geometries_1.PolygonGeometry;
  }
}));
Object.defineProperty(exports, "RectangleGeometry", ({
  enumerable: true,
  get: function get() {
    return Geometries_1.RectangleGeometry;
  }
}));
Object.defineProperty(exports, "CircleGeometry", ({
  enumerable: true,
  get: function get() {
    return Geometries_1.CircleGeometry;
  }
}));
var Materials_1 = __webpack_require__(/*! ./lib/Materials */ "./src/lib/Materials.ts");
Object.defineProperty(exports, "LineMaterial", ({
  enumerable: true,
  get: function get() {
    return Materials_1.LineMaterial;
  }
}));
Object.defineProperty(exports, "ShapeMaterial", ({
  enumerable: true,
  get: function get() {
    return Materials_1.ShapeMaterial;
  }
}));
var DrawObjects_1 = __webpack_require__(/*! ./lib/DrawObjects */ "./src/lib/DrawObjects.ts");
Object.defineProperty(exports, "LineSegment", ({
  enumerable: true,
  get: function get() {
    return DrawObjects_1.LineSegment;
  }
}));
Object.defineProperty(exports, "DrawObject", ({
  enumerable: true,
  get: function get() {
    return DrawObjects_1.DrawObject;
  }
}));
Object.defineProperty(exports, "Polyline", ({
  enumerable: true,
  get: function get() {
    return DrawObjects_1.Polyline;
  }
}));
Object.defineProperty(exports, "Polygon", ({
  enumerable: true,
  get: function get() {
    return DrawObjects_1.Polygon;
  }
}));
Object.defineProperty(exports, "Rectangle", ({
  enumerable: true,
  get: function get() {
    return DrawObjects_1.Rectangle;
  }
}));
Object.defineProperty(exports, "Circle", ({
  enumerable: true,
  get: function get() {
    return DrawObjects_1.Circle;
  }
}));
exports["default"] = {
  Vector: Vector_1["default"],
  Color: Color_1["default"],
  Camera: Camera_1["default"],
  Scene: Scene_1["default"],
  LineSegmentGeometry: Geometries_1.LineSegmentGeometry,
  PolylineGeometry: Geometries_1.PolylineGeometry,
  PolygonGeometry: Geometries_1.PolygonGeometry,
  RectangleGeometry: Geometries_1.RectangleGeometry,
  CircleGeometry: Geometries_1.CircleGeometry,
  LineMaterial: Materials_1.LineMaterial,
  ShapeMaterial: Materials_1.ShapeMaterial,
  DrawObject: DrawObjects_1.DrawObject,
  LineSegment: DrawObjects_1.LineSegment,
  Polyline: DrawObjects_1.Polyline,
  Polygon: DrawObjects_1.Polygon,
  Rectangle: DrawObjects_1.Rectangle,
  Circle: DrawObjects_1.Circle
};

/***/ }),

/***/ "./src/lib/Camera.ts":
/*!***************************!*\
  !*** ./src/lib/Camera.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Vector_1 = __importDefault(__webpack_require__(/*! ./Vector */ "./src/lib/Vector.ts"));
var Camera = /*#__PURE__*/function () {
  function Camera() {
    _classCallCheck(this, Camera);
    _defineProperty(this, "default", {
      center: [0, 0],
      scale: 1,
      screen: [100, 100]
    });
    _defineProperty(this, "center", void 0);
    _defineProperty(this, "scale", void 0);
    _defineProperty(this, "screen", void 0);
    this.center = new Vector_1["default"](this["default"].center);
    this.screen = new Vector_1["default"](this["default"].screen);
    this.scale = this["default"].scale;
  }
  _createClass(Camera, [{
    key: "drawCenter",
    get: function get() {
      return this.center.times(this.drawScale).sub(this.screen.times(0.5));
    }
  }, {
    key: "drawScale",
    get: function get() {
      return this.scale * Math.min(this.screen.x, this.screen.y) / 2;
    }
  }, {
    key: "loc",
    value: function loc(pointer) {
      pointer = new Vector_1["default"](pointer);
      return pointer.plus(this.drawCenter).times(1 / this.drawScale);
    }
  }, {
    key: "pointer",
    value: function pointer(loc) {
      loc = new Vector_1["default"](loc);
      return loc.times(this.drawScale).minus(this.drawCenter);
    }
  }, {
    key: "wheel",
    value: function wheel(cursor, factor) {
      var fixed = this.loc(cursor);
      this.center.mul(factor).sub(fixed.times(factor - 1));
      this.scale /= factor;
    }
  }, {
    key: "move",
    value: function move(movement) {
      movement = new Vector_1["default"](movement);
      this.center.sub(movement.times(1 / this.drawScale));
    }
  }]);
  return Camera;
}();
exports["default"] = Camera;

/***/ }),

/***/ "./src/lib/Color.ts":
/*!**************************!*\
  !*** ./src/lib/Color.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Color = /*#__PURE__*/function () {
  function Color(data) {
    _classCallCheck(this, Color);
    _defineProperty(this, "r", 0);
    _defineProperty(this, "g", 0);
    _defineProperty(this, "b", 0);
    if (Color.isColor(data)) {
      this.set(data.r, data.g, data.b);
    }
    if (typeof data === 'string') {
      this.hex = data;
    }
    if (Color.isTriple(data)) {
      this.rgb = data;
    }
  }
  _createClass(Color, [{
    key: "set",
    value: function set(r, g, b) {
      var to_color_value = function to_color_value(x) {
        return x < 0 ? 0 : x > 255 ? 255 : Math.round(x);
      };
      this.r = to_color_value(r);
      this.g = to_color_value(g);
      this.b = to_color_value(b);
      return this;
    }
  }, {
    key: "rgb",
    get: function get() {
      return [this.r, this.g, this.b];
    },
    set: function set(data) {
      this.set.apply(this, _toConsumableArray(data));
    }
  }, {
    key: "hex",
    get: function get() {
      return '#' + this.rgb.map(function (x) {
        return x.toString(16).padStart(2, '0');
      }).join('');
    },
    set: function set(data) {
      var hex = data in _colorKeywords ? _colorKeywords[data] : data;
      var hexReg = hex.replace(/^#([a-f\d])([a-f\d])([a-f\d])$/i, function (_, r, g, b) {
        return '#' + r + r + g + g + b + b;
      }).substring(1).match(/.{2}/g);
      var rgb = hexReg === null ? [0, 0, 0] : hexReg.map(function (x) {
        return parseInt(x, 16);
      });
      this.set(rgb[0], rgb[1], rgb[2]);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Color(this);
    }
  }, {
    key: "mix",
    value: function mix(other) {
      var proportion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
      var mix_channel = function mix_channel(a, b) {
        return a * (1 - proportion) + b * proportion;
      };
      var c = [mix_channel(this.r, other.r), mix_channel(this.g, other.g), mix_channel(this.b, other.b)];
      return new Color(c);
    }
  }], [{
    key: "isColor",
    value: function isColor(obj) {
      return obj instanceof Color;
    }
  }, {
    key: "isTriple",
    value: function isTriple(obj) {
      return Array.isArray(obj) && obj.length == 3;
    }
  }]);
  return Color;
}();
exports["default"] = Color;
var _colorKeywords = {
  'aliceblue': "#F0F8FF",
  'antiquewhite': "#FAEBD7",
  'aqua': "#00FFFF",
  'aquamarine': "#7FFFD4",
  'azure': "#F0FFFF",
  'beige': "#F5F5DC",
  'bisque': "#FFE4C4",
  'black': "#000000",
  'blanchedalmond': "#FFEBCD",
  'blue': "#0000FF",
  'blueviolet': "#8A2BE2",
  'brown': "#A52A2A",
  'burlywood': "#DEB887",
  'cadetblue': "#5F9EA0",
  'chartreuse': "#7FFF00",
  'chocolate': "#D2691E",
  'coral': "#FF7F50",
  'cornflowerblue': "#6495ED",
  'cornsilk': "#FFF8DC",
  'crimson': "#DC143C",
  'cyan': "#00FFFF",
  'darkblue': "#00008B",
  'darkcyan': "#008B8B",
  'darkgoldenrod': "#B8860B",
  'darkgray': "#A9A9A9",
  'darkgreen': "#006400",
  'darkgrey': "#A9A9A9",
  'darkkhaki': "#BDB76B",
  'darkmagenta': "#8B008B",
  'darkolivegreen': "#556B2F",
  'darkorange': "#FF8C00",
  'darkorchid': "#9932CC",
  'darkred': "#8B0000",
  'darksalmon': "#E9967A",
  'darkseagreen': "#8FBC8F",
  'darkslateblue': "#483D8B",
  'darkslategray': "#2F4F4F",
  'darkslategrey': "#2F4F4F",
  'darkturquoise': "#00CED1",
  'darkviolet': "#9400D3",
  'deeppink': "#FF1493",
  'deepskyblue': "#00BFFF",
  'dimgray': "#696969",
  'dimgrey': "#696969",
  'dodgerblue': "#1E90FF",
  'firebrick': "#B22222",
  'floralwhite': "#FFFAF0",
  'forestgreen': "#228B22",
  'fuchsia': "#FF00FF",
  'gainsboro': "#DCDCDC",
  'ghostwhite': "#F8F8FF",
  'gold': "#FFD700",
  'goldenrod': "#DAA520",
  'gray': "#808080",
  'green': "#008000",
  'greenyellow': "#ADFF2F",
  'grey': "#808080",
  'honeydew': "#F0FFF0",
  'hotpink': "#FF69B4",
  'indianred': "#CD5C5C",
  'indigo': "#4B0082",
  'ivory': "#FFFFF0",
  'khaki': "#F0E68C",
  'lavender': "#E6E6FA",
  'lavenderblush': "#FFF0F5",
  'lawngreen': "#7CFC00",
  'lemonchiffon': "#FFFACD",
  'lightblue': "#ADD8E6",
  'lightcoral': "#F08080",
  'lightcyan': "#E0FFFF",
  'lightgoldenrodyellow': "#FAFAD2",
  'lightgray': "#D3D3D3",
  'lightgreen': "#90EE90",
  'lightgrey': "#D3D3D3",
  'lightpink': "#FFB6C1",
  'lightsalmon': "#FFA07A",
  'lightseagreen': "#20B2AA",
  'lightskyblue': "#87CEFA",
  'lightslategray': "#778899",
  'lightslategrey': "#778899",
  'lightsteelblue': "#B0C4DE",
  'lightyellow': "#FFFFE0",
  'lime': "#00FF00",
  'limegreen': "#32CD32",
  'linen': "#FAF0E6",
  'magenta': "#FF00FF",
  'maroon': "#800000",
  'mediumaquamarine': "#66CDAA",
  'mediumblue': "#0000CD",
  'mediumorchid': "#BA55D3",
  'mediumpurple': "#9370DB",
  'mediumseagreen': "#3CB371",
  'mediumslateblue': "#7B68EE",
  'mediumspringgreen': "#00FA9A",
  'mediumturquoise': "#48D1CC",
  'mediumvioletred': "#C71585",
  'midnightblue': "#191970",
  'mintcream': "#F5FFFA",
  'mistyrose': "#FFE4E1",
  'moccasin': "#FFE4B5",
  'navajowhite': "#FFDEAD",
  'navy': "#000080",
  'oldlace': "#FDF5E6",
  'olive': "#808000",
  'olivedrab': "#6B8E23",
  'orange': "#FFA500",
  'orangered': "#FF4500",
  'orchid': "#DA70D6",
  'palegoldenrod': "#EEE8AA",
  'palegreen': "#98FB98",
  'paleturquoise': "#AFEEEE",
  'palevioletred': "#DB7093",
  'papayawhip': "#FFEFD5",
  'peachpuff': "#FFDAB9",
  'peru': "#CD853F",
  'pink': "#FFC0CB",
  'plum': "#DDA0DD",
  'powderblue': "#B0E0E6",
  'purple': "#800080",
  'rebeccapurple': "#663399",
  'red': "#FF0000",
  'rosybrown': "#BC8F8F",
  'royalblue': "#4169E1",
  'saddlebrown': "#8B4513",
  'salmon': "#FA8072",
  'sandybrown': "#F4A460",
  'seagreen': "#2E8B57",
  'seashell': "#FFF5EE",
  'sienna': "#A0522D",
  'silver': "#C0C0C0",
  'skyblue': "#87CEEB",
  'slateblue': "#6A5ACD",
  'slategray': "#708090",
  'slategrey': "#708090",
  'snow': "#FFFAFA",
  'springgreen': "#00FF7F",
  'steelblue': "#4682B4",
  'tan': "#D2B48C",
  'teal': "#008080",
  'thistle': "#D8BFD8",
  'tomato': "#FF6347",
  'turquoise': "#40E0D0",
  'violet': "#EE82EE",
  'wheat': "#F5DEB3",
  'white': "#FFFFFF",
  'whitesmoke': "#F5F5F5",
  'yellow': "#FFFF00",
  'yellowgreen': "#9ACD32"
};

/***/ }),

/***/ "./src/lib/DrawObjects.ts":
/*!********************************!*\
  !*** ./src/lib/DrawObjects.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Circle = exports.Rectangle = exports.Polygon = exports.Polyline = exports.LineSegment = exports.DrawObject = void 0;
var Geometries_1 = __webpack_require__(/*! ./Geometries */ "./src/lib/Geometries.ts");
var Materials_1 = __webpack_require__(/*! ./Materials */ "./src/lib/Materials.ts");
var Vector_1 = __importDefault(__webpack_require__(/*! ./Vector */ "./src/lib/Vector.ts"));
var DrawObject = /*#__PURE__*/function () {
  function DrawObject(type, geometry, material) {
    _classCallCheck(this, DrawObject);
    _defineProperty(this, "geometry", void 0);
    _defineProperty(this, "material", void 0);
    _defineProperty(this, "type", void 0);
    this.type = type;
    this.geometry = geometry;
    this.material = material;
  }
  _createClass(DrawObject, [{
    key: "draw",
    value: function draw(scene) {
      if (scene.ctx) {
        var camera = scene.camera;
        this.material.draw(scene.ctx);
        this.geometry.set_view_points(camera);
        this.geometry.draw(scene.ctx, this.material);
      }
    }
  }]);
  return DrawObject;
}();
exports.DrawObject = DrawObject;
var LineSegment = /*#__PURE__*/function (_DrawObject) {
  _inherits(LineSegment, _DrawObject);
  var _super = _createSuper(LineSegment);
  function LineSegment(_ref, materialConfig) {
    var a = _ref.a,
      b = _ref.b;
    _classCallCheck(this, LineSegment);
    return _super.call(this, 'line', new Geometries_1.LineSegmentGeometry({
      a: new Vector_1["default"](a),
      b: new Vector_1["default"](b)
    }), new Materials_1.LineMaterial(materialConfig));
  }
  return _createClass(LineSegment);
}(DrawObject);
exports.LineSegment = LineSegment;
var Polyline = /*#__PURE__*/function (_DrawObject2) {
  _inherits(Polyline, _DrawObject2);
  var _super2 = _createSuper(Polyline);
  function Polyline(_ref2) {
    var points = _ref2.points;
    var materialConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Polyline);
    return _super2.call(this, 'polyline', new Geometries_1.PolylineGeometry({
      points: points
    }), new Materials_1.ShapeMaterial(materialConfig));
  }
  return _createClass(Polyline);
}(DrawObject);
exports.Polyline = Polyline;
var Polygon = /*#__PURE__*/function (_DrawObject3) {
  _inherits(Polygon, _DrawObject3);
  var _super3 = _createSuper(Polygon);
  function Polygon(_ref3) {
    var points = _ref3.points;
    var materialConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Polygon);
    return _super3.call(this, 'polygon', new Geometries_1.PolygonGeometry({
      points: points
    }), new Materials_1.ShapeMaterial(materialConfig));
  }
  return _createClass(Polygon);
}(DrawObject);
exports.Polygon = Polygon;
var Rectangle = /*#__PURE__*/function (_DrawObject4) {
  _inherits(Rectangle, _DrawObject4);
  var _super4 = _createSuper(Rectangle);
  function Rectangle(_ref4) {
    var position = _ref4.position,
      size = _ref4.size;
    var materialConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Rectangle);
    return _super4.call(this, 'rectangle', new Geometries_1.RectangleGeometry({
      position: position,
      size: size
    }), new Materials_1.ShapeMaterial(materialConfig));
  }
  return _createClass(Rectangle);
}(DrawObject);
exports.Rectangle = Rectangle;
var Circle = /*#__PURE__*/function (_DrawObject5) {
  _inherits(Circle, _DrawObject5);
  var _super5 = _createSuper(Circle);
  function Circle(_ref5) {
    var center = _ref5.center,
      radius = _ref5.radius;
    var materialConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Circle);
    return _super5.call(this, 'circle', new Geometries_1.CircleGeometry({
      center: center,
      radius: radius
    }), new Materials_1.ShapeMaterial(materialConfig));
  }
  return _createClass(Circle);
}(DrawObject);
exports.Circle = Circle;

/***/ }),

/***/ "./src/lib/Geometries.ts":
/*!*******************************!*\
  !*** ./src/lib/Geometries.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CircleGeometry = exports.RectangleGeometry = exports.PolygonGeometry = exports.PolylineGeometry = exports.LineSegmentGeometry = void 0;
var Vector_1 = __importDefault(__webpack_require__(/*! ./Vector */ "./src/lib/Vector.ts"));
function hasFill(material) {
  return Boolean(material && 'fillEnabled' in material && material.fillEnabled);
}
function fillAndStroke(ctx, material) {
  if (hasFill(material)) {
    ctx.fill();
  }
  ctx.stroke();
}
var LineSegmentGeometry = /*#__PURE__*/function () {
  function LineSegmentGeometry(points) {
    _classCallCheck(this, LineSegmentGeometry);
    _defineProperty(this, "points", void 0);
    _defineProperty(this, "view_points", void 0);
    this.points = {
      a: new Vector_1["default"](points.a),
      b: new Vector_1["default"](points.b)
    };
    this.view_points = {
      a: new Vector_1["default"](),
      b: new Vector_1["default"]()
    };
  }
  _createClass(LineSegmentGeometry, [{
    key: "draw",
    value: function draw(ctx) {
      var _this$view_points = this.view_points,
        a = _this$view_points.a,
        b = _this$view_points.b;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  }, {
    key: "set_view_points",
    value: function set_view_points(camera) {
      this.view_points.a = camera.pointer(this.points.a);
      this.view_points.b = camera.pointer(this.points.b);
    }
  }]);
  return LineSegmentGeometry;
}();
exports.LineSegmentGeometry = LineSegmentGeometry;
var PolylineGeometry = /*#__PURE__*/function () {
  function PolylineGeometry(_ref) {
    var points = _ref.points;
    _classCallCheck(this, PolylineGeometry);
    _defineProperty(this, "points", void 0);
    _defineProperty(this, "view_points", void 0);
    this.points = {
      points: points.map(function (point) {
        return new Vector_1["default"](point);
      })
    };
    this.view_points = {
      points: []
    };
  }
  _createClass(PolylineGeometry, [{
    key: "draw",
    value: function draw(ctx) {
      var points = this.view_points.points;
      if (points.length === 0) {
        return;
      }
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.slice(1).forEach(function (point) {
        return ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
    }
  }, {
    key: "set_view_points",
    value: function set_view_points(camera) {
      this.view_points.points = this.points.points.map(function (point) {
        return camera.pointer(point);
      });
    }
  }]);
  return PolylineGeometry;
}();
exports.PolylineGeometry = PolylineGeometry;
var PolygonGeometry = /*#__PURE__*/function () {
  function PolygonGeometry(_ref2) {
    var points = _ref2.points;
    _classCallCheck(this, PolygonGeometry);
    _defineProperty(this, "points", void 0);
    _defineProperty(this, "view_points", void 0);
    this.points = {
      points: points.map(function (point) {
        return new Vector_1["default"](point);
      })
    };
    this.view_points = {
      points: []
    };
  }
  _createClass(PolygonGeometry, [{
    key: "draw",
    value: function draw(ctx, material) {
      var points = this.view_points.points;
      if (points.length === 0) {
        return;
      }
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.slice(1).forEach(function (point) {
        return ctx.lineTo(point.x, point.y);
      });
      ctx.closePath();
      fillAndStroke(ctx, material);
    }
  }, {
    key: "set_view_points",
    value: function set_view_points(camera) {
      this.view_points.points = this.points.points.map(function (point) {
        return camera.pointer(point);
      });
    }
  }]);
  return PolygonGeometry;
}();
exports.PolygonGeometry = PolygonGeometry;
var RectangleGeometry = /*#__PURE__*/function () {
  function RectangleGeometry(_ref3) {
    var position = _ref3.position,
      size = _ref3.size;
    _classCallCheck(this, RectangleGeometry);
    _defineProperty(this, "points", void 0);
    _defineProperty(this, "view_points", void 0);
    this.points = {
      position: new Vector_1["default"](position),
      size: new Vector_1["default"](size)
    };
    this.view_points = {
      position: new Vector_1["default"](),
      size: new Vector_1["default"]()
    };
  }
  _createClass(RectangleGeometry, [{
    key: "draw",
    value: function draw(ctx, material) {
      var _this$view_points2 = this.view_points,
        position = _this$view_points2.position,
        size = _this$view_points2.size;
      ctx.beginPath();
      ctx.rect(position.x, position.y, size.x, size.y);
      fillAndStroke(ctx, material);
    }
  }, {
    key: "set_view_points",
    value: function set_view_points(camera) {
      this.view_points.position = camera.pointer(this.points.position);
      this.view_points.size = camera.pointer(this.points.position.plus(this.points.size)).sub(this.view_points.position);
    }
  }]);
  return RectangleGeometry;
}();
exports.RectangleGeometry = RectangleGeometry;
var CircleGeometry = /*#__PURE__*/function () {
  function CircleGeometry(_ref4) {
    var center = _ref4.center,
      radius = _ref4.radius;
    _classCallCheck(this, CircleGeometry);
    _defineProperty(this, "points", void 0);
    _defineProperty(this, "view_points", void 0);
    _defineProperty(this, "radius", void 0);
    _defineProperty(this, "view_radius", void 0);
    this.points = {
      center: new Vector_1["default"](center)
    };
    this.view_points = {
      center: new Vector_1["default"]()
    };
    this.radius = radius;
    this.view_radius = 0;
  }
  _createClass(CircleGeometry, [{
    key: "draw",
    value: function draw(ctx, material) {
      var center = this.view_points.center;
      ctx.beginPath();
      ctx.arc(center.x, center.y, Math.abs(this.view_radius), 0, Math.PI * 2);
      fillAndStroke(ctx, material);
    }
  }, {
    key: "set_view_points",
    value: function set_view_points(camera) {
      this.view_points.center = camera.pointer(this.points.center);
      this.view_radius = this.radius * camera.drawScale;
    }
  }]);
  return CircleGeometry;
}();
exports.CircleGeometry = CircleGeometry;

/***/ }),

/***/ "./src/lib/Materials.ts":
/*!******************************!*\
  !*** ./src/lib/Materials.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ShapeMaterial = exports.LineMaterial = void 0;
var Color_1 = __importDefault(__webpack_require__(/*! ./Color */ "./src/lib/Color.ts"));
var LineMaterial = /*#__PURE__*/function () {
  function LineMaterial(_ref) {
    var lineColor = _ref.lineColor,
      lineWidth = _ref.lineWidth;
    _classCallCheck(this, LineMaterial);
    _defineProperty(this, "default", {
      lineColor: '#000',
      lineWidth: 1
    });
    _defineProperty(this, "lineColor", void 0);
    _defineProperty(this, "lineWidth", void 0);
    this.lineColor = new Color_1["default"](lineColor ? lineColor : this["default"].lineColor);
    this.lineWidth = lineWidth ? lineWidth : this["default"].lineWidth;
  }
  _createClass(LineMaterial, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.lineWidth = this.lineWidth;
      ctx.strokeStyle = this.lineColor.hex;
    }
  }]);
  return LineMaterial;
}();
exports.LineMaterial = LineMaterial;
var ShapeMaterial = /*#__PURE__*/function () {
  function ShapeMaterial() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      strokeColor = _ref2.strokeColor,
      strokeWidth = _ref2.strokeWidth,
      fillColor = _ref2.fillColor;
    _classCallCheck(this, ShapeMaterial);
    _defineProperty(this, "default", {
      strokeColor: '#000',
      strokeWidth: 1,
      fillColor: '#000'
    });
    _defineProperty(this, "strokeColor", void 0);
    _defineProperty(this, "strokeWidth", void 0);
    _defineProperty(this, "fillColor", void 0);
    this.strokeColor = new Color_1["default"](strokeColor ? strokeColor : this["default"].strokeColor);
    this.strokeWidth = strokeWidth === undefined ? this["default"].strokeWidth : strokeWidth;
    this.fillColor = fillColor === null ? null : new Color_1["default"](fillColor ? fillColor : this["default"].fillColor);
  }
  _createClass(ShapeMaterial, [{
    key: "fillEnabled",
    get: function get() {
      return this.fillColor !== null;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.lineWidth = this.strokeWidth;
      ctx.strokeStyle = this.strokeColor.hex;
      if (this.fillColor) {
        ctx.fillStyle = this.fillColor.hex;
      }
    }
  }]);
  return ShapeMaterial;
}();
exports.ShapeMaterial = ShapeMaterial;

/***/ }),

/***/ "./src/lib/Scene.ts":
/*!**************************!*\
  !*** ./src/lib/Scene.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Camera_1 = __importDefault(__webpack_require__(/*! ./Camera */ "./src/lib/Camera.ts"));
var Scene = /*#__PURE__*/function () {
  function Scene() {
    _classCallCheck(this, Scene);
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "canvas", void 0);
    _defineProperty(this, "viewObjects", void 0);
    _defineProperty(this, "ctx", void 0);
    this.camera = new Camera_1["default"]();
    this.canvas = document.createElement('canvas');
    this.viewObjects = [];
    this.ctx = null;
  }
  _createClass(Scene, [{
    key: "add",
    value: function add(obj) {
      this.viewObjects.push(obj);
    }
  }, {
    key: "setCanvas",
    value: function setCanvas(canvasContainer) {
      canvasContainer.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      var width = canvasContainer.clientWidth;
      var height = canvasContainer.clientHeight;
      this.canvas.width = width;
      this.canvas.height = height;
      this.camera.screen.set(width, height);
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;
      if (this.ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.viewObjects.forEach(function (obj) {
          return obj.draw(_this);
        });
      }
    }
  }]);
  return Scene;
}();
exports["default"] = Scene;

/***/ }),

/***/ "./src/lib/Vector.ts":
/*!***************************!*\
  !*** ./src/lib/Vector.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _Symbol$iterator;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
_Symbol$iterator = Symbol.iterator;
var Vector = /*#__PURE__*/function () {
  function Vector(point) {
    _classCallCheck(this, Vector);
    _defineProperty(this, "x", 0);
    _defineProperty(this, "y", 0);
    _defineProperty(this, "isVector", true);
    if (Vector.isVector(point)) {
      this.set(point.x, point.y);
    } else if (Vector.isPair(point)) {
      this.set.apply(this, _toConsumableArray(point));
    }
  }
  _createClass(Vector, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
  }, {
    key: "setScalar",
    value: function setScalar(s) {
      this.x = s;
      this.y = s;
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vector(this);
    }
  }, {
    key: "addScaledVector",
    value: function addScaledVector(other, s) {
      var v = new Vector(other);
      this.x += v.x * s;
      this.y += v.y * s;
    }
  }, {
    key: "add",
    value: function add(other) {
      var v = new Vector(other);
      this.x += v.x;
      this.y += v.y;
      return this;
    }
  }, {
    key: "addScalar",
    value: function addScalar(s) {
      this.x += s;
      this.y += s;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(other) {
      var v = new Vector(other);
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
  }, {
    key: "subScalar",
    value: function subScalar(s) {
      this.x -= s;
      this.y -= s;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(s) {
      this.x *= s;
      this.y *= s;
      return this;
    }
  }, {
    key: "transform",
    value: function transform(matrix) {
      var x = this.x,
        y = this.y;
      this.x = x * matrix[0][0] + y * matrix[0][1];
      this.y = x * matrix[1][0] + y * matrix[1][1];
      return this;
    }
  }, {
    key: "floor",
    value: function floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    }
  }, {
    key: "ceil",
    value: function ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    }
  }, {
    key: "round",
    value: function round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    }
  }, {
    key: "negate",
    value: function negate() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    }
  }, {
    key: "dot",
    value: function dot(other) {
      var v = new Vector(other);
      return this.x * v.x + this.y * v.y;
    }
  }, {
    key: "cross",
    value: function cross(other) {
      var v = new Vector(other);
      return this.x * v.y - this.y * v.x;
    }
  }, {
    key: "length",
    get: function get() {
      return Math.sqrt(this.dot(this));
    },
    set: function set(length) {
      this.normalize().mul(length);
    }
  }, {
    key: "pair",
    get: function get() {
      return [this.x, this.y];
    }
  }, {
    key: "distance",
    value: function distance(other) {
      return this.minus(other).length;
    }
  }, {
    key: "plus",
    value: function plus(other) {
      return this.clone().add(other);
    }
  }, {
    key: "minus",
    value: function minus(other) {
      return this.clone().sub(other);
    }
  }, {
    key: "times",
    value: function times(num) {
      return this.clone().mul(num);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      return this.mul(this.length ? 1 / this.length : 1);
    }
  }, {
    key: "lerp",
    value: function lerp(other, alpha) {
      var v = new Vector(other);
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      return this;
    }
  }, {
    key: "equals",
    value: function equals(other) {
      var v = new Vector(other);
      return v.x === this.x && v.y === this.y;
    }
  }, {
    key: "rotate",
    value: function rotate(angle) {
      var other = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];
      var v = new Vector(other);
      var c = Math.cos(angle),
        s = Math.sin(angle);
      var x = this.x - v.x;
      var y = this.y - v.y;
      this.x = x * c - y * s + v.x;
      this.y = x * s + y * c + v.y;
      return this;
    }
  }, {
    key: "random",
    value: function random() {
      this.x = Math.random();
      this.y = Math.random();
      return this;
    }
  }, {
    key: _Symbol$iterator,
    value: /*#__PURE__*/_regeneratorRuntime().mark(function value() {
      return _regeneratorRuntime().wrap(function value$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.x;
          case 2:
            _context.next = 4;
            return this.y;
          case 4:
          case "end":
            return _context.stop();
        }
      }, value, this);
    })
  }], [{
    key: "isVector",
    value: function isVector(obj) {
      return obj instanceof Vector;
    }
  }, {
    key: "isPair",
    value: function isPair(obj) {
      return Array.isArray(obj) && obj.length == 2;
    }
  }, {
    key: "isPoint",
    value: function isPoint(obj) {
      return Vector.isVector(obj) || Vector.isPair(obj);
    }
  }]);
  return Vector;
}();
exports["default"] = Vector;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/decartes.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFPMUQsTUFBTSxDQUFDcUgsUUFBUSxDQUFDM0QsR0FBRyxDQUFDLElBQUkxRCxNQUFNLENBQUNzSCxNQUFNLENBQUM1RCxHQUFHLENBQUM7SUFDckQ7RUFBQztFQUFBO0FBQUE7QUFxSUw1RSxrQkFBZSxHQUFHa0IsTUFBTTs7Ozs7O1VDM0p4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVjYXJ0ZXMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2RlY2FydGVzLy4vc3JjL2RlY2FydGVzLnRzIiwid2VicGFjazovL2RlY2FydGVzLy4vc3JjL2xpYi9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vZGVjYXJ0ZXMvLi9zcmMvbGliL0NvbG9yLnRzIiwid2VicGFjazovL2RlY2FydGVzLy4vc3JjL2xpYi9EcmF3T2JqZWN0cy50cyIsIndlYnBhY2s6Ly9kZWNhcnRlcy8uL3NyYy9saWIvR2VvbWV0cmllcy50cyIsIndlYnBhY2s6Ly9kZWNhcnRlcy8uL3NyYy9saWIvTWF0ZXJpYWxzLnRzIiwid2VicGFjazovL2RlY2FydGVzLy4vc3JjL2xpYi9TY2VuZS50cyIsIndlYnBhY2s6Ly9kZWNhcnRlcy8uL3NyYy9saWIvVmVjdG9yLnRzIiwid2VicGFjazovL2RlY2FydGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlY2FydGVzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGVjYXJ0ZXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2RlY2FydGVzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRlY2FydGVzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRlY2FydGVzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRlY2FydGVzXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DaXJjbGUgPSBleHBvcnRzLlJlY3RhbmdsZSA9IGV4cG9ydHMuUG9seWdvbiA9IGV4cG9ydHMuUG9seWxpbmUgPSBleHBvcnRzLkxpbmVTZWdtZW50ID0gZXhwb3J0cy5EcmF3T2JqZWN0ID0gZXhwb3J0cy5TaGFwZU1hdGVyaWFsID0gZXhwb3J0cy5MaW5lTWF0ZXJpYWwgPSBleHBvcnRzLkNpcmNsZUdlb21ldHJ5ID0gZXhwb3J0cy5SZWN0YW5nbGVHZW9tZXRyeSA9IGV4cG9ydHMuUG9seWdvbkdlb21ldHJ5ID0gZXhwb3J0cy5Qb2x5bGluZUdlb21ldHJ5ID0gZXhwb3J0cy5MaW5lU2VnbWVudEdlb21ldHJ5ID0gZXhwb3J0cy5TY2VuZSA9IGV4cG9ydHMuQ2FtZXJhID0gZXhwb3J0cy5Db2xvciA9IGV4cG9ydHMuVmVjdG9yID0gdm9pZCAwO1xuY29uc3QgVmVjdG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbGliL1ZlY3RvclwiKSk7XG5leHBvcnRzLlZlY3RvciA9IFZlY3Rvcl8xLmRlZmF1bHQ7XG5jb25zdCBDb2xvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9Db2xvclwiKSk7XG5leHBvcnRzLkNvbG9yID0gQ29sb3JfMS5kZWZhdWx0O1xuY29uc3QgQ2FtZXJhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbGliL0NhbWVyYVwiKSk7XG5leHBvcnRzLkNhbWVyYSA9IENhbWVyYV8xLmRlZmF1bHQ7XG5jb25zdCBTY2VuZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9TY2VuZVwiKSk7XG5leHBvcnRzLlNjZW5lID0gU2NlbmVfMS5kZWZhdWx0O1xuY29uc3QgR2VvbWV0cmllc18xID0gcmVxdWlyZShcIi4vbGliL0dlb21ldHJpZXNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJMaW5lU2VnbWVudEdlb21ldHJ5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHZW9tZXRyaWVzXzEuTGluZVNlZ21lbnRHZW9tZXRyeTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBvbHlsaW5lR2VvbWV0cnlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdlb21ldHJpZXNfMS5Qb2x5bGluZUdlb21ldHJ5OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUG9seWdvbkdlb21ldHJ5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHZW9tZXRyaWVzXzEuUG9seWdvbkdlb21ldHJ5OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUmVjdGFuZ2xlR2VvbWV0cnlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdlb21ldHJpZXNfMS5SZWN0YW5nbGVHZW9tZXRyeTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNpcmNsZUdlb21ldHJ5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHZW9tZXRyaWVzXzEuQ2lyY2xlR2VvbWV0cnk7IH0gfSk7XG5jb25zdCBNYXRlcmlhbHNfMSA9IHJlcXVpcmUoXCIuL2xpYi9NYXRlcmlhbHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJMaW5lTWF0ZXJpYWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGVyaWFsc18xLkxpbmVNYXRlcmlhbDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNoYXBlTWF0ZXJpYWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGVyaWFsc18xLlNoYXBlTWF0ZXJpYWw7IH0gfSk7XG5jb25zdCBEcmF3T2JqZWN0c18xID0gcmVxdWlyZShcIi4vbGliL0RyYXdPYmplY3RzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTGluZVNlZ21lbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERyYXdPYmplY3RzXzEuTGluZVNlZ21lbnQ7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEcmF3T2JqZWN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBEcmF3T2JqZWN0c18xLkRyYXdPYmplY3Q7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJQb2x5bGluZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRHJhd09iamVjdHNfMS5Qb2x5bGluZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBvbHlnb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERyYXdPYmplY3RzXzEuUG9seWdvbjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJlY3RhbmdsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRHJhd09iamVjdHNfMS5SZWN0YW5nbGU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDaXJjbGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERyYXdPYmplY3RzXzEuQ2lyY2xlOyB9IH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIFZlY3RvcjogVmVjdG9yXzEuZGVmYXVsdCxcbiAgICBDb2xvcjogQ29sb3JfMS5kZWZhdWx0LFxuICAgIENhbWVyYTogQ2FtZXJhXzEuZGVmYXVsdCxcbiAgICBTY2VuZTogU2NlbmVfMS5kZWZhdWx0LFxuICAgIExpbmVTZWdtZW50R2VvbWV0cnk6IEdlb21ldHJpZXNfMS5MaW5lU2VnbWVudEdlb21ldHJ5LFxuICAgIFBvbHlsaW5lR2VvbWV0cnk6IEdlb21ldHJpZXNfMS5Qb2x5bGluZUdlb21ldHJ5LFxuICAgIFBvbHlnb25HZW9tZXRyeTogR2VvbWV0cmllc18xLlBvbHlnb25HZW9tZXRyeSxcbiAgICBSZWN0YW5nbGVHZW9tZXRyeTogR2VvbWV0cmllc18xLlJlY3RhbmdsZUdlb21ldHJ5LFxuICAgIENpcmNsZUdlb21ldHJ5OiBHZW9tZXRyaWVzXzEuQ2lyY2xlR2VvbWV0cnksXG4gICAgTGluZU1hdGVyaWFsOiBNYXRlcmlhbHNfMS5MaW5lTWF0ZXJpYWwsXG4gICAgU2hhcGVNYXRlcmlhbDogTWF0ZXJpYWxzXzEuU2hhcGVNYXRlcmlhbCxcbiAgICBEcmF3T2JqZWN0OiBEcmF3T2JqZWN0c18xLkRyYXdPYmplY3QsIExpbmVTZWdtZW50OiBEcmF3T2JqZWN0c18xLkxpbmVTZWdtZW50LCBQb2x5bGluZTogRHJhd09iamVjdHNfMS5Qb2x5bGluZSwgUG9seWdvbjogRHJhd09iamVjdHNfMS5Qb2x5Z29uLCBSZWN0YW5nbGU6IERyYXdPYmplY3RzXzEuUmVjdGFuZ2xlLCBDaXJjbGU6IERyYXdPYmplY3RzXzEuQ2lyY2xlXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBWZWN0b3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3JcIikpO1xuY2xhc3MgQ2FtZXJhIHtcbiAgICBkZWZhdWx0ID0ge1xuICAgICAgICBjZW50ZXI6IFswLCAwXSxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIHNjcmVlbjogWzEwMCwgMTAwXVxuICAgIH07XG4gICAgY2VudGVyO1xuICAgIHNjYWxlO1xuICAgIHNjcmVlbjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgVmVjdG9yXzEuZGVmYXVsdCh0aGlzLmRlZmF1bHQuY2VudGVyKTtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgVmVjdG9yXzEuZGVmYXVsdCh0aGlzLmRlZmF1bHQuc2NyZWVuKTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMuZGVmYXVsdC5zY2FsZTtcbiAgICB9XG4gICAgZ2V0IGRyYXdDZW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbnRlci50aW1lcyh0aGlzLmRyYXdTY2FsZSkuc3ViKHRoaXMuc2NyZWVuLnRpbWVzKDAuNSkpO1xuICAgIH1cbiAgICBnZXQgZHJhd1NjYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZSAqIE1hdGgubWluKHRoaXMuc2NyZWVuLngsIHRoaXMuc2NyZWVuLnkpIC8gMjtcbiAgICB9XG4gICAgbG9jKHBvaW50ZXIpIHtcbiAgICAgICAgcG9pbnRlciA9IG5ldyBWZWN0b3JfMS5kZWZhdWx0KHBvaW50ZXIpO1xuICAgICAgICByZXR1cm4gcG9pbnRlci5wbHVzKHRoaXMuZHJhd0NlbnRlcikudGltZXMoMSAvIHRoaXMuZHJhd1NjYWxlKTtcbiAgICB9XG4gICAgcG9pbnRlcihsb2MpIHtcbiAgICAgICAgbG9jID0gbmV3IFZlY3Rvcl8xLmRlZmF1bHQobG9jKTtcbiAgICAgICAgcmV0dXJuIGxvYy50aW1lcyh0aGlzLmRyYXdTY2FsZSkubWludXModGhpcy5kcmF3Q2VudGVyKTtcbiAgICB9XG4gICAgd2hlZWwoY3Vyc29yLCBmYWN0b3IpIHtcbiAgICAgICAgY29uc3QgZml4ZWQgPSB0aGlzLmxvYyhjdXJzb3IpO1xuICAgICAgICB0aGlzLmNlbnRlci5tdWwoZmFjdG9yKS5zdWIoZml4ZWQudGltZXMoZmFjdG9yIC0gMSkpO1xuICAgICAgICB0aGlzLnNjYWxlIC89IGZhY3RvcjtcbiAgICB9XG4gICAgbW92ZShtb3ZlbWVudCkge1xuICAgICAgICBtb3ZlbWVudCA9IG5ldyBWZWN0b3JfMS5kZWZhdWx0KG1vdmVtZW50KTtcbiAgICAgICAgdGhpcy5jZW50ZXIuc3ViKG1vdmVtZW50LnRpbWVzKDEgLyB0aGlzLmRyYXdTY2FsZSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENhbWVyYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29sb3Ige1xuICAgIHIgPSAwO1xuICAgIGcgPSAwO1xuICAgIGIgPSAwO1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgaWYgKENvbG9yLmlzQ29sb3IoZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGRhdGEuciwgZGF0YS5nLCBkYXRhLmIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5oZXggPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGlmIChDb2xvci5pc1RyaXBsZShkYXRhKSkge1xuICAgICAgICAgICAgdGhpcy5yZ2IgPSBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyLCBnLCBiKSB7XG4gICAgICAgIGNvbnN0IHRvX2NvbG9yX3ZhbHVlID0gKHgpID0+IHggPCAwID8gMCA6IHggPiAyNTUgPyAyNTUgOiBNYXRoLnJvdW5kKHgpO1xuICAgICAgICB0aGlzLnIgPSB0b19jb2xvcl92YWx1ZShyKTtcbiAgICAgICAgdGhpcy5nID0gdG9fY29sb3JfdmFsdWUoZyk7XG4gICAgICAgIHRoaXMuYiA9IHRvX2NvbG9yX3ZhbHVlKGIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0IHJnYigpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnIsIHRoaXMuZywgdGhpcy5iXTtcbiAgICB9XG4gICAgc2V0IHJnYihkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0KC4uLmRhdGEpO1xuICAgIH1cbiAgICBnZXQgaGV4KCkge1xuICAgICAgICByZXR1cm4gJyMnICsgdGhpcy5yZ2IubWFwKHggPT4geC50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG4gICAgfVxuICAgIHNldCBoZXgoZGF0YSkge1xuICAgICAgICBjb25zdCBoZXggPSBkYXRhIGluIF9jb2xvcktleXdvcmRzID8gX2NvbG9yS2V5d29yZHNbZGF0YV0gOiBkYXRhO1xuICAgICAgICBjb25zdCBoZXhSZWcgPSBoZXgucmVwbGFjZSgvXiMoW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksIChfLCByLCBnLCBiKSA9PiAnIycgKyByICsgciArIGcgKyBnICsgYiArIGIpLnN1YnN0cmluZygxKS5tYXRjaCgvLnsyfS9nKTtcbiAgICAgICAgY29uc3QgcmdiID0gaGV4UmVnID09PSBudWxsID9cbiAgICAgICAgICAgIFswLCAwLCAwXSA6XG4gICAgICAgICAgICBoZXhSZWcubWFwKHggPT4gcGFyc2VJbnQoeCwgMTYpKTtcbiAgICAgICAgdGhpcy5zZXQocmdiWzBdLCByZ2JbMV0sIHJnYlsyXSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0NvbG9yKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQ29sb3I7XG4gICAgfVxuICAgIHN0YXRpYyBpc1RyaXBsZShvYmopIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09IDM7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMpO1xuICAgIH1cbiAgICBtaXgob3RoZXIsIHByb3BvcnRpb24gPSAwLjUpIHtcbiAgICAgICAgY29uc3QgbWl4X2NoYW5uZWwgPSAoYSwgYikgPT4gYSAqICgxIC0gcHJvcG9ydGlvbikgKyBiICogcHJvcG9ydGlvbjtcbiAgICAgICAgY29uc3QgYyA9IFtcbiAgICAgICAgICAgIG1peF9jaGFubmVsKHRoaXMuciwgb3RoZXIuciksXG4gICAgICAgICAgICBtaXhfY2hhbm5lbCh0aGlzLmcsIG90aGVyLmcpLFxuICAgICAgICAgICAgbWl4X2NoYW5uZWwodGhpcy5iLCBvdGhlci5iKSxcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihjKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb2xvcjtcbmNvbnN0IF9jb2xvcktleXdvcmRzID0ge1xuICAgICdhbGljZWJsdWUnOiBcIiNGMEY4RkZcIixcbiAgICAnYW50aXF1ZXdoaXRlJzogXCIjRkFFQkQ3XCIsXG4gICAgJ2FxdWEnOiBcIiMwMEZGRkZcIixcbiAgICAnYXF1YW1hcmluZSc6IFwiIzdGRkZENFwiLFxuICAgICdhenVyZSc6IFwiI0YwRkZGRlwiLFxuICAgICdiZWlnZSc6IFwiI0Y1RjVEQ1wiLFxuICAgICdiaXNxdWUnOiBcIiNGRkU0QzRcIixcbiAgICAnYmxhY2snOiBcIiMwMDAwMDBcIixcbiAgICAnYmxhbmNoZWRhbG1vbmQnOiBcIiNGRkVCQ0RcIixcbiAgICAnYmx1ZSc6IFwiIzAwMDBGRlwiLFxuICAgICdibHVldmlvbGV0JzogXCIjOEEyQkUyXCIsXG4gICAgJ2Jyb3duJzogXCIjQTUyQTJBXCIsXG4gICAgJ2J1cmx5d29vZCc6IFwiI0RFQjg4N1wiLFxuICAgICdjYWRldGJsdWUnOiBcIiM1RjlFQTBcIixcbiAgICAnY2hhcnRyZXVzZSc6IFwiIzdGRkYwMFwiLFxuICAgICdjaG9jb2xhdGUnOiBcIiNEMjY5MUVcIixcbiAgICAnY29yYWwnOiBcIiNGRjdGNTBcIixcbiAgICAnY29ybmZsb3dlcmJsdWUnOiBcIiM2NDk1RURcIixcbiAgICAnY29ybnNpbGsnOiBcIiNGRkY4RENcIixcbiAgICAnY3JpbXNvbic6IFwiI0RDMTQzQ1wiLFxuICAgICdjeWFuJzogXCIjMDBGRkZGXCIsXG4gICAgJ2RhcmtibHVlJzogXCIjMDAwMDhCXCIsXG4gICAgJ2RhcmtjeWFuJzogXCIjMDA4QjhCXCIsXG4gICAgJ2Rhcmtnb2xkZW5yb2QnOiBcIiNCODg2MEJcIixcbiAgICAnZGFya2dyYXknOiBcIiNBOUE5QTlcIixcbiAgICAnZGFya2dyZWVuJzogXCIjMDA2NDAwXCIsXG4gICAgJ2RhcmtncmV5JzogXCIjQTlBOUE5XCIsXG4gICAgJ2RhcmtraGFraSc6IFwiI0JEQjc2QlwiLFxuICAgICdkYXJrbWFnZW50YSc6IFwiIzhCMDA4QlwiLFxuICAgICdkYXJrb2xpdmVncmVlbic6IFwiIzU1NkIyRlwiLFxuICAgICdkYXJrb3JhbmdlJzogXCIjRkY4QzAwXCIsXG4gICAgJ2RhcmtvcmNoaWQnOiBcIiM5OTMyQ0NcIixcbiAgICAnZGFya3JlZCc6IFwiIzhCMDAwMFwiLFxuICAgICdkYXJrc2FsbW9uJzogXCIjRTk5NjdBXCIsXG4gICAgJ2RhcmtzZWFncmVlbic6IFwiIzhGQkM4RlwiLFxuICAgICdkYXJrc2xhdGVibHVlJzogXCIjNDgzRDhCXCIsXG4gICAgJ2RhcmtzbGF0ZWdyYXknOiBcIiMyRjRGNEZcIixcbiAgICAnZGFya3NsYXRlZ3JleSc6IFwiIzJGNEY0RlwiLFxuICAgICdkYXJrdHVycXVvaXNlJzogXCIjMDBDRUQxXCIsXG4gICAgJ2Rhcmt2aW9sZXQnOiBcIiM5NDAwRDNcIixcbiAgICAnZGVlcHBpbmsnOiBcIiNGRjE0OTNcIixcbiAgICAnZGVlcHNreWJsdWUnOiBcIiMwMEJGRkZcIixcbiAgICAnZGltZ3JheSc6IFwiIzY5Njk2OVwiLFxuICAgICdkaW1ncmV5JzogXCIjNjk2OTY5XCIsXG4gICAgJ2RvZGdlcmJsdWUnOiBcIiMxRTkwRkZcIixcbiAgICAnZmlyZWJyaWNrJzogXCIjQjIyMjIyXCIsXG4gICAgJ2Zsb3JhbHdoaXRlJzogXCIjRkZGQUYwXCIsXG4gICAgJ2ZvcmVzdGdyZWVuJzogXCIjMjI4QjIyXCIsXG4gICAgJ2Z1Y2hzaWEnOiBcIiNGRjAwRkZcIixcbiAgICAnZ2FpbnNib3JvJzogXCIjRENEQ0RDXCIsXG4gICAgJ2dob3N0d2hpdGUnOiBcIiNGOEY4RkZcIixcbiAgICAnZ29sZCc6IFwiI0ZGRDcwMFwiLFxuICAgICdnb2xkZW5yb2QnOiBcIiNEQUE1MjBcIixcbiAgICAnZ3JheSc6IFwiIzgwODA4MFwiLFxuICAgICdncmVlbic6IFwiIzAwODAwMFwiLFxuICAgICdncmVlbnllbGxvdyc6IFwiI0FERkYyRlwiLFxuICAgICdncmV5JzogXCIjODA4MDgwXCIsXG4gICAgJ2hvbmV5ZGV3JzogXCIjRjBGRkYwXCIsXG4gICAgJ2hvdHBpbmsnOiBcIiNGRjY5QjRcIixcbiAgICAnaW5kaWFucmVkJzogXCIjQ0Q1QzVDXCIsXG4gICAgJ2luZGlnbyc6IFwiIzRCMDA4MlwiLFxuICAgICdpdm9yeSc6IFwiI0ZGRkZGMFwiLFxuICAgICdraGFraSc6IFwiI0YwRTY4Q1wiLFxuICAgICdsYXZlbmRlcic6IFwiI0U2RTZGQVwiLFxuICAgICdsYXZlbmRlcmJsdXNoJzogXCIjRkZGMEY1XCIsXG4gICAgJ2xhd25ncmVlbic6IFwiIzdDRkMwMFwiLFxuICAgICdsZW1vbmNoaWZmb24nOiBcIiNGRkZBQ0RcIixcbiAgICAnbGlnaHRibHVlJzogXCIjQUREOEU2XCIsXG4gICAgJ2xpZ2h0Y29yYWwnOiBcIiNGMDgwODBcIixcbiAgICAnbGlnaHRjeWFuJzogXCIjRTBGRkZGXCIsXG4gICAgJ2xpZ2h0Z29sZGVucm9keWVsbG93JzogXCIjRkFGQUQyXCIsXG4gICAgJ2xpZ2h0Z3JheSc6IFwiI0QzRDNEM1wiLFxuICAgICdsaWdodGdyZWVuJzogXCIjOTBFRTkwXCIsXG4gICAgJ2xpZ2h0Z3JleSc6IFwiI0QzRDNEM1wiLFxuICAgICdsaWdodHBpbmsnOiBcIiNGRkI2QzFcIixcbiAgICAnbGlnaHRzYWxtb24nOiBcIiNGRkEwN0FcIixcbiAgICAnbGlnaHRzZWFncmVlbic6IFwiIzIwQjJBQVwiLFxuICAgICdsaWdodHNreWJsdWUnOiBcIiM4N0NFRkFcIixcbiAgICAnbGlnaHRzbGF0ZWdyYXknOiBcIiM3Nzg4OTlcIixcbiAgICAnbGlnaHRzbGF0ZWdyZXknOiBcIiM3Nzg4OTlcIixcbiAgICAnbGlnaHRzdGVlbGJsdWUnOiBcIiNCMEM0REVcIixcbiAgICAnbGlnaHR5ZWxsb3cnOiBcIiNGRkZGRTBcIixcbiAgICAnbGltZSc6IFwiIzAwRkYwMFwiLFxuICAgICdsaW1lZ3JlZW4nOiBcIiMzMkNEMzJcIixcbiAgICAnbGluZW4nOiBcIiNGQUYwRTZcIixcbiAgICAnbWFnZW50YSc6IFwiI0ZGMDBGRlwiLFxuICAgICdtYXJvb24nOiBcIiM4MDAwMDBcIixcbiAgICAnbWVkaXVtYXF1YW1hcmluZSc6IFwiIzY2Q0RBQVwiLFxuICAgICdtZWRpdW1ibHVlJzogXCIjMDAwMENEXCIsXG4gICAgJ21lZGl1bW9yY2hpZCc6IFwiI0JBNTVEM1wiLFxuICAgICdtZWRpdW1wdXJwbGUnOiBcIiM5MzcwREJcIixcbiAgICAnbWVkaXVtc2VhZ3JlZW4nOiBcIiMzQ0IzNzFcIixcbiAgICAnbWVkaXVtc2xhdGVibHVlJzogXCIjN0I2OEVFXCIsXG4gICAgJ21lZGl1bXNwcmluZ2dyZWVuJzogXCIjMDBGQTlBXCIsXG4gICAgJ21lZGl1bXR1cnF1b2lzZSc6IFwiIzQ4RDFDQ1wiLFxuICAgICdtZWRpdW12aW9sZXRyZWQnOiBcIiNDNzE1ODVcIixcbiAgICAnbWlkbmlnaHRibHVlJzogXCIjMTkxOTcwXCIsXG4gICAgJ21pbnRjcmVhbSc6IFwiI0Y1RkZGQVwiLFxuICAgICdtaXN0eXJvc2UnOiBcIiNGRkU0RTFcIixcbiAgICAnbW9jY2FzaW4nOiBcIiNGRkU0QjVcIixcbiAgICAnbmF2YWpvd2hpdGUnOiBcIiNGRkRFQURcIixcbiAgICAnbmF2eSc6IFwiIzAwMDA4MFwiLFxuICAgICdvbGRsYWNlJzogXCIjRkRGNUU2XCIsXG4gICAgJ29saXZlJzogXCIjODA4MDAwXCIsXG4gICAgJ29saXZlZHJhYic6IFwiIzZCOEUyM1wiLFxuICAgICdvcmFuZ2UnOiBcIiNGRkE1MDBcIixcbiAgICAnb3JhbmdlcmVkJzogXCIjRkY0NTAwXCIsXG4gICAgJ29yY2hpZCc6IFwiI0RBNzBENlwiLFxuICAgICdwYWxlZ29sZGVucm9kJzogXCIjRUVFOEFBXCIsXG4gICAgJ3BhbGVncmVlbic6IFwiIzk4RkI5OFwiLFxuICAgICdwYWxldHVycXVvaXNlJzogXCIjQUZFRUVFXCIsXG4gICAgJ3BhbGV2aW9sZXRyZWQnOiBcIiNEQjcwOTNcIixcbiAgICAncGFwYXlhd2hpcCc6IFwiI0ZGRUZENVwiLFxuICAgICdwZWFjaHB1ZmYnOiBcIiNGRkRBQjlcIixcbiAgICAncGVydSc6IFwiI0NEODUzRlwiLFxuICAgICdwaW5rJzogXCIjRkZDMENCXCIsXG4gICAgJ3BsdW0nOiBcIiNEREEwRERcIixcbiAgICAncG93ZGVyYmx1ZSc6IFwiI0IwRTBFNlwiLFxuICAgICdwdXJwbGUnOiBcIiM4MDAwODBcIixcbiAgICAncmViZWNjYXB1cnBsZSc6IFwiIzY2MzM5OVwiLFxuICAgICdyZWQnOiBcIiNGRjAwMDBcIixcbiAgICAncm9zeWJyb3duJzogXCIjQkM4RjhGXCIsXG4gICAgJ3JveWFsYmx1ZSc6IFwiIzQxNjlFMVwiLFxuICAgICdzYWRkbGVicm93bic6IFwiIzhCNDUxM1wiLFxuICAgICdzYWxtb24nOiBcIiNGQTgwNzJcIixcbiAgICAnc2FuZHlicm93bic6IFwiI0Y0QTQ2MFwiLFxuICAgICdzZWFncmVlbic6IFwiIzJFOEI1N1wiLFxuICAgICdzZWFzaGVsbCc6IFwiI0ZGRjVFRVwiLFxuICAgICdzaWVubmEnOiBcIiNBMDUyMkRcIixcbiAgICAnc2lsdmVyJzogXCIjQzBDMEMwXCIsXG4gICAgJ3NreWJsdWUnOiBcIiM4N0NFRUJcIixcbiAgICAnc2xhdGVibHVlJzogXCIjNkE1QUNEXCIsXG4gICAgJ3NsYXRlZ3JheSc6IFwiIzcwODA5MFwiLFxuICAgICdzbGF0ZWdyZXknOiBcIiM3MDgwOTBcIixcbiAgICAnc25vdyc6IFwiI0ZGRkFGQVwiLFxuICAgICdzcHJpbmdncmVlbic6IFwiIzAwRkY3RlwiLFxuICAgICdzdGVlbGJsdWUnOiBcIiM0NjgyQjRcIixcbiAgICAndGFuJzogXCIjRDJCNDhDXCIsXG4gICAgJ3RlYWwnOiBcIiMwMDgwODBcIixcbiAgICAndGhpc3RsZSc6IFwiI0Q4QkZEOFwiLFxuICAgICd0b21hdG8nOiBcIiNGRjYzNDdcIixcbiAgICAndHVycXVvaXNlJzogXCIjNDBFMEQwXCIsXG4gICAgJ3Zpb2xldCc6IFwiI0VFODJFRVwiLFxuICAgICd3aGVhdCc6IFwiI0Y1REVCM1wiLFxuICAgICd3aGl0ZSc6IFwiI0ZGRkZGRlwiLFxuICAgICd3aGl0ZXNtb2tlJzogXCIjRjVGNUY1XCIsXG4gICAgJ3llbGxvdyc6IFwiI0ZGRkYwMFwiLFxuICAgICd5ZWxsb3dncmVlbic6IFwiIzlBQ0QzMlwiXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNpcmNsZSA9IGV4cG9ydHMuUmVjdGFuZ2xlID0gZXhwb3J0cy5Qb2x5Z29uID0gZXhwb3J0cy5Qb2x5bGluZSA9IGV4cG9ydHMuTGluZVNlZ21lbnQgPSBleHBvcnRzLkRyYXdPYmplY3QgPSB2b2lkIDA7XG5jb25zdCBHZW9tZXRyaWVzXzEgPSByZXF1aXJlKFwiLi9HZW9tZXRyaWVzXCIpO1xuY29uc3QgTWF0ZXJpYWxzXzEgPSByZXF1aXJlKFwiLi9NYXRlcmlhbHNcIik7XG5jb25zdCBWZWN0b3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3JcIikpO1xuY2xhc3MgRHJhd09iamVjdCB7XG4gICAgZ2VvbWV0cnk7XG4gICAgbWF0ZXJpYWw7XG4gICAgdHlwZTtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBnZW9tZXRyeSwgbWF0ZXJpYWwpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgfVxuICAgIGRyYXcoc2NlbmUpIHtcbiAgICAgICAgaWYgKHNjZW5lLmN0eCkge1xuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gc2NlbmUuY2FtZXJhO1xuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC5kcmF3KHNjZW5lLmN0eCk7XG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldF92aWV3X3BvaW50cyhjYW1lcmEpO1xuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5kcmF3KHNjZW5lLmN0eCwgdGhpcy5tYXRlcmlhbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRyYXdPYmplY3QgPSBEcmF3T2JqZWN0O1xuY2xhc3MgTGluZVNlZ21lbnQgZXh0ZW5kcyBEcmF3T2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih7IGEsIGIgfSwgbWF0ZXJpYWxDb25maWcpIHtcbiAgICAgICAgc3VwZXIoJ2xpbmUnLCBuZXcgR2VvbWV0cmllc18xLkxpbmVTZWdtZW50R2VvbWV0cnkoe1xuICAgICAgICAgICAgYTogbmV3IFZlY3Rvcl8xLmRlZmF1bHQoYSksXG4gICAgICAgICAgICBiOiBuZXcgVmVjdG9yXzEuZGVmYXVsdChiKVxuICAgICAgICB9KSwgbmV3IE1hdGVyaWFsc18xLkxpbmVNYXRlcmlhbChtYXRlcmlhbENvbmZpZykpO1xuICAgIH1cbn1cbmV4cG9ydHMuTGluZVNlZ21lbnQgPSBMaW5lU2VnbWVudDtcbmNsYXNzIFBvbHlsaW5lIGV4dGVuZHMgRHJhd09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoeyBwb2ludHMgfSwgbWF0ZXJpYWxDb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcigncG9seWxpbmUnLCBuZXcgR2VvbWV0cmllc18xLlBvbHlsaW5lR2VvbWV0cnkoeyBwb2ludHMgfSksIG5ldyBNYXRlcmlhbHNfMS5TaGFwZU1hdGVyaWFsKG1hdGVyaWFsQ29uZmlnKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Qb2x5bGluZSA9IFBvbHlsaW5lO1xuY2xhc3MgUG9seWdvbiBleHRlbmRzIERyYXdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHsgcG9pbnRzIH0sIG1hdGVyaWFsQ29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoJ3BvbHlnb24nLCBuZXcgR2VvbWV0cmllc18xLlBvbHlnb25HZW9tZXRyeSh7IHBvaW50cyB9KSwgbmV3IE1hdGVyaWFsc18xLlNoYXBlTWF0ZXJpYWwobWF0ZXJpYWxDb25maWcpKTtcbiAgICB9XG59XG5leHBvcnRzLlBvbHlnb24gPSBQb2x5Z29uO1xuY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgRHJhd09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoeyBwb3NpdGlvbiwgc2l6ZSB9LCBtYXRlcmlhbENvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCdyZWN0YW5nbGUnLCBuZXcgR2VvbWV0cmllc18xLlJlY3RhbmdsZUdlb21ldHJ5KHsgcG9zaXRpb24sIHNpemUgfSksIG5ldyBNYXRlcmlhbHNfMS5TaGFwZU1hdGVyaWFsKG1hdGVyaWFsQ29uZmlnKSk7XG4gICAgfVxufVxuZXhwb3J0cy5SZWN0YW5nbGUgPSBSZWN0YW5nbGU7XG5jbGFzcyBDaXJjbGUgZXh0ZW5kcyBEcmF3T2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih7IGNlbnRlciwgcmFkaXVzIH0sIG1hdGVyaWFsQ29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoJ2NpcmNsZScsIG5ldyBHZW9tZXRyaWVzXzEuQ2lyY2xlR2VvbWV0cnkoeyBjZW50ZXIsIHJhZGl1cyB9KSwgbmV3IE1hdGVyaWFsc18xLlNoYXBlTWF0ZXJpYWwobWF0ZXJpYWxDb25maWcpKTtcbiAgICB9XG59XG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DaXJjbGVHZW9tZXRyeSA9IGV4cG9ydHMuUmVjdGFuZ2xlR2VvbWV0cnkgPSBleHBvcnRzLlBvbHlnb25HZW9tZXRyeSA9IGV4cG9ydHMuUG9seWxpbmVHZW9tZXRyeSA9IGV4cG9ydHMuTGluZVNlZ21lbnRHZW9tZXRyeSA9IHZvaWQgMDtcbmNvbnN0IFZlY3Rvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ZlY3RvclwiKSk7XG5mdW5jdGlvbiBoYXNGaWxsKG1hdGVyaWFsKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4obWF0ZXJpYWwgJiYgJ2ZpbGxFbmFibGVkJyBpbiBtYXRlcmlhbCAmJiBtYXRlcmlhbC5maWxsRW5hYmxlZCk7XG59XG5mdW5jdGlvbiBmaWxsQW5kU3Ryb2tlKGN0eCwgbWF0ZXJpYWwpIHtcbiAgICBpZiAoaGFzRmlsbChtYXRlcmlhbCkpIHtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xufVxuY2xhc3MgTGluZVNlZ21lbnRHZW9tZXRyeSB7XG4gICAgcG9pbnRzO1xuICAgIHZpZXdfcG9pbnRzO1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cykge1xuICAgICAgICB0aGlzLnBvaW50cyA9IHtcbiAgICAgICAgICAgIGE6IG5ldyBWZWN0b3JfMS5kZWZhdWx0KHBvaW50cy5hKSxcbiAgICAgICAgICAgIGI6IG5ldyBWZWN0b3JfMS5kZWZhdWx0KHBvaW50cy5iKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnZpZXdfcG9pbnRzID0ge1xuICAgICAgICAgICAgYTogbmV3IFZlY3Rvcl8xLmRlZmF1bHQoKSxcbiAgICAgICAgICAgIGI6IG5ldyBWZWN0b3JfMS5kZWZhdWx0KClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiIH0gPSB0aGlzLnZpZXdfcG9pbnRzO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oYS54LCBhLnkpO1xuICAgICAgICBjdHgubGluZVRvKGIueCwgYi55KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBzZXRfdmlld19wb2ludHMoY2FtZXJhKSB7XG4gICAgICAgIHRoaXMudmlld19wb2ludHMuYSA9IGNhbWVyYS5wb2ludGVyKHRoaXMucG9pbnRzLmEpO1xuICAgICAgICB0aGlzLnZpZXdfcG9pbnRzLmIgPSBjYW1lcmEucG9pbnRlcih0aGlzLnBvaW50cy5iKTtcbiAgICB9XG59XG5leHBvcnRzLkxpbmVTZWdtZW50R2VvbWV0cnkgPSBMaW5lU2VnbWVudEdlb21ldHJ5O1xuY2xhc3MgUG9seWxpbmVHZW9tZXRyeSB7XG4gICAgcG9pbnRzO1xuICAgIHZpZXdfcG9pbnRzO1xuICAgIGNvbnN0cnVjdG9yKHsgcG9pbnRzIH0pIHtcbiAgICAgICAgdGhpcy5wb2ludHMgPSB7XG4gICAgICAgICAgICBwb2ludHM6IHBvaW50cy5tYXAocG9pbnQgPT4gbmV3IFZlY3Rvcl8xLmRlZmF1bHQocG9pbnQpKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnZpZXdfcG9pbnRzID0ge1xuICAgICAgICAgICAgcG9pbnRzOiBbXVxuICAgICAgICB9O1xuICAgIH1cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjb25zdCBwb2ludHMgPSB0aGlzLnZpZXdfcG9pbnRzLnBvaW50cztcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcbiAgICAgICAgcG9pbnRzLnNsaWNlKDEpLmZvckVhY2gocG9pbnQgPT4gY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55KSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgc2V0X3ZpZXdfcG9pbnRzKGNhbWVyYSkge1xuICAgICAgICB0aGlzLnZpZXdfcG9pbnRzLnBvaW50cyA9IHRoaXMucG9pbnRzLnBvaW50cy5tYXAocG9pbnQgPT4gY2FtZXJhLnBvaW50ZXIocG9pbnQpKTtcbiAgICB9XG59XG5leHBvcnRzLlBvbHlsaW5lR2VvbWV0cnkgPSBQb2x5bGluZUdlb21ldHJ5O1xuY2xhc3MgUG9seWdvbkdlb21ldHJ5IHtcbiAgICBwb2ludHM7XG4gICAgdmlld19wb2ludHM7XG4gICAgY29uc3RydWN0b3IoeyBwb2ludHMgfSkge1xuICAgICAgICB0aGlzLnBvaW50cyA9IHtcbiAgICAgICAgICAgIHBvaW50czogcG9pbnRzLm1hcChwb2ludCA9PiBuZXcgVmVjdG9yXzEuZGVmYXVsdChwb2ludCkpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmlld19wb2ludHMgPSB7XG4gICAgICAgICAgICBwb2ludHM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuICAgIGRyYXcoY3R4LCBtYXRlcmlhbCkge1xuICAgICAgICBjb25zdCBwb2ludHMgPSB0aGlzLnZpZXdfcG9pbnRzLnBvaW50cztcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcbiAgICAgICAgcG9pbnRzLnNsaWNlKDEpLmZvckVhY2gocG9pbnQgPT4gY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55KSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgZmlsbEFuZFN0cm9rZShjdHgsIG1hdGVyaWFsKTtcbiAgICB9XG4gICAgc2V0X3ZpZXdfcG9pbnRzKGNhbWVyYSkge1xuICAgICAgICB0aGlzLnZpZXdfcG9pbnRzLnBvaW50cyA9IHRoaXMucG9pbnRzLnBvaW50cy5tYXAocG9pbnQgPT4gY2FtZXJhLnBvaW50ZXIocG9pbnQpKTtcbiAgICB9XG59XG5leHBvcnRzLlBvbHlnb25HZW9tZXRyeSA9IFBvbHlnb25HZW9tZXRyeTtcbmNsYXNzIFJlY3RhbmdsZUdlb21ldHJ5IHtcbiAgICBwb2ludHM7XG4gICAgdmlld19wb2ludHM7XG4gICAgY29uc3RydWN0b3IoeyBwb3NpdGlvbiwgc2l6ZSB9KSB7XG4gICAgICAgIHRoaXMucG9pbnRzID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3JfMS5kZWZhdWx0KHBvc2l0aW9uKSxcbiAgICAgICAgICAgIHNpemU6IG5ldyBWZWN0b3JfMS5kZWZhdWx0KHNpemUpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmlld19wb2ludHMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3Rvcl8xLmRlZmF1bHQoKSxcbiAgICAgICAgICAgIHNpemU6IG5ldyBWZWN0b3JfMS5kZWZhdWx0KClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZHJhdyhjdHgsIG1hdGVyaWFsKSB7XG4gICAgICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IHRoaXMudmlld19wb2ludHM7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgICAgICBmaWxsQW5kU3Ryb2tlKGN0eCwgbWF0ZXJpYWwpO1xuICAgIH1cbiAgICBzZXRfdmlld19wb2ludHMoY2FtZXJhKSB7XG4gICAgICAgIHRoaXMudmlld19wb2ludHMucG9zaXRpb24gPSBjYW1lcmEucG9pbnRlcih0aGlzLnBvaW50cy5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMudmlld19wb2ludHMuc2l6ZSA9IGNhbWVyYS5wb2ludGVyKHRoaXMucG9pbnRzLnBvc2l0aW9uLnBsdXModGhpcy5wb2ludHMuc2l6ZSkpLnN1Yih0aGlzLnZpZXdfcG9pbnRzLnBvc2l0aW9uKTtcbiAgICB9XG59XG5leHBvcnRzLlJlY3RhbmdsZUdlb21ldHJ5ID0gUmVjdGFuZ2xlR2VvbWV0cnk7XG5jbGFzcyBDaXJjbGVHZW9tZXRyeSB7XG4gICAgcG9pbnRzO1xuICAgIHZpZXdfcG9pbnRzO1xuICAgIHJhZGl1cztcbiAgICB2aWV3X3JhZGl1cztcbiAgICBjb25zdHJ1Y3Rvcih7IGNlbnRlciwgcmFkaXVzIH0pIHtcbiAgICAgICAgdGhpcy5wb2ludHMgPSB7XG4gICAgICAgICAgICBjZW50ZXI6IG5ldyBWZWN0b3JfMS5kZWZhdWx0KGNlbnRlcilcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52aWV3X3BvaW50cyA9IHtcbiAgICAgICAgICAgIGNlbnRlcjogbmV3IFZlY3Rvcl8xLmRlZmF1bHQoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy52aWV3X3JhZGl1cyA9IDA7XG4gICAgfVxuICAgIGRyYXcoY3R4LCBtYXRlcmlhbCkge1xuICAgICAgICBjb25zdCB7IGNlbnRlciB9ID0gdGhpcy52aWV3X3BvaW50cztcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKGNlbnRlci54LCBjZW50ZXIueSwgTWF0aC5hYnModGhpcy52aWV3X3JhZGl1cyksIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgZmlsbEFuZFN0cm9rZShjdHgsIG1hdGVyaWFsKTtcbiAgICB9XG4gICAgc2V0X3ZpZXdfcG9pbnRzKGNhbWVyYSkge1xuICAgICAgICB0aGlzLnZpZXdfcG9pbnRzLmNlbnRlciA9IGNhbWVyYS5wb2ludGVyKHRoaXMucG9pbnRzLmNlbnRlcik7XG4gICAgICAgIHRoaXMudmlld19yYWRpdXMgPSB0aGlzLnJhZGl1cyAqIGNhbWVyYS5kcmF3U2NhbGU7XG4gICAgfVxufVxuZXhwb3J0cy5DaXJjbGVHZW9tZXRyeSA9IENpcmNsZUdlb21ldHJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNoYXBlTWF0ZXJpYWwgPSBleHBvcnRzLkxpbmVNYXRlcmlhbCA9IHZvaWQgMDtcbmNvbnN0IENvbG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29sb3JcIikpO1xuY2xhc3MgTGluZU1hdGVyaWFsIHtcbiAgICBkZWZhdWx0ID0ge1xuICAgICAgICBsaW5lQ29sb3I6ICcjMDAwJyxcbiAgICAgICAgbGluZVdpZHRoOiAxXG4gICAgfTtcbiAgICBsaW5lQ29sb3I7XG4gICAgbGluZVdpZHRoO1xuICAgIGNvbnN0cnVjdG9yKHsgbGluZUNvbG9yLCBsaW5lV2lkdGggfSkge1xuICAgICAgICB0aGlzLmxpbmVDb2xvciA9IG5ldyBDb2xvcl8xLmRlZmF1bHQobGluZUNvbG9yID8gbGluZUNvbG9yIDogdGhpcy5kZWZhdWx0LmxpbmVDb2xvcik7XG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gbGluZVdpZHRoID8gbGluZVdpZHRoIDogdGhpcy5kZWZhdWx0LmxpbmVXaWR0aDtcbiAgICB9XG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmxpbmVDb2xvci5oZXg7XG4gICAgfVxufVxuZXhwb3J0cy5MaW5lTWF0ZXJpYWwgPSBMaW5lTWF0ZXJpYWw7XG5jbGFzcyBTaGFwZU1hdGVyaWFsIHtcbiAgICBkZWZhdWx0ID0ge1xuICAgICAgICBzdHJva2VDb2xvcjogJyMwMDAnLFxuICAgICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgICAgZmlsbENvbG9yOiAnIzAwMCdcbiAgICB9O1xuICAgIHN0cm9rZUNvbG9yO1xuICAgIHN0cm9rZVdpZHRoO1xuICAgIGZpbGxDb2xvcjtcbiAgICBjb25zdHJ1Y3Rvcih7IHN0cm9rZUNvbG9yLCBzdHJva2VXaWR0aCwgZmlsbENvbG9yIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnN0cm9rZUNvbG9yID0gbmV3IENvbG9yXzEuZGVmYXVsdChzdHJva2VDb2xvciA/IHN0cm9rZUNvbG9yIDogdGhpcy5kZWZhdWx0LnN0cm9rZUNvbG9yKTtcbiAgICAgICAgdGhpcy5zdHJva2VXaWR0aCA9IHN0cm9rZVdpZHRoID09PSB1bmRlZmluZWQgPyB0aGlzLmRlZmF1bHQuc3Ryb2tlV2lkdGggOiBzdHJva2VXaWR0aDtcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBmaWxsQ29sb3IgPT09IG51bGwgPyBudWxsIDogbmV3IENvbG9yXzEuZGVmYXVsdChmaWxsQ29sb3IgPyBmaWxsQ29sb3IgOiB0aGlzLmRlZmF1bHQuZmlsbENvbG9yKTtcbiAgICB9XG4gICAgZ2V0IGZpbGxFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxsQ29sb3IgIT09IG51bGw7XG4gICAgfVxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZVdpZHRoO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yLmhleDtcbiAgICAgICAgaWYgKHRoaXMuZmlsbENvbG9yKSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3IuaGV4O1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5TaGFwZU1hdGVyaWFsID0gU2hhcGVNYXRlcmlhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2FtZXJhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ2FtZXJhXCIpKTtcbmNsYXNzIFNjZW5lIHtcbiAgICBjYW1lcmE7XG4gICAgY2FudmFzO1xuICAgIHZpZXdPYmplY3RzO1xuICAgIGN0eDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLnZpZXdPYmplY3RzID0gW107XG4gICAgICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB9XG4gICAgYWRkKG9iaikge1xuICAgICAgICB0aGlzLnZpZXdPYmplY3RzLnB1c2gob2JqKTtcbiAgICB9XG4gICAgc2V0Q2FudmFzKGNhbnZhc0NvbnRhaW5lcikge1xuICAgICAgICBjYW52YXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gY2FudmFzQ29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBjYW52YXNDb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FtZXJhLnNjcmVlbi5zZXQod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmN0eCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy52aWV3T2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZHJhdyh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVmVjdG9yIHtcbiAgICB4ID0gMDtcbiAgICB5ID0gMDtcbiAgICBpc1ZlY3RvciA9IHRydWU7XG4gICAgY29uc3RydWN0b3IocG9pbnQpIHtcbiAgICAgICAgaWYgKFZlY3Rvci5pc1ZlY3Rvcihwb2ludCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFZlY3Rvci5pc1BhaXIocG9pbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldCguLi5wb2ludCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGlzVmVjdG9yKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgVmVjdG9yO1xuICAgIH1cbiAgICBzdGF0aWMgaXNQYWlyKG9iaikge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT0gMjtcbiAgICB9XG4gICAgc3RhdGljIGlzUG9pbnQob2JqKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuaXNWZWN0b3Iob2JqKSB8fCBWZWN0b3IuaXNQYWlyKG9iaik7XG4gICAgfVxuICAgIHNldCh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXRTY2FsYXIocykge1xuICAgICAgICB0aGlzLnggPSBzO1xuICAgICAgICB0aGlzLnkgPSBzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMpO1xuICAgIH1cbiAgICBhZGRTY2FsZWRWZWN0b3Iob3RoZXIsIHMpIHtcbiAgICAgICAgY29uc3QgdiA9IG5ldyBWZWN0b3Iob3RoZXIpO1xuICAgICAgICB0aGlzLnggKz0gdi54ICogcztcbiAgICAgICAgdGhpcy55ICs9IHYueSAqIHM7XG4gICAgfVxuICAgIGFkZChvdGhlcikge1xuICAgICAgICBjb25zdCB2ID0gbmV3IFZlY3RvcihvdGhlcik7XG4gICAgICAgIHRoaXMueCArPSB2Lng7XG4gICAgICAgIHRoaXMueSArPSB2Lnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhZGRTY2FsYXIocykge1xuICAgICAgICB0aGlzLnggKz0gcztcbiAgICAgICAgdGhpcy55ICs9IHM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdWIob3RoZXIpIHtcbiAgICAgICAgY29uc3QgdiA9IG5ldyBWZWN0b3Iob3RoZXIpO1xuICAgICAgICB0aGlzLnggLT0gdi54O1xuICAgICAgICB0aGlzLnkgLT0gdi55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3ViU2NhbGFyKHMpIHtcbiAgICAgICAgdGhpcy54IC09IHM7XG4gICAgICAgIHRoaXMueSAtPSBzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbXVsKHMpIHtcbiAgICAgICAgdGhpcy54ICo9IHM7XG4gICAgICAgIHRoaXMueSAqPSBzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdHJhbnNmb3JtKG1hdHJpeCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXM7XG4gICAgICAgIHRoaXMueCA9IHggKiBtYXRyaXhbMF1bMF0gKyB5ICogbWF0cml4WzBdWzFdO1xuICAgICAgICB0aGlzLnkgPSB4ICogbWF0cml4WzFdWzBdICsgeSAqIG1hdHJpeFsxXVsxXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZsb29yKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNlaWwoKSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGguY2VpbCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLmNlaWwodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJvdW5kKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG5lZ2F0ZSgpIHtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRvdChvdGhlcikge1xuICAgICAgICBjb25zdCB2ID0gbmV3IFZlY3RvcihvdGhlcik7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XG4gICAgfVxuICAgIGNyb3NzKG90aGVyKSB7XG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmVjdG9yKG90aGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHYueSAtIHRoaXMueSAqIHYueDtcbiAgICB9XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRvdCh0aGlzKSk7XG4gICAgfVxuICAgIHNldCBsZW5ndGgobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubm9ybWFsaXplKCkubXVsKGxlbmd0aCk7XG4gICAgfVxuICAgIGdldCBwYWlyKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9XG4gICAgZGlzdGFuY2Uob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWludXMob3RoZXIpLmxlbmd0aDtcbiAgICB9XG4gICAgcGx1cyhvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmFkZChvdGhlcik7XG4gICAgfVxuICAgIG1pbnVzKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuc3ViKG90aGVyKTtcbiAgICB9XG4gICAgdGltZXMobnVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubXVsKG51bSk7XG4gICAgfVxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsKHRoaXMubGVuZ3RoID8gMSAvIHRoaXMubGVuZ3RoIDogMSk7XG4gICAgfVxuICAgIGxlcnAob3RoZXIsIGFscGhhKSB7XG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmVjdG9yKG90aGVyKTtcbiAgICAgICAgdGhpcy54ICs9ICh2LnggLSB0aGlzLngpICogYWxwaGE7XG4gICAgICAgIHRoaXMueSArPSAodi55IC0gdGhpcy55KSAqIGFscGhhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZXF1YWxzKG90aGVyKSB7XG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmVjdG9yKG90aGVyKTtcbiAgICAgICAgcmV0dXJuICgodi54ID09PSB0aGlzLngpICYmICh2LnkgPT09IHRoaXMueSkpO1xuICAgIH1cbiAgICByb3RhdGUoYW5nbGUsIG90aGVyID0gWzAsIDBdKSB7XG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmVjdG9yKG90aGVyKTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlKSwgcyA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMueCAtIHYueDtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMueSAtIHYueTtcbiAgICAgICAgdGhpcy54ID0geCAqIGMgLSB5ICogcyArIHYueDtcbiAgICAgICAgdGhpcy55ID0geCAqIHMgKyB5ICogYyArIHYueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJhbmRvbSgpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgeWllbGQgdGhpcy54O1xuICAgICAgICB5aWVsZCB0aGlzLnk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2RlY2FydGVzLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkNpcmNsZSIsIlJlY3RhbmdsZSIsIlBvbHlnb24iLCJQb2x5bGluZSIsIkxpbmVTZWdtZW50IiwiRHJhd09iamVjdCIsIlNoYXBlTWF0ZXJpYWwiLCJMaW5lTWF0ZXJpYWwiLCJDaXJjbGVHZW9tZXRyeSIsIlJlY3RhbmdsZUdlb21ldHJ5IiwiUG9seWdvbkdlb21ldHJ5IiwiUG9seWxpbmVHZW9tZXRyeSIsIkxpbmVTZWdtZW50R2VvbWV0cnkiLCJTY2VuZSIsIkNhbWVyYSIsIkNvbG9yIiwiVmVjdG9yIiwiVmVjdG9yXzEiLCJyZXF1aXJlIiwiQ29sb3JfMSIsIkNhbWVyYV8xIiwiU2NlbmVfMSIsIkdlb21ldHJpZXNfMSIsImVudW1lcmFibGUiLCJnZXQiLCJNYXRlcmlhbHNfMSIsIkRyYXdPYmplY3RzXzEiLCJjZW50ZXIiLCJzY2FsZSIsInNjcmVlbiIsInRpbWVzIiwiZHJhd1NjYWxlIiwic3ViIiwiTWF0aCIsIm1pbiIsIngiLCJ5IiwicG9pbnRlciIsInBsdXMiLCJkcmF3Q2VudGVyIiwibG9jIiwibWludXMiLCJjdXJzb3IiLCJmYWN0b3IiLCJmaXhlZCIsIm11bCIsIm1vdmVtZW50IiwiZGF0YSIsImlzQ29sb3IiLCJzZXQiLCJyIiwiZyIsImIiLCJoZXgiLCJpc1RyaXBsZSIsInJnYiIsInRvX2NvbG9yX3ZhbHVlIiwicm91bmQiLCJtYXAiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsIl9jb2xvcktleXdvcmRzIiwiaGV4UmVnIiwicmVwbGFjZSIsIl8iLCJzdWJzdHJpbmciLCJtYXRjaCIsInBhcnNlSW50Iiwib3RoZXIiLCJwcm9wb3J0aW9uIiwibWl4X2NoYW5uZWwiLCJhIiwiYyIsIm9iaiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInR5cGUiLCJnZW9tZXRyeSIsIm1hdGVyaWFsIiwic2NlbmUiLCJjdHgiLCJjYW1lcmEiLCJkcmF3Iiwic2V0X3ZpZXdfcG9pbnRzIiwibWF0ZXJpYWxDb25maWciLCJwb2ludHMiLCJwb3NpdGlvbiIsInNpemUiLCJyYWRpdXMiLCJoYXNGaWxsIiwiQm9vbGVhbiIsImZpbGxFbmFibGVkIiwiZmlsbEFuZFN0cm9rZSIsImZpbGwiLCJzdHJva2UiLCJ2aWV3X3BvaW50cyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInBvaW50Iiwic2xpY2UiLCJmb3JFYWNoIiwiY2xvc2VQYXRoIiwicmVjdCIsInZpZXdfcmFkaXVzIiwiYXJjIiwiYWJzIiwiUEkiLCJsaW5lQ29sb3IiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlV2lkdGgiLCJmaWxsQ29sb3IiLCJ1bmRlZmluZWQiLCJmaWxsU3R5bGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2aWV3T2JqZWN0cyIsInB1c2giLCJjYW52YXNDb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImdldENvbnRleHQiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2xlYXJSZWN0IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJpc1ZlY3RvciIsImlzUGFpciIsInMiLCJ2IiwibWF0cml4IiwiZmxvb3IiLCJjZWlsIiwic3FydCIsImRvdCIsIm5vcm1hbGl6ZSIsImNsb25lIiwiYWRkIiwibnVtIiwiYWxwaGEiLCJhbmdsZSIsImNvcyIsInNpbiIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=
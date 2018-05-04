"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DragM = function (_React$Component) {
  _inherits(DragM, _React$Component);

  function DragM() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DragM);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DragM.__proto__ || Object.getPrototypeOf(DragM)).call.apply(_ref, [this].concat(args))), _this), _this.position = {
      startX: 0,
      startY: 0,
      dx: 0,
      dy: 0,
      tx: 0,
      ty: 0
    }, _this.start = function (event) {
      if (event.button != 0) {
        //只允许左键，右键问题在于不选择conextmenu就不会触发mouseup事件
        return;
      }
      document.addEventListener("mousemove", _this.docMove);
      _this.position.startX = event.pageX - _this.position.dx;
      _this.position.startY = event.pageY - _this.position.dy;
    }, _this.docMove = function (event) {
      var tx = event.pageX - _this.position.startX;
      var ty = event.pageY - _this.position.startY;
      var transformStr = "translate(" + tx + "px," + ty + "px)";
      _this.props.updateTransform(transformStr, tx, ty, _this.tdom);
      _this.position.dx = tx;
      _this.position.dy = ty;
    }, _this.docMouseUp = function (event) {
      document.removeEventListener("mousemove", _this.docMove);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DragM, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tdom.addEventListener("mousedown", this.start);
      //用document移除对mousemove事件的监听
      document.addEventListener("mouseup", this.docMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.tdom.removeEventListener("mousedown", this.start);
      document.removeEventListener("mouseup", this.docMouseUp);
      document.removeEventListener("mousemove", this.docMove);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          style = _props.style;

      var newStyle = _extends({}, style, { cursor: "move", userSelect: "none" });
      return _react2.default.cloneElement(_react2.default.Children.only(children), {
        ref: function ref(tdom) {
          return _this2.tdom = tdom;
        },
        style: newStyle
      });
    }
  }]);

  return DragM;
}(_react2.default.Component);

DragM.propTypes = {
  children: _propTypes2.default.element.isRequired
};
DragM.defaultProps = {
  //默认是移动children dom,覆盖该方法，可以把tranform行为同步给外部
  updateTransform: function updateTransform(transformStr, tx, ty, tdom) {
    tdom.style.transform = transformStr;
  }
};
exports.default = DragM;
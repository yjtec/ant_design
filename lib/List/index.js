'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/es/table');

var _table2 = _interopRequireDefault(_table);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/table/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      var _props = this.props,
          _props$data = _props.data,
          data = _props$data.data,
          pagination = _props$data.pagination,
          _props$field = _props.field,
          columns = _props$field.columns,
          page = _props$field.page,
          onChange = _props.onChange,
          loading = _props.loading;

      var tableColumns = Object.keys(columns).map(function (item) {
        var obj = {
          title: columns[item].label,
          dataIndex: item,
          key: item
        };
        if (columns[item].render) {
          obj.render = columns[item].render;
        }
        return obj;
      });
      var pageProps = _extends({}, page, {
        onChange: onChange,
        current: pagination.page,
        total: pagination.total
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_table2.default, {
          columns: tableColumns,
          dataSource: data,
          pagination: pageProps,
          loading: loading
        })
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
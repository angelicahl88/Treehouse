(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductCategoryRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'th',
      { colSpan: '2' },
      props.category
    )
  );
}

ProductCategoryRow.propTypes = {
  category: _react2.default.PropTypes.string.isRequired
};

var ProductRow = _react2.default.createClass({
  displayName: 'ProductRow',

  render: function render() {
    var name = this.props.product.stocked ? this.props.product.name : _react2.default.createElement(
      'span',
      { className: 'noStock' },
      this.props.product.name
    );

    return _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        null,
        name
      ),
      _react2.default.createElement(
        'td',
        null,
        this.props.product.price
      )
    );
  }
});

var ProductTable = _react2.default.createClass({
  displayName: 'ProductTable',

  propTypes: {
    products: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
      category: _react2.default.PropTypes.string.isRequired,
      price: _react2.default.PropTypes.string.isRequired,
      stocked: _react2.default.PropTypes.bool.isRequired,
      name: _react2.default.PropTypes.string.isRequired
    })).isRequired
  },

  render: function render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function (product) {
      if (product.name.indexOf(this.props.filterText) === -1 || !product.stocked && this.props.inStockOnly) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(_react2.default.createElement(ProductCategoryRow, { category: product.category, key: product.category }));
      }
      rows.push(_react2.default.createElement(ProductRow, { product: product, key: product.name }));
      lastCategory = product.category;
    }.bind(this));

    return _react2.default.createElement(
      'table',
      null,
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Product'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Price'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        rows
      )
    );
  }
});

var SearchBar = _react2.default.createClass({
  displayName: 'SearchBar',

  propTypes: {
    filterText: _react2.default.PropTypes.string.isRequired,
    inStockOnly: _react2.default.PropTypes.bool.isRequired,
    onUserInput: _react2.default.PropTypes.func.isRequired
  },

  handleChange: function handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value, this.refs.inStockOnlyInput.checked);
  },

  render: function render() {
    return _react2.default.createElement(
      'form',
      null,
      _react2.default.createElement('input', { className: 'search', type: 'text', placeholder: 'Search...', value: this.props.filterText, ref: 'filterTextInput', onChange: this.handleChange }),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement('input', { className: 'checkbox', type: 'checkbox', checked: this.props.inStockOnly, ref: 'inStockOnlyInput', onChange: this.handleChange }),
        ' ',
        'Only show products in stock'
      )
    );
  }
});

var FilterableProductTable = _react2.default.createClass({
  displayName: 'FilterableProductTable',

  getInitialState: function getInitialState() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  handleUserInput: function handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(SearchBar, { filterText: this.state.filterText, inStockOnly: this.state.inStockOnly, onUserInput: this.handleUserInput }),
      _react2.default.createElement(ProductTable, { products: this.props.products, filterText: this.state.filterText, inStockOnly: this.state.inStockOnly })
    );
  }
});

var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

_reactDom2.default.render(_react2.default.createElement(FilterableProductTable, { products: PRODUCTS }), document.getElementById('container'));

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFHQSxTQUFTLGtCQUFULENBQTRCLEtBQTVCLEVBQW1DO0FBQ2pDLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUksU0FBUSxHQUFaO0FBQWlCLFlBQU07QUFBdkI7QUFERixHQURGO0FBS0Q7O0FBRUQsbUJBQW1CLFNBQW5CLEdBQStCO0FBQzdCLFlBQVUsZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QjtBQURKLENBQS9COztBQUtBLElBQUksYUFBYSxnQkFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQ2pDLFVBQVEsa0JBQVc7QUFDakIsUUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsT0FBbkIsR0FBNkIsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFoRCxHQUNUO0FBQUE7QUFBQSxRQUFNLFdBQVUsU0FBaEI7QUFDRyxXQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CO0FBRHRCLEtBREY7O0FBS0EsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSztBQUFMLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBSyxhQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CO0FBQXhCO0FBRkYsS0FERjtBQU1EO0FBYmdDLENBQWxCLENBQWpCOztBQWlCQSxJQUFJLGVBQWUsZ0JBQU0sV0FBTixDQUFrQjtBQUFBOztBQUNuQyxhQUFXO0FBQ1QsY0FBVSxnQkFBTSxTQUFOLENBQWdCLE9BQWhCLENBQXdCLGdCQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0I7QUFDdEQsZ0JBQVUsZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQURxQjtBQUV0RCxhQUFPLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFGd0I7QUFHdEQsZUFB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TCxDQUFXLFVBQWxDLEVBQThDLGFBQWEsS0FBSyxLQUFMLENBQVcsV0FBdEUsRUFBbUYsYUFBYSxLQUFLLGVBQXJHLEdBREY7QUFFRSxvQ0FBQyxZQUFELElBQWMsVUFBVSxLQUFLLEtBQUwsQ0FBVyxRQUFuQyxFQUE2QyxZQUFZLEtBQUssS0FBTCxDQUFXLFVBQXBFLEVBQWdGLGFBQWEsS0FBSyxLQUFMLENBQVcsV0FBeEc7QUFGRixLQURGO0FBTUQ7QUF0QjRDLENBQWxCLENBQTdCOztBQXlCQSxJQUFJLFdBQVcsQ0FDYixFQUFDLFVBQVUsZ0JBQVgsRUFBNkIsT0FBTyxRQUFwQyxFQUE4QyxTQUFTLElBQXZELEVBQTZELE1BQU0sVUFBbkUsRUFEYSxFQUViLEVBQUMsVUFBVSxnQkFBWCxFQUE2QixPQUFPLE9BQXBDLEVBQTZDLFNBQVMsSUFBdEQsRUFBNEQsTUFBTSxVQUFsRSxFQUZhLEVBR2IsRUFBQyxVQUFVLGdCQUFYLEVBQTZCLE9BQU8sUUFBcEMsRUFBOEMsU0FBUyxLQUF2RCxFQUE4RCxNQUFNLFlBQXBFLEVBSGEsRUFJYixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFFBQWpDLEVBQTJDLFNBQVMsSUFBcEQsRUFBMEQsTUFBTSxZQUFoRSxFQUphLEVBS2IsRUFBQyxVQUFVLGFBQVgsRUFBMEIsT0FBTyxTQUFqQyxFQUE0QyxTQUFTLEtBQXJELEVBQTRELE1BQU0sVUFBbEUsRUFMYSxFQU1iLEVBQUMsVUFBVSxhQUFYLEVBQTBCLE9BQU8sU0FBakMsRUFBNEMsU0FBUyxJQUFyRCxFQUEyRCxNQUFNLFNBQWpFLEVBTmEsQ0FBZjs7QUFTQSxtQkFBUyxNQUFULENBQWdCLDhCQUFDLHNCQUFELElBQXdCLFVBQVUsUUFBbEMsR0FBaEIsRUFBZ0UsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBQWhFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuXG5mdW5jdGlvbiBQcm9kdWN0Q2F0ZWdvcnlSb3cocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dHI+XG4gICAgICA8dGggY29sU3Bhbj1cIjJcIj57cHJvcHMuY2F0ZWdvcnl9PC90aD5cbiAgICA8L3RyPlxuICApO1xufVxuXG5Qcm9kdWN0Q2F0ZWdvcnlSb3cucHJvcFR5cGVzID0ge1xuICBjYXRlZ29yeTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59XG5cblxubGV0IFByb2R1Y3RSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLnByb3BzLnByb2R1Y3Quc3RvY2tlZCA/IHRoaXMucHJvcHMucHJvZHVjdC5uYW1lIDpcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vU3RvY2tcIj5cbiAgICAgICAge3RoaXMucHJvcHMucHJvZHVjdC5uYW1lfVxuICAgICAgPC9zcGFuPjtcblxuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD57bmFtZX08L3RkPlxuICAgICAgICA8dGQ+e3RoaXMucHJvcHMucHJvZHVjdC5wcmljZX08L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59KTtcblxuXG5sZXQgUHJvZHVjdFRhYmxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBwcm9kdWN0czogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNhdGVnb3J5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBwcmljZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgc3RvY2tlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0pKS5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCBsYXN0Q2F0ZWdvcnkgPSBudWxsO1xuICAgIHRoaXMucHJvcHMucHJvZHVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9kdWN0KSB7XG4gICAgICBpZiAocHJvZHVjdC5uYW1lLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXJUZXh0KSA9PT0gLTEgfHwgKCFwcm9kdWN0LnN0b2NrZWQgJiYgdGhpcy5wcm9wcy5pblN0b2NrT25seSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYocHJvZHVjdC5jYXRlZ29yeSAhPT0gbGFzdENhdGVnb3J5KSB7XG4gICAgICAgIHJvd3MucHVzaCg8UHJvZHVjdENhdGVnb3J5Um93IGNhdGVnb3J5PXtwcm9kdWN0LmNhdGVnb3J5fSBrZXk9e3Byb2R1Y3QuY2F0ZWdvcnl9IC8+KTtcbiAgICAgIH1cbiAgICAgIHJvd3MucHVzaCg8UHJvZHVjdFJvdyBwcm9kdWN0PXtwcm9kdWN0fSBrZXk9e3Byb2R1Y3QubmFtZX0gLz4pO1xuICAgICAgbGFzdENhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yeTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qcm9kdWN0PC90aD5cbiAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5Pntyb3dzfTwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufSk7XG5cblxubGV0IFNlYXJjaEJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZmlsdGVyVGV4dDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGluU3RvY2tPbmx5OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uVXNlcklucHV0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgaGFuZGxlQ2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnByb3BzLm9uVXNlcklucHV0KFxuICAgICAgdGhpcy5yZWZzLmZpbHRlclRleHRJbnB1dC52YWx1ZSxcbiAgICAgIHRoaXMucmVmcy5pblN0b2NrT25seUlucHV0LmNoZWNrZWRcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIHZhbHVlPXt0aGlzLnByb3BzLmZpbHRlclRleHR9IHJlZj1cImZpbHRlclRleHRJbnB1dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5wcm9wcy5pblN0b2NrT25seX0gcmVmPVwiaW5TdG9ja09ubHlJbnB1dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIE9ubHkgc2hvdyBwcm9kdWN0cyBpbiBzdG9ja1xuICAgICAgICA8L3A+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufSk7XG5cblxubGV0IEZpbHRlcmFibGVQcm9kdWN0VGFibGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbHRlclRleHQ6ICcnLFxuICAgICAgaW5TdG9ja09ubHk6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVVc2VySW5wdXQ6IGZ1bmN0aW9uKGZpbHRlclRleHQsIGluU3RvY2tPbmx5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWx0ZXJUZXh0OiBmaWx0ZXJUZXh0LFxuICAgICAgaW5TdG9ja09ubHk6IGluU3RvY2tPbmx5XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlYXJjaEJhciBmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9IGluU3RvY2tPbmx5PXt0aGlzLnN0YXRlLmluU3RvY2tPbmx5fSBvblVzZXJJbnB1dD17dGhpcy5oYW5kbGVVc2VySW5wdXR9IC8+XG4gICAgICAgIDxQcm9kdWN0VGFibGUgcHJvZHVjdHM9e3RoaXMucHJvcHMucHJvZHVjdHN9IGZpbHRlclRleHQ9e3RoaXMuc3RhdGUuZmlsdGVyVGV4dH0gaW5TdG9ja09ubHk9e3RoaXMuc3RhdGUuaW5TdG9ja09ubHl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubGV0IFBST0RVQ1RTID0gW1xuICB7Y2F0ZWdvcnk6ICdTcG9ydGluZyBHb29kcycsIHByaWNlOiAnJDQ5Ljk5Jywgc3RvY2tlZDogdHJ1ZSwgbmFtZTogJ0Zvb3RiYWxsJ30sXG4gIHtjYXRlZ29yeTogJ1Nwb3J0aW5nIEdvb2RzJywgcHJpY2U6ICckOS45OScsIHN0b2NrZWQ6IHRydWUsIG5hbWU6ICdCYXNlYmFsbCd9LFxuICB7Y2F0ZWdvcnk6ICdTcG9ydGluZyBHb29kcycsIHByaWNlOiAnJDI5Ljk5Jywgc3RvY2tlZDogZmFsc2UsIG5hbWU6ICdCYXNrZXRiYWxsJ30sXG4gIHtjYXRlZ29yeTogJ0VsZWN0cm9uaWNzJywgcHJpY2U6ICckOTkuOTknLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiAnaVBvZCBUb3VjaCd9LFxuICB7Y2F0ZWdvcnk6ICdFbGVjdHJvbmljcycsIHByaWNlOiAnJDM5OS45OScsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiAnaVBob25lIDUnfSxcbiAge2NhdGVnb3J5OiAnRWxlY3Ryb25pY3MnLCBwcmljZTogJyQxOTkuOTknLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiAnTmV4dXMgNyd9XG5dO1xuXG5SZWFjdERPTS5yZW5kZXIoPEZpbHRlcmFibGVQcm9kdWN0VGFibGUgcHJvZHVjdHM9e1BST0RVQ1RTfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKTtcbiJdfQ==

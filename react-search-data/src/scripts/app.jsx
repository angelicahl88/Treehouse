import React from 'react';
import ReactDOM from 'react-dom';


function ProductCategoryRow(props) {
  return (
    <tr>
      <th colSpan="2">{props.category}</th>
    </tr>
  );
}

ProductCategoryRow.propTypes = {
  category: React.PropTypes.string.isRequired
}


let ProductRow = React.createClass({
  render: function() {
    let name = this.props.product.stocked ? this.props.product.name :
      <span className="noStock">
        {this.props.product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});


let ProductTable = React.createClass({
  propTypes: {
    products: React.PropTypes.arrayOf(React.PropTypes.shape({
      category: React.PropTypes.string.isRequired,
      price: React.PropTypes.string.isRequired,
      stocked: React.PropTypes.bool.isRequired,
      name: React.PropTypes.string.isRequired
    })).isRequired
  },

  render: function() {
    let rows = [];
    let lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if(product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));

    return (
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
});


let SearchBar = React.createClass({
  propTypes: {
    filterText: React.PropTypes.string.isRequired,
    inStockOnly: React.PropTypes.bool.isRequired,
    onUserInput: React.PropTypes.func.isRequired
  },

  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },

  render: function() {
    return (
      <form>
        <input className="search" type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />
        <p>
          <input className="checkbox" type="checkbox" checked={this.props.inStockOnly} ref="inStockOnlyInput" onChange={this.handleChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});


let FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  },

  render: function() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onUserInput={this.handleUserInput} />
        <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
});

let PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('container'));

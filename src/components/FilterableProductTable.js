import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
  const [filterText, setFilterText] = React.useState('');
  const [inStockOnly, setInStockOnly] = React.useState(false);

  return (
    <div className='flex flex-col pt-10 items-center min-h-screen w-full bg-gray-900 text-white'>
      <h1 className='text-3xl font-bold mb-5'>Products</h1>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={(text) => setFilterText(text)}
        onInStockChange={(stock) => setInStockOnly(stock)}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
export default FilterableProductTable;

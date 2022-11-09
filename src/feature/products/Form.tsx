import React from 'react';
import { useEffect, useState } from 'react';

import { fetchCategories } from '../../api/categoriesApi';
const Form = ({
  searchProducts,
  products,
  setFilteredList,
  loading,
  getAllProducts
}: any) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    fetchCategories()
      .then((payload: any) => {
        if (payload) {
          setCategories(payload);
        }
      })
      .catch((reason: any) => {
        if (reason) console.error(reason);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (category !== '') {
      searchProducts(category);
    }
  }, [category]);

  useEffect(() => {
    if (category !== '') {
      searchProducts(category);
    }
  }, [category]);
  const keyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    let updatedList = [...products];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  const clearFiltersHandler = () => {
    if (category !== '') setCategory('');
    if (text !== '') setText('');
    getAllProducts();
  };
  return (
    <div className="mt-6 mb-14 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
      <input
        type="search"
        value={text}
        className="g-gray-50 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
        onKeyUp={keyUpHandler}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={category}
        className="lex items-center text-sm font-medium text-gray-900 border-gray-300 bg-white border-b-2 hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled>
          Category
        </option>
        {categories.map((item: string, i: number) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      {(category !== '' || text !== '') && !loading && (
        <button
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-2 text-base font-medium text-white hover:bg-red-700"
          onClick={() => clearFiltersHandler()}
        >
          clear Search Filters
        </button>
      )}
    </div>
  );
};

export default Form;

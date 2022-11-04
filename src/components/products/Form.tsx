import React from 'react';
import { useEffect, useState } from 'react';
const Form = ({
  searchProducts,
  getCategories,
  categories,
  products,
  clearProducts
}: any) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    if (category !== '') {
      searchProducts(category);
      console.log(category);
    }
  }, [category, text]);

  return (
    <form className="mt-6 mb-14 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
      <input
        type="search"
        value={text}
        className="g-gray-50 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
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
      {products.length > 0 && (
        <button
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-2 text-base font-medium text-white hover:bg-red-700"
          onClick={() => clearProducts()}
        >
          CLEAR
        </button>
      )}
    </form>
  );
};

export default Form;

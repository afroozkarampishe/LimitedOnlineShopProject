import React from 'react';
const Product = ({ product, clearProducts }: any) => {
  return (
    <>
      <div
        key={product.id}
        className="group relative border-2 border-gray-300 shadow-md"
      >
        <div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-60">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 p-6">
          <div>
            <h3 className="text-sm text-gray-700 text-lg h-16">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0 " />
                {product.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500 h-40 overflow-hidden">
              {product.description}
            </p>
          </div>
          <div className="mt-4 flex justify-between items-end">
            <p className="text-sm font-medium text-gray-900">
              price {product.price}$
            </p>
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

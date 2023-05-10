import Product from "./Product";

function ProductGrid({ products }) {
  return (
    <div className="py-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
      {products.map((product) => (
        <Product
          key={product.id}
          href={product.href}
          title={product.title}
          description={product.description}
          price={product.price}
          imgSrc={`/img/${product.imgSrc}`}
        />
      ))}
    </div>
  );
}

export default ProductGrid;

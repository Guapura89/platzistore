import Card from "components/ProductCard.jsx";
import useGetProducts from "hooks/useGetProducts";

const API = "https://api.escuelajs.co/api/v1/products?limit=12&offset=1";

const Products = () => {
  // Getting the product list
  const productArray = useGetProducts(API);

  const productList = productArray.products.map((product) => <Card product={product} key={product.id} />);

  return (
    <section className="main-container">
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3">
        {productArray.isLoading ? <h1 className="text-3xl">Loading...</h1> : productList}
      </div>
    </section>
  );
};

export default Products;

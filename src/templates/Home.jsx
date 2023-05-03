import Products from "containers/Products";
import SearchProduct from "components/SearchProduct";
// import ShopingCart from "containers/ShopingCart";

const Home = () => {
  return (
    <div className="relative">
      <div className="home__container w-[80%] mx-auto">
        <SearchProduct />
        <Products />
        {/* <ShopingCart /> */}
      </div>
    </div>
  );
};

export default Home;

import Head from "next/head";
import Products from "containers/Products";
import SearchProduct from "components/SearchProduct";

export default function Home() {
  return (
    <>
      <Head>
        <title>Platzi store</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <div className="home__container w-[80%] mx-auto">
          <SearchProduct />
          <Products />
          {/* <ShopingCart /> */}
        </div>
      </div>
    </>
  );
}

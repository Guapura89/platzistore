import { useContext, useState } from "react";
import ProductInfo from "containers/ProductInfo";
import AppContext from "context/AppContext";
import Image from "next/image";

// Images
import Add from "assets/icons/bt_add_to_cart.svg";
import Added from "assets/icons/bt_added_to_cart.svg";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(AppContext);

  const [cart, setCart] = useState(true);
  const [handleClick, setHancleClick] = useState(false);

  const addItem = (item) => {
    setCart(!cart);
    addToCart(item);
  };

  const handleRemove = (product) => {
    setCart(!cart);
    removeFromCart(product);
  };

  return (
    <div className="product-card">
      <Image src={product.images[0]} width={400} height={100} alt={product.title} className="rounded-[25px] hover:cursor-pointer" onClickCapture={() => setHancleClick(!handleClick)} />
      <div className="product-info flex justify-between items-center p-2">
        <div>
          <p className="font-bold">${product.price}</p>
          <p className="font-light">{product.title}</p>
        </div>
        <figure className="flex items-center justify-center">
          <button>
            <Image style={{ display: cart ? "block" : "none" }} onClick={() => addItem(product)} src={Add} alt="Add to cart" className="hover:cursor-pointer" />
          </button>
          <button>
            <Image style={{ display: cart ? "none" : "block" }} onClick={() => handleRemove(product)} src={Added} alt="Add to cart" className="hover:cursor-pointer" />
          </button>
        </figure>
      </div>

      {handleClick ? <ProductInfo image={product.images[0]} price={product.price} title={product.title} description={product.description} /> : null}
    </div>
  );
};

export default ProductCard;

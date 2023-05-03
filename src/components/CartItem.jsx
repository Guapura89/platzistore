//Images
import close from "assets/icons/icon_close.png";

//context
import { useContext } from "react";
import AppContext from "context/AppContext";
import Image from "next/image";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };
  return (
    <div className="shopping-cart w-full flex items-center my-3">
      <figure>
        <Image className="w-20 h-20 object-cover rounded-lg mr-3" width={400} height={100} src={item?.images[0]} alt={item?.title} />
      </figure>
      <div className="flex justify-between w-4/5 px-2">
        <p className="text-slate-700">{item?.title}</p>
        <div className="flex gap-3 items-center">
          <p className="font-bold">${item?.price}</p>
          <button>
            <Image src={close} onClick={() => handleRemove(item)} alt="close" className="w-[20px] h-[20px] hover:cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

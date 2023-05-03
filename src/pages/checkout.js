import { useContext } from "react";
import AppContext from "context/AppContext";

import CartItem from "components/CartItem";

const MyOrder = () => {
  const { state } = useContext(AppContext);

  function total() {
    let total = 0;
    state.cart.map((item) => {
      total += item.price;
    });
    return total;
  }

  const date = () => {
    let today = new Date();
    let format = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;

    return format;
  };

  return (
    <div className="my-order w-full h-4/5 grid place-items-center px-4">
      <div className="my-order-container w-full sm:w-2/4 md:w-1/2 lg:w-1/4 mx-auto">
        <h1 className="title text-lg font-bold">My order</h1>
        <div className="my-order-content mt-9">
          <div className="order bg-slate-100 py-3 px-6 mb-6 rounded-lg flex justify-between items-center">
            <p className="flex flex-col">
              <span className="font-bold">{date()}</span>
              <span className="text-slate-600">{state.cart.length} articles</span>
            </p>
            <p className="font-bold">${total()}</p>
          </div>

          <div className="my-16">{state.cart.length === 0 ? <p className="text-center">Your cart is empty</p> : state.cart.map((item) => <CartItem key={item.id} item={item} />)}</div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;

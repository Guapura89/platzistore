import CartItem from "components/CartItem";

const MyOrder = () => {
  return (
    <div className="my-order w-full h-4/5 grid place-items-center px-4">
      <div className="my-order-container w-full sm:w-2/4 md:w-1/2 lg:w-1/4 mx-auto">
        <h1 className="title text-lg font-bold">My order</h1>
        <div className="my-order-content mt-9">
          <div className="order bg-slate-100 py-3 px-6 mb-6 rounded-lg flex justify-between items-center">
            <p className="flex flex-col">
              <span className="font-bold">30.12.22</span>
              <span className="text-slate-600">4 articles</span>
            </p>
            <p className="font-bold">$560.00</p>
          </div>

          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
